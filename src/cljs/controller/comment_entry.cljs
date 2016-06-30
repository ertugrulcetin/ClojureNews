(ns controller.comment-entry
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [reagent.core :as r]
            [util.view]
            [util.controller]
            [view.comment-entry]
            [cljc.validation :as validation]
            [clojure.string :as str]))

(declare reply-story-comment
         edit-story)

(defn get-story-comment-by-id
  [id]
  (GET (str "/comment/" id)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.comment-entry/component-story-comment response reply-story-comment))] util.view/main-container))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn reply-story-comment
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
                               (util.view/change-url (str "/#/story/" (-> response :entry-id))))

            :error-handler   util.controller/error-handler
            :format          (ajax/json-request-format)
            :response-format (ajax/json-response-format {:keywords? true})}))))

(defn edit-story-comment-by-id
  [id]
  (GET (str "/comment/" id)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.comment-entry/component-edit response edit-story))] util.view/main-container))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-story
  [id field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        text (:text data)]

    (cond
      (not (validation/submit-text? text))
      (util.view/render-error-message "Please limit text to 2500 characters.")

      :else
      (POST (str "/comment/" id)
            {:params          data
             :handler         (fn [response]
                                (edit-story-comment-by-id id))

             :error-handler   util.controller/error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))

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
                               (.scrollTo js/window 0 (.-scrollHeight (.-body js/document))))
            :error-handler   util.controller/error-handler
            :format          (ajax/json-request-format)
            :response-format (ajax/json-response-format {:keywords? true})}))))