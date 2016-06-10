(ns controller.submit
  (:require [ajax.core :as ajax :refer [GET POST PUT]]
            [cljc.validation :as validation]
            [reagent.core :as r]
            [util.view]
            [util.controller]
            [view.submit]))

(defn submit-page
  []
  (r/render-component [(fn []
                         (view.submit/component))] util.view/main-container))