(ns util.view
  (:require [goog.dom :as dom]
            [reagent.core :as r]
            [secretary.core :as secretary]))

(defonce main-container (dom/getElement "mainContainerId"))

(defonce error-container (dom/getElement "errorContainerId"))

(defn create-field-val-map
  [field-ids]
  (reduce #(assoc %1 (keyword (.-name (dom/getElement %2))) (.-value (dom/getElement %2))) {} field-ids))

(defn render-error-message
  [message]
  (r/render-component [(fn [] [:p {:style {:color "red"}} message])] util.view/error-container))

(defn dispatch-and-change-url
  [route]
  (let [path (str "/" route)]
    (set! (.-hash window/location) path)
    (secretary/dispatch! path)))