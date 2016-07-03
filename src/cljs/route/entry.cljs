(ns route.entry
  (:require-macros [secretary.core :refer [defroute]])
  (:require [secretary.core]
            [controller.entry]))

(defroute home-page "/" []
          (controller.entry/home-page))

(defroute get-story-by-id "/story/:id" [id]
          (controller.entry/get-story-by-id id))

(defroute get-stories-by-page "/story/p/:page" [page]
          (controller.entry/get-stories-by-page page))

(defroute edit-story-by-id "/story/edit/:id" [id]
          (controller.entry/edit-story-by-id id))

(defroute delete-story-by-id "/story/delete/:id" [id]
          (controller.entry/delete-story-by-id id))

(defroute get-ask-by-id "/ask/:id" [id]
          (controller.entry/get-ask-by-id id))

(defroute get-ask-by-page "/ask/p/:page" [page]
          (controller.entry/get-ask-by-page page))

(defroute edit-ask-by-id "/ask/edit/:id" [id]
          (controller.entry/edit-ask-by-id id))

(defroute delete-ask-by-id "/ask/delete/:id" [id]
          (controller.entry/delete-ask-by-id id))

;(defroute ask "/ask/:id" [id]
;          (controller.entry/ask id))