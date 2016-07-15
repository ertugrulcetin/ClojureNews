(ns clj.route.forgot-password
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE]]
            [compojure.route :refer [not-found]]
            [clj.controller.user :as controller]))

(defroutes route

           (POST "/forgot-password" []
             (controller/forgot-password)))