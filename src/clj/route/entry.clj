(ns clj.route.entry
  (:require [compojure.core :refer [defroutes GET POST PUT]]
            [compojure.route :refer [not-found]]
            [clj.controller.entry :as controller]))

(defroutes route

           (GET "/" []
             (controller/home-page))

           (GET "/entry" []
             (controller/entry)))

