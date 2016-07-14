(ns clj.dao.db-conf
  (:require [monger.core :as mg]
            [monger.credentials :as mcr]))

;;For local testing
;(def username "my-username")
;(def password "my-password")
;(def database "my-database-name")
;(def host "localhost")
;
;(defonce creds (mcr/create username database password))
;
;(defonce conn (mg/connect-with-credentials host creds))
;
;(defonce clojure-news (mg/get-db conn database))

;;For prod!!
(def clojure-news nil)


(defn init-db
  []
  (def clojure-news (-> (System/getenv "MONGODB_URI")
                        (mg/connect-via-uri)
                        :db)))