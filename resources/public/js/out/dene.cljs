(ns dene
  (:require-macros [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [secretary.core :as secretary]
            [reagent.core :as r]))

(def main-container
  (js/document.getElementById "mainContainerId"))

(defn simple-component []
  [:div
   [:p "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red "] "text."]])

(defn table-ex
  []
  [:table
   [:tbody
    [:tr
     [:td]]
    [:tr
     [:td "username:"]
     [:td
      [:input {:type "text"}]]]
    [:tr
     [:td "password:"]
     [:td
      [:input {:type "password"}]]]
    [:tr
     [:td
      [:button {:id "submitId" :on-click (fn [_] (js/alert "Ertuss!!"))} "Submit"]]]]])

(defn empty-ex
  []
  [])

(defn ^:export render-simple []
  (r/render-component [table-ex] main-container))


(defmacro combine-routes
  [& routes]
  `(do
     ~@routes))

(defn get-bla-bla-route
  []
  (combine-routes

    (defroute home-path "/" []
              (render-simple))

    (defroute new "/new" []
              (r/render-component [empty-ex] main-container))

    (defroute ertu-path "/ertu" []
              (js/setTimeout (fn [] (secretary/dispatch! "/")) 1000))))
