(ns route.login
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.core :as r]
            [secretary.core]
            [view.login]
            [util.view]))

(defroute login "/login" []
          (r/render-component [view.login/component] util.view/main-container))

(defroute logout "/logout" []
          (controller.login/log-out))