(ns clj.route.login
  (:require [compojure.core :refer [defroutes GET POST PUT]]
            [compojure.route :refer [not-found]]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :as rep]
            [clj.util.resource :as resource-util]
            [clj.dao.user :as user-dao]
            [kezban.core :as kez]
            [cljc.validation :as validation]
            [clj.util.entity :as entity-util]
            [pandect.algo.sha256 :as hash]))

(declare check-username
         check-password
         check-user-exists
         check-user-does-not-exist
         check-password-match
         check-auth-before)

(defroutes route

           (POST "/login" []
             (resource :allowed-methods [:post]

                       :available-media-types resource-util/avaliable-media-types

                       :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

                       :malformed? #(resource-util/parse-json % ::data)

                       :post! (fn [ctx]
                                (let [data-as-map (resource-util/convert-data-map (::data ctx))
                                      username (:username data-as-map)
                                      password (:password data-as-map)]

                                  (check-username username)

                                  (check-password password)

                                  (let [user (user-dao/find-by-username username)]
                                    (check-user-does-not-exist user)
                                    (check-password-match user password)
                                    (check-auth-before ctx user)

                                    (let [cookie (entity-util/generate-cookie username)]
                                      (user-dao/update-cookie-by-username username cookie)

                                      {:user-obj {:username username
                                                  :cookie   cookie
                                                  :karma    (:karma user)}}))))

                       :as-response (fn [d ctx]
                                      (-> (rep/as-response d ctx)
                                          (assoc-in [:headers "Set-Cookie"] (resource-util/create-cookie (kez/->>> :cookie :user-obj ctx)))))

                       :handle-ok (fn [ctx]
                                    {:username (kez/->>> :username :user-obj ctx)
                                     :karma    (kez/->>> :karma :user-obj ctx)})

                       :handle-exception (fn [ctx]
                                           {:error (.getMessage (:exception ctx))}))
             )

           (POST "/logout" []

             )

           (PUT "/signup" []
             (resource :allowed-methods [:put]

                       :available-media-types resource-util/avaliable-media-types

                       :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

                       :malformed? #(resource-util/parse-json % ::data)

                       :put! (fn [ctx]
                               (let [data-as-map (resource-util/convert-data-map (::data ctx))
                                     username (:username data-as-map)
                                     password (:password data-as-map)]

                                 (check-username username)

                                 (check-password password)

                                 (check-user-exists username)

                                 {:user-obj (user-dao/create-user username password)}))

                       :as-response (fn [d ctx]
                                      (-> (rep/as-response d ctx)
                                          (assoc-in [:headers "Set-Cookie"] (resource-util/create-cookie (kez/->>> :cookie :user-obj ctx)))))

                       :handle-created (fn [_]
                                         {:success? true})

                       :handle-exception (fn [ctx]
                                           {:error (.getMessage (:exception ctx))}))))

(defn check-username
  [username]
  (if-not (validation/username? username)
    (throw (RuntimeException. "Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another."))))

(defn check-password
  [password]
  (if-not (validation/password? password)
    (throw (RuntimeException. "Passwords should be between 8 and 20 characters long. Please choose another."))))

(defn check-user-exists
  [username]
  (if (user-dao/find-by-username username)
    (throw (RuntimeException. "That username is taken. Please choose another."))))

(defn check-user-does-not-exist
  [user]
  (if-not user
    (throw (RuntimeException. "Bad Login."))))

(defn check-auth-before
  [ctx user]
  (if (= (:cookie ctx) (:cookie user))
    (throw (RuntimeException. "You have already logged-in!"))))

(defn check-password-match
  [user password]
  (if-not (= (:password user) (hash/sha256 password))
    (throw (RuntimeException. "Bad Login."))))