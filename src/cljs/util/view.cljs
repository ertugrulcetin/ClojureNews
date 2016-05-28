(ns util.view
  (:require [goog.dom :as dom]
            [reagent.core :as r]))

(defonce main-container (dom/getElement "mainContainerId"))

(defonce error-container (dom/getElement "errorContainerId"))

(defn create-field-val-map
  [field-ids]
  (reduce #(assoc %1 (keyword (.-name (dom/getElement %2))) (.-value (dom/getElement %2))) {} field-ids))

(defn render-error-message
  [message]
  (r/render-component [(fn [] [:p {:style {:color "red"}} message])] util.view/error-container))
