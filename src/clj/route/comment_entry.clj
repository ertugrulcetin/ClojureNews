(ns clj.route.comment-entry
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE]]
            [compojure.route :refer [not-found]]
            [clj.controller.comment-entry :as controller]))

(defroutes route

           (PUT "/comment" []
             (controller/create-story-comment))

           (PUT "/comment/reply" []
             (controller/reply-story-comment))

           (GET "/comment/:id" [id]
             (controller/get-story-comment-by-id id))

           (POST "/comment/:id" [id]
             (controller/edit-story-comment-by-id id))

           ;(PUT "/comment/reply/:id" [id]
           ;  (controller/reply-story-comment id))
           )
