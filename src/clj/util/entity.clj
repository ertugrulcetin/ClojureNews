(ns clj.util.entity
  (:require [pandect.algo.sha256 :as hash])
  (:import (java.util Date UUID)
           (org.bson.types ObjectId)))

(defn generate-cookie
  [username]
  (str username "&" (.replace (.toString (UUID/randomUUID)) "-" "")))

(defn user
  [username password]
  {:_id              (ObjectId.)
   :created-date     (Date.)
   :last-updated     nil
   :active?          true
   :show-email?      false
   :email            nil
   :username         username
   :password         (hash/sha256 password)
   :last-login       (Date.)
   :role             ::user
   :karma            1
   :website          nil
   :github           nil
   :twitter          nil
   :about            nil
   :cookie           (generate-cookie username)
   :upvoted-entries  []
   :upvoted-comments []})

(defn story
  [title url pure-url created-by]
  {:_id                (ObjectId.)
   :created-date       (Date.)
   :created-by         created-by
   :last-updated       nil
   :title              title
   :url                url
   :pure-url           pure-url
   :type               "story"
   :upvote             1
   :number-of-comments 0})

(defn ask
  [title text created-by]
  {:_id                (ObjectId.)
   :created-date       (Date.)
   :created-by         created-by
   :last-updated       nil
   :title              title
   :text               text
   :type               "ask"
   :upvote             1
   :number-of-comments 0})

(defn job
  [title url city country remote? created-by]
  {:_id          (ObjectId.)
   :created-date (Date.)
   :created-by   created-by
   :last-updated nil
   :title        title
   :url          url
   :type         "job"
   :city         city
   :country      country
   :remote?      remote?})

(defn event
  [title url starting-date city country created-by]
  {:_id           (ObjectId.)
   :created-date  (Date.)
   :created-by    created-by
   :last-updated  nil
   :title         title
   :url           url
   :starting-date starting-date
   :type          "event"
   :city          city
   :country       country})

(defn comment-entry
  [entry-id created-by parent-comment-id content type]
  {:_id               (ObjectId.)
   :created-date      (Date.)
   :entry-id          entry-id
   :created-by        created-by
   :last-updated      nil
   :parent-comment-id parent-comment-id
   :upvote            1
   :content           content
   :type              type})

(defn upvote
  [created-by type entry-id comment-id]
  {:_id          (ObjectId.)
   :created-date (Date.)
   :created-by   created-by
   :type         type
   :entry-id     entry-id
   :comment-id   comment-id})