(ns clj.route.entry
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE]]
            [compojure.route :refer [not-found]]
            [clj.controller.entry :as controller]))

(defroutes route

           (GET "/" []
             (controller/home-page))

           (GET "/entry" []
             (controller/entry))

           ;;Story
           (PUT "/entry/story" []
             (controller/create-story))

           (GET "/entry/story/:id" [id]
             (controller/get-story-by-id id))

           (GET "/entry/story/p/:page" [page]
             (controller/get-stories-by-page page))

           (POST "/entry/story/edit/:id" [id]
             (controller/edit-story-by-id id))

           (DELETE "/entry/story/delete/:id" [id]
             (controller/delete-story-by-id id))

           (GET "/entry/story/info/:id" [id]
             (controller/get-story-litte-info-by-id id))

           ;;Ask
           (PUT "/entry/ask" []
             (controller/create-ask))

           (GET "/entry/ask/:id" [id]
             (controller/get-ask-by-id id))

           (GET "/entry/ask/info/:id" [id]
             (controller/get-ask-litte-info-by-id id))

           (POST "/entry/ask/edit/:id" [id]
             (controller/edit-ask-by-id id))

           (DELETE "/entry/ask/delete/:id" [id]
             (controller/delete-ask-by-id id)))

