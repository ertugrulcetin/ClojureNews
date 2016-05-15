(ns clj.core
  (:require [ring.adapter.jetty :as jetty]
            [compojure.core :refer [defroutes GET ANY]]
            [compojure.route :refer [not-found resources]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.resource :as resource]
            [clojure.java.io :as io]
            [clj.dao.db :as db]
            [clj.route.user :as route-user]
            )
  (:gen-class))

(defn log-middleware
  [handler]
  (fn [request]
    (println "Request path: " (:uri request))
    (handler request)))

(def handler (-> #'route-user/route
                 log-middleware
                 (resource/wrap-resource "/public")
                 wrap-params))

(defn -main
  []
  (jetty/run-jetty #'handler {:port 8080}))