(ns controller.upvote
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [ajax.core :as ajax]))

(defn upvote-comment
  [comment-id]
  (PUT (str "/upvote/comment/" comment-id)
       {:handler         (fn [_]
                           (let [e (.getElementById js/document (str "id-upvote-" comment-id))]
                             (set! (.-visibility (.-style e)) "hidden")
                             (set! (.-className e) "")))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn upvote-entry
  [entry-id]
  (PUT (str "/upvote/entry/" entry-id)
       {:handler         (fn [_]
                           (let [e (.getElementById js/document (str "id-upvote-" entry-id))]
                             (set! (.-visibility (.-style e)) "hidden")
                             (set! (.-className e) "")))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))