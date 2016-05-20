(ns clj.route.user
  (:require [compojure.core :refer [defroutes GET POST PUT]]
            [compojure.route :refer [not-found]]
            [liberator.core :refer [resource defresource]]
            [clojure.java.io :as io]))


(defroutes route

           (GET "/" []
             (io/resource "index.html"))


           (GET "/user/:username" [username]
             )


           (POST "/user/info" []
             ))