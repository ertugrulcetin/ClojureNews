(ns util.view
  (:require [goog.dom :as dom]))

(defonce main-container (dom/getElement "mainContainerId"))

(defonce error-container (dom/getElement "errorContainerId"))

(defn create-field-val-map
  [field-ids]
  (reduce #(assoc %1 (.-name (dom/getElement %2)) (.-value (dom/getElement %2))) {} field-ids))