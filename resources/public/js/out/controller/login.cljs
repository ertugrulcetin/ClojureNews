(ns controller.login
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [cljc.validation :as validation]
            [reagent.core :as r]
            [util.view]
            [util.controller]
            [view.login]))

(enable-console-print!)

(declare log-in
         sign-up)

(defn handler
  [_]
  (util.view/change-url "/"))

(defn log-in-page
  []
  (util.view/change-page-title "Login")
  (r/render-component [(fn []
                         (view.login/component log-in sign-up))] util.view/main-container))

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
             :error-handler   util.controller/error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))

(defn log-out
  []
  (POST "/logout"
        {:handler         handler
         :error-handler   util.controller/error-handler
         :format          (ajax/json-request-format)
         :response-format (ajax/json-response-format {:keywords? true})}))

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
            :error-handler   util.controller/error-handler
            :format          (ajax/json-request-format)
            :response-format (ajax/json-response-format {:keywords? true})}))))