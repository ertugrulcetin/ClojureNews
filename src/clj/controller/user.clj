(ns clj.controller.user
  (:require [liberator.core :refer [resource defresource]]
            [liberator.representation :as rep]
            [clj.util.resource :as resource-util]
            [clj.dao.user :as user-dao]
            [cljc.validation :as validation]
            [cljc.string-util :as string-util]
            [clj.util.entity :as entity-util]
            [pandect.algo.sha256 :as hash])
  (:import (java.util Date)))

(declare itself?
         number-of-days
         get-auth-user
         check-about
         check-email
         check-website
         check-github
         check-twitter
         check-show-email?
         check-email-exists
         check-password
         check-new-passwords-match
         check-current-pass-not-equals-new-pass
         check-password-match)

(defn user
  [username]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]

                         (if-not (validation/username? username)
                           (throw (RuntimeException. "Not valid username")))

                         (if-let [user (user-dao/find-by-username username)]
                           (if (itself? ctx user)
                             (merge {:auth? true} (get-auth-user user))
                             (if (:show-email? user)
                               (merge {:auth? false} (get-auth-user user))
                               (merge {:auth? false} (dissoc (get-auth-user user) :email))))
                           (throw (RuntimeException. "No such user"))))

            :handle-exception (fn [ctx]
                                (resource-util/get-exception-message ctx))))

(defmacro if-let-multi
  ([bindings then]
   `(if-let-multi ~bindings ~then nil))
  ([bindings then else]
   `(let* ~(destructure bindings) (if (and ~@((fn [bin] (map #(second %) (partition 2 bin))) bindings))
                                    ~then
                                    ~else))))

(defn update-user
  [username]
  (resource :allowed-methods [:post]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? (fn [ctx]

                           (if-let [cookie (resource-util/get-cookie ctx)]
                             (if-let [username (resource-util/get-username-from-cookie ctx)]
                               (if-let [user (user-dao/find-by-username username)]
                                 (if (= cookie (:cookie user))
                                   {:user-obj user})))))


            :allowed? (fn [ctx]
                        (= username (-> ctx :user-obj :username)))


            :post! (fn [ctx]

                     (let [data-as-map (resource-util/convert-data-map (::data ctx))
                           about (:about data-as-map)
                           email (:email data-as-map)
                           website (:website data-as-map)
                           github (:github data-as-map)
                           twitter (:twitter data-as-map)
                           show-email? (:show-email? data-as-map)]

                       (check-about about)
                       (check-email email)
                       (check-website website)
                       (check-github github)
                       (check-twitter twitter)
                       (check-show-email? show-email?)

                       (check-email-exists (-> ctx :user-obj :username) email)

                       (try
                         (let [show-email-updated (update-in (string-util/trim-map-values data-as-map) [:show-email?] #(if (= "yes" %) true false))
                               about-updated (update-in show-email-updated [:about] #(apply str (interpose "\n" (string-util/new-line-tokens %))))]
                           (user-dao/update-user-info-by-username username about-updated))
                         (catch Exception e
                           (throw (RuntimeException. "Something went wrong."))))))

            :new? (fn [_]
                    false)

            :respond-with-entity? (fn [_]
                                    true)

            :handle-ok (fn [_]
                         {:update? true})

            :handle-exception (fn [ctx]
                                (resource-util/get-exception-message ctx))))

(defn change-password
  [username]
  (resource :allowed-methods [:post]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? (fn [ctx]

                           (if-let [cookie (resource-util/get-cookie ctx)]
                             (if-let [username (resource-util/get-username-from-cookie ctx)]
                               (if-let [user (user-dao/find-by-username username)]
                                 (if (= cookie (:cookie user))
                                   {:user-obj user})))))


            :allowed? (fn [ctx]
                        (= username (-> ctx :user-obj :username)))


            :post! (fn [ctx]

                     (let [data-as-map (resource-util/convert-data-map (::data ctx))
                           current-password (:current-password data-as-map)
                           new-password (:new-password data-as-map)
                           re-new-password (:re-new-password data-as-map)]

                       (check-password current-password)
                       (check-password new-password)
                       (check-password re-new-password)

                       (check-new-passwords-match new-password re-new-password)

                       (check-current-pass-not-equals-new-pass current-password new-password)

                       (check-password-match (-> ctx :user-obj) current-password)

                       (user-dao/update-password-by-username (-> ctx :user-obj :username) (hash/sha256 new-password))))

            :new? (fn [_]
                    false)

            :respond-with-entity? (fn [_]
                                    true)

            :handle-ok (fn [_]
                         {:password-changed? true})

            :handle-exception (fn [ctx]
                                (resource-util/get-exception-message ctx))))

(defn itself?
  [ctx user]
  (if-let [cookie (resource-util/get-cookie ctx)]
    (if (= cookie (:cookie user))
      true)))

(defn number-of-days
  [^Date start ^Date end]
  (-> (- (.getTime end) (.getTime start))
      (quot 1000)
      (quot 60)
      (quot 60)
      (quot 24)))

(defn get-auth-user
  [user]
  {:username    (:username user)
   :created     (number-of-days (:created-date user) (Date.))
   :karma       (:karma user)
   :show-email? (:show-email? user)
   :about       (:about user)
   :email       (:email user)
   :website     (:website user)
   :github      (:github user)
   :twitter     (:twitter user)})

(defn check-about
  [about]
  (if-not (validation/about? about)
    (throw (RuntimeException. "About should be between 0 and 500 characters long."))))

(defn check-email
  [email]
  (if-not (validation/email? email)
    (throw (RuntimeException. "Not valid email."))))

(defn check-website
  [website]
  (if-not (validation/url? website)
    (throw (RuntimeException. "Not valid url. Ex: https://www.google.com"))))

(defn check-github
  [github]
  (if-not (validation/github-or-twitter? github)
    (throw (RuntimeException. "Not valid GitHub Username. Ex: ertugrulcetin"))))

(defn check-twitter
  [twitter]
  (if-not (validation/github-or-twitter? twitter)
    (throw (RuntimeException. "Not valid Twitter Username. Ex: ertuctn"))))

(defn check-show-email?
  [show-email?]
  (if-not (validation/show-email?? show-email?)
    (throw (RuntimeException. "Not valid show email option."))))

(defn check-email-exists
  [username email]
  (if-let [user (user-dao/find-by-email email)]
    (if-not (= (:username user) username)
      (throw (RuntimeException. "This email has already been taken by another user.")))))

(defn check-password
  [password]
  (if-not (validation/password? password)
    (throw (RuntimeException. "Passwords should be between 8 and 20 characters long. Please choose another."))))

(defn check-new-passwords-match
  [password re-password]
  (if-not (= password re-password)
    (throw (RuntimeException. "New passwords don't match."))))

(defn check-current-pass-not-equals-new-pass
  [current-password new-password]
  (if (= current-password new-password)
    (throw (RuntimeException. "New password can not be the old password."))))

(defn check-password-match
  [user password]
  (if-not (= (:password user) (hash/sha256 password))
    (throw (RuntimeException. "Password does not match."))))