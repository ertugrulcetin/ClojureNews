(ns view.list.ask
  (:require [util.view]))

(declare ask-owner?
         upvoted?)

(defn component-list-ask
  [asks page]

  [:table {:class "itemlist" :border "0" :cellPadding "0" :cellSpacing "0"}
   [:tbody

    (let [counter (atom (-> (.parseInt js/window page)
                            (- 1)
                            (* 30)))]
      (for [ask (-> asks :ask-entry)]
        (list

          [:tr {:class "athing"}

           [:td {:class "title" :style {:vertical-align "top" :text-align "right"}}
            [:span {:class "rank"} (str (swap! counter inc) ".")]]

           [:td {:class "votelinks" :style {:vertical-align "top"}}
            (cond
              (ask-owner? ask asks)
              [:center
               [:font {:color "#5fba7d"} "*"]
               [:br]
               [:img {:src "/img/s.gif", :height "1", :width "14"}]]

              (upvoted? ask asks)
              [:center
               [:a {:style {:visibility "hidden"}}
                [:div {:class "votearrow" :title "upvote"}]]]

              :else
              [:center
               [:a {:id    (str "id-upvote-" (:_id ask))
                    :class "myClickableThingy"
                    :style {:visiblity "none"}}
                [:div {:class "votearrow" :title "upvote"}]]])]

           [:td {:class "title"}
            [:span {:class "deadmark"}]
            [:a {:href (:url ask) :target "_blank"} (str "Ask CN: " (:title ask))]]]

          [:tr
           [:td {:colSpan "2"}]
           [:td {:class "subtext"}
            [:span {:id "span" :class "score"}
             (util.view/generate-upvote-status (:upvote ask))
             [:a {:href (str "/#/user/" (:created-by ask))} (:created-by ask)]
             [:span {:class "age"} " | "
              [:a {:href (str "/#/ask/" (:_id ask))} (util.view/generate-age-status (:created-date ask))] " | "
              [:a {:href (str "/#/ask/" (:_id ask))} (util.view/generate-comment-status (:number-of-comments ask))]
              (when (util.view/in? (:_id ask) (-> asks :ask-own-entries))
                (list " | "
                      [:a {:href (str "/#/ask/edit/" (:_id ask))} "edit"]
                      " | "
                      [:a {:href (str "/#/ask/delete/" (:_id ask))} "delete"]))]]]]

          [:tr {:class "spacer" :style {:height "7"}}])))]])

(defn ask-owner?
  [ask asks]
  (util.view/in? (:_id ask) (-> asks :ask-own-entries)))

(defn upvoted?
  [ask asks]
  (util.view/in? (:_id ask) (-> asks :ask-upvoted-entries)))