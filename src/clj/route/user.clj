(ns clj.route.user
  (:require [compojure.core :refer [defroutes GET POST PUT]]
            [compojure.route :refer [not-found]]
            [clj.controller.user :as controller]))


(defroutes route

           (GET "/user/:username" [username]
             (controller/user username))

           (POST "/user/:username" [username]
             (controller/update-user username))

           (POST "/user/:username/changepassword" [username]
             (controller/change-password username)))