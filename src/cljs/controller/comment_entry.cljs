(ns controller.comment-entry
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [reagent.core :as r]
            [util.view]
            [util.controller]
            [view.comment-entry]
            [cljc.validation :as validation]
            [clojure.string :as str]))

(declare reply-story-comment)

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