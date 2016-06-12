(ns route.entry
  (:require-macros [secretary.core :refer [defroute]])
  (:require [secretary.core]
            [view.entry]
            [controller.entry]
            [reagent.core :as r]))

(defroute home-page "/" []
          (controller.entry/home-page))
