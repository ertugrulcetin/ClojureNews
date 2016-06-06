(ns view.entry)


(defn component
  []
  [:table
   [:tbody

    [:tr
     [:td
      [:p "This is the Main Page!"]]]]])

(defn loading
  []
  [:table
   [:tbody
    [:tr
     [:td
      [:p "Loading..."]]]]])