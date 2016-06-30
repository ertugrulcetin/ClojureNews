(ns clj.route.comment-entry
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE]]
            [compojure.route :refer [not-found]]
            [clj.controller.comment-entry :as controller]))

(defroutes route

           (PUT "/comment" []
             (controller/create-comment))

           (PUT "/comment/reply" []
             (controller/reply-comment))

           (GET "/comment/:id" [id]
             (controller/get-comment-by-id id))

           (POST "/comment/:id" [id]
             (controller/edit-comment-by-id id))

           ;(PUT "/comment/reply/:id" [id]
           ;  (controller/reply-story-comment id))
           )
