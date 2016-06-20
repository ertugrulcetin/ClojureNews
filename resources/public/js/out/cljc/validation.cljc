(ns cljc.validation
  (:require [clojure.string :as str]))

(declare get-pure-url)

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

(defn url?
  [url]
  (or (str/blank? url)
      (and
        (re-matches #"^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]" url)
        (>= (count (str/split (get-pure-url url) #"[.]")) 2)
        (>= (count (last (str/split (get-pure-url url) #"[.]"))) 2))))

(defn email?
  [email]
  (or (str/blank? email)
      (re-matches #"(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))" email)))

(defn github-or-twitter?
  [username]
  (or (str/blank? username)
      (and (not (url? username))
           (not (str/includes? username " "))
           (re-matches #".{1,40}" username))))

(defn about?
  [about]
  (or (str/blank? about)
      (and (>= (count about) 0)
           (<= (count about) 500))))

(defn show-email??
  [show-email-option]
  (contains? #{"yes" "no"} show-email-option))

(defn submit-type?
  [type]
  (contains? #{"story" "ask" "jobs" "events"} type))

(defn submit-title?
  [title]
  (and (not (str/blank? title))
       (<= (count title) 80)))

(defn submit-url?
  [url]
  (and (not (str/blank? url))
       (<= (count url) 500)
       (re-matches #"^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]" url)
       (>= (count (str/split (get-pure-url url) #"[.]")) 2)
       (>= (count (last (str/split (get-pure-url url) #"[.]"))) 2)))

(defn submit-text?
  [text]
  (and (not (str/blank? text))
       (<= (count text) 2500)))

(defn get-pure-url
  [url]
  (let [s (str/replace url #"^(https?)://(www.)?" "")]
    (if-let [index (str/index-of s "/")]
      (.substring s 0 index)
      s)))