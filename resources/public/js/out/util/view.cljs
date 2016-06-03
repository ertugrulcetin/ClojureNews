(ns util.view
  (:require [goog.dom :as dom]
            [reagent.core :as r]
            [view.user]))

(defonce main-container (dom/getElement "mainContainerId"))

(defonce message-container (dom/getElement "messageContainerId"))

(defn create-field-val-map
  [field-ids]
  (reduce #(assoc %1 (keyword (.-name (dom/getElement %2))) (.-value (dom/getElement %2))) {} field-ids))

(defn render-error-message
  [message]
  (r/render-component [(fn [] [:p {:style {:color "red"}} message])] util.view/message-container))

(defn render-update-successfully
  []
  (r/render-component [view.user/component-update] util.view/message-container)
  (js/setTimeout (fn [] (set! (.-innerText (dom/getElement "messageContainerId")) "")) 3000))

;;TODO will be changed!!! https.....!
(defn change-url
  [path]
  (set! window/location (str "http://" window/location.host path)))