(ns route.submit
  (:require-macros [secretary.core :refer [defroute]])
  (:require [controller.submit :as controller]
            [secretary.core]))

(defroute submit "/submit" []
          (controller/submit-page))