(ns controller.user
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [cljc.validation :as validation]
            [cljc.string-util :as string-util]
            [goog.dom :as dom]
            [util.view]
            [view.user]
            [reagent.core :as r]
            [clojure.string :as str]))

(enable-console-print!)

;;TODO 401 403......!!! send to home page log in etc.
(defn error-handler [{:keys [response] :as m}]
  (println m)
  (util.view/render-error-message (:error response)))

(defn user
  [username]
  (GET (str "/user/" username)
       {:handler         (fn [response]
                           (r/render-component [(fn []
                                                  (view.user/component response))] util.view/main-container))
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
            {:params          (string-util/trim-map-values (update-in data [:about] #(apply str (interpose "\n\n" (filter (fn [x]
                                                                                                                          (not (str/blank? x))) (str/split (or % "") #"\n"))))))
             :handler         (fn [_]
                                (r/render-component [view.user/component-update] util.view/error-container)
                                (js/setTimeout (fn [] (set! (.-innerText (dom/getElement "errorContainerId")) "")) 3000))
             :error-handler   error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))