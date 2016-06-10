(ns view.submit)

(defn component
  []
  [:table
   [:tbody

    [:div
     [:tr {:padding "15px"}
      [:td "  type:"]
      [:td
       [:select {:id "submitTypeId" :name "submit-type" :on-change (fn [e]

                                                                     (.log js/console (-> e .-target .-value)))}
        [:option "entry"]
        [:option "question"]
        [:option "jobs"]
        [:option "events"]]]]]


    [:div
     [:tr
      [:td "deneme:"]
      [:td "can"]]]]])