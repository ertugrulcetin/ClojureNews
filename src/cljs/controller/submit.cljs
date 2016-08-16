(ns controller.submit
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [cljc.validation :as validation]
            [cljc.error-messages :as error-message]
            [reagent.core :as r]
            [goog.dom :as dom]
            [util.view]
            [util.controller]
            [view.submit]))

(declare submit
         create-story
         create-ask
         create-job
         create-event)

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
      (create-ask data)

      (= "job" type)
      (create-job data)

      (= "event" type)
      (create-event data))))

(defn create-story
  [data]
  (cond
    (not (validation/submit-title? (:title data)))
    (util.view/render-error-message error-message/title)

    (not (validation/submit-url? (:url data)))
    (util.view/render-error-message error-message/url)

    :else
    (PUT "/entry/story"
         {:params          data
          :handler         (fn [response]
                             (util.view/change-url (str "/#!/story/" (:entry-id response))))
          :error-handler   util.controller/error-handler
          :format          (ajax/json-request-format)
          :response-format (ajax/json-response-format {:keywords? true})})))

(defn create-ask
  [data]
  (cond
    (not (validation/submit-title? (:title data)))
    (util.view/render-error-message error-message/title)

    (not (validation/submit-text? (:text data)))
    (util.view/render-error-message error-message/text)

    :else
    (PUT "/entry/ask"
         {:params          data
          :handler         (fn [response]
                             (util.view/change-url (str "/#!/ask/" (:entry-id response))))
          :error-handler   util.controller/error-handler
          :format          (ajax/json-request-format)
          :response-format (ajax/json-response-format {:keywords? true})})))

(defn create-job
  [data]
  (cond
    (not (validation/submit-title? (:title data)))
    (util.view/render-error-message error-message/title)

    (not (validation/submit-url? (:url data)))
    (util.view/render-error-message error-message/url)

    (not (validation/submit-country? (:country data)))
    (util.view/render-error-message error-message/country)

    (not (validation/submit-city? (:city data)))
    (util.view/render-error-message error-message/city)

    :else
    (PUT "/entry/job"
         {:params          (assoc data :remote? (.-checked (dom/getElement "remoteId")))
          :handler         (fn [_]
                             (util.view/change-url-to-jobs))
          :error-handler   util.controller/error-handler
          :format          (ajax/json-request-format)
          :response-format (ajax/json-response-format {:keywords? true})})))

(defn create-event
  [data]
  (cond
    (not (validation/submit-title? (:title data)))
    (util.view/render-error-message error-message/title)

    (not (validation/submit-url? (:url data)))
    (util.view/render-error-message error-message/url)

    (not (validation/submit-country? (:country data)))
    (util.view/render-error-message error-message/country)

    (not (validation/submit-city? (:city data)))
    (util.view/render-error-message error-message/city)

    (not (validation/submit-day? (:starting-date-day data)))
    (util.view/render-error-message error-message/day)

    (not (validation/submit-month? (:starting-date-month data)))
    (util.view/render-error-message error-message/month)

    (not (validation/submit-year? (:starting-date-year data)))
    (util.view/render-error-message error-message/year)

    :else
    (PUT "/entry/event"
         {:params          data
          :handler         (fn [_]
                             (util.view/change-url-to-events))
          :error-handler   util.controller/error-handler
          :format          (ajax/json-request-format)
          :response-format (ajax/json-response-format {:keywords? true})})))