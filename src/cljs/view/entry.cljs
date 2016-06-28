(ns view.entry
  (:require [cljs-time.core :as cljs-time]
            [util.view]))

(declare create-story
         create-ask
         generate-comment-status
         generate-upvote-status
         generate-age-status
         genereate-min-status
         entry-owner?
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

(defn story
  [data add-comment upvote]

  [:div

   [:table {:border "0"}
    [:tbody

     (list
       [:tr {:class "athing"}

        [:td {:text-align "right" :vertical-align "top" :class "title"}
         [:span {:class "rank"}]]

        [:td {:vertical-align "top" :class "votelinks"}
         [:center

          (if (entry-owner? data)
            [:font {:color "#5fba7d"} "*"]
            [:a {:id "aa" :href "#"}
             [:div {:class "votearrow" :title "upvote"}]])]]

        [:td {:class "title"}
         [:a {:href (-> data :story-entry :url) :class "storylink"} (-> data :story-entry :title)]
         [:span {:class "sitebit comhead"}
          " (" [:a {:href "#"}
                [:span {:class "sitestr"}
                 (-> data :story-entry :pure-url)]] ")"]]]

       [:tr
        [:td {:colSpan "2"}]
        [:td {:class "subtext"}
         [:span {:id "span" :class "score"}
          (generate-upvote-status (-> data :story-entry :upvote))
          [:a {:href (str "/#/user/" (-> data :story-entry :created-by))} (-> data :story-entry :created-by)]
          [:span {:class "age"} " | "
           [:a {:href (str "/#/story/" (-> data :story-entry :_id))} (generate-age-status (-> data :story-entry :created-date))] " | "
           [:a {:href (str "/#/story/" (-> data :story-entry :_id))} (generate-comment-status (-> data :story-entry :number-of-comments))]]]]]

       [:tr {:style {:height "10px"}}]

       [:tr
        [:td {:colSpan "2"}]
        [:td
         [:textarea {:id "textId" :name "text" :cols "60" :rows "6"}]
         [:br]
         [:br]
         [:button {:id "buttonAddStoryCommentId" :on-click (fn [_]
                                                             (add-comment (-> data :story-entry :_id) ["textId"]))} "add comment"]]])]]


   [:table {:border "0" :class "comment-tree"}
    [:tbody

     [:tr
      [:td
       [:br]
       [:br]]]


     (for [commentt (-> data :story-comments)]

       [:tr {:class "athing"}

        [:td

         [:table {:border "0"}
          [:tbody

           (if (comment-owner? data (:created-by commentt))
             (create-comment-owner commentt)
             (if (util.view/in? (:_id commentt) (-> data :story-upvoted-comments))
               (create-upvoted-comment commentt upvote)
               (create-comment commentt upvote))
             )]]]])]]])

(defn create-comment-owner
  [commentt]

  [:tr
   [:td {:class "ind"}
    [:img {:src "/img/s.gif" :height "1" :width (str (* (:index commentt) 40))}]]

   [:td {:style {:vertical-align "top"} :class "votelinks"}
    [:center
     [:font {:color "#5fba7d"} "*"]]]

   [:td {:class "default"}
    [:div {:style {:margin-top "2px" :margin-bottom "-10px"}}
     [:span {:class "comhead"}
      [:a {:href (str "/#/user/" (:created-by commentt))} (:created-by commentt)]
      " "
      [:span {:class "age"}
       [:a {:href (str "/#/comment/" (:_id commentt))} (generate-age-status (:created-date commentt))]
       " | "
       [:a {:href (str "/#/comment/edit/" (:_id commentt))} "edit"]
       " | "
       [:a {:href (str "/#/comment/delete/" (:_id commentt))} "delete"]
       ]
      [:span {:class "par"}]
      [:span {:class "storyon"}]]]

    [:br]

    [:span {:class "comment"}
     [:span {:class "c00"}
      (util.view/parse-comment (:content commentt))]]]])

(defn create-comment
  [commentt upvote]
  [:tr
   [:td {:class "ind"}
    [:img {:src "/img/s.gif" :height "1" :width (str (* (:index commentt) 40))}]]

   [:td {:style {:vertical-align "top"} :class "votelinks"}
    [:center
     [:a {:id       (str "id-upvote-" (:_id commentt))
          :class    "myClickableThingy"
          :style    {:visiblity "none"}
          :on-click (fn [_]
                      (upvote (:_id commentt)))}
      [:div {:class "votearrow" :title "upvote"}]]
     ]]

   [:td {:class "default"}
    [:div {:style {:margin-top "2px" :margin-bottom "-10px"}}
     [:span {:class "comhead"}
      [:a {:href (str "/#/user/" (:created-by commentt))} (:created-by commentt)]
      " "
      [:span {:class "age"}
       [:a {:href "/#"} (generate-age-status (:created-date commentt))]]
      [:span {:class "par"}]
      [:span {:class "storyon"}]]]

    [:br]

    [:span {:class "comment"}
     [:span {:class "c00"}
      [:pre [:code "def 1"][:br ][:code "def 2 3"] ]
      ]
     [:div {:class "reply"}
      [:p
       [:font {:size "1"}
        [:u
         [:a {:href (str "/#/comment/" (:str-id commentt))} "reply"]]]]]
     ]]])

(defn create-upvoted-comment
  [commentt upvote]
  [:tr
   [:td {:class "ind"}
    [:img {:src "/img/s.gif" :height "1" :width (str (* (:index commentt) 40))}]]

   [:td {:style {:vertical-align "top"} :class "votelinks"}
    [:center
     ]]

   [:td {:class "default"}
    [:div {:style {:margin-top "2px" :margin-bottom "-10px"}}
     [:span {:class "comhead"}
      [:a {:href (str "/#/user/" (:created-by commentt))} (:created-by commentt)]
      " "
      [:span {:class "age"}
       [:a {:href "/#"} (generate-age-status (:created-date commentt))]]
      [:span {:class "par"}]
      [:span {:class "storyon"}]]]

    [:br]

    [:span {:class "comment"}
     [:span {:class "c00"}
      (util.view/parse-comment (:content commentt))]
     [:div {:class "reply"}
      [:p
       [:font {:size "1"}
        [:u
         [:a {:href (str "/#/comment/" (:str-id commentt))} "reply"]]]]]
     ]]])

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

(defn entry-owner?
  [data]
  (or (= (-> data :user-obj :username) (-> data :story-entry :created-by))))

(defn comment-owner?
  [data comment-created-by]
  (or (= (-> data :user-obj :username) comment-created-by)))

