(ns view.list.newest
  (:require [util.view]
            [cljc.page-util :as page-util]))

(declare owner?
         upvoted?)

(defn component-list-newest
  [entries page]

  [:table {:class "itemlist" :border "0" :cellPadding "0" :cellSpacing "0"}
   [:tbody

    (let [page-as-int (.parseInt js/window page)
          counter (atom (-> page-as-int
                            (- 1)
                            (* page-util/data-per-page)))]

      (list
        (for [entry (-> entries :newest-entry)]
          (list

            [:tr {:class "athing"}

             [:td {:class "title" :style {:vertical-align "top" :text-align "right"}}
              [:span {:class "rank"} (str (swap! counter inc) ".")]]

             [:td {:class "votelinks" :style {:vertical-align "top"}}
              (cond
                (owner? entry entries)
                [:center
                 [:font {:color "#5fba7d"} "*"]
                 [:br]
                 [:img {:src "/img/s.gif", :height "1", :width "14"}]]

                (upvoted? entry entries)
                [:center
                 [:a {:style {:visibility "hidden"}}
                  [:div {:class "votearrow" :title "upvote"}]]]

                :else
                [:center
                 [:a {:id    (str "id-upvote-" (:_id entry))
                      :class "myClickableThingy"
                      :style {:visiblity "none"}}
                  [:div {:class "votearrow" :title "upvote"}]]])]

             [:td {:class "title"}
              [:span {:class "deadmark"}]
              (if (= (:type entry) "story")
                [:a {:href (:url entry) :target "_blank"} (:title entry)]
                [:a {:href (str "/#!/ask/" (:_id entry))} (str "Ask CN: " (:title entry))])
              (when (= (:type entry) "story")
                [:span {:class "sitebit comhead"}
                 " (" [:span {:class "sitestr"}
                       (:pure-url entry)] ")"])]]

            [:tr
             [:td {:colSpan "2"}]
             [:td {:class "subtext"}
              [:span {:id "span" :class "score"}
               (util.view/generate-upvote-status (:upvote entry))
               [:a {:href (str "/#!/user/" (:created-by entry))} (:created-by entry)]
               [:span {:class "age"} " | "
                [:a {:href (str "/#!/" (:type entry) "/" (:_id entry))} (util.view/generate-age-status (:created-date entry))] " | "
                [:a {:href (str "/#!/" (:type entry) "/" (:_id entry))} (util.view/generate-comment-status (:number-of-comments entry))]
                (when (owner? entry entries)
                  (list " | "
                        [:a {:href (str "/#!/" (:type entry) "/edit/" (:_id entry))} "edit"]
                        " | "
                        [:a {:href (str "/#!/" (:type entry) "/delete/" (:_id entry))} "delete"]))]]]]

            [:tr {:class "spacer" :style {:height "7"}}]))

        [:tr {:class "spacer" :style {:height "10"}}]

        (when (:more? entries)
          [:tr
           [:td {:colSpan "2"}]
           [:td {:class "title"}
            [:a {:href (str "/#!/new/p/" (+ page-as-int 1)) :class "morelink" :rel "nofollow"} "More"]]])))]])

(defn owner?
  [entry entries]
  (util.view/in? (:_id entry) (-> entries :newest-own-entries)))

(defn upvoted?
  [entry entries]
  (util.view/in? (:_id entry) (-> entries :newest-upvoted-entries)))