(ns view.user
  [:require [cljc.string-util :as string-util]])

(defn component
  [user user-update]
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
        [:textarea {:id "aboutId" :name "about" :cols "60" :rows "6" :wrap "virtual" :defaultValue (apply str (interpose "\n\n" (string-util/new-line-tokens (:about user))))}]
        [:font {:size "-2"}
         [:a {:href "formatdoc" :tabindex "-1"}
          [:font {:color "#afafaf"} "help"]]] "          "]]
      [:tr
       [:td {:style {:vertical-align "top"}} "about:"]
       [:td (for [i (string-util/new-line-tokens (:about user))]
              [:p i])]])

    (if (:auth? user)
      [:tr
       [:td {:style {:vertical-align "top"}} "email:"]
       [:td
        [:input {:id "emailId" :name "email" :type "text" :size "40" :defaultValue (:email user)}]]]
      [:tr
       [:td {:style {:vertical-align "top"}} "email:"]
       [:td
        [:a {:href (str "mailto:" (:email user))} (:email user)]]])

    (if (:auth? user)
      [:tr
       [:td {:style {:vertical-align "top"}} "website:"]
       [:td
        [:input {:id "websiteId" :name "website" :type "text" :size "40" :defaultValue (:website user) :placeholder "ex: https://www.google.com"}]]]
      [:tr
       [:td {:style {:vertical-align "top"}} "website:"]
       [:td
        [:a {:href (:website user) :target "_blank"} (:website user)]]])

    (if (:auth? user)
      [:tr
       [:td {:style {:vertical-align "top"}} "github:"]
       [:td
        [:input {:id "githubId" :name "github" :type "text" :size "40" :defaultValue (:github user) :placeholder "Enter username. ex: ertugrulcetin"}]]]
      [:tr
       [:td {:style {:vertical-align "top"}} "github:"]
       [:td
        [:a {:href (str "https://github.com/" (:github user)) :target "_blank"} (:github user)]]])

    (if (:auth? user)
      [:tr
       [:td {:style {:vertical-align "top"}} "twitter:"]
       [:td
        [:input {:id "twitterId" :name "twitter" :type "text" :size "40" :defaultValue (:twitter user) :placeholder "Enter username. ex: ertuctn"}]]]
      [:tr
       [:td {:style {:vertical-align "top"}} "twitter:"]
       [:td
        [:a {:href (str "https://twitter.com/" (:twitter user)) :target "_blank"} (:twitter user)]]])

    (if (:auth? user)
      [:tr
       [:td "show email:"]
       [:td
        [:select {:id "showEmailId" :name "show-email?"}
         [:option (if (:show-email? user) {:selected "selected"}) "yes"]
         [:option (if-not (:show-email? user) {:selected "selected"}) "no"]]]])

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
        [:input {:type "submit" :value "update" :on-click (fn [_]
                                                            (user-update (:username user) ["aboutId" "emailId" "websiteId" "githubId" "twitterId" "showEmailId"]))}]]])]])

(defn component-update
  []
  [:p {:style {:color "green"}} "Your profile has been updated successfully"])