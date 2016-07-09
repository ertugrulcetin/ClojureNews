(ns route.footer-links
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.core :as r]
            [secretary.core]
            [view.footer-links]
            [util.view]))

(defroute formatting "/formatting" []
          (util.view/change-page-title "Formatting Options")
          (r/render-component [view.footer-links/component-formatting] util.view/main-container))

(defroute guidelines "/guidelines" []
          (util.view/change-page-title "Guidelines")
          (r/render-component [view.footer-links/component-guidelines] util.view/main-container))

(defroute faq "/faq" []
          (util.view/change-page-title "FAQ")
          (r/render-component [view.footer-links/component-faq] util.view/main-container))

