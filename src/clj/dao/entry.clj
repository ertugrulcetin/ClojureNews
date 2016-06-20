(ns clj.dao.entry
  (:refer-clojure :exclude [sort find])
  (:require [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.query :refer :all]
            [clj.dao.db :as db]
            [clj.util.entity :as entity-util])
  (:import (org.bson.types ObjectId)))

;; entry Collection/Table
(def coll "entry")

(defn find-by-id
  [^String id]
  (mc/find-map-by-id db/clojure-news coll (ObjectId. id)))

(defn create-story
  [^String title
   ^String url
   ^String pure-url
   ^String created-by]
  (mc/insert-and-return db/clojure-news coll (entity-util/story title url pure-url created-by)))

(defn create-ask
  [^String title
   ^String text
   ^String created-by]
  (mc/insert-and-return db/clojure-news coll (entity-util/ask title text created-by)))

(defn get-newest-stories-and-asks
  []
  (with-collection db/clojure-news coll
                   (find {$or [{:type "ask"}
                               {:type "story"}]})
                   (sort {:created-date 1})
                   (paginate :page 1 :per-page 30)))

(defn inc-entry-comment-count
  [^String id]
  (mc/update-by-id db/clojure-news coll (ObjectId. id) {$inc {:number-of-comments 1}}))

(defn dec-entry-comment-count
  [^String id]
  (mc/update-by-id db/clojure-news coll (ObjectId. id) {$inc {:number-of-comments -1}}))