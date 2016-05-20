(ns cljs.main
  (:require-macros [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [secretary.core :as secretary]
            [reagent.core :as r]
            [route.login]
            [route.forgot-password])
  (:import goog.History
           goog.History.EventType))


(secretary/set-config! :prefix "#")


(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h
    (.setEnabled true)
    ;(.setToken (str js/window.location.pathname js/window.location.search))
    ))