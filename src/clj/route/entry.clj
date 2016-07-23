(ns clj.route.entry
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE]]
            [compojure.route :refer [not-found]]
            [clj.controller.entry :as controller]))

(defroutes route

           (GET "/" []
             (controller/home-page))

           (GET "/rss" []
             (controller/get-rss-feed))

           (GET "/robots.txt" []
             (controller/get-rss-feed))

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

           (GET "/entry/ask/p/:page" [page]
             (controller/get-ask-by-page page))

           (GET "/entry/ask/info/:id" [id]
             (controller/get-ask-litte-info-by-id id))

           (POST "/entry/ask/edit/:id" [id]
             (controller/edit-ask-by-id id))

           (DELETE "/entry/ask/delete/:id" [id]
             (controller/delete-ask-by-id id))

           ;;Newest
           (GET "/entry/newest/p/:page" [page]
             (controller/get-newest-stories-and-stories-by-page page))

           ;;Job
           (PUT "/entry/job" []
             (controller/create-job))

           (GET "/entry/job/p/:page" [page]
             (controller/get-jobs-by-page page))

           (GET "/entry/job/info/:id" [id]
             (controller/get-job-litte-info-by-id id))

           (POST "/entry/job/edit/:id" [id]
             (controller/edit-job-by-id id))

           (DELETE "/entry/job/delete/:id" [id]
             (controller/delete-job-by-id id))

           ;;Event
           (PUT "/entry/event" []
             (controller/create-event))

           (GET "/entry/event/p/:page" [page]
             (controller/get-events-by-page page))

           (GET "/entry/event/info/:id" [id]
             (controller/get-event-litte-info-by-id id))

           (POST "/entry/event/edit/:id" [id]
             (controller/edit-event-by-id id))

           (DELETE "/entry/event/delete/:id" [id]
             (controller/delete-event-by-id id)))

