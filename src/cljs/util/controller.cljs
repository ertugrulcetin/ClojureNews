(ns util.controller
  [:require [util.view]])

(defn error-handler
  [{:keys [response] :as m}]
  (if (or (= (:status m) 401) (= (:status m) 403))
    (util.view/change-url "/#/login")
    (util.view/render-error-message (:error response))))