(ns view.comment-entry
  (:require [cljs-time.core :as cljs-time]))

(declare comment-owner?
         generate-age-status)

(defn component-story-comment
  [commentt reply]

  [:table {:border "0"}
   [:tbody

    (list

      [:tr {:class "athing"}

       [:td {:class "ind"}]

       [:td {:class "votelinks" :style {:vertical-align "top"}}
        [:center

         (if (comment-owner? commentt)
           [:font {:color "#5fba7d"} "*"]
           [:a {:id "aa" :href "#"}
            [:div {:class "votearrow" :title "upvote"}]])]]

       [:td {:class "default"}
        [:div {:style {:margin-top "2px" :margin-bottom "-10px"}}
         [:span {:class "comhead"}
          [:a {:href (str "/#/user/" (-> commentt :cn-story-comment :created-by))} (-> commentt :cn-story-comment :created-by)]
          " | "
          [:a {:href (str "/#/story/" (-> commentt :cn-story-comment :entry-id))} (generate-age-status (-> commentt :cn-story-comment :created-date))]
          [:span {:class "par"}]
          [:span {:class "storyon"}]]]

        [:br]

        [:span {:class "comment"}
         [:span {:class "c00"}
          "Here is the first comment! " [:a {:href "#"} "https://clojure.news"]]]]
       ]

      [:tr {:style {:height "10px"}}]

      [:tr
       [:td {:colSpan "2"}]
       [:td
        [:textarea {:id "textId" :name "text" :cols "60" :rows "6"}]
        [:br]
        [:br]
        [:button {:id "buttonReplyStoryCommentId" :on-click (fn [_]
                                                              (reply (-> commentt :cn-story-comment :_id) ["textId"]))} "reply"]]]

      )]])


(defn comment-owner?
  [commentt]
  (or (= (-> commentt :user-obj :username) (-> commentt :cn-story-comment :created-by))))

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