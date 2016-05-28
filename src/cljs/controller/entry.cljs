(ns controller.entry
  (:require [util.view]
            [ajax.core :as ajax :refer [GET POST PUT]]))


(enable-console-print!)

(defn handler [response]
  (fn [_]))

(defn error-handler [{:keys [response] :as m}]
  (util.view/render-error-message (:error response)))

(defn home-page
  []
  (GET "/entry"
       {:handler         handler
        :error-handler   error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))