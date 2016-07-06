(ns view.list.story
  (:require [util.view]))

(declare story-owner?
         upvoted?)

(defn component-list-story
  [stories page]

  [:table {:class "itemlist" :border "0" :cellPadding "0" :cellSpacing "0"}
   [:tbody

    (let [page-as-int (.parseInt js/window page)
          counter (atom (-> page-as-int
                            (- 1)
                            (* 5)))]

      (list
        (for [story (-> stories :story-entry)]
          (list

            [:tr {:class "athing"}

             [:td {:class "title" :style {:vertical-align "top" :text-align "right"}}
              [:span {:class "rank"} (str (swap! counter inc) ".")]]

             [:td {:class "votelinks" :style {:vertical-align "top"}}
              (cond
                (story-owner? story stories)
                [:center
                 [:font {:color "#5fba7d"} "*"]
                 [:br]
                 [:img {:src "/img/s.gif", :height "1", :width "14"}]]

                (upvoted? story stories)
                [:center
                 [:a {:style {:visibility "hidden"}}
                  [:div {:class "votearrow" :title "upvote"}]]]

                :else
                [:center
                 [:a {:id    (str "id-upvote-" (:_id story))
                      :class "myClickableThingy"
                      :style {:visiblity "none"}}
                  [:div {:class "votearrow" :title "upvote"}]]])]

             [:td {:class "title"}
              [:span {:class "deadmark"}]
              [:a {:href (:url story) :target "_blank"} (:title story)]
              [:span {:class "sitebit comhead"}
               " (" [:span {:class "sitestr"}
                     (:pure-url story)] ")"]]]

            [:tr
             [:td {:colSpan "2"}]
             [:td {:class "subtext"}
              [:span {:id "span" :class "score"}
               (util.view/generate-upvote-status (:upvote story))
               [:a {:href (str "/#/user/" (:created-by story))} (:created-by story)]
               [:span {:class "age"} " | "
                [:a {:href (str "/#/story/" (:_id story))} (util.view/generate-age-status (:created-date story))] " | "
                [:a {:href (str "/#/story/" (:_id story))} (util.view/generate-comment-status (:number-of-comments story))]
                (when (story-owner? story stories)
                  (list " | "
                        [:a {:href (str "/#/story/edit/" (:_id story))} "edit"]
                        " | "
                        [:a {:href (str "/#/story/delete/" (:_id story))} "delete"]))]]]]

            [:tr {:class "spacer" :style {:height "7"}}]))

        [:tr {:class "spacer" :style {:height "10"}}]

        (when (:more? stories)
          [:tr
           [:td {:colSpan "2"}]
           [:td {:class "title"}
            [:a {:href (str "/#/story/p/" (+ page-as-int 1)) :class "morelink" :rel "nofollow"} "More"]]])))]])

(defn story-owner?
  [story stories]
  (util.view/in? (:_id story) (-> stories :story-own-entries)))

(defn upvoted?
  [story stories]
  (util.view/in? (:_id story) (-> stories :story-upvoted-entries)))


