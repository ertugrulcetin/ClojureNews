(ns controller.entry
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [reagent.core :as r]
            [util.view]
            [util.controller]
            [view.entry]))


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
                                                  (view.entry/story response))] util.view/main-container))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn ask
  [id])

