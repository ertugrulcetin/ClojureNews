(ns route.entry
  (:require-macros [secretary.core :refer [defroute]])
  (:require [secretary.core]
            [controller.entry]))

;Story
(defroute home-page "/" []
          (controller.entry/get-stories-by-page "1"))

(defroute get-stories "/story" []
          (controller.entry/get-stories-by-page "1"))

(defroute get-story-by-id "/story/:id" [id]
          (controller.entry/get-story-by-id id))

(defroute get-stories-by-page "/story/p/:page" [page]
          (controller.entry/get-stories-by-page page))

(defroute edit-story-by-id "/story/edit/:id" [id]
          (controller.entry/edit-story-by-id id))

(defroute delete-story-by-id "/story/delete/:id" [id]
          (controller.entry/delete-story-by-id id))

;;Ask
(defroute get-asks "/ask" []
          (controller.entry/get-ask-by-page "1"))

(defroute get-ask-by-id "/ask/:id" [id]
          (controller.entry/get-ask-by-id id))

(defroute get-ask-by-page "/ask/p/:page" [page]
          (controller.entry/get-ask-by-page page))

(defroute edit-ask-by-id "/ask/edit/:id" [id]
          (controller.entry/edit-ask-by-id id))

(defroute delete-ask-by-id "/ask/delete/:id" [id]
          (controller.entry/delete-ask-by-id id))

;;Newest

(defroute get-newest "/new" []
          (controller.entry/get-newest-by-page "1"))

(defroute get-newest-by-page "/new/p/:page" [page]
          (controller.entry/get-newest-by-page page))

;;Job
(defroute get-jobs "/jobs" []
          (controller.entry/get-jobs-by-page "1"))

(defroute get-jobs-by-page "/jobs/p/:page" [page]
          (controller.entry/get-jobs-by-page page))

(defroute edit-job-by-id "/jobs/edit/:id" [id]
          (controller.entry/edit-job-by-id id))

(defroute delete-job-by-id "/jobs/delete/:id" [id]
          (controller.entry/delete-job-by-id id))

;;Event
(defroute get-events "/event" []
          (controller.entry/get-events-by-page "1"))

(defroute get-event-by-page "/event/p/:page" [page]
          (controller.entry/get-events-by-page page))

;(defroute edit-event-by-id "/event/edit/:id" [id]
;          (controller.entry/ id))

;(defroute delete-job-by-id "/jobs/delete/:id" [id]
;          (controller.entry/delete-job-by-id id))