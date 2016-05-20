(ns cljc.validation
  (:require [clojure.string :as str]))

(defn username?
  "Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another."
  [username]
  (and (not (str/blank? username))
       (re-matches #"[a-zA-Z_0-9]{2,15}" username)))

(defn password?
  "Passwords should be between 8 and 20 characters long. Please choose another."
  [password]
  (and (not (str/blank? password))
       (re-matches #".{8,20}" password)))