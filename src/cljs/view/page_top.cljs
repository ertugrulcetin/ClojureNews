(ns view.page-top
  (:require [controller.login]))

;<a class="pagetopwhite" id="loginId" href="/#/login">login</a>
(defn comp-log-in
  []
  [:a.pagetopwhite {:id "loginId" :href "/#/login"} "login"])

(defn comp-username-log-out
  [username karma]
  [:div
   [:a.pagetopwhite {:href (str "/#/user/" username)} username]
   (str " (" karma ") | ")
   [:a {:href "#" :on-click (fn [_]
                              (controller.login/log-out))} "logout"]])
