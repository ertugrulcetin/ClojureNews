(ns controller.login
  (:require [util.view]
            [ajax.core :as ajax :refer [GET POST PUT]]
            [secretary.core :as secretary]
            [cljc.validation :as validation]
            [reagent.core :as r]))

(enable-console-print!)

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn sign-up
  [field-ids]
  (let [m (util.view/create-field-val-map field-ids)
        username (:username m)
        password (:password m)]

    (cond
      (not (validation/username? username))
      (util.view/render-error-message "Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another.")

      (not (validation/password? password))
      (util.view/render-error-message "Passwords should be between 8 and 20 characters long. Please choose another.")

      :else
      (PUT "/signup"
           {:params          m
            :handler         handler
            :error-handler   error-handler
            :format          (ajax/json-request-format)
            :response-format (ajax/json-response-format {:keywords? true})}))))

