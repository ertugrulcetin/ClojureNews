(ns controller.login
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [secretary.core :as secretary]
            [cljc.validation :as validation]
            [util.view]
            [reagent.core :as r]))

(enable-console-print!)

;;TODO will be changed!!! https.....!
(defn handler
  [response]
  (util.view/change-url "/"))

(defn error-handler
  [{:keys [response]}]
  (util.view/render-error-message (:error response)))

(defn sign-up
  [field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        username (:username data)
        password (:password data)]

    (cond
      (not (validation/username? username))
      (util.view/render-error-message "Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another.")

      (not (validation/password? password))
      (util.view/render-error-message "Passwords should be between 8 and 20 characters long. Please choose another.")

      :else
      (PUT "/signup"
           {:params          data
            :handler         handler
            :error-handler   error-handler
            :format          (ajax/json-request-format)
            :response-format (ajax/json-response-format {:keywords? true})}))))

(defn log-in
  [field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        username (:username data)
        password (:password data)]

    (cond
      (not (validation/username? username))
      (util.view/render-error-message "Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another.")

      (not (validation/password? password))
      (util.view/render-error-message "Passwords should be between 8 and 20 characters long. Please choose another.")

      :else
      (POST "/login"
            {:params          data
             :handler         handler
             :error-handler   error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))

(defn log-out
  []
  (POST "/logout"
        {:handler         handler
         :error-handler   error-handler
         :format          (ajax/json-request-format)
         :response-format (ajax/json-response-format {:keywords? true})}))