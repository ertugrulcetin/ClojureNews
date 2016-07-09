(ns cljs.main
  (:require-macros [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [secretary.core :as secretary]
            [reagent.core :as r]
            [util.view]
            [route.entry]
            [route.comment-entry]
            [route.login]
            [route.user]
            [route.submit]
            [route.forgot-password]
            [route.footer-links])
  (:import goog.History
           goog.History.EventType))


(secretary/set-config! :prefix "#")

(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(do
                                             (let [token (.-token %)]

                                               ;;removes error message every route change
                                               (r/render-component [(fn [])] util.view/message-container)
                                               (secretary/dispatch! token)
                                               (util.view/select-header-button token)
                                               (util.view/change-header-links-page-titles token))))
  (doto h
    (.setEnabled true)))
;(.setToken (str js/window.location.pathname js/window.location.search))
