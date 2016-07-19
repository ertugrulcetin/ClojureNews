(ns cljs.main
  (:require-macros [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [secretary.core :as secretary]
            [reagent.core :as r]
            [util.view]
            [view.no-route]
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

;;This has to be last in the routing order!!
(defroute no-route "*" []
          (r/render-component [view.no-route/component-no-route] util.view/main-container))

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
