(ns route.entry
  (:require-macros [secretary.core :refer [defroute]])
  (:require [secretary.core]
            [view.entry]
            [controller.entry]))

(defroute home-page "/" []
          (controller.entry/home-page))

(defroute story "/story/:id" [id]
          (controller.entry/story id))

;(defroute ask "/ask/:id" [id]
;          (controller.entry/ask id))