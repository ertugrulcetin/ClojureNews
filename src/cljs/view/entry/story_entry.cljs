(ns view.entry.story-entry
  (:require [util.view]))

(declare generate-comment-status
         generate-upvote-status
         generate-age-status
         genereate-min-status
         story-owner?
         comment-owner?
         create-comment-owner
         create-upvoted-comment
         create-comment)

(defn component-story
  [story]
  [:div

   [:table {:border "0"}
    [:tbody

     (list
       [:tr {:class "athing"}

        [:td {:text-align "right" :vertical-align "top" :class "title"}
         [:span {:class "rank"}]]

        [:td {:vertical-align "top" :class "votelinks"}
         (cond

           (story-owner? story)
           [:center
            [:font {:color "#5fba7d"} "*"]
            [:br]
            [:img {:src "/img/s.gif", :height "1", :width "14"}]]

           (:upvoted? story)
           [:center
            [:a {:style {:visibility "hidden"}}
             [:div {:class "votearrow" :title "upvote"}]]]

           :else
           [:center
            [:a {:id    (str "id-upvote-" (-> story :story-entry :_id))
                 :class "myClickableThingy"
                 :style {:visiblity "none"}}
             [:div {:class "votearrow" :title "upvote"}]]])]

        [:td {:class "title"}
         [:a {:href (-> story :story-entry :url) :class "storylink"} (-> story :story-entry :title)]
         [:span {:class "sitebit comhead"}
          " (" [:a {:href "#"}
                [:span {:class "sitestr"}
                 (-> story :story-entry :pure-url)]] ")"]]]

       [:tr
        [:td {:colSpan "2"}]
        [:td {:class "subtext"}
         [:span {:id "span" :class "score"}
          (util.view/generate-upvote-status (-> story :story-entry :upvote))
          [:a {:href (str "/#/user/" (-> story :story-entry :created-by))} (-> story :story-entry :created-by)]
          [:span {:class "age"} " | "
           [:a {:href (str "/#/story/" (-> story :story-entry :_id))} (util.view/generate-age-status (-> story :story-entry :created-date))] " | "
           [:a {:href (str "/#/story/" (-> story :story-entry :_id))} (util.view/generate-comment-status (-> story :story-entry :number-of-comments))]
           (when (story-owner? story)
             (list " | "
                   [:a {:href (str "/#/story/edit/" (-> story :story-entry :_id))} "edit"]
                   " | "
                   [:a {:href (str "/#/story/delete/" (-> story :story-entry :_id))} "delete"]))]]]]

       [:tr {:style {:height "10px"}}]

       [:tr
        [:td {:colSpan "2"}]
        [:td
         [:textarea {:id "textId" :name "text" :cols "60" :rows "6"}]
         [:br]
         [:br]
         [:button {:id "buttonAddCommentId"} "add comment"]]])]]


   [:table {:border "0" :class "comment-tree"}
    [:tbody

     [:tr
      [:td
       [:br]
       [:br]]]

     (for [commentt (-> story :story-comments)]

       [:tr {:class "athing"}

        [:td

         [:table {:border "0"}
          [:tbody

           (cond
             (comment-owner? story (:created-by commentt))
             (create-comment-owner commentt)

             (util.view/in? (:_id commentt) (-> story :story-upvoted-comments))
             (create-upvoted-comment commentt)

             :else
             (create-comment commentt))]]]])]]])

(defn story-owner?
  [data]
  (or (= (-> data :user-obj :username) (-> data :story-entry :created-by))))

(defn comment-owner?
  [data comment-created-by]
  (or (= (-> data :user-obj :username) comment-created-by)))

(defn create-comment-owner
  [commentt]

  [:tr
   [:td {:class "ind"}
    [:img {:src "/img/s.gif" :height "1" :width (str (* (:index commentt) 40))}]]

   [:td {:style {:vertical-align "top"} :class "votelinks"}
    [:center
     [:font {:color "#5fba7d"} "*"]
     [:br]
     [:img {:src "/img/s.gif", :height "1", :width "14"}]]]

   [:td {:class "default"}
    [:div {:style {:margin-top "2px" :margin-bottom "-10px"}}
     [:span {:class "comhead"}
      [:a {:href (str "/#/user/" (:created-by commentt))} (:created-by commentt)]
      " "
      [:span {:class "age"}
       [:a {:href (str "/#/comment/" (:_id commentt))} (util.view/generate-age-status (:created-date commentt))]
       " | "
       [:a {:href (str "/#/comment/edit/" (:_id commentt))} "edit"]
       " | "
       [:a {:href (str "/#/comment/delete/" (:_id commentt))} "delete"]]
      [:span {:class "par"}]
      [:span {:class "storyon"}]]]

    [:br]

    [:span {:class "comment"}
     [:span {:class "c00"}
      (util.view/parse-comment (:content commentt))]]]])

(defn create-comment
  [commentt]
  [:tr
   [:td {:class "ind"}
    [:img {:src "/img/s.gif" :height "1" :width (str (* (:index commentt) 40))}]]

   [:td {:style {:vertical-align "top"} :class "votelinks"}
    [:center
     [:a {:id    (str "id-upvote-" (:_id commentt))
          :class "myClickableThingy"
          :style {:visiblity "none"}}
      [:div {:class "votearrow" :title "upvote"}]]]]

   [:td {:class "default"}
    [:div {:style {:margin-top "2px" :margin-bottom "-10px"}}
     [:span {:class "comhead"}
      [:a {:href (str "/#/user/" (:created-by commentt))} (:created-by commentt)]
      " "
      [:span {:class "age"}
       [:a {:href "/#"} (util.view/generate-age-status (:created-date commentt))]]
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

(defn create-upvoted-comment
  [commentt]
  [:tr
   [:td {:class "ind"}
    [:img {:src "/img/s.gif" :height "1" :width (str (* (:index commentt) 40))}]]

   [:td {:style {:vertical-align "top"} :class "votelinks"}
    [:center
     [:a {:style {:visibility "hidden"}}
      [:div {:class "votearrow" :title "upvote"}]]]]

   [:td {:class "default"}
    [:div {:style {:margin-top "2px" :margin-bottom "-10px"}}
     [:span {:class "comhead"}
      [:a {:href (str "/#/user/" (:created-by commentt))} (:created-by commentt)]
      " "
      [:span {:class "age"}
       [:a {:href "/#"} (util.view/generate-age-status (:created-date commentt))]]
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
         [:a {:href (str "/#/comment/" (:str-id commentt))} "reply"]]]]]]]])

(defn component-edit
  [story]
  [:div

   [:table {:border "0"}
    [:tbody

     (list
       [:tr {:class "athing"}

        [:td {:text-align "right" :vertical-align "top" :class "title"}
         [:span {:class "rank"}]]

        [:td {:vertical-align "top" :class "votelinks"}
         [:center

          (if (-> story :owner?)
            [:font {:color "#5fba7d"} "*"]
            [:a {:id "aa" :href "#"}
             [:div {:class "votearrow" :title "upvote"}]])]]

        [:td {:class "title"}
         [:a {:href (-> story :story-entry :url) :class "storylink"} (-> story :story-entry :title)]
         [:span {:class "sitebit comhead"}
          " (" [:a {:href "#"}
                [:span {:class "sitestr"}
                 (-> story :story-entry :pure-url)]] ")"]]]

       [:tr
        [:td {:colSpan "2"}]
        [:td {:class "subtext"}
         [:span {:id "span" :class "score"}
          (util.view/generate-upvote-status (-> story :story-entry :upvote))
          [:a {:href (str "/#/user/" (-> story :story-entry :created-by))} (-> story :story-entry :created-by)]
          [:span {:class "age"} " | "
           [:a {:href (str "/#/story/" (-> story :story-entry :_id))} (util.view/generate-age-status (-> story :story-entry :created-date))] " | "
           [:a {:href (str "/#/story/" (-> story :story-entry :_id))} (util.view/generate-comment-status (-> story :story-entry :number-of-comments))]
           (when (-> story :owner?)
             (list " | "
                   [:a {:href (str "/#/story/edit/" (-> story :story-entry :_id))} "edit"]
                   " | "
                   [:a {:href (str "/#/story/delete/" (-> story :story-entry :_id))} "delete"]))]]]]

       [:tr {:style {:height "10px"}}])]]

   [:table
    [:tbody

     [:tr
      [:td "title:"]
      [:td
       [:input {:id "titleId" :name "title" :type "text" :size "50" :defaultValue (-> story :story-entry :title)}]]]]

    [:tr
     [:td "url:"]
     [:td
      (-> story :story-entry :url)]]

    [:tr
     [:td
      [:br]]]

    [:tr
     [:td
      [:button {:id "buttonStoryEditId"} "update"]]]]])


(defn component-delete
  [story]
  [:div

   [:table {:border "0"}
    [:tbody

     (list
       [:tr {:class "athing"}

        [:td {:text-align "right" :vertical-align "top" :class "title"}
         [:span {:class "rank"}]]

        [:td {:vertical-align "top" :class "votelinks"}
         [:center

          (if (-> story :owner?)
            [:font {:color "#5fba7d"} "*"]
            [:a {:id "aa" :href "#"}
             [:div {:class "votearrow" :title "upvote"}]])]]

        [:td {:class "title"}
         [:a {:href (-> story :story-entry :url) :class "storylink"} (-> story :story-entry :title)]
         [:span {:class "sitebit comhead"}
          " (" [:a {:href "#"}
                [:span {:class "sitestr"}
                 (-> story :story-entry :pure-url)]] ")"]]]

       [:tr
        [:td {:colSpan "2"}]
        [:td {:class "subtext"}
         [:span {:id "span" :class "score"}
          (util.view/generate-upvote-status (-> story :story-entry :upvote))
          [:a {:href (str "/#/user/" (-> story :story-entry :created-by))} (-> story :story-entry :created-by)]
          [:span {:class "age"} " | "
           [:a {:href (str "/#/story/" (-> story :story-entry :_id))} (util.view/generate-age-status (-> story :story-entry :created-date))] " | "
           [:a {:href (str "/#/story/" (-> story :story-entry :_id))} (util.view/generate-comment-status (-> story :story-entry :number-of-comments))]
           (when (-> story :owner?)
             (list " | "
                   [:a {:href (str "/#/story/edit/" (-> story :story-entry :_id))} "edit"]
                   " | "
                   [:a {:href (str "/#/story/delete/" (-> story :story-entry :_id))} "delete"]))]]]]

       [:tr {:style {:height "10px"}}]

       [:tr
        [:td {:colSpan "2"}]
        [:td
         "Do you want this to be deleted?"
         [:br]
         [:br]
         [:button {:id "buttonDeleteStoryYesId"} "yes"]
         "  "
         [:button {:id "buttonDeleteStoryNoId"} "no"]]])]]])