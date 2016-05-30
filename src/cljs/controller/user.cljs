(ns controller.user
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [secretary.core :as secretary]
            [cljc.validation :as validation]
            [util.view]
            [view.user]
            [reagent.core :as r]))

(enable-console-print!)
(defn handler [response]
  (r/render-component [(fn []
                         (view.user/component response))] util.view/main-container))

(defn error-handler [{:keys [response]}]
  (util.view/render-error-message (:error response)))


(defn user
  [username]
  (GET (str "/user/" username)
       {:handler         handler
        :error-handler   error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))