(ns view.login)


(defn component
  []
  [:table
   [:tbody
    [:tr
     [:td {:id "errorTextId"}]]

    [:tr
     [:td "username:"]
     [:td
      [:input {:id "loginUsernameId" :type "text"}]]]
    [:tr
     [:td "password:"]
     [:td
      [:input {:id "loginPasswordId" :type "password"}]]]
    [:tr
     [:td
      [:button {:id "loginButtonId" :on-click (fn [_] (js/alert "Ertuss!!"))} "login"]]]

    [:tr
     [:td]
     [:td
      [:a {:href "/#/forgotpassword" :style {:font-size "12" :text-decoration "underline"}} "Forgot Your Password?"]]]

    [:tr
     [:td
      [:br]]]

    [:tr
     [:td "username:"]
     [:td
      [:input {:id "signUpUsernameId" :type "text"}]]]
    [:tr
     [:td "password:"]
     [:td
      [:input {:id "signUpPasswordId" :type "password"}]]]
    [:tr
     [:td
      [:button {:id "signUpButtonId" :on-click (fn [_] (js/alert "Ertuss!!"))} "create account"]]]]])