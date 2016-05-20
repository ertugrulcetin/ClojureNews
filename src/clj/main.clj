(ns clj.main
  (:require [ring.adapter.jetty :as jetty]
            [compojure.core :refer [defroutes GET ANY]]
            [compojure.route :refer [not-found resources]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.resource :as resource]
            [clj.route.user :as route-user]
            [clj.route.login :as route-login]
            [cljc.validation :as validation])
  (:gen-class))

(defn log-middleware
  [handler]
  (fn [request]
    (println "Request path: " (:uri request))
    (handler request)))

(def routes (compojure.core/routes
              #'route-user/route
              #'route-login/route))

(def handler (-> routes
                 log-middleware
                 (resource/wrap-resource "/public")
                 wrap-params))


(defn -main
  []
  (jetty/run-jetty #'handler {:port 8080}))