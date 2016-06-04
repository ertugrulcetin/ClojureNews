(ns view.changepassword)

(defn component
  [username change-password]

  [:table
   [:tbody

    [:tr
     [:td "current password:"]
     [:td
      [:input {:id "currentPasswordId" :name "current-password" :type "password"}]]]


    [:tr
     [:td
      [:br]]]

    [:tr
     [:td "new password:"]
     [:td
      [:input {:id "newPasswordId" :name "new-password" :type "password"}]]]

    [:tr
     [:td "re-new password:"]
     [:td
      [:input {:id "reNewPasswordId" :name "re-new-password" :type "password"}]]]

    [:tr
     [:td
      [:button {:id "buttonUpdateId" :on-click (fn [_]
                                                 (change-password username ["currentPasswordId" "newPasswordId" "reNewPasswordId"]))} "update"]]
     [:td]]]])
