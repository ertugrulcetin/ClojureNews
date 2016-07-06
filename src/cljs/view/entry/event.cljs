(ns view.entry.event
  (:require [cljs-time.core :as cljs-time]
            [util.view]))

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
      [:input {:id "startingDateDayId" :name "starting-date-day" :type "text" :defaultValue (cljs-time/in-days (-> event :event-entry :starting-date-day)) :size "2"}]
      [:input {:id "startingDateMonthId" :name "starting-date-month" :type "text" :defaultValue (cljs-time/in-months (-> event :event-entry :starting-date-month)) :size "2"}]
      [:input {:id "startingDateYearId" :name "starting-date-year" :type "text" :defaultValue (cljs-time/in-years (-> event :event-entry :starting-date-year)) :size "4"}]]]

    [:tr
     [:td]
     [:td
      [:button {:id "eventEditButtonId"} "update"]]]]])
