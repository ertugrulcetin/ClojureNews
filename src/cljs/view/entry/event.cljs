(ns view.entry.event
  (:require [util.view]))

(defn component-edit
  [event]
  [:table
   [:tbody

    [:tr
     [:td "title:"]
     [:td
      [:input {:id "titleId" :name "title" :type "text" :defaultValue (-> event :event-entry :title) :size "70"}]]]

    [:tr
     [:td "url:"]
     [:td
      [:input {:id "urlId" :name "url" :type "text" :defaultValue (-> event :event-entry :url) :size "70"}]]]

    [:tr
     [:td "country:"]
     [:td
      [:input {:id "countryId" :name "country" :type "text" :defaultValue (-> event :event-entry :country) :size "70"}]]]

    [:tr
     [:td "city:"]
     [:td
      [:input {:id "cityId" :name "city" :type "text" :defaultValue (-> event :event-entry :city) :size "70"}]]]

    [:tr
     [:td "starting date:"]
     [:td
      [:input {:id "startingDateDayId" :name "starting-date-day" :type "text" :defaultValue (util.view/get-day-of-date (-> event :event-entry :starting-date)) :size "2"}]
      [:input {:id "startingDateMonthId" :name "starting-date-month" :type "text" :defaultValue (util.view/get-month-of-date (-> event :event-entry :starting-date)) :size "2"}]
      [:input {:id "startingDateYearId" :name "starting-date-year" :type "text" :defaultValue (util.view/get-year-of-date (-> event :event-entry :starting-date)) :size "4"}]]]

    [:tr
     [:td]
     [:td
      [:button {:id "eventEditButtonId"} "update"]]]]])

(defn component-delete
  [event]
  [:table {:border "0"}
   [:tbody

    (list
      [:tr {:class "athing"}

       [:td {:text-align "right" :vertical-align "top" :class "title"}
        [:span {:class "rank"}]]

       [:td {:vertical-align "top" :class "votelinks"}
        [:center

         (if (-> event :owner?)
           [:font {:color "#5fba7d"} "*"]
           [:a {:id "aa" :href "#"}
            [:div {:class "votearrow" :title "upvote"}]])]]

       [:td {:class "title"}
        [:a {:href (-> event :event-entry :url) :class "storylink"} (-> event :event-entry :title)]]]

      [:tr
       [:td {:colSpan "2"}]
       [:td {:class "subtext"}
        [:span {:id "span" :class "score"}
         (util.view/generate-upvote-status (-> event :event-entry :upvote))
         [:a {:href (str "/#!/user/" (-> event :event-entry :created-by))} (-> event :event-entry :created-by)]
         [:span {:class "age"} " | "
          [:a {:href (str "/#!/event/" (-> event :event-entry :_id))} (util.view/generate-age-status (-> event :event-entry :created-date))] " | "
          (when (-> event :owner?)
            (list [:a {:href (str "/#!/event/edit/" (-> event :event-entry :_id))} "edit"]
                  " | "
                  [:a {:href (str "/#!/event/delete/" (-> event :event-entry :_id))} "delete"]))]]]]

      [:tr {:style {:height "10px"}}]

      [:tr {:style {:height "10px"}}]

      [:tr
       [:td {:colSpan "2"}]
       [:td
        "Do you want this to be deleted?"
        [:br]
        [:br]
        [:button {:id "buttonDeleteEventYesId"} "yes"]
        "  "
        [:button {:id "buttonDeleteEventNoId"} "no"]]])]])