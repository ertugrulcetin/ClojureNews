(ns controller.entry
  (:require [ajax.core :as ajax :refer [GET POST PUT DELETE]]
            [reagent.core :as r]
            [goog.dom :as dom]
            [util.view]
            [util.controller]
            [view.entry.story-entry]
            [view.entry.ask-entry]
            [view.list.entry]
            [view.list.story]
            [view.list.ask]
            [controller.upvote]
            [controller.comment-entry]
            [cljc.validation :as validation]))

(declare add-event-listener-to-add-comment-button
         add-event-listener-to-upvote-buttons
         add-event-listener-to-edit-story-button
         add-event-listener-to-edit-ask-button
         add-event-listener-to-story-button-yes
         add-event-listener-to-story-button-no
         add-event-listener-to-ask-button-yes
         add-event-listener-to-ask-button-no)

(defn home-page
  []
  (GET "/entry"
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.list.entry/component-story-and-ask response))] util.view/main-container))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn get-stories-by-page
  [page]
  (GET (str "/entry/story/p/" page)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.list.story/component-list-story response page))] util.view/main-container))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn get-story-by-id
  [id]
  (GET (str "/entry/story/" id)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.entry.story-entry/component-story response))] util.view/main-container)

                           (add-event-listener-to-add-comment-button get-story-by-id id)
                           (add-event-listener-to-upvote-buttons response :story)
                           )
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-story-by-id
  [id]
  (GET (str "/entry/story/info/" id)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.entry.story-entry/component-edit response))] util.view/main-container)
                           (add-event-listener-to-edit-story-button id))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-story
  [id field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        title (:title data)]

    (cond
      (not (validation/submit-title? title))
      (util.view/render-error-message "Please limit title to 80 characters.")

      :else
      (POST (str "/entry/story/edit/" id)
            {:params          data
             :handler         (fn [_]
                                (util.view/change-url (str "/#/story/" id)))
             :error-handler   util.controller/error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))

(defn delete-story-by-id
  [id]
  (GET (str "/entry/story/info/" id)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.entry.story-entry/component-delete response))] util.view/main-container)
                           (add-event-listener-to-story-button-yes id)
                           (add-event-listener-to-story-button-no))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn delete-story
  [id]
  (DELETE (str "/entry/story/delete/" id)
          {:handler         (fn []
                              (util.view/change-url "/#/"))
           :error-handler   util.controller/error-handler
           :format          (ajax/json-request-format)
           :response-format (ajax/json-response-format {:keywords? true})}))

(defn get-ask-by-id
  [id]
  (GET (str "/entry/ask/" id)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.entry.ask-entry/component-ask response))] util.view/main-container)
                           (add-event-listener-to-add-comment-button get-ask-by-id id)
                           (add-event-listener-to-upvote-buttons response :ask))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn get-ask-by-page
  [page]
  (GET (str "/entry/ask/p/" page)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.list.ask/component-list-ask response page))] util.view/main-container))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-ask-by-id
  [id]
  (GET (str "/entry/ask/info/" id)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.entry.ask-entry/component-edit response))] util.view/main-container)
                           (add-event-listener-to-edit-ask-button id))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-ask
  [id field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        title (:title data)
        text (:text data)]

    (cond
      (not (validation/submit-title? title))
      (util.view/render-error-message "Please limit title to 80 characters.")

      (not (validation/submit-text? text))
      (util.view/render-error-message "Please limit text to 2500 characters.")

      :else
      (POST (str "/entry/ask/edit/" id)
            {:params          data
             :handler         (fn [_]
                                (util.view/change-url (str "/#/ask/" id)))
             :error-handler   util.controller/error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))

(defn delete-ask-by-id
  [id]
  (GET (str "/entry/ask/info/" id)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.entry.ask-entry/component-delete response))] util.view/main-container)
                           (add-event-listener-to-ask-button-yes id)
                           (add-event-listener-to-ask-button-no))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn delete-ask
  [id]
  (DELETE (str "/entry/ask/delete/" id)
          {:handler         (fn []
                              (util.view/change-url "/#/"))
           :error-handler   util.controller/error-handler
           :format          (ajax/json-request-format)
           :response-format (ajax/json-response-format {:keywords? true})}))

(defn dont-delete-story
  []
  (util.view/change-url "/#/"))

(defn dont-delete-ask
  []
  (util.view/change-url "/#/"))

(defn add-event-listener-to-add-comment-button
  [entry id]
  (.addEventListener (dom/getElement "buttonAddCommentId") "click" (fn [_]
                                                                     (controller.comment-entry/add-comment entry id ["textId"]))))
(defn add-event-listener-to-upvote-buttons
  [response type]

  (let [comments (if (= type :story) :story-comments :ask-comments)
        upvoted-comments (if (= type :story) :story-upvoted-comments :ask-upvoted-comments)]

    (doseq [commentt (-> response comments)]
      (let [comment-id (:_id commentt)
            upvoted-comments (-> response upvoted-comments)]
        (when-not (util.view/in? comment-id upvoted-comments)
          (when-let [node (dom/getElement (str "id-upvote-" comment-id))]
            (.addEventListener node "click" (fn [_]
                                              (controller.upvote/upvote-comment comment-id)))))))))

(defn add-event-listener-to-edit-story-button
  [id]
  (.addEventListener (dom/getElement "buttonStoryEditId") "click" (fn [_]
                                                                    (edit-story id ["titleId"]))))

(defn add-event-listener-to-edit-ask-button
  [id]
  (.addEventListener (dom/getElement "buttonAskEditId") "click" (fn [_]
                                                                  (edit-ask id ["titleId" "textId"]))))

(defn add-event-listener-to-story-button-yes
  [id]
  (.addEventListener (dom/getElement "buttonDeleteStoryYesId") "click" (fn [_]
                                                                         (delete-story id))))

(defn add-event-listener-to-story-button-no
  []
  (.addEventListener (dom/getElement "buttonDeleteStoryNoId") "click" (fn [_]
                                                                        (dont-delete-story))))

(defn add-event-listener-to-ask-button-yes
  [id]
  (.addEventListener (dom/getElement "buttonDeleteAskYesId") "click" (fn [_]
                                                                       (delete-story id))))

(defn add-event-listener-to-ask-button-no
  []
  (.addEventListener (dom/getElement "buttonDeleteAskNoId") "click" (fn [_]
                                                                      (dont-delete-ask))))


