(ns clj.dao.entry
  (:refer-clojure :exclude [sort find])
  (:require [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.query :refer :all]
            [clj.dao.db :as db]
            [clj.util.entity :as entity-util])
  (:import (org.bson.types ObjectId)
           (java.util Date)))

;; entry Collection/Table
(def coll "entry")

(defn find-by-id
  [^String id]
  (mc/find-map-by-id db/clojure-news coll (ObjectId. id)))

;;Story
(defn create-story
  [^String title
   ^String url
   ^String pure-url
   ^String created-by]
  (mc/insert-and-return db/clojure-news coll (entity-util/story title url pure-url created-by)))

(defn edit-story-by-id
  [^String id
   ^String title]
  (mc/update-by-id db/clojure-news coll (ObjectId. id) {$set {"title"        title
                                                              "last-updated" (Date.)}}))
;;Ask
(defn create-ask
  [^String title
   ^String text
   ^String created-by]
  (mc/insert-and-return db/clojure-news coll (entity-util/ask title text created-by)))

(defn edit-ask-by-id
  [^String id
   ^String title
   ^String text]
  (mc/update-by-id db/clojure-news coll (ObjectId. id) {$set {"title"        title
                                                              "text"         text
                                                              "last-updated" (Date.)}}))

(defn delete-entry-by-id
  [^String id]
  (mc/remove-by-id db/clojure-news coll (ObjectId. id)))

(defn inc-entry-comment-count
  [^String id]
  (mc/update-by-id db/clojure-news coll (ObjectId. id) {$inc {:number-of-comments 1}}))

(defn dec-entry-comment-count
  [^String id]
  (mc/update-by-id db/clojure-news coll (ObjectId. id) {$inc {:number-of-comments -1}}))

(defn get-last-n-days-entries
  [type day]
  (mc/find-maps db/clojure-news coll {$and [{:type type}
                                            {:created-date {$gte (Date. (- (.getTime (Date.)) (-> (* 1000)
                                                                                                  (* 60)
                                                                                                  (* 60)
                                                                                                  (* 24)
                                                                                                  (* (+ day 1)))))}}]}))

(defn get-entries-by-username-and-entries-in-it
  [username type entries]
  (mc/find-maps db/clojure-news coll {$and [{:created-by username}
                                            {:type type}
                                            {:_id {$in entries}}]}))
