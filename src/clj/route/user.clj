(ns clj.route.user
  (:require [compojure.core :refer [defroutes GET POST PUT]]
            [compojure.route :refer [not-found]]
            [liberator.core :refer [resource defresource]]))


(defroutes route


           (GET "/user/:username" [username]
             )


           (POST "/user/info" []
             ))