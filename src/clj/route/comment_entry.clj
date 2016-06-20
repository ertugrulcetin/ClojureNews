(ns clj.route.comment-entry
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE]]
            [compojure.route :refer [not-found]]
            [clj.controller.comment-entry :as controller]))

(defroutes route

           (PUT "/comment" []
             (controller/create-story-comment))

           ;(GET "/comment/reply/:id" [id]
           ;  (controller/reply-story-comment id))
           ;
           ;(PUT "/comment/reply/:id" [id]
           ;  (controller/reply-story-comment id))
           )
