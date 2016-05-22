(ns route.entry
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.core :as r]
            [secretary.core]
            [view.entry]
            [util.view]))

(defroute home-page "/" []
          (r/render-component [view.entry/component] util.view/main-container))
