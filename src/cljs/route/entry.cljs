(ns route.entry
  (:require-macros [secretary.core :refer [defroute]])
  (:require [secretary.core]
            [view.entry]
            [controller.entry]))

(defroute home-page "/" []
          (controller.entry/home-page))

(defroute get-story-by-id "/story/:id" [id]
          (controller.entry/get-story-by-id id))

(defroute edit-story-by-id "/story/edit/:id" [id]
          (controller.entry/edit-story-by-id id))

;(defroute ask "/ask/:id" [id]
;          (controller.entry/ask id))