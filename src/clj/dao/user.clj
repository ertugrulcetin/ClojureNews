(ns clj.dao.user
  (:require [monger.collection :as mc]
            [monger.operators :refer :all]
            [clj.dao.db :as db]
            [clj.util.entity :as entity-util])
  (:import (org.bson.types ObjectId)
           (java.util Date)))

;; user Collection/Table
(def coll "user")

(defn create-user
  [^String username ^String password]
  (mc/insert-and-return db/clojure-news coll (entity-util/user username password)))

(defn find-by-id
  [^String id]
  (mc/find-map-by-id db/clojure-news coll (ObjectId. id)))

(defn find-by-username
  [^String username]
  (mc/find-one-as-map db/clojure-news coll {:username username}))

(defn find-by-email
  [^String email]
  (mc/find-one-as-map db/clojure-news coll {:email email}))

(defn update-cookie-by-username
  [^String username ^String cookie]
  (mc/update db/clojure-news coll {:username username} {$set {"cookie" cookie}}))

(defn update-user-info-by-username
  [username user-info]
  (mc/update db/clojure-news coll {:username username} {$set {"about"        (:about user-info)
                                                              "email"        (:email user-info)
                                                              "website"      (:website user-info)
                                                              "github"       (:github user-info)
                                                              "twitter"      (:twitter user-info)
                                                              "show-email?"  (:show-email? user-info)
                                                              "last-updated" (Date.)}}))

(defn update-last-login-by-username
  [^String username]
  (mc/update db/clojure-news coll {:username username} {$set {"last-login" (Date.)}}))

(defn update-password-by-username
  [^String username ^String new-password]
  (mc/update db/clojure-news coll {:username username} {$set {"password" new-password}}))

(defn inc-user-karma-by-username
  [^String username]
  (mc/update db/clojure-news coll {:username username} {$inc {:karma 1}}))

(defn dec-user-karma-by-username
  [^String username]
  (mc/update db/clojure-news coll {:username username} {$inc {:karma -1}}))