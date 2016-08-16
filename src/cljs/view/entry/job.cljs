(ns view.entry.job)


(defn component-edit
  [job]
  [:table
   [:tbody
    [:tr
     [:td "title:"]
     [:td
      [:input {:id "titleId" :name "title" :type "text" :defaultValue (-> job :job-entry :title) :size "70"}]]]

    [:tr
     [:td "url:"]
     [:td
      [:input {:id "urlId" :name "url" :type "text" :defaultValue (-> job :job-entry :url) :size "70"}]]]

    [:tr
     [:td "country:"]
     [:td
      [:input {:id "countryId" :name "country" :type "text" :defaultValue (-> job :job-entry :country) :size "70"}]]]

    [:tr
     [:td "city:"]
     [:td
      [:input {:id "cityId" :name "city" :type "text" :defaultValue (-> job :job-entry :city) :size "70"}]]]

    [:tr
     [:td "remote?:"]
     [:td
      [:input {:id "remoteId" :name "remote" :type "checkbox" :defaultChecked (-> job :job-entry :remote?)}]]]

    [:tr
     [:td]
     [:td
      [:button {:id "jobEditButtonId"} "update"]]]]])

(defn component-delete
  [job]
  [:table {:border "0"}
   [:tbody

    (list
      [:tr {:class "athing"}

       [:td {:text-align "right" :vertical-align "top" :class "title"}
        [:span {:class "rank"}]]

       [:td {:vertical-align "top" :class "votelinks"}
        [:center

         (if (-> job :owner?)
           [:font {:color "#5fba7d"} "*"]
           [:a {:id "aa" :href "#"}
            [:div {:class "votearrow" :title "upvote"}]])]]

       [:td {:class "title"}
        [:a {:href (-> job :job-entry :url) :class "storylink"} (-> job :job-entry :title)]]]

      [:tr
       [:td {:colSpan "2"}]
       [:td {:class "subtext"}
        [:span {:id "span" :class "score"}
         (util.view/generate-upvote-status (-> job :job-entry :upvote))
         [:a {:href (str "/#!/user/" (-> job :job-entry :created-by))} (-> job :job-entry :created-by)]
         [:span {:class "age"} " | "
          [:a {:href (str "/#!/job/" (-> job :job-entry :_id))} (util.view/generate-age-status (-> job :job-entry :created-date))] " | "
          (when (-> job :owner?)
            (list [:a {:href (str "/#!/job/edit/" (-> job :job-entry :_id))} "edit"]
                  " | "
                  [:a {:href (str "/#!/job/delete/" (-> job :job-entry :_id))} "delete"]))]]]]

      [:tr {:style {:height "10px"}}]

      [:tr {:style {:height "10px"}}]

      [:tr
       [:td {:colSpan "2"}]
       [:td
        "Do you want this to be deleted?"
        [:br]
        [:br]
        [:button {:id "buttonDeleteJobYesId"} "yes"]
        "  "
        [:button {:id "buttonDeleteJobNoId"} "no"]]])]])