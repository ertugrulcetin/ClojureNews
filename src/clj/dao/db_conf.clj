(ns clj.dao.db-conf
  (:require [monger.core :as mg]
            [monger.credentials :as mcr]))

(def dbuser "")
(def dbpwd "")
(def dbname "")
(def dbhost "")

(defn- build-conn-uri []
  (str "mongodb://" dbuser ":" dbpwd "@" dbhost "/" dbname))

(defn- get-conn-uri []
  (let [mongodb-uri (System/getenv "MONGODB_URI")]
    (if (empty? mongodb-uri)
      (build-conn-uri)
      mongodb-uri)))

;; MONGODB_URI env variable must be set for production.
(defn init-db
  []
  (def clojure-news (-> (get-conn-uri)
                        (mg/connect-via-uri)
                        :db)))
