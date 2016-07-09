(ns view.list.event
  (:require [util.view]))

(declare get-month-name
         event-owner?)

(defn component-event
  [events page]


  [:table {:class "itemlist" :border "0" :cellPadding "0" :cellSpacing "0"}
   [:tbody

    (let [page-as-int (.parseInt js/window page)]
      (list
        (for [event (-> events :event-entry)]
          (list
            [:tr {:class "athing"}

             [:td {:class "title" :style {:vertical-align "top" :text-align "right"}}
              [:span {:class "rank"}]]

             [:td {:class "votelinks" :style {:vertical-align "top"}}
              (cond
                (event-owner? event events)
                [:center
                 [:font {:color "#5fba7d"} "*"]
                 [:br]
                 [:img {:src "/img/s.gif", :height "1", :width "14"}]]

                :else
                [:center
                 [:img {:src "/img/s.gif", :height "1", :width "14"}]])]

             [:td {:class "title"}
              [:span {:class "deadmark"}]
              [:a {:href (:url event) :target "_blank" :class "storylink" :rel "nofollow"} (:title event)]
              [:span {:class "sitebit comhead"}
               (str " ("
                    (:city event)
                    ", "
                    (:country event)
                    " || "
                    (get-month-name (util.view/get-month-of-date (:starting-date event)))
                    " "
                    (util.view/get-day-of-date (:starting-date event))
                    ", "
                    (util.view/get-year-of-date (:starting-date event))
                    ")")]]]

            [:tr
             [:td {:colSpan "2"}]
             [:td {:class "subtext"}
              [:span {:class "age"}
               (util.view/generate-age-status (:created-date event))
               (when (event-owner? event events)
                 (list " | "
                       [:a {:href (str "/#/event/edit/" (:_id event))} "edit"]
                       " | "
                       [:a {:href (str "/#/event/delete/" (:_id event))} "delete"]))]]]

            [:tr {:class "spacer" :style {:height "7"}}]))

        [:tr {:class "spacer" :style {:height "10"}}]

        (when (:more? events)
          [:tr
           [:td {:colSpan "2"}]
           [:td {:class "title"}
            [:a {:href (str "/#/event/p/" (+ page-as-int 1)) :class "morelink" :rel "nofollow"} "More"]]])))]])

(defn get-month-name
  [month]
  (case (js/parseInt month)
    1 "January"
    2 "February"
    3 "March"
    4 "April"
    5 "May"
    6 "June"
    7 "July"
    8 "August"
    9 "September"
    10 "October"
    11 "November"
    "December"))

(defn event-owner?
  [event events]
  (util.view/in? (:_id event) (-> events :event-own-entries)))