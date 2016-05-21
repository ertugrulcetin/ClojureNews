(ns clj.util.entity
  (:require [buddy.hashers :as hashers])
  (:import (java.util Date UUID)
           (org.bson.types ObjectId)))

(defn generate-uuid
  []
  (.replace (.toString (UUID/randomUUID)) "-" ""))

(defn user
  [username password]
  {:_id          (ObjectId.)
   :created-date (Date.)
   :active?      true
   :email        nil
   :username     username
   :password     (hashers/derive password {:alg :pbkdf2+sha256})
   :last-login   (Date.)
   :role         ::user
   :karma        1
   :website      nil
   :github       nil
   :twitter      nil
   :bio          nil
   :cookie       (str username "&" (generate-uuid))})

(defn entry
  [title url pure-url type content created-by-id]
  {:_id               (ObjectId.)
   :created-date      (Date.)
   :title             title
   :url               url
   :pure-url          pure-url
   :type              type
   :content           content
   :created-by-id     created-by-id
   :upvote            1
   :number-of-comment 0})

(defn comment-entry
  [entry-id parent-comment-id content type]
  {:_id               (ObjectId.)
   :created-date      (Date.)
   :entry-id          entry-id
   :parent-comment-id parent-comment-id
   :upvote            1
   :content           content
   :type              type})