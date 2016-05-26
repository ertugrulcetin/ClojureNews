(ns clj.route.login
  (:require [compojure.core :refer [defroutes GET POST PUT]]
            [compojure.route :refer [not-found]]
            [clj.controller.login :as controller]))

(defroutes route

           (POST "/login" []
             (controller/login))

           (POST "/logout" []
             (controller/logout))

           (PUT "/signup" []
             (controller/sign-up)))