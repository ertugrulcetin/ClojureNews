(ns util.controller
  [:require [util.view]])

(defn error-handler
  [{:keys [status response]}]
  (if (or (= status 401) (= status 403))
    (util.view/change-url "/#/login")
    (util.view/render-error-message (:error response))))