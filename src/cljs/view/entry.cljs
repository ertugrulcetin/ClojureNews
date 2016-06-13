(ns view.entry
  (:require [cljs-time.core :as cljs-time]))

(declare create-story
         create-ask
         generate-comment-status
         generate-upvote-status
         generate-age-status
         genereate-min-status)

(defn component
  [entries]
  [:table {:class "itemlist" :border "0" :cellPadding "0" :cellSpacing "0"}
   [:tbody

    (let [counter (atom 0)]
      (for [entry entries]

        (if (= "story" (:type entry))
          (create-story entry counter)
          (create-ask entry counter))))]])

(defn create-story [entry counter]
  (list

    [:tr {:class "athing"}

     [:td {:class "title" :style {:vertical-align "top" :text-align "right"}}
      [:span {:class "rank"} (str (swap! counter inc) ".")]]

     [:td {:class "votelinks" :style {:vertical-align "top"}}
      [:center
       [:a {:id "up_1" :class "myClickableThingy" :on-click (fn [_] (println "aa"))}
        [:div {:title "upvote" :class "votearrow"}]]]]

     [:td {:class "title"}
      [:span {:class "deadmark"}]
      [:a {:href (:url entry) :target "_blank"} (:title entry)]
      [:span {:class "sitebit comhead"}
       " (" [:a {:href (:pure-url entry)}
             [:span {:class "sitestr"}
              (:pure-url entry)]] ")"]]]
    [:tr
     [:td {:colSpan "2"}]
     [:td {:class "subtext"}
      [:span {:id "span" :class "score"}
       (generate-upvote-status (:upvote entry))
       [:a {:href (str "/#/user/" (:created-by entry))} (:created-by entry)]
       [:span {:class "age"} " | "
        [:a {:href (str "/#/story/" (:_id entry))} (generate-age-status (:created-date entry))] " | "
        [:a {:href (str "/#/story/" (:_id entry))} (generate-comment-status (:number-of-comments entry))]]]]]

    [:tr {:class "spacer" :style {:height "7"}}]))

(defn create-ask [entry counter]
  (list

    [:tr {:class "athing"}

     [:td {:class "title" :style {:vertical-align "top" :text-align "right"}}
      [:span {:class "rank"} (str (swap! counter inc) ".")]]

     [:td {:class "votelinks" :style {:vertical-align "top"}}
      [:center
       [:a {:id "up_1" :class "myClickableThingy" :on-click (fn [_] (println "aa"))}
        [:div {:title "upvote" :class "votearrow"}]]]]

     [:td {:class "title"}
      [:span {:class "deadmark"}]
      [:a {:href (str "/#/ask/" (:_id entry))} (str "Ask CN: " (:title entry))]]]
    [:tr
     [:td {:colSpan "2"}]
     [:td {:class "subtext"}
      [:span {:id "span" :class "score"}
       (generate-upvote-status (:upvote entry))
       [:a {:href (str "/#/user/" (:created-by entry))} (:created-by entry)]
       [:span {:class "age"} " | "
        [:a {:href (str "/#/ask/" (:_id entry))} (generate-age-status (:created-date entry))] " | "
        [:a {:href (str "/#/ask/" (:_id entry))} (generate-comment-status (:number-of-comments entry))]]]]]

    [:tr {:class "spacer" :style {:height "7"}}]))

(defn generate-comment-status
  [number-of-comments]
  (case number-of-comments
    0 "discuss"
    1 "1 comment"
    (str number-of-comments " comments")))

(defn generate-upvote-status
  [number-of-upvotes]
  (if (> number-of-upvotes 1)
    (str number-of-upvotes " points by ")
    (str number-of-upvotes " point by ")))

(defn generate-age-status
  [created-date]
  (let [current-date (js/Date.)
        created-date-as-js (js/Date. created-date)
        min (cljs-time/in-minutes (cljs-time/interval created-date-as-js current-date))
        hour (cljs-time/in-hours (cljs-time/interval created-date-as-js current-date))
        day (cljs-time/in-days (cljs-time/interval created-date-as-js current-date))]
    (cond
      (< min 60) (if (= min 1) (str min " minute ago") (str min " minutes ago"))
      (< hour 24) (if (= hour 1) (str hour " hour ago") (str hour " hours ago"))

      :else
      (if (= day 1) (str day " day ago") (str day " days ago")))))

