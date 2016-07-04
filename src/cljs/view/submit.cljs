(ns view.submit
  (:require [reagent.core :as r]))

(declare render
         change-component
         number-input-checker)

(defn component-story
  [submit]
  [:table
   [:tbody

    [:tr
     [:td "  type:"]
     [:td
      [:select {:id "submitTypeId" :name "type" :on-change #(change-component submit % "story")}
       [:option {:selected "selected"} "story"]
       [:option "ask"]
       [:option "job"]
       [:option "event"]]]]

    [:tr
     [:td
      [:br]]]

    [:tr
     [:td "title:"]
     [:td
      [:input {:id "titleId" :name "title" :type "text" :size "50"}]]]

    [:tr
     [:td "url:"]
     [:td
      [:input {:id "urlId" :name "url" :type "text" :placeholder "Ex: https://www.google.com" :size "50"}]]]

    [:tr
     [:td]
     [:td
      [:button {:id "submitId" :on-click (fn [_]
                                           (submit ["submitTypeId" "titleId" "urlId"]))} "submit"]]]]])

(defn component-ask
  [submit]
  [:table
   [:tbody

    [:tr
     [:td "  type:"]
     [:td
      [:select {:id "submitTypeId" :name "type" :on-change #(change-component submit % "ask")}
       [:option "story"]
       [:option {:selected "selected"} "ask"]
       [:option "job"]
       [:option "event"]]]]

    [:tr
     [:td
      [:br]]]

    [:tr
     [:td "title:"]
     [:td
      [:input {:id "titleId" :name "title" :type "text" :size "50"}]]]


    [:tr
     [:td {:style {:vertical-align "top"}} "text:"]
     [:td
      [:textarea {:id "textId" :name "text" :cols "60" :rows "6" :wrap "virtual"}]
      [:font {:size "-2"}
       [:a {:href "formatdoc" :tabindex "-1"}
        [:font {:color "#afafaf"}]]] "          "]]

    [:tr
     [:td]
     [:td
      [:button {:id "submitId" :on-click (fn [_]
                                           (submit ["submitTypeId" "titleId" "textId"]))} "submit"]]]]])

(defn component-job
  [submit]
  [:table
   [:tbody

    [:tr
     [:td "  type:"]
     [:td
      [:select {:id "submitTypeId" :name "type" :on-change #(change-component submit % "job")}
       [:option "story"]
       [:option "ask"]
       [:option {:selected "selected"} "job"]
       [:option "event"]]]]

    [:tr
     [:td
      [:br]]]

    [:tr
     [:td "title:"]
     [:td
      [:input {:id "titleId" :name "title" :type "text" :placeholder "Ex: [Company Name] Is Hiring a Clojure Software Engineer" :size "70"}]]]

    [:tr
     [:td "url:"]
     [:td
      [:input {:id "urlId" :name "url" :type "text" :placeholder "Ex: http://cognitect.com/careers" :size "70"}]]]

    [:tr
     [:td "country:"]
     [:td
      [:input {:id "countryId" :name "country" :type "text" :placeholder "Ex: USA" :size "70"}]]]

    [:tr
     [:td "city:"]
     [:td
      [:input {:id "cityId" :name "city" :type "text" :placeholder "Ex: New York" :size "70"}]]]

    [:tr
     [:td "remote?:"]
     [:td
      [:input {:id "remoteId" :name "remote" :type "checkbox"}]]]

    [:tr
     [:td]
     [:td
      [:button {:id "submitId" :on-click (fn [_]
                                           (submit ["submitTypeId" "titleId" "urlId" "countryId" "cityId" "remoteId"]))} "submit"]]]]])

(defn component-event
  [submit]
  [:table
   [:tbody

    [:tr
     [:td "  type:"]
     [:td
      [:select {:id "submitTypeId" :name "type" :on-change #(change-component submit % "event")}
       [:option "story"]
       [:option "ask"]
       [:option "job"]
       [:option {:selected "selected"} "event"]]]]

    [:tr
     [:td
      [:br]]]

    [:tr
     [:td "title:"]
     [:td
      [:input {:id "titleId" :name "title" :type "text" :placeholder "Ex: ClojureBridge: Free, beginner-friendly Clojure programming" :size "70"}]]]

    [:tr
     [:td "url:"]
     [:td
      [:input {:id "urlId" :name "url" :type "text" :placeholder "Ex: http://www.clojurebridge.org/#events" :size "70"}]]]

    [:tr
     [:td "country:"]
     [:td
      [:input {:id "countryId" :name "country" :type "text" :placeholder "Ex: USA" :size "70"}]]]

    [:tr
     [:td "city:"]
     [:td
      [:input {:id "cityId" :name "city" :type "text" :placeholder "Ex: New York" :size "70"}]]]

    [:tr
     [:td "starting date:"]
     [:td
      [:input {:id "startingDateDayId" :name "starting-date-day" :type "text" :placeholder "dd" :size "2" :on-key-down #(number-input-checker % 2)}]
      [:input {:id "startingDateMonthId" :name "starting-date-month" :type "text" :placeholder "mm" :size "2" :on-key-down #(number-input-checker % 2)}]
      [:input {:id "startingDateYearId" :name "starting-date-year" :type "text" :placeholder "yyyy" :size "4" :on-key-down #(number-input-checker % 4)}]]]

    [:tr
     [:td]
     [:td
      [:button {:id "submitId" :on-click (fn [_]
                                           (submit ["submitTypeId" "titleId" "urlId" "countryId" "cityId" "startingDateDayId" "startingDateMonthId" "startingDateYearId"]))} "submit"]]]]])

(defn change-component
  [submit e current-comp]
  (let [selected (-> e .-target .-value)]
    (if-not (= selected current-comp)
      (case selected
        "story" (render component-story submit)
        "ask" (render component-ask submit)
        "job" (render component-job submit)
        "event" (render component-event submit)))))

(defn render
  [comp submit]
  (r/render-component [(fn []
                         (comp submit))] util.view/main-container))

(defn number-input-checker
  [e max-len]
  (if (util.view/in? (.-keyCode e) [8 9 37 39])
    e
    (when-not (and (>= (.-keyCode e) 48)
                   (<= (.-keyCode e) 57)
                   (< (count (-> e .-target .-value)) max-len))
      (.preventDefault e))))