(ns clj.main
  (:require [ring.adapter.jetty :as jetty]
            [compojure.core :refer [defroutes GET ANY]]
            [compojure.route :refer [not-found resources]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.resource :as resource]
            [ring.middleware.cookies :as cookies]
            [clj.route.user :as route-user]
            [clj.route.login :as route-login]
            [clj.route.entry :as route-entry]
            [clj.route.comment-entry :as route-comment-entry]
            [clj.route.upvote :as route-upvote])

  (:gen-class))

(defn log-middleware
  [handler]
  (fn [request]
    (println "Request path: " (:uri request))
    (handler request)))

(def routes (compojure.core/routes
              #'route-user/route
              #'route-login/route
              #'route-entry/route
              #'route-comment-entry/route
              #'route-upvote/route))

(def handler (-> routes
                 log-middleware
                 (resource/wrap-resource "/public")
                 cookies/wrap-cookies
                 wrap-params))


(defn -main
  []
  (jetty/run-jetty #'handler {:port 8080}))