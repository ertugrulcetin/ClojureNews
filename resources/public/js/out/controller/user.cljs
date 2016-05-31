(ns controller.user
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [cljc.validation :as validation]
            [cljc.string-util :as string-util]
            [util.view]
            [view.user]
            [reagent.core :as r]))

(enable-console-print!)

(defn handler [response]
  (r/render-component [(fn []
                         (view.user/component response))] util.view/main-container))

(defn error-handler [{:keys [response] :as m}]
  (util.view/render-error-message (:error response)))


(defn user
  [username]
  (GET (str "/user/" username)
       {:handler         handler
        :error-handler   error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn user-update
  [username field-ids]

  (let [data (util.view/create-field-val-map field-ids)]

    (cond
      (not (validation/about? (:about data)))
      (util.view/render-error-message "About should be between 0 and 500 characters long.")

      (not (validation/email? (:email data)))
      (util.view/render-error-message "Not valid email.")

      (not (validation/url? (:website data)))
      (util.view/render-error-message "Not valid url. Ex: https://www.google.com")

      (not (validation/github-or-twitter? (:github data)))
      (util.view/render-error-message "Not valid GitHub Username. Ex: ertugrulcetin")

      (not (validation/github-or-twitter? (:twitter data)))
      (util.view/render-error-message "Not valid Twitter Username. Ex: ertuctn")

      (not (validation/show-email?? (:show-email? data)))
      (util.view/render-error-message "Not valid show email option.")

      :else
      (POST (str "/user/" username)
            {:params          (string-util/trim-map-values data)
             :handler         (fn [_])
             :error-handler   (fn [_])
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))