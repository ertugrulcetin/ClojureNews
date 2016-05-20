(ns controller.login
  (:require [util.view]
            [ajax.core :as ajax :refer [GET POST PUT]]))

(enable-console-print!)

(defn handler [response]
  (.log js/console (str response )))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn sign-up
  [field-ids]
  (PUT "/signup"
       {:params          (util.view/create-field-val-map field-ids)
        :handler         handler
        :error-handler   error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))