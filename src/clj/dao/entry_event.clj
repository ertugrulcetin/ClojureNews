(ns clj.dao.entry-event
  (:refer-clojure :exclude [sort find])
  (:require [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.query :refer :all]
            [clj.dao.db :as db]
            [clj.util.entity :as entity-util])
  (:import (org.bson.types ObjectId)
           (java.util Date)))

;; Event Collection/Table
(def coll "event")

(defn find-by-id
  [^String id]
  (mc/find-map-by-id db/clojure-news coll (ObjectId. id)))

(defn create-event
  [^String title
   ^String url
   ^Date starting-date
   ^String city
   ^String country
   ^String created-by]
  (mc/insert-and-return db/clojure-news coll (entity-util/event title url starting-date city country created-by)))

(defn edit-event-by-id
  [^String id
   ^String title
   ^String url
   ^String city
   ^String country
   ^Date starting-date]
  (mc/update-by-id db/clojure-news coll (ObjectId. id) {$set {"title"         title
                                                              "url"           url
                                                              "city"          city
                                                              "country"       country
                                                              "starting-date" starting-date
                                                              "last-updated"  (Date.)}}))

(defn delete-event-by-id
  [^String id]
  (mc/remove-by-id db/clojure-news coll (ObjectId. id)))

(defn get-last-n-days-events
  [page per-page]
  (with-collection db/clojure-news coll
                   (find {:starting-date {$gte (Date.)}})
                   (sort {:starting-date 1})
                   (paginate :page page :per-page per-page)))