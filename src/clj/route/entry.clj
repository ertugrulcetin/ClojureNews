(ns clj.route.entry
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE]]
            [compojure.route :refer [not-found]]
            [clj.controller.entry :as controller]))

(defroutes route

           (GET "/" []
             (controller/home-page))

           (GET "/entry" []
             (controller/entry))

           (PUT "/entry/story" []
             (controller/create-story))

           (PUT "/entry/ask" []
             (controller/create-ask))

           )

