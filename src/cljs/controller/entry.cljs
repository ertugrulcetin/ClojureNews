(ns controller.entry
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [reagent.core :as r]
            [goog.dom :as dom]
            [util.view]
            [util.controller]
            [view.entry]
            [controller.upvote]
            [controller.comment-entry]))

(declare add-event-listener-to-add-comment-button
         add-event-listener-to-upvote-buttons)

(defn home-page
  []
  (GET "/entry"
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.entry/component-story-and-ask response))] util.view/main-container))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn story
  [id]
  (GET (str "/entry/story/" id)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.entry/story response))] util.view/main-container)

                           (add-event-listener-to-add-comment-button story id)
                           (add-event-listener-to-upvote-buttons response))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn add-event-listener-to-add-comment-button
  [entry id]
  (.addEventListener (dom/getElement "buttonAddCommentId") "click" (fn [_]
                                                                     (controller.comment-entry/add-comment entry id ["textId"]))))
(defn add-event-listener-to-upvote-buttons
  [response]
  (doseq [commentt (-> response :story-comments)]
    (let [comment-id (:_id commentt)
          upvoted-comments (-> response :story-upvoted-comments)]
      (when-not (util.view/in? comment-id upvoted-comments)
        (when-let [node (dom/getElement (str "id-upvote-" comment-id))]
          (.addEventListener node "click" (fn [_]
                                            (controller.upvote/upvote-story-comment comment-id))))))))

