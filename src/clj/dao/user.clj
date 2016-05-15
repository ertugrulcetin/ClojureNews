(ns clj.dao.user
  (:require [monger.collection :as mc]
            [clj.dao.db :as db]
            [clj.util.entity :as entity-util])
  (:import (org.bson.types ObjectId)))

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