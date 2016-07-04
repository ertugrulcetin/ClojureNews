(ns clj.dao.entry-job
  (:refer-clojure :exclude [sort find])
  (:require [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.query :refer :all]
            [clj.dao.db :as db]
            [clj.util.entity :as entity-util]
            [clj.util.resource :as resource-util])
  (:import (org.bson.types ObjectId)
           (java.util Date)))

;; job Collection/Table
(def coll "job")

(defn find-by-id
  [^String id]
  (mc/find-map-by-id db/clojure-news coll (ObjectId. id)))

(defn create-job
  [^String title
   ^String url
   ^String city
   ^String country
   ^Boolean remote?
   ^String created-by]
  (mc/insert-and-return db/clojure-news coll (entity-util/job title url city country remote? created-by)))

(defn edit-job-by-id
  [^String id
   ^String title
   ^String url
   ^String city
   ^String country
   ^Boolean remote?]
  (mc/update-by-id db/clojure-news coll (ObjectId. id) {$set {"title"        title
                                                              "url"          url
                                                              "city"         city
                                                              "country"      country
                                                              "remote?"      remote?
                                                              "last-updated" (Date.)}}))

(defn delete-job-by-id
  [^String id]
  (mc/remove-by-id db/clojure-news coll (ObjectId. id)))

(defn get-last-n-days-jobs
  [page day]
  (with-collection db/clojure-news coll
                   (sort {:created-date -1})
                   (paginate :page page :per-page day)))

(println (count (get-last-n-days-jobs 2 5)))