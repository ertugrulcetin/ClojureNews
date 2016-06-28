(ns clj.dao.upvote
  (:refer-clojure :exclude [sort find])
  (:require [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.query :refer :all]
            [clj.dao.db :as db]
            [clj.util.entity :as entity-util])
  (:import (org.bson.types ObjectId)))

;; upvote Collection/Table
(def coll "upvote")

(defn create-upvote
  [^String created-by
   ^String type
   ^String entry-id
   ^String comment-id]
  (mc/insert-and-return db/clojure-news coll (entity-util/upvote created-by type entry-id comment-id)))

(defn find-by-created-by-and-comment-id
  [^String created-by
   ^String comment-id]
  (mc/find-one-as-map db/clojure-news coll {$and [{:created-by created-by}
                                                  {:comment-id comment-id}]}))

(defn find-by-type-and-entry-id
  [^String type
   ^String entry-id]
  (mc/find-maps db/clojure-news coll {:type     type
                                      :entry-id entry-id}))