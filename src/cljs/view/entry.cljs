(ns view.entry
  (:require [util.view]))

(declare create-story
         create-ask
         generate-comment-status
         generate-upvote-status
         generate-age-status
         genereate-min-status
         story-owner?
         comment-owner?
         create-comment-owner
         create-upvoted-comment
         create-comment)

(defn component-story-and-ask
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
       (util.view/generate-upvote-status (:upvote entry))
       [:a {:href (str "/#/user/" (:created-by entry))} (:created-by entry)]
       [:span {:class "age"} " | "
        [:a {:href (str "/#/story/" (:_id entry))} (util.view/generate-age-status (:created-date entry))] " | "
        [:a {:href (str "/#/story/" (:_id entry))} (util.view/generate-comment-status (:number-of-comments entry))]]]]]

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
       (util.view/generate-upvote-status (:upvote entry))
       [:a {:href (str "/#/user/" (:created-by entry))} (:created-by entry)]
       [:span {:class "age"} " | "
        [:a {:href (str "/#/ask/" (:_id entry))} (util.view/generate-age-status (:created-date entry))] " | "
        [:a {:href (str "/#/ask/" (:_id entry))} (util.view/generate-comment-status (:number-of-comments entry))]]]]]

    [:tr {:class "spacer" :style {:height "7"}}]))