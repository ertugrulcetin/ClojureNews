(ns controller.upvote
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [ajax.core :as ajax]))

(defn upvote-story-comment
  [comment-id]
  (PUT (str "/upvote/story/comment/" comment-id)
       {:handler         (fn [_]
                           (let [e (.getElementById js/document (str "id-upvote-" comment-id))]
                             (set! (.-visibility (.-style e)) "hidden")
                             (set! (.-className e) ""))
                           )
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))