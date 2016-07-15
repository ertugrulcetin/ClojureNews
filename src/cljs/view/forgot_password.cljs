(ns view.forgot-password)

(defn component
  [forgot-password]
  [:table
   [:tbody

    [:tr
     [:td]]

    [:tr
     [:td "username:"]
     [:td
      [:input {:id "forgotPassUsernameId" :name "username" :type "text"}]]]

    [:tr
     [:td
      [:button {:id "forgotPassUsernameButtonId" :on-click (fn [_]
                                                             (forgot-password ["forgotPassUsernameId"]))} "Send reset mail"]]]]])

(defn component-loading
  []
  [:p  "Please hold..."])