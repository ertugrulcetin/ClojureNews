(ns route.login
  (:require-macros [secretary.core :refer [defroute]])
  (:require [controller.login :as controller]
            [secretary.core]))

(defroute login "/login" []
          (controller/log-in-page))

(defroute logout "/logout" []
          (controller/log-out))