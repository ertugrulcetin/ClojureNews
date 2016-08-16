(ns view.list.job
  (:require [util.view]))

(declare job-owner?)

(defn component-job
  [jobs page]
  [:table {:class "itemlist" :border "0" :cellPadding "0" :cellSpacing "0"}
   [:tbody

    (let [page-as-int (.parseInt js/window page)]
      (list
        (for [job (-> jobs :job-entry)]
          (list

            [:tr {:class "athing"}

             [:td {:class "title" :style {:vertical-align "top" :text-align "right"}}
              [:span {:class "rank"}]]

             [:td {:class "votelinks" :style {:vertical-align "top"}}
              (cond
                (job-owner? job jobs)
                [:center
                 [:font {:color "#5fba7d"} "*"]
                 [:br]
                 [:img {:src "/img/s.gif", :height "1", :width "14"}]]

                :else
                [:center
                 [:img {:src "/img/s.gif", :height "1", :width "14"}]])]

             [:td {:class "title"}
              [:span {:class "deadmark"}]
              [:a {:href (:url job) :target "_blank" :class "storylink" :rel "nofollow"} (:title job)]
              [:span {:class "sitebit comhead"}
               (str " (" (:city job) ", " (:country job) (when (:remote? job) " || remote") ")")]]]

            [:tr
             [:td {:colSpan "2"}]
             [:td {:class "subtext"}
              [:span {:class "age"}
               (util.view/generate-age-status (:created-date job))]
              (when (job-owner? job jobs)
                (list " | "
                      [:a {:href (str "/#!/job/edit/" (:_id job))} "edit"]
                      " | "
                      [:a {:href (str "/#!/job/delete/" (:_id job))} "delete"]))]]

            [:tr {:class "spacer" :style {:height "7"}}]))

        [:tr {:class "spacer" :style {:height "10"}}]

        (when (:more? jobs)
          [:tr
           [:td {:colSpan "2"}]
           [:td {:class "title"}
            [:a {:href (str "/#!/job/p/" (+ page-as-int 1)) :class "morelink" :rel "nofollow"} "More"]]])))]])

(defn job-owner?
  [job jobs]
  (util.view/in? (:_id job) (-> jobs :job-own-entries)))