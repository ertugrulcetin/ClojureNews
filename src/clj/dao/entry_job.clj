(ns clj.dao.entry-job
  (:refer-clojure :exclude [sort find])
  (:require [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.query :refer :all]
            [clj.dao.db :as db]
            [clj.util.entity :as entity-util])
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
