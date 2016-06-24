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
   ^String linked-id
   type]
  (mc/insert-and-return db/clojure-news coll (entity-util/upvote created-by linked-id type)))

(defn find-by-created-by-and-linked-id
  [^String created-by
   ^String linked-id]
  (mc/find-one-as-map db/clojure-news coll {$and [{:created-by created-by}
                                                  {:linked-id linked-id}]}))