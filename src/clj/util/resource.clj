(ns clj.util.resource
  (:require [clojure.data.json :as json]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clj.dao.user :as user-dao])
  (:import (java.util Date)))

(defonce avaliable-media-types ["application/json" "application/json; charset=UTF-8" "application/json; charset=utf-8"])

(defn- body-as-string
  [ctx]
  (if-let [body (get-in ctx [:request :body])]
    (condp instance? body
      String body
      (slurp (io/reader body)))))

(defn check-content-type
  [ctx content-types]
  (if (#{:put :post} (get-in ctx [:request :request-method]))
    (or
      (some #{(get-in ctx [:request :headers "content-type"])}
            content-types)
      [false {:message "Unsupported Content-Type"}])
    true))

(defn parse-json [ctx key]
  (when (#{:put :post} (get-in ctx [:request :request-method]))
    (try
      (if-let [body (body-as-string ctx)]
        (let [data (json/read-str body)]
          [false {key data}])
        {:message "No body"})
      (catch Exception e
        (.printStackTrace e)
        {:message (format "IOException: %s" (.getMessage e))}))))

(defn create-cookie
  [cookie]
  (str "user=" cookie "; expires=" (.toString (Date. (+ (.getTime (Date.)) (* 1000 60 60 24 365 10)))) "; path=/; HttpOnly"))

(defn delete-cookie
  [cookie]
  (str "user=" cookie "; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; HttpOnly"))

(defn convert-data-map
  "Converts clojure map's string keywords to keyword functions"
  [json-clojure-map]
  (reduce #(assoc %1 (keyword (first %2)) (second %2)) {} json-clojure-map))

(defn get-cookie
  [ctx]
  (-> ctx :request :cookies (get "user") :value))

(defn get-username-from-cookie
  [ctx]
  (if-let [cookie (get-cookie ctx)]
    (.substring cookie 0 (str/index-of cookie "&"))))

(defn get-exception-message
  [ctx]
  {:error (.getMessage (:exception ctx))})

(defn get-pure-url
  [url]
  (let [s (str/replace url #"^(https?)://(www.)?" "")]
    (if-let [index (str/index-of s "/")]
      (.substring s 0 index)
      s)))

(defn auth?
  [ctx]
  (if-let [cookie (get-cookie ctx)]
    (if-let [username (get-username-from-cookie ctx)]
      (if-let [user (user-dao/find-by-username username)]
        (if (= cookie (:cookie user))
          {:user-obj user})))))

(defn get-username
  [ctx]
  (-> ctx :user-obj :username))

(defmacro safe-fn
  [form message]
  `(try
     ~form
     (catch Throwable ~'_
       (throw (RuntimeException. message)))))