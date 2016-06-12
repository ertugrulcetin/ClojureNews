(ns controller.submit
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [cljc.validation :as validation]
            [reagent.core :as r]
            [util.view]
            [util.controller]
            [view.submit]))

(declare submit
         create-story
         create-ask)

(defonce entry-map {:story  "/entry/story"
                    :ask    "/entry/ask"
                    :jobs   "/entry/jobs"
                    :events "/entry/events"})

(defn submit-page
  []
  (r/render-component [(fn []
                         (view.submit/component-story submit))] util.view/main-container))

(defn submit
  [field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        type (:type data)]

    (cond
      (= "story" type)
      (create-story data)

      (= "ask" type)
      (create-ask data))))

(defn create-story
  [data]
  (cond
    (not (validation/submit-title? (:title data)))
    (util.view/render-error-message (str "Please limit title to 80 characters.This had " (count (:title data)) "."))

    (not (validation/submit-url? (:url data)))
    (util.view/render-error-message "Not valid url. Ex: https://www.google.com")

    :else
    (PUT "/entry/story"
         {:params          data
          :handler         (fn [_])
          :error-handler   util.controller/error-handler
          :format          (ajax/json-request-format)
          :response-format (ajax/json-response-format {:keywords? true})})))

(defn create-ask
  [data]
  (cond
    (not (validation/submit-title? (:title data)))
    (util.view/render-error-message (str "Please limit title to 80 characters.This had " (count (:title data)) "."))

    (not (validation/submit-text? (:text data)))
    (util.view/render-error-message "Please limit text to 2500 characters.")

    :else
    (PUT "/entry/ask"
         {:params          data
          :handler         (fn [_])
          :error-handler   util.controller/error-handler
          :format          (ajax/json-request-format)
          :response-format (ajax/json-response-format {:keywords? true})})))