(ns controller.user
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [cljc.validation :as validation]
            [cljc.string-util :as string-util]
            [util.view]
            [view.user]
            [view.changepassword]
            [util.controller]
            [reagent.core :as r]))

(enable-console-print!)

(declare user-update
         change-password)

(defn user
  [username]
  (GET (str "/user/" username)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.user/component response user-update))] util.view/main-container))
        :error-handler   util.controller/error-handler
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
            {:params          (string-util/trim-map-values (update-in data [:about] #(apply str (interpose "\n" (string-util/new-line-tokens %)))))
             :handler         (fn [_]
                                (util.view/render-update-successfully))
             :error-handler   util.controller/error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))

(defn change-password-page
  [username]
  (r/render-component [(fn []
                         (view.changepassword/component username change-password))] util.view/main-container))

(defn change-password
  [username field-ids]

  (let [data (util.view/create-field-val-map field-ids)]

    (cond
      (not (validation/password? (:current-password data)))
      (util.view/render-error-message "Passwords should be between 8 and 20 characters long. Please choose another.")

      (not (validation/password? (:new-password data)))
      (util.view/render-error-message "Passwords should be between 8 and 20 characters long. Please choose another.")

      (not (validation/password? (:re-new-password data)))
      (util.view/render-error-message "Passwords should be between 8 and 20 characters long. Please choose another.")

      (not= (:new-password data) (:re-new-password data))
      (util.view/render-error-message "New passwords don't match.")

      (= (:current-password data) (:new-password data))
      (util.view/render-error-message "New password can not be the old password.")

      :else
      (POST (str "/user/" username "/changepassword")
            {:params          data
             :handler         (fn [_]
                                (util.view/change-url "/"))
             :error-handler   util.controller/error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))