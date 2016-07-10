(ns clj.dao.db-conf
  (:require [monger.core :as mg]
            [monger.credentials :as mcr]))

(def username "my-username..")
(def database-name "my-database-name")
(def database-password "my-password")
(def host "localhost")

(defonce creds (mcr/create username database-name database-password))

(defonce conn (mg/connect-with-credentials host creds))

(defonce clojure-news (mg/get-db conn database-name))
