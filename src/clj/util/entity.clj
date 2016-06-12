(ns clj.util.entity
  (:require [pandect.algo.sha256 :as hash])
  (:import (java.util Date UUID)
           (org.bson.types ObjectId)))

(defn generate-cookie
  [username]
  (str username "&" (.replace (.toString (UUID/randomUUID)) "-" "")))

(defn user
  [username password]
  {:_id            (ObjectId.)
   :created-date   (Date.)
   :active?        true
   :show-email?    false
   :email          nil
   :username       username
   :password       (hash/sha256 password)
   :last-login     (Date.)
   :role           ::user
   :karma          1
   :website        nil
   :github         nil
   :twitter        nil
   :about          nil
   :cookie         (generate-cookie username)
   :saved-stories  []
   :saved-comments []})

(defn story
  [title url pure-url created-by]
  {:_id               (ObjectId.)
   :created-date      (Date.)
   :created-by        created-by
   :title             title
   :url               url
   :pure-url          pure-url
   :type              ::story
   :upvote            1
   :number-of-comment 0})

(defn ask
  [title text created-by]
  {:_id               (ObjectId.)
   :created-date      (Date.)
   :created-by        created-by
   :title             title
   :text              text
   :type              ::ask
   :upvote            1
   :number-of-comment 0})


(defn comments
  [entry-id parent-comment-id content type]
  {:_id               (ObjectId.)
   :created-date      (Date.)
   :entry-id          entry-id
   :parent-comment-id parent-comment-id
   :upvote            1
   :content           content
   :type              type})