(ns view.login
  (:require [goog.dom :as dom]
            [controller.login]))


(defn component
  []
  [:table
   [:tbody

    [:tr
     [:td "username:"]
     [:td
      [:input {:id "loginUsernameId" :name "username" :type "text"}]]]
    [:tr
     [:td "password:"]
     [:td
      [:input {:id "loginPasswordId" :name "password" :type "password"}]]]
    [:tr
     [:td
      [:button {:id "loginButtonId" :on-click (fn [_] (js/alert "Ertuss!!"))} "login"]]]

    [:tr
     [:td]
     [:td
      [:a {:href "/#/forgotpassword" :style {:font-size 12 :text-decoration "underline"}} "Forgot Your Password?"]]]

    [:tr
     [:td
      [:br]]]

    [:tr
     [:td "username:"]
     [:td
      [:input {:id "signUpUsernameId" :name "username" :type "text"}]]]
    [:tr
     [:td "password:"]
     [:td
      [:input {:id "signUpPasswordId" :name "password" :type "password"}]]]
    [:tr
     [:td
      [:button {:id "signUpButtonId" :on-click (fn [_]
                                                 (controller.login/sign-up ["signUpUsernameId" "signUpPasswordId"]))} "create account"]]]]])