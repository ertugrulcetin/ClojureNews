(ns view.comment-entry
  (:require [util.view]))

(declare comment-owner?)

(defn- component-comment
  [commentt tr]
  [:table {:border "0"}
   [:tbody

    (list
      [:tr {:class "athing"}

       [:td {:class "ind"}]

       [:td {:class "votelinks" :style {:vertical-align "top"}}

        (cond
          (comment-owner? commentt)
          [:center
           [:font {:color "#5fba7d"} "*"]
           [:br]
           [:img {:src "/img/s.gif", :height "1", :width "14"}]]

          (:upvoted? commentt)
          [:center
           [:a {:style {:visibility "hidden"}}
            [:div {:class "votearrow" :title "upvote"}]]]

          :else
          [:center
           [:a {:id    (str "id-upvote-" (-> commentt :comment-entry :_id))
                :class "myClickableThingy"
                :style {:visiblity "none"}}
            [:div {:class "votearrow" :title "upvote"}]]])]

       [:td {:class "default"}
        [:div {:style {:margin-top "2px" :margin-bottom "-10px"}}
         [:span {:class "comhead"}
          [:a {:href (str "/#!/user/" (-> commentt :comment-entry :created-by))} (-> commentt :comment-entry :created-by)]
          " | "
          [:a {:href (str "/#!/story/" (-> commentt :comment-entry :entry-id))} (util.view/generate-age-status (-> commentt :comment-entry :created-date))]
          [:span {:class "par"}]
          [:span {:class "storyon"}]]]

        [:br]

        [:span {:class "comment"}
         [:span {:class "c00"}
          (util.view/parse-comment (-> commentt :comment-entry :content))]]]]

      [:tr {:style {:height "10px"}}]

      tr)]])

(defn component-reply
  [commentt]
  (component-comment commentt [:tr
                               [:td {:colSpan "2"}]
                               [:td
                                [:textarea {:id "textId" :name "text" :cols "60" :rows "6"}]
                                [:br]
                                [:br]
                                [:button {:id "buttonReplyCommentId"} "reply"]]]))

(defn component-edit
  [commentt]
  (component-comment commentt [:tr
                               [:td {:colSpan "2"}]
                               [:td
                                [:textarea {:id "textId" :name "text" :cols "60" :rows "6" :defaultValue (-> commentt :comment-entry :content)}]
                                [:br]
                                [:br]
                                [:button {:id "buttonEditCommentId"} "update"]]]))

(defn component-delete
  [commentt]
  (component-comment commentt [:tr
                               [:td {:colSpan "2"}]
                               [:td
                                "Do you want this to be deleted?"
                                [:br]
                                [:br]
                                [:button {:id "buttonDeleteYesCommentId"} "yes"]
                                "  "
                                [:button {:id "buttonDeleteNoCommentId"} "no"]]]))

(defn comment-owner?
  [commentt]
  (or (= (-> commentt :user-obj :username) (-> commentt :comment-entry :created-by))))