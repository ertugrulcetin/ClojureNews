(ns clj.core
  (:require [ring.adapter.jetty :as jetty]
            [compojure.core :refer [defroutes GET ANY]]
            [compojure.route :refer [not-found resources]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.resource :as resource]
            [clojure.java.io :as io])
  (:gen-class)
  (:import (java.util Date)))


(defroutes routes

           (GET "/" []
             (io/resource "index.html"))

           (GET "/ee" []
             (io/resource "index.html"))
           )


(def handler (-> #'routes
                 (resource/wrap-resource "/public")
                 wrap-params))

(defn -main
  []
  (jetty/run-jetty #'handler {:port 8080}))