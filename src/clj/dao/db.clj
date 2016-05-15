(ns clj.dao.db
  (:require [monger.core :as mg]
            [monger.credentials :as mcr]))

;;TODO configuration will be given by yaml
(defonce creds (mcr/create "admin" "clojurenews" "sp8c9XX!!"))

(defonce conn (mg/connect-with-credentials "localhost" creds))

(defonce clojure-news (mg/get-db conn "clojurenews"))
