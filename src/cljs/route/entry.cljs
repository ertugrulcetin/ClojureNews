(ns route.entry
  (:require-macros [secretary.core :refer [defroute]])
  (:require [secretary.core]
            [view.entry]
            [controller.entry]
            [reagent.core :as r]))

(defroute home-page "/" []
          (println "Denem")
          (controller.entry/home-page)
          (r/render-component [view.entry/component] util.view/main-container))
