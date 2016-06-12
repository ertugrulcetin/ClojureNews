(ns clj.dao.entry
  (:require [monger.collection :as mc]
            [monger.operators :refer :all]
            [clj.dao.db :as db]
            [clj.util.entity :as entity-util])
  (:import (org.bson.types ObjectId)
           (java.util Date)))

;; entry Collection/Table
(def coll "entry")

(defn find-by-id
  [^String id]
  (mc/find-map-by-id db/clojure-news coll (ObjectId. id)))

(defn create-story
  [^String title
   ^String url
   ^String pure-url
   ^String created-by-id]
  (mc/insert-and-return db/clojure-news coll (entity-util/story title url pure-url created-by-id)))

(defn create-ask
  [^String title
   ^String text
   ^String created-by-id]
  (mc/insert-and-return db/clojure-news coll (entity-util/ask title text created-by-id)))