(ns route.user
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.core :as r]
            [secretary.core]
            [view.user]
            [view.changepassword]
            [util.view]
            [controller.user :as controller]))

(defroute user "/user/:username" [username]
          (controller/user username))

(defroute user "/user/:username/changepassword" [username]
          (controller/change-password-page username))