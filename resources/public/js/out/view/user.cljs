(ns view.user)

(defn component
  [user]
  [:table
   [:tbody

    [:tr
     [:td {:style {:vertical-align "top"}} "user:"]
     [:td (:username user)]]

    [:tr
     [:td {:style {:vertical-align "top"}} "created:"]
     [:td (if (< (:created user) 2)
            (str (:created user) " day ago")
            (str (:created user) " days ago"))]]

    [:tr
     [:td {:style {:vertical-align "top"}} "karma:"]
     [:td (:karma user)]]

    (if (:auth? user)
      [:tr
       [:td {:style {:vertical-align "top"}} "about:"]
       [:td
        [:textarea {:cols "60" :rows "6" :wrap "virtual" :name "about" :defaultValue (:about user)}]
        [:font {:size "-2"}
         [:a {:href "formatdoc" :tabindex "-1"}
          [:font {:color "#afafaf"} "help"]]] "          "]]
      [:tr
       [:td {:style {:vertical-align "top"}} "about:"]
       [:td (:about user)]])

    (if (:auth? user)
      [:tr
       [:td {:style {:vertical-align "top"}} "email:"]
       [:td
        [:input {:type "text" :size "40" :defaultValue (:email user)}]]]
      [:tr
       [:td {:style {:vertical-align "top"}} "email:"]
       [:td
        [:a {:href (str "mailto:" (:email user))} (:email user)]]])

    (if (:auth? user)
      [:tr
       [:td {:style {:vertical-align "top"}} "website:"]
       [:td
        [:input {:type "text" :size "40" :defaultValue (:website user)}]]]
      [:tr
       [:td {:style {:vertical-align "top"}} "website:"]
       [:td
        [:a {:href (:website user) :target "_blank"} (:website user)]]])

    (if (:auth? user)
      [:tr
       [:td {:style {:vertical-align "top"}} "github:"]
       [:td
        [:input {:type "text" :size "40" :defaultValue (:github user) :placeholder "ex: ertugrulcetin"}]]]
      [:tr
       [:td {:style {:vertical-align "top"}} "github:"]
       [:td
        [:a {:href (str "https://github.com/" (:github user)) :target "_blank"} (:github user)]]])

    (if (:auth? user)
      [:tr
       [:td {:style {:vertical-align "top"}} "twitter:"]
       [:td
        [:input {:type "text" :size "40" :defaultValue (:twitter user) :placeholder "ex: ertuctn"}]]]
      [:tr
       [:td {:style {:vertical-align "top"}} "twitter:"]
       [:td
        [:a {:href (str "https://twitter.com/" (:twitter user)) :target "_blank"} (:twitter user)]]])

    (if (:auth? user)
      [:tr
       [:td "show email:"]
       [:td
        [:select {:id "selectShowEmailId"}
         [:option "yes"]
         [:option "no"]]]])

    (if (:auth? user)
      [:tr
       [:td]
       [:td
        [:a {:href "/#/changepassword"}
         [:u "change password"]]]])

    (if (:auth? user)
      [:tr
       [:td]
       [:td
        [:a {:href "/#/savedstories"}
         [:u "saved stories"]]
        (str ", ")
        [:a {:href "/#/savedcomments"}
         [:u "saved comments"]]]])

    [:tr
     [:td]
     [:td
      [:a {:href (str "/#/user/" (:username user) "/submissions")}
       [:u "submissions"]]]]

    [:tr
     [:td]
     [:td
      [:a {:href (str "/#/user/" (:username user) "/comments")}
       [:u "comments"]]]]

    (if (:auth? user)
      [:tr
       [:td
        [:input {:type "submit" :value "update"}]]])]])