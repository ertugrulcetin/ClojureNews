(ns clj.dao.comment-entry
  (:refer-clojure :exclude [sort find])
  (:require [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.query :refer :all]
            [clj.dao.db :as db]
            [clj.util.entity :as entity-util])
  (:import (org.bson.types ObjectId)))

;; comment-entry Collection/Table
(def coll "comment-entry")

(defn find-by-id
  [^String id]
  (mc/find-map-by-id db/clojure-news coll (ObjectId. id)))

(defn create-comment-entry
  [^String entry-id
   ^String created-by
   ^String parent-comment-id
   ^String content
   ^String type]
  (mc/insert-and-return db/clojure-news coll (entity-util/comment-entry entry-id created-by parent-comment-id content type)))

(defn get-comments-by-entry-id
  [entry-id]
  (mc/find-maps db/clojure-news coll {:entry-id entry-id}))

(defn inc-comment-upvote
  [^String id]
  (mc/update-by-id db/clojure-news coll (ObjectId. id) {$inc {:upvote 1}}))