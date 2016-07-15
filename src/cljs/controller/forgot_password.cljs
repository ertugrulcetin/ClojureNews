(ns controller.forgot-password
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [cljc.validation :as validation]
            [reagent.core :as r]
            [cljc.error-messages :as error-message]
            [util.view]
            [util.controller]
            [view.forgot-password]))
(declare forgot-password)
(defn forgot-password-page
  []
  (util.view/change-page-title "Forgot Password")
  (r/render-component [(fn []
                         (view.forgot-password/component forgot-password))] util.view/main-container))

(defn forgot-password
  [field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        username (:username data)]

    (cond
      (not (validation/username? username))
      (util.view/render-error-message error-message/username)

      :else
      (do
        (r/render-component [(fn []
                               (view.forgot-password/component-loading))] util.view/message-container)
        (POST "/forgot-password"
              {:params          data
               :handler         (fn []
                                  (util.view/render-forgot-password-successfully))
               :error-handler   util.controller/error-handler
               :format          (ajax/json-request-format)
               :response-format (ajax/json-response-format {:keywords? true})})))))
