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

           (GET "/entry/story/:id" [id]
             (controller/get-story-by-id id))

           (POST "/entry/story/edit/:id" [id]
             (controller/edit-story-by-id id))

           (DELETE "/entry/story/delete/:id" [id]
             (controller/delete-story-by-id id))

           (GET "/entry/story/info/:id" [id]
             (controller/get-story-litte-info-by-id id))

           (PUT "/entry/ask" []
             (controller/create-ask)))

