(ns render.error
  (:require [reagent.core :as r]
            [secretary.core]
            [view.login]
            [util.view]))

(defn error [message]
  [:p message])

(r/render-component [view.login/component] util.view/error-container)