(ns clj.controller.entry
  (:require [liberator.core :refer [resource defresource]]
            [clj.util.resource :as resource-util]
            [clj.dao.user :as user-dao]
            [hiccup.core :as hiccup]))

(declare get-user)

(defn home-page
  []
  (resource :allowed-methods [:get]

            :available-media-types ["text/html"]

            :handle-ok (fn [ctx]

                         (hiccup/html [:html
                                       [:head
                                        [:meta {:http-equiv "Content-Type" :content "text/html; charset=UTF-8"}]
                                        [:meta {:name "referrer" :content "origin"}]
                                        [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]

                                        [:link {:rel "stylesheet" :type "text/css" :href "/css/news.css"}]
                                        [:link {:rel "shortcut icon" :href "/img/logo.png"}]

                                        [:style {:type "text/css"}]

                                        [:title "Clojure News"]]

                                       [:body {:data-gr-c-s-loaded "true" :id "bodyId"}

                                        [:center
                                         [:table {:id "cnmain", :border "0", :cellpadding "0", :cellspacing "0", :width "85%", :bgcolor "#f6f6ef"}
                                          [:tbody
                                           [:tr
                                            [:td {:bgcolor "#5fba7d"}
                                             [:table {:border "0", :cellpadding "0", :cellspacing "0", :width "100%", :style "padding:2px"}
                                              [:tbody
                                               [:tr
                                                [:td {:style "width:18px;padding-right:4px"}
                                                 [:a {:href "/#/"}
                                                  [:img {:src "/img/logo.png", :width "18", :height "18", :style "border:1px white solid;"}]]]
                                                [:td {:style "line-height:12pt; height:10px;"}
                                                 [:span {:class "pagetop"}
                                                  [:b {:class "brandname"}
                                                   [:a {:class "pagetopwhite", :href "/#/"} "Clojure News"]]
                                                  [:a {:class "pagetopwhite", :href "/#/new"} "new"] " | "
                                                  [:a {:class "pagetopwhite", :href "/#/comments"} "comments"] " | "
                                                  [:a {:class "pagetopwhite", :href "/#/ask"} "ask"] " | "
                                                  [:a {:class "pagetopwhite", :href "/#/jobs"} "jobs"] " | "
                                                  [:a {:class "pagetopwhite", :href "/#/events"} "events"] " | "
                                                  [:a {:class "pagetopwhite", :href "/#/submit"} "submit"]]]
                                                [:td {:style "text-align:right;padding-right:4px;"}
                                                 [:span {:id "pageTopId", :class "pagetop"}
                                                  (if-let [user (get-user ctx)]
                                                    [:div
                                                     [:a {:class "pagetopwhite", :id "loginId", :href (str "/#/user/" (:username user))} (:username user)]
                                                     (str " (" (:karma user) ") | ")
                                                     [:a {:class "pagetopwhite", :id "loginId", :href "/#/logout"} "logout"]]
                                                    [:a {:class "pagetopwhite", :id "loginId", :href "/#/login"} "login"])
                                                  ]]]]]]]
                                           [:tr {:style "height:10px"}]
                                           [:tr
                                            [:td {:id "messageContainerId"}]]
                                           [:tr
                                            [:td {:id "mainContainerId"}]]
                                           [:tr
                                            [:td
                                             [:img {:src "/img/s.gif", :height "10", :width "0"}]
                                             [:table {:width "100%", :cellspacing "0", :cellpadding "1"}
                                              [:tbody
                                               [:tr
                                                [:td {:bgcolor "#5fba7d"}]]]]
                                             [:br]
                                             [:center
                                              [:span {:class "yclinks"}
                                               [:a {:class "pagebottomgray", :href "/#/guidelines"} "Guidelines"] " | "
                                               [:a {:class "pagebottomgray", :href "/#/faq"} "FAQ"] " | "
                                               [:a {:class "pagebottomgray", :href "/#/lists"} "Lists"] " | "
                                               [:a {:class "pagebottomgray", :href "mailto:info@clojure.news"} "Contact"]]
                                              [:br]
                                              [:br]]]]]]]
                                        [:script {:src "/js/clojure-news.js", :type "text/javascript"}]]]))

            :handle-exception (fn [ctx]
                                "Something went wrong")))

(defn entry
  []
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]
                         {:entry? true})

            :handle-exception (fn [ctx]
                                (resource-util/get-exception-message ctx))))

(defn get-user
  [ctx]
  (if-let [cookie (resource-util/get-cookie ctx)]
    (if-let [user (user-dao/find-by-username (resource-util/get-username-from-cookie ctx))]
      (if (= cookie (:cookie user))
        {:username (:username user)
         :karma    (:karma user)}))))