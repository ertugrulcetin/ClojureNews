(ns view.login)


(defn component
  [log-in sign-up]
  [:table
   [:tbody

    [:tr
     [:td "username:"]
     [:td
      [:input {:id "loginUsernameId" :name "username" :type "text"}]]]
    [:tr
     [:td "password:"]
     [:td
      [:input {:id "loginPasswordId" :name "password" :type "password" :on-key-down (fn [e]
                                                                                      (if (= 13 (.-keyCode e))
                                                                                        (log-in ["loginUsernameId" "loginPasswordId"])))}]]]
    [:tr
     [:td
      [:button {:id "loginButtonId" :on-click (fn [_]
                                                (log-in ["loginUsernameId" "loginPasswordId"]))} "login"]]]

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
      [:input {:id "signUpPasswordId" :name "password" :type "password" :on-key-down (fn [e]
                                                                                       (if (= 13 (.-keyCode e))
                                                                                         (sign-up ["signUpUsernameId" "signUpPasswordId"])))}]]]
    [:tr
     [:td
      [:button {:id "signUpButtonId" :on-click (fn [_]
                                                 (sign-up ["signUpUsernameId" "signUpPasswordId"]))} "create account"]]]]])