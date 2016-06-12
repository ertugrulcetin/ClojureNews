(ns view.entry)

(def counter (atom 0))

(defn component
  [entries]
  [:table {:class "itemlist" :border "0" :cellpadding "0" :cellspacing "0"}
   [:tbody

    (for [entry (repeat 30 {:url        "www.google.com.tr"
                            :created-by "ertu"
                            :upvote     4
                            :title      "Canım iroş!!"
                            :pure-url   "sex.gov.tr"})]

      [:div

       [:tr {:class "athing"}

        [:td {:class "title" :style {:vertical-align "top" :align "right"}}
         [:span {:class "rank"} (str (swap! counter inc) ".")]]

        [:td {:class "votelinks" :style {:vertical-align "top"}}
         [:center
          [:a {:id "up_1" :class "myClickableThingy" :on-click (fn [_] (println "aa"))}
           [:div {:title "upvote" :class "votearrow"}]]]]

        [:td {:class "title"}
         [:span {:class "deadmark"}]
         [:a {:href (:url entry)} (:title entry)]
         [:span {:class "sitebit comhead"}
          " (" [:a {:href (:pure-url entry)}
                [:span {:class "sitestr"}
                 (:pure-url entry)]] ")"]]]

       [:tr
        [:td {:colSpan "2"}]
        [:td {:class "subtext"}
         [:span {:id "span" :class "score"}
          (str (:upvote entry) " points by ")
          [:a {:href (str "/#/user/" (:created-by entry))} (:created-by entry)]
          [:span {:class "age"} " | 1 hour ago | discuss"]]]]

       ])]])

