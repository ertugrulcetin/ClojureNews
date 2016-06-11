(ns controller.submit
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [cljc.validation :as validation]
            [reagent.core :as r]
            [util.view]
            [util.controller]
            [view.submit]))

(declare submit)

(defn submit-page
  []
  (r/render-component [(fn []
                         (view.submit/component-entry submit))] util.view/main-container))

(defn submit
  []
  (.log js/console "Geldiii....!!!??##"))