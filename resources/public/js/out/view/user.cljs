(ns view.user)


(defn component
  []
  [:table
   [:tbody

    [:tr
     [:td {:style {:vertical-align "top"}} "user:"]
     [:td "ertus"]]

    [:tr
     [:td {:style {:vertical-align "top"}} "created:"]
     [:td "25 days ago"]]

    [:tr
     [:td {:style {:vertical-align "top"}} "karma:"]
     [:td "12"]]

    [:tr
     [:td {:style {:vertical-align "top"}} "about:"]
     [:td
      [:textarea {:cols "60" :rows "6" :wrap "virtual" :name "about" :defaultValue ""}]
      [:font {:size "-2"}
       [:a {:href "formatdoc" :tabindex "-1"}
        [:font {:color "#afafaf"} "help"]]] "          "]]

    [:tr
     [:td {:style {:vertical-align "top"}} "email:"]
     [:td
      [:input {:type "text" :value "info@bebe.com" :size "40"}]]]

    [:tr
     [:td {:style {:vertical-align "top"}} "website:"]
     [:td
      [:input {:type "text" :value "ertus.com" :size "40"}]]]

    [:tr
     [:td {:style {:vertical-align "top"}} "github:"]
     [:td
      [:input {:type "text" :value "@ertu.ctn" :size "40"}]]]

    [:tr
     [:td {:style {:vertical-align "top"}} "stackoverflow:"]
     [:td
      [:input {:type "text" :value "ertu413" :size "40"}]]]

    [:tr
     [:td]
     [:td
      [:a {:href "/#/changepassword"}
       [:u "change password"]]]]

    [:tr
     [:td]
     [:td
      [:a {:href "/#/savedstories"}
       [:u "saved stories"]]
      (str ", ")
      [:a {:href "/#/savedcomments"}
       [:u "saved comments"]]
      ]]

    [:tr
     [:td]
     [:td
      [:a {:href "/#/submissions"}
       [:u "submissions"]]]]

    [:tr
     [:td]
     [:td
      [:a {:href "/#/comments"}
       [:u "comments"]]]]
    
    [:tr 
     [:td 
      [:input {:type "submit" :value "update"}]]]
    ]])