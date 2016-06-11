(ns view.submit
  (:require [reagent.core :as r]))

(declare change-component
         render)

(defn component-entry
  [submit]
  [:table
   [:tbody

    [:tr
     [:td "  type:"]
     [:td
      [:select {:id "submitTypeId" :name "submit-type" :on-change #(change-component submit % "entry")}
       [:option {:selected "selected"} "entry"]
       [:option "question"]
       [:option "jobs"]
       [:option "events"]]]]

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
                                           (submit))} "submit"]]]]])

(defn component-question
  [submit]
  [:table
   [:tbody

    [:tr
     [:td "  type:"]
     [:td
      [:select {:id "submitTypeId" :name "submit-type" :on-change #(change-component submit % "question")}
       [:option "entry"]
       [:option {:selected "selected"} "question"]
       [:option "jobs"]
       [:option "events"]]]]

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
                                           (submit))} "submit"]]]]])

(defn change-component
  [submit e current-comp]
  (let [selected (-> e .-target .-value)]
    (if-not (= selected current-comp)
      (case selected
        "entry" (render component-entry submit)
        "question" (render component-question submit)))))

(defn render
  [comp submit]
  (r/render-component [(fn []
                         (comp submit))] util.view/main-container))