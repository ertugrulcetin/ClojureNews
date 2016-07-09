(ns view.forgot-password)

(defn component
  []
  [:table
   [:tbody

    [:tr
     [:td]]

    [:tr
     [:td "username:"]
     [:td
      [:input {:id "forgotPassUsernameId" :type "text"}]]]

    [:tr
     [:td
      [:button {:id "forgotPassUsernameButtonId" :on-click (fn [_] (js/alert "Ertuss!!"))} "Send reset mail"]]]]])