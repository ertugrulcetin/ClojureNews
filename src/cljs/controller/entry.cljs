(ns controller.entry
  (:require [util.view]
            [goog.dom :as dom]
            [ajax.core :as ajax :refer [GET POST PUT]]
            [reagent.core :as r]
            [view.page-top]))


(enable-console-print!)

(defn handler [response]

  (if-let [user (:user-obj response)]
    (r/render-component [(fn []
                           (view.page-top/comp-username-log-out (:username user) (:karma user)))] (dom/getElement "pageTopId"))
    (r/render-component [view.page-top/comp-log-in] (dom/getElement "pageTopId"))))

(defn error-handler [{:keys [response] :as m}]
  (util.view/render-error-message (:error response)))

(defn home-page
  []
  (GET "/entry"
       {:handler         handler
        :error-handler   error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))