(ns clj.route.upvote
  (:require [compojure.core :refer [defroutes GET POST PUT]]
            [compojure.route :refer [not-found]]
            [clj.controller.upvote :as controller]))

(defroutes route

           (PUT "/upvote/story/comment/:id" [id]
             (controller/create-story-comment-upvote id))

           )
