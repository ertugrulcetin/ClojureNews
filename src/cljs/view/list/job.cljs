(ns view.list.job
  (:require [util.view]))

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

             [:td
              [:img {:src "/img/s.gif", :height "1", :width "14"}]]

             [:td {:class "title"}
              [:span {:class "deadmark"}]
              [:a {:href (:url job) :target "_blank" :class "storylink" :rel "nofollow"} (:title job)]
              [:span {:class "sitebit comhead"}
               (str " (" (:city job) ", " (:country job) (when (:remote? job) " || remote") ")")]]]

            [:tr
             [:td {:colSpan "2"}]
             [:td {:class "subtext"}
              [:span {:class "age"}
               (util.view/generate-age-status (:created-date job))]]]

            [:tr {:class "spacer" :style {:height "7"}}]))

        [:tr {:class "spacer" :style {:height "10"}}]

        (when (:more? jobs)
          [:tr
           [:td {:colSpan "2"}]
           [:td {:class "title"}
            [:a {:href (str "/#/jobs/p/" (+ page-as-int 1)) :class "morelink" :rel "nofollow"} "More"]]])))]])
