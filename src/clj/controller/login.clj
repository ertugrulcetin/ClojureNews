(ns clj.controller.login
  (:require [liberator.core :refer [resource defresource]]
            [liberator.representation :as rep]
            [clj.util.resource :as resource-util]
            [clj.dao.user :as user-dao]
            [cljc.validation :as validation]
            [clj.util.entity :as entity-util]
            [pandect.algo.sha256 :as hash]))

(declare check-username
         check-password
         check-user-duplicate
         check-user-does-not-exist
         check-password-match
         check-auth-before
         check-not-auth
         create-cookie-if-no-exception
         delete-cookie-if-no-exception)

(defn login
  []
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
                           (user-dao/update-last-login-by-username username)

                           {:user-obj {:cookie cookie}}))))

            :new? (fn [_]
                    false)

            :respond-with-entity? (fn [_]
                                    true)

            :as-response (fn [d ctx]
                           (create-cookie-if-no-exception d ctx))

            :handle-ok (fn [ctx]
                         {:login? true})

            :handle-exception (fn [ctx]
                                (resource-util/get-exception-message ctx))))

(defn logout
  []
  (resource :allowed-methods [:post]

            :available-media-types resource-util/avaliable-media-types

            :post! (fn [ctx]
                     (check-not-auth ctx)

                     (if-let [user (user-dao/find-by-username (resource-util/get-username-from-cookie ctx))]
                       (user-dao/update-cookie-by-username (:username user) nil)
                       (throw (RuntimeException. "Could not find user!")))

                     {:old-cookie (resource-util/get-username-from-cookie ctx)})

            :new? (fn [_]
                    false)

            :respond-with-entity? (fn [_]
                                    true)

            :as-response (fn [d ctx]
                           (delete-cookie-if-no-exception d ctx))

            :handle-ok (fn [ctx]
                         {:logout? true})

            :handle-exception (fn [ctx]
                                (resource-util/get-exception-message ctx))))

(defn sign-up
  []
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

                      (check-user-duplicate username)

                      {:user-obj (user-dao/create-user username password)}))

            :as-response (fn [d ctx]
                           (create-cookie-if-no-exception d ctx))

            :handle-created (fn [_]
                              {:sign-up? true})

            :handle-exception (fn [ctx]
                                (resource-util/get-exception-message ctx))))

(defn check-username
  [username]
  (if-not (validation/username? username)
    (throw (RuntimeException. "Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another."))))

(defn check-password
  [password]
  (if-not (validation/password? password)
    (throw (RuntimeException. "Passwords should be between 8 and 20 characters long. Please choose another."))))

(defn check-user-duplicate
  [username]
  (if (user-dao/find-by-username username)
    (throw (RuntimeException. "That username is taken. Please choose another."))))

(defn check-user-does-not-exist
  [user]
  (if-not user
    (throw (RuntimeException. "Bad Login."))))

(defn check-auth-before
  [ctx user]
  (if (and (resource-util/get-cookie ctx) (:cookie user))
    (if (= (resource-util/get-cookie ctx) (:cookie user))
      (throw (RuntimeException. "You have already logged-in!")))))

(defn check-password-match
  [user password]
  (if-not (= (:password user) (hash/sha256 password))
    (throw (RuntimeException. "Bad Login."))))

;;TODO check db cookie!
(defn check-not-auth
  [ctx]
  (let [cookie (resource-util/get-cookie ctx)]
    (if-not (and cookie (resource-util/get-username-from-cookie ctx))
      (throw (RuntimeException. "You must login first")))))

(defn create-cookie-if-no-exception
  [d ctx]
  (if-not (:exception ctx)
    (-> (rep/as-response d ctx)
        (assoc-in [:headers "Set-Cookie"] (resource-util/create-cookie (-> ctx :user-obj :cookie))))
    (rep/as-response d ctx)))

(defn delete-cookie-if-no-exception
  [d ctx]
  (if-not (:exception ctx)
    (-> (rep/as-response d ctx)
        (assoc-in [:headers "Set-Cookie"] (resource-util/delete-cookie (:old-cookie ctx))))
    (rep/as-response d ctx)))