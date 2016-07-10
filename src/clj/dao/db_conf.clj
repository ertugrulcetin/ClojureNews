(ns clj.dao.db-conf
  (:require [monger.core :as mg]
            [monger.credentials :as mcr]))

(def username "my-username")
(def password "my-password")
(def database "my-database-name")
(def host "localhost")

(defonce creds (mcr/create username database password))

(defonce conn (mg/connect-with-credentials host creds))

(defonce clojure-news (mg/get-db conn database))