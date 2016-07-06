(ns view.entry.job)


(defn component-edit
  [job]
  [:table
   [:tbody
    [:tr
     [:td "title:"]
     [:td
      [:input {:id "titleId" :name "title" :type "text" :defaultValue (-> job :job-entry :title) :size "70"}]]]

    [:tr
     [:td "url:"]
     [:td
      [:input {:id "urlId" :name "url" :type "text" :defaultValue (-> job :job-entry :url) :size "70"}]]]

    [:tr
     [:td "country:"]
     [:td
      [:input {:id "countryId" :name "country" :type "text" :defaultValue (-> job :job-entry :country) :size "70"}]]]

    [:tr
     [:td "city:"]
     [:td
      [:input {:id "cityId" :name "city" :type "text" :defaultValue (-> job :job-entry :city) :size "70"}]]]

    [:tr
     [:td "remote?:"]
     [:td
      [:input {:id "remoteId" :name "remote" :type "checkbox" :defaultChecked (-> job :job-entry :remote?)}]]]

    [:tr
     [:td]
     [:td
      [:button {:id "jobEditButtonId"} "update"]]]]])

(defn component-delete
  [job]
  [:table
   [:tbody
    [:tr
     [:td "title:"]
     [:td
      (-> job :job-entry :title)]]

    [:tr
     [:td "url:"]
     [:td
      (-> job :job-entry :url)]]

    [:tr
     [:td "country:"]
     [:td
      (-> job :job-entry :country)]]

    [:tr
     [:td "city:"]
     [:td
      (-> job :job-entry :city)]]

    [:tr
     [:td "remote?:"]
     [:td
      (if (-> job :job-entry :remote?) "true" "false")]]

    [:tr {:style {:height "10px"}}]

    [:tr
     [:td]
     [:td
      "Do you want this to be deleted?"
      [:br]
      [:br]
      [:button {:id "buttonDeleteJobYesId"} "yes"]
      "  "
      [:button {:id "buttonDeleteJobNoId"} "no"]]]]])