(ns route.comment-entry
  (:require-macros [secretary.core :refer [defroute]])
  (:require [controller.comment-entry :as controller]
            [secretary.core]))

(defroute get-comment-by-id "/comment/:id" [id]
          (controller/reply-comment-by-id id))

(defroute edit-comment-by-id "/comment/edit/:id" [id]
          (controller/edit-comment-by-id id))

(defroute delete-comment-by-id "/comment/delete/:id" [id]
          (controller/delete-comment-by-id id))
