(ns clj.controller.user
  (:require [liberator.core :refer [resource defresource]]
            [liberator.representation :as rep]
            [clj.util.resource :as resource-util]
            [clj.dao.user :as user-dao]
            [cljc.validation :as validation]
            [clj.util.entity :as entity-util]
            [pandect.algo.sha256 :as hash])
  (:import (java.util Date)))

(declare itself?
         number-of-days
         get-auth-user)

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
                             (merge {:auth? false} (dissoc (get-auth-user user) :email)))
                           (throw (RuntimeException. "No such user"))))

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
  {:username (:username user)
   :created  (number-of-days (:created-date user) (Date.))
   :karma    (:karma user)
   :about    (:about user)
   :email    (:email user)
   :website  (:website user)
   :github   (:github user)
   :twitter  (:twitter user)})