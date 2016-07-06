(ns clj.route.upvote
  (:require [compojure.core :refer [defroutes GET POST PUT]]
            [compojure.route :refer [not-found]]
            [clj.controller.upvote :as controller]))

(defroutes route

           (PUT "/upvote/comment/:id" [id]
             (controller/create-comment-upvote id))

           (PUT "/upvote/entry/:id" [id]
             (controller/create-entry-upvote id)))
