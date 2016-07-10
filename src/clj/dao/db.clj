(ns clj.dao.db
  (:require [monger.core :as mg]
            [monger.credentials :as mcr]))

(def username "username")
(def database-name "database-name")
(def database-password "my-password")
(def host "localhost")

(defonce creds (mcr/create username database-name database-password))

(defonce conn (mg/connect-with-credentials host creds))

(defonce clojure-news (mg/get-db conn database-name))