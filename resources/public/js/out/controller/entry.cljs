(ns controller.entry
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [reagent.core :as r]
            [util.view]
            [util.controller]
            [view.entry]
            [cljc.validation :as validation]
            [clojure.string :as str]))

(declare add-story-comment
         story)

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
                                                  (view.entry/story response add-story-comment))] util.view/main-container))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn ask
  [id])


(defn add-story-comment
  [story-id field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        text (:text data)]

    (cond
      (str/blank? story-id)
      (util.view/render-error-message "Could not find story")

      (not (validation/submit-text? text))
      (util.view/render-error-message "Please limit text to 2500 characters.")

      :else
      (PUT "/comment"
           {:params          {:story-id story-id :text text}
            :handler         (fn [_]
                               (story story-id)
                               (.scrollTo js/window 0 (.-scrollHeight (.-body js/document))))
            :error-handler   util.controller/error-handler
            :format          (ajax/json-request-format)
            :response-format (ajax/json-response-format {:keywords? true})}))))
