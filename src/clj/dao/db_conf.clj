(ns clj.dao.db-conf
  (:require [monger.core :as mg]
            [monger.credentials :as mcr]))


(defn- build-conn-uri []
  (str "mongodb://" username ":" password "@" host "/" database))

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
