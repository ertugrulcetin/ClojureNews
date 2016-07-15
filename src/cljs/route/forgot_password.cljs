(ns route.forgot-password
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.core :as r]
            [secretary.core]
            [view.forgot-password]
            [util.view]
            [controller.forgot-password :as controller]))

(defroute forgot-password "/forgotpassword" []
          (controller/forgot-password-page))