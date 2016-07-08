(ns controller.comment-entry
  (:require [ajax.core :as ajax :refer [GET POST PUT DELETE]]
            [reagent.core :as r]
            [util.view]
            [util.controller]
            [view.comment-entry]
            [controller.upvote]
            [goog.dom :as dom]
            [cljc.validation :as validation]
            [clojure.string :as str]))

(declare reply-comment
         edit-comment
         delete-comment
         dont-delete-comment
         add-event-listener-to-reply-button
         add-event-listener-to-edit-button
         add-event-listener-to-delete-yes-button
         add-event-listener-to-delete-no-button
         add-event-listener-to-upvote-button-for-comment)

(defn add-comment
  [entry entry-id field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        text (:text data)]

    (cond
      (str/blank? entry-id)
      (util.view/render-error-message "Could not find story")

      (not (validation/submit-text? text))
      (util.view/render-error-message "Please limit text to 2500 characters.")

      :else
      (PUT "/comment"
           {:params          {:entry-id entry-id :text text}
            :handler         (fn [_]
                               (entry entry-id)
                               (util.view/scroll-to-top))
            :error-handler   util.controller/error-handler
            :format          (ajax/json-request-format)
            :response-format (ajax/json-response-format {:keywords? true})}))))

(defn reply-comment-by-id
  [id]
  (GET (str "/comment/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title "Reply Comment")
                           (r/render-component [(fn []
                                                  (view.comment-entry/component-reply response))] util.view/main-container)
                           (add-event-listener-to-reply-button id)
                           (add-event-listener-to-upvote-button-for-comment id))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn reply-comment
  [parent-comment-id field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        text (:text data)]

    (cond
      (not (validation/submit-text? text))
      (util.view/render-error-message "Please limit text to 2500 characters.")

      :else
      (PUT (str "/comment/reply")
           {:params          {:parent-comment-id parent-comment-id :text text}
            :handler         (fn [response]
                               (util.view/change-url (str "/#/" (-> response :type) "/" (-> response :entry-id))))

            :error-handler   util.controller/error-handler
            :format          (ajax/json-request-format)
            :response-format (ajax/json-response-format {:keywords? true})}))))

(defn edit-comment-by-id
  [id]
  (GET (str "/comment/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title "Edit Comment")
                           (r/render-component [(fn []
                                                  (view.comment-entry/component-edit response))] util.view/main-container)
                           (add-event-listener-to-edit-button id))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-comment
  [id field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        text (:text data)]

    (cond
      (not (validation/submit-text? text))
      (util.view/render-error-message "Please limit text to 2500 characters.")

      :else
      (POST (str "/comment/" id)
            {:params          data
             :handler         (fn [_]
                                (edit-comment-by-id id))
             :error-handler   util.controller/error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))

(defn delete-comment-by-id
  [id]
  (GET (str "/comment/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title "Delete Comment")
                           (r/render-component [(fn []
                                                  (view.comment-entry/component-delete response))] util.view/main-container)
                           (add-event-listener-to-delete-yes-button id)
                           (add-event-listener-to-delete-no-button (-> response :comment-entry :type) (-> response :comment-entry :entry-id)))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn delete-comment
  [id]
  (DELETE (str "/comment/delete/" id)
          {:handler         (fn [response]
                              (util.view/change-url (str "/#/" (:type response) "/" (:entry-id response))))
           :error-handler   util.controller/error-handler
           :format          (ajax/json-request-format)
           :response-format (ajax/json-response-format {:keywords? true})}))

(defn dont-delete-comment
  [type entry-id]
  (util.view/change-url (str "/#/" type "/" entry-id)))

(defn add-event-listener-to-reply-button
  [id]
  (.addEventListener (dom/getElement "buttonReplyCommentId") "click" (fn [_]
                                                                       (reply-comment id ["textId"]))))

(defn add-event-listener-to-edit-button
  [id]
  (.addEventListener (dom/getElement "buttonEditCommentId") "click" (fn [_]
                                                                      (edit-comment id ["textId"]))))

(defn add-event-listener-to-delete-yes-button
  [id]
  (.addEventListener (dom/getElement "buttonDeleteYesCommentId") "click" (fn [_]
                                                                           (delete-comment id))))

(defn add-event-listener-to-delete-no-button
  [type entry-id]
  (.addEventListener (dom/getElement "buttonDeleteNoCommentId") "click" (fn [_]
                                                                          (dont-delete-comment type entry-id))))

(defn add-event-listener-to-upvote-button-for-comment
  [comment-id]
  (when-let [element (dom/getElement (str "id-upvote-" comment-id))]
    (.addEventListener element "click" (fn [_]
                                         (controller.upvote/upvote-comment comment-id)))))