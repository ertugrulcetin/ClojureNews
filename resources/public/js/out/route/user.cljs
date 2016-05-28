(ns route.user
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.core :as r]
            [secretary.core]
            [view.user]
            [util.view]))

(defroute user "/user/:username" [username]
          (r/render-component [(fn []
                                 (view.user/component))] util.view/main-container))
