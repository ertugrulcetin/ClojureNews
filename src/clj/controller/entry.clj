(ns clj.controller.entry
  (:require [liberator.core :refer [resource defresource]]
            [clj.util.resource :as resource-util]
            [clj.dao.user :as user-dao]
            [clj.dao.entry :as entry-dao]
            [clj.dao.entry-job :as job-dao]
            [clj.dao.entry-event :as event-dao]
            [clj.dao.comment-entry :as comment-entry-dao]
            [clj.dao.upvote :as upvote-dao]
            [hiccup.core :as hiccup]
            [cljc.validation :as validation]
            [cljc.error-messages :as error-message]
            [cljc.page-util :as page-util]
            [clojure.string :as str]
            [monger.json])
  (:import (java.util Calendar Date)))

(declare get-user
         create-ask
         create-entry
         check-story-type
         check-ask-type
         check-submit-type
         check-submit-title
         check-submit-url
         check-submit-text
         check-submit-city
         check-submit-country
         check-submit-day
         check-submit-month
         check-submit-year
         check-entry-exist
         check-job-exist
         check-entry-owner
         check-page-data-format
         check-event-exist
         group-by-parent-and-sort-by-vote
         create-comment-tree
         flat-one-level
         flat-until-every-vector
         create-comments
         get-entry-by-page
         get-job-by-page
         get-own-entries
         get-upvoted-entries
         get-own-jobs
         get-own-events
         calendar->date)

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
                                        [:meta {:name "google-site-verification" :content "u0k33b2h-hjrHVQZIxMcmdM5YYZ_0USpephsG50KPw4"}]

                                        [:link {:rel "stylesheet" :type "text/css" :href "/css/news.css"}]
                                        [:link {:rel "shortcut icon" :href "/img/logo.png"}]

                                        [:style {:type "text/css"}]

                                        [:title "Clojure News"]]

                                       [:body {:data-gr-c-s-loaded "true" :id "bodyId"}

                                        [:center

                                         [:noscript "Please enable JavaScript!"]

                                         [:table {:id "cnmain", :border "0", :cellpadding "0", :cellspacing "0", :width "85%", :bgcolor "#f6f6ef"}
                                          [:tbody
                                           [:tr
                                            [:td {:bgcolor "#5fba7d"}
                                             [:table {:border "0", :cellpadding "0", :cellspacing "0", :width "100%", :style "padding:2px"}
                                              [:tbody
                                               [:tr
                                                [:td {:style "width:18px;padding-right:4px"}
                                                 [:a {:href "/"}
                                                  [:img {:src "/img/logo.png", :width "18", :height "18", :style "border:1px white solid;"}]]]
                                                [:td {:style "line-height:12pt; height:10px;"}
                                                 [:span {:class "pagetop"}
                                                  [:b {:class "brandname"}
                                                   [:a {:id "headerMainId" :class "pagetopwhite", :href "/"} "Clojure News"]]
                                                  [:a {:id "headerStoryId" :class "pagetopwhite", :href "/#/story"} "story"] " | "
                                                  [:a {:id "headerAskId" :class "pagetopwhite", :href "/#/ask"} "ask"] " | "
                                                  [:a {:id "headerNewId" :class "pagetopwhite", :href "/#/new"} "new"] " | "
                                                  [:a {:id "headerJobId" :class "pagetopwhite", :href "/#/job"} "jobs"] " | "
                                                  [:a {:id "headerEventId" :class "pagetopwhite", :href "/#/event"} "events"] " | "
                                                  [:a {:id "headerSubmitId" :class "pagetopwhite", :href "/#/submit"} "submit"]]]
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
                                            [:td
                                             [:center
                                              [:p
                                               "Clojure News is in beta. Please don't hesitate to report bugs to "
                                               [:a {:href "https://github.com/ertugrulcetin/ClojureNews/issues" :target "_blank"}
                                                [:u
                                                 "the github issues page."]]]]]]
                                           [:tr
                                            [:td {:id "messageContainerId"}]]
                                           [:tr
                                            [:td {:id "mainContainerId"}
                                             [:p "Loading..."]]]
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
                                               [:a {:class "pagebottomgray", :href "/#/formatting"} "Formatting"] " | "
                                               [:a {:class "pagebottomgray", :href "/#/guidelines"} "Guidelines"] " | "
                                               [:a {:class "pagebottomgray", :href "/#/faq"} "FAQ"] " | "
                                               [:a {:class "pagebottomgray", :href "/rss"} "RSS"] " | "
                                               [:a {:class "pagebottomgray", :href "https://twitter.com/clojure_news"} "Twitter"] " | "
                                               [:a {:class "pagebottomgray", :href "https://github.com/ertugrulcetin/ClojureNews"} "GitHub"] " | "
                                               [:a {:class "pagebottomgray", :href "mailto:infoclojurenews@gmail.com"} "Contact"]]
                                              [:br]
                                              [:br]]]]]]]
                                        [:script {:src "/js/clojure-news.js", :type "text/javascript"}]
                                        [:script (resource-util/create-google-analytics-code "UA-54741200-3")]]]))

            :handle-exception (fn [_]
                                "Something went wrong")))

;;RSS feed
(defn get-rss-feed
  []
  (resource :allowed-methods [:get]

            :available-media-types ["application/rss+xml" "application/rdf+xml;q=0.8" "application/atom+xml;q=0.6" "application/xml;q=0.4" "text/xml;q=0.4"]

            :handle-ok (fn [_]

                         (let [data-per-page-inc page-util/data-per-page
                               stories (get-entry-by-page "story" 1 data-per-page-inc page-util/last-n-days)]
                           (resource-util/create-rss-feed
                             (for [story stories]
                               (resource-util/create-rss-item (str/escape (:title story) {\< "&lt;", \> "&gt;", \& "&amp;", \" "&quot;", \' "&apos;"})
                                                              (str/escape (:url story) {\< "&lt;", \> "&gt;", \& "&amp;", \" "&quot;", \' "&apos;"})
                                                              (:created-date story)
                                                              (str "https://clojure.news/#/story/" (:_id story)))))))

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-robots-txt
  []
  (resource :allowed-methods [:get]

            :available-media-types ["text/plain"]

            :handle-ok (fn [_]
                         "User-agent: *\n
                         Allow: /")

            :handle-exception #(resource-util/get-exception-message %)))


;;Story
(defn create-story
  []
  (resource :allowed-methods [:put]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :put! (fn [ctx]
                    (let [data-as-map (resource-util/convert-data-map (::data ctx))
                          type (:type data-as-map)
                          title (:title data-as-map)
                          url (:url data-as-map)]

                      (check-submit-type type)
                      (check-story-type type)
                      (check-submit-title title)
                      (check-submit-url url)

                      (let [story (entry-dao/create-story (resource-util/capitalize (str/trim title))
                                                          (str/trim url)
                                                          (resource-util/get-pure-url (str/trim url))
                                                          (resource-util/get-username ctx))]
                        (user-dao/inc-user-karma-by-username (resource-util/get-username ctx))
                        {:cn-story story})))

            :handle-created (fn [ctx]
                              {:entry-id (-> ctx :cn-story :_id)})

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-stories-by-page
  [page]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]

                         (let [data-per-page-inc page-util/data-per-page
                               stories (get-entry-by-page "story" (check-page-data-format page) data-per-page-inc page-util/last-n-days)
                               real-stories (if (= (count stories) data-per-page-inc) (butlast stories) stories)]
                           (if-let [user (get-user ctx)]
                             {:story-entry           real-stories
                              :story-own-entries     (get-own-entries (:username user) stories)
                              :story-upvoted-entries (get-upvoted-entries (:username user) stories)
                              :more?                 (= data-per-page-inc (count stories))}
                             {:story-entry stories
                              :more?       (= data-per-page-inc (count stories))})))

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-story-by-id
  [id]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]

                         (check-entry-exist id)

                         (let [user (get-user ctx)
                               response {:user-obj       user
                                         :story-entry    (entry-dao/find-by-id id)
                                         :story-comments (create-comments (reduce #(conj %1 (assoc %2 :str-id (str (:_id %2))
                                                                                                      :str-parent-comment-id (if (:parent-comment-id %2)
                                                                                                                               (:parent-comment-id %2)
                                                                                                                               nil)))
                                                                                  [] (comment-entry-dao/get-comments-by-entry-id id)))
                                         :upvoted?       (upvote-dao/find-story-upvote-by-created-by-and-entry-id (:username user) id)}]
                           (if user
                             (assoc response :story-upvoted-comments (reduce #(conj %1 (:comment-id %2)) [] (upvote-dao/find-by-type-and-entry-id "story-comment" id)))
                             response)))

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-story-litte-info-by-id
  [id]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]
                         (let [story (check-entry-exist id)]
                           {:story-entry story
                            :owner?      (= (:created-by story) (-> ctx get-user :username))}))

            :handle-exception #(resource-util/get-exception-message %)))

(defn edit-story-by-id
  [id]
  (resource :allowed-methods [:post]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :post! (fn [ctx]

                     (let [story (check-entry-exist id)]
                       (check-entry-owner story ctx)

                       (let [data-as-map (resource-util/convert-data-map (::data ctx))
                             title (:title data-as-map)]

                         (check-submit-title title)
                         (entry-dao/edit-story-by-id id (resource-util/capitalize (str/trim title)))
                         {:cn-story id})))

            :handle-created (fn [ctx]
                              {:entry-id (-> ctx :cn-story)})

            :handle-exception #(resource-util/get-exception-message %)))

(defn delete-story-by-id
  [id]
  (resource :allowed-methods [:delete]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :new? (fn [_]
                    false)

            :respond-with-entity? (fn [_]
                                    true)

            :delete! (fn [ctx]

                       (let [story (check-entry-exist id)]
                         (check-entry-owner story ctx)

                         (entry-dao/delete-entry-by-id id)
                         (comment-entry-dao/delete-comments-by-entry-id id)
                         (upvote-dao/delete-upvotes-by-entry-id id)
                         (user-dao/dec-user-karma-by-username (:created-by story))))

            :handle-ok (fn [_]
                         {:deleted? true})

            :handle-exception #(resource-util/get-exception-message %)))

;;Ask
(defn create-ask
  []
  (resource :allowed-methods [:put]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :put! (fn [ctx]
                    (let [data-as-map (resource-util/convert-data-map (::data ctx))
                          type (:type data-as-map)
                          title (:title data-as-map)
                          text (:text data-as-map)]

                      (check-submit-type type)
                      (check-ask-type type)
                      (check-submit-title title)
                      (check-submit-text text)

                      (let [ask (entry-dao/create-ask (resource-util/capitalize (str/trim title))
                                                      (str/trim text)
                                                      (:username (:user-obj ctx)))]
                        (user-dao/inc-user-karma-by-username (:created-by ask))
                        {:cn-ask ask})))

            :handle-created (fn [ctx]
                              {:entry-id (-> ctx :cn-ask :_id)})

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-ask-by-page
  [page]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]

                         (let [data-per-page-inc page-util/data-per-page
                               asks (get-entry-by-page "ask" (check-page-data-format page) data-per-page-inc page-util/last-n-days)
                               real-asks (if (= (count asks) data-per-page-inc) (butlast asks) asks)]
                           (if-let [user (get-user ctx)]
                             {:ask-entry           real-asks
                              :ask-own-entries     (get-own-entries (:username user) asks)
                              :ask-upvoted-entries (get-upvoted-entries (:username user) asks)
                              :more?               (= data-per-page-inc (count asks))}
                             {:ask-entry asks
                              :more?     (= data-per-page-inc (count asks))})))

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-ask-by-id
  [id]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]

                         (check-entry-exist id)

                         (let [user (get-user ctx)
                               response {:user-obj     user
                                         :ask-entry    (entry-dao/find-by-id id)
                                         :ask-comments (create-comments (reduce #(conj %1 (assoc %2 :str-id (str (:_id %2))
                                                                                                    :str-parent-comment-id (if (:parent-comment-id %2)
                                                                                                                             (:parent-comment-id %2)
                                                                                                                             nil)))
                                                                                [] (comment-entry-dao/get-comments-by-entry-id id)))
                                         :upvoted?     (upvote-dao/find-ask-upvote-by-created-by-and-entry-id (:username user) id)}]
                           (if user
                             (assoc response :ask-upvoted-comments (reduce #(conj %1 (:comment-id %2)) [] (upvote-dao/find-by-type-and-entry-id "ask-comment" id)))
                             response)))

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-ask-litte-info-by-id
  [id]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]
                         (let [ask (check-entry-exist id)]
                           {:ask-entry ask
                            :owner?    (= (:created-by ask) (-> ctx get-user :username))}))

            :handle-exception #(resource-util/get-exception-message %)))

(defn edit-ask-by-id
  [id]
  (resource :allowed-methods [:post]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :post! (fn [ctx]

                     (let [ask (check-entry-exist id)]
                       (check-entry-owner ask ctx)

                       (let [data-as-map (resource-util/convert-data-map (::data ctx))
                             title (:title data-as-map)
                             text (:text data-as-map)]

                         (check-submit-title title)
                         (check-submit-text text)

                         (entry-dao/edit-ask-by-id id (resource-util/capitalize (str/trim title)) text)
                         {:cn-story id})))

            :handle-created (fn [ctx]
                              {:entry-id (-> ctx :cn-story)})

            :handle-exception #(resource-util/get-exception-message %)))

(defn delete-ask-by-id
  [id]
  (resource :allowed-methods [:delete]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :new? (fn [_]
                    false)

            :respond-with-entity? (fn [_]
                                    true)

            :delete! (fn [ctx]

                       (let [ask (check-entry-exist id)]
                         (check-entry-owner ask ctx)

                         (entry-dao/delete-entry-by-id id)
                         (comment-entry-dao/delete-comments-by-entry-id id)
                         (upvote-dao/delete-upvotes-by-entry-id id)
                         (user-dao/dec-user-karma-by-username (:created-by ask))))

            :handle-ok (fn [_]
                         {:deleted? true})

            :handle-exception #(resource-util/get-exception-message %)))

;;Newest Ask and Story
(defn get-newest-stories-and-stories-by-page
  [page]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]

                         (let [entries (entry-dao/get-newest-stories-and-asks (check-page-data-format page) page-util/data-per-page)]
                           (if-let [user (get-user ctx)]
                             {:newest-entry           entries
                              :newest-own-entries     (get-own-entries (:username user) entries)
                              :newest-upvoted-entries (get-upvoted-entries (:username user) entries)
                              :more?                  (= page-util/data-per-page (count entries))}
                             {:newest-entry entries
                              :more?        (= page-util/data-per-page (count entries))})))

            :handle-exception #(resource-util/get-exception-message %)))

;;Job
(defn create-job
  []
  (resource :allowed-methods [:put]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :put! (fn [ctx]
                    (let [data-as-map (resource-util/convert-data-map (::data ctx))
                          type (:type data-as-map)
                          title (:title data-as-map)
                          url (:url data-as-map)
                          city (:city data-as-map)
                          country (:country data-as-map)
                          remote? (:remote? data-as-map)]

                      (check-submit-type type)
                      (check-submit-title title)
                      (check-submit-url url)
                      (check-submit-city city)
                      (check-submit-country country)


                      (let [username (resource-util/get-username ctx)]
                        (job-dao/create-job (resource-util/capitalize (str/trim title))
                                            (str/trim url)
                                            (resource-util/capitalize (str/trim city))
                                            (resource-util/capitalize (str/trim country))
                                            remote?
                                            username)
                        (user-dao/inc-user-karma-by-username username))))

            :handle-created (fn [_]
                              {:created? true})

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-jobs-by-page
  [page]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]

                         (let [jobs (job-dao/get-last-n-days-jobs (check-page-data-format page) page-util/data-per-page)]
                           (if-let [user (get-user ctx)]
                             {:job-entry       jobs
                              :job-own-entries (get-own-jobs (:username user) jobs)
                              :more?           (= page-util/data-per-page (count jobs))}
                             {:job-entry jobs
                              :more?     (= page-util/data-per-page (count jobs))})))

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-job-litte-info-by-id
  [id]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]
                         (let [job (check-job-exist id)]
                           {:job-entry job
                            :owner?    (= (:created-by job) (-> ctx get-user :username))}))

            :handle-exception #(resource-util/get-exception-message %)))

(defn edit-job-by-id
  [id]
  (resource :allowed-methods [:post]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :post! (fn [ctx]
                     (let [data-as-map (resource-util/convert-data-map (::data ctx))
                           title (:title data-as-map)
                           url (:url data-as-map)
                           city (:city data-as-map)
                           country (:country data-as-map)
                           remote? (:remote? data-as-map)]


                       (let [job (check-job-exist id)]
                         (check-entry-owner job ctx)
                         (check-submit-title title)
                         (check-submit-url url)
                         (check-submit-city city)
                         (check-submit-country country)

                         (job-dao/edit-job-by-id id
                                                 (resource-util/capitalize (str/trim title))
                                                 (str/trim url)
                                                 (resource-util/capitalize (str/trim city))
                                                 (resource-util/capitalize (str/trim country))
                                                 remote?))))

            :handle-created (fn [_]
                              {:updated? true})

            :handle-exception #(resource-util/get-exception-message %)))

(defn delete-job-by-id
  [id]
  (resource :allowed-methods [:delete]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :new? (fn [_]
                    false)

            :respond-with-entity? (fn [_]
                                    true)

            :delete! (fn [ctx]

                       (let [job (check-job-exist id)]
                         (check-entry-owner job ctx)
                         (job-dao/delete-job-by-id id)
                         (user-dao/dec-user-karma-by-username (:created-by job))))

            :handle-ok (fn [_]
                         {:deleted? true})

            :handle-exception #(resource-util/get-exception-message %)))

;;Event
(defn create-event
  []
  (resource :allowed-methods [:put]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :put! (fn [ctx]
                    (let [data-as-map (resource-util/convert-data-map (::data ctx))
                          type (:type data-as-map)
                          title (:title data-as-map)
                          url (:url data-as-map)
                          city (:city data-as-map)
                          country (:country data-as-map)
                          starting-date-day (:starting-date-day data-as-map)
                          starting-date-month (:starting-date-month data-as-map)
                          starting-date-year (:starting-date-year data-as-map)]

                      (check-submit-type type)
                      (check-submit-title title)
                      (check-submit-url url)
                      (check-submit-city city)
                      (check-submit-country country)
                      (check-submit-day starting-date-day)
                      (check-submit-month starting-date-month)
                      (check-submit-year starting-date-year)

                      (let [username (resource-util/get-username ctx)
                            starting-date (calendar->date (doto (Calendar/getInstance)
                                                            (.set (Calendar/DAY_OF_MONTH) (Integer/parseInt starting-date-day))
                                                            (.set (Calendar/MONTH) (- (Integer/parseInt starting-date-month) 1))
                                                            (.set (Calendar/YEAR) (Integer/parseInt starting-date-year))))]


                        (event-dao/create-event (resource-util/capitalize (str/trim title))
                                                (str/trim url)
                                                starting-date
                                                (resource-util/capitalize (str/trim city))
                                                (resource-util/capitalize (str/trim country))
                                                username)
                        (user-dao/inc-user-karma-by-username username))))

            :handle-created (fn [_]
                              {:created? true})

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-events-by-page
  [page]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]

                         (let [events (event-dao/get-last-n-days-events (check-page-data-format page) page-util/data-per-page)]
                           (if-let [user (get-user ctx)]
                             {:event-entry       events
                              :event-own-entries (get-own-events (:username user) events)
                              :more?             (= page-util/data-per-page (count events))}
                             {:event-entry events
                              :more?       (= page-util/data-per-page (count events))})))

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-event-litte-info-by-id
  [id]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]
                         (let [event (check-event-exist id)]
                           {:event-entry event
                            :owner?      (= (:created-by event) (-> ctx get-user :username))}))

            :handle-exception #(resource-util/get-exception-message %)))

(defn edit-event-by-id
  [id]
  (resource :allowed-methods [:post]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :post! (fn [ctx]
                     (let [data-as-map (resource-util/convert-data-map (::data ctx))
                           title (:title data-as-map)
                           url (:url data-as-map)
                           city (:city data-as-map)
                           country (:country data-as-map)
                           starting-date-day (:starting-date-day data-as-map)
                           starting-date-month (:starting-date-month data-as-map)
                           starting-date-year (:starting-date-year data-as-map)]

                       (let [event (check-event-exist id)]
                         (check-entry-owner event ctx)
                         (check-submit-title title)
                         (check-submit-url url)
                         (check-submit-city city)
                         (check-submit-country country)
                         (check-submit-day starting-date-day)
                         (check-submit-month starting-date-month)
                         (check-submit-year starting-date-year))


                       (let [starting-date (calendar->date (doto (Calendar/getInstance)
                                                             (.set (Calendar/DAY_OF_MONTH) (Integer/parseInt starting-date-day))
                                                             (.set (Calendar/MONTH) (- (Integer/parseInt starting-date-month) 1))
                                                             (.set (Calendar/YEAR) (Integer/parseInt starting-date-year))))]

                         (event-dao/edit-event-by-id id
                                                     (resource-util/capitalize (str/trim title))
                                                     (str/trim url)
                                                     (resource-util/capitalize (str/trim city))
                                                     (resource-util/capitalize (str/trim country))
                                                     starting-date))))

            :handle-created (fn [_]
                              {:updated? true})

            :handle-exception #(resource-util/get-exception-message %)))

(defn delete-event-by-id
  [id]
  (resource :allowed-methods [:delete]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :new? (fn [_]
                    false)

            :respond-with-entity? (fn [_]
                                    true)

            :delete! (fn [ctx]

                       (let [event (check-event-exist id)]
                         (check-entry-owner event ctx)
                         (event-dao/delete-event-by-id id)
                         (user-dao/dec-user-karma-by-username (:created-by event))))

            :handle-ok (fn [_]
                         {:deleted? true})

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-own-entries
  [username entries]
  (let [object-ids (reduce #(conj %1 (:_id %2)) [] entries)
        own-entries (entry-dao/get-entries-by-username-and-entries-in-it username object-ids)]
    (reduce #(conj %1 (str (:_id %2))) [] own-entries)))

(defn get-upvoted-entries
  [username entries]
  (let [ids (reduce #(conj %1 (str (:_id %2))) [] entries)
        upvoted-entries (upvote-dao/get-upvotes-by-username-and-upvotes-in-it username ids)]
    (reduce #(conj %1 (:entry-id %2)) [] upvoted-entries)))

(defn get-entry-by-page
  [entry-type page data-per-page last-n-days]
  (let [entries (entry-dao/get-last-n-days-entries entry-type last-n-days)
        ranked-entries (resource-util/create-ranked-links entries)]
    (resource-util/get-links page data-per-page ranked-entries)))

(defn get-own-jobs
  [username jobs]
  (let [object-ids (reduce #(conj %1 (:_id %2)) [] jobs)
        own-entries (job-dao/get-entries-by-username-and-jobs-in-it username object-ids)]
    (reduce #(conj %1 (str (:_id %2))) [] own-entries)))

(defn get-own-events
  [username events]
  (let [object-ids (reduce #(conj %1 (:_id %2)) [] events)
        own-entries (event-dao/get-entries-by-username-and-events-in-it username object-ids)]
    (reduce #(conj %1 (str (:_id %2))) [] own-entries)))

(defn get-user
  [ctx]
  (if-let [cookie (resource-util/get-cookie ctx)]
    (if-let [user (user-dao/find-by-username (resource-util/get-username-from-cookie ctx))]
      (if (= cookie (:cookie user))
        {:username (:username user)
         :karma    (:karma user)}))))

(defn group-by-parent-and-sort-by-vote
  [comment-map]
  (reduce #(assoc %1 (first %2) (vec
                                  (sort-by :upvote (fn [a b]
                                                     (compare b a)) (second %2))))
          {}
          (group-by :str-parent-comment-id comment-map)))

(defn create-comment-tree
  [key grouped-comments coll]
  (let [comments (get grouped-comments key)]
    (if (nil? comments)
      (seq coll)
      (for [comment* (get grouped-comments key)]
        (if (nil? (:str-parent-comment-id comment*))
          (create-comment-tree (:str-id comment*) grouped-comments (conj coll [comment*]))
          (create-comment-tree (:str-id comment*) grouped-comments (update-in coll [(dec (count coll))] conj comment*)))))))


(defn flat-one-level [coll]
  (mapcat #(if (vector? %) [%] %) coll))

(defn flat-until-every-vector
  [coll]
  (if (every? vector? coll)
    coll
    (recur (flat-one-level coll))))

(defn create-comments
  [comments-map]
  (let [grouped-comments (group-by-parent-and-sort-by-vote comments-map)
        comment-tree (create-comment-tree nil grouped-comments [])]
    (flatten
      (reduce (fn [comment-coll comment-data]
                (conj comment-coll (distinct
                                     (flatten
                                       (reduce (fn [x y]
                                                 (conj x
                                                       (reduce #(conj %1 (into {} %2)) [] (keep-indexed #(concat {:index %1} %2) y))))
                                               []
                                               (flat-until-every-vector comment-data))))))
              [] comment-tree))))

(defn check-submit-type
  [type]
  (when-not (validation/submit-type? type)
    (throw (RuntimeException. "Not valid type."))))

(defn check-story-type
  [type]
  (when-not (= type "story")
    (throw (RuntimeException. "Not valid story type."))))

(defn check-ask-type
  [type]
  (when-not (= type "ask")
    (throw (RuntimeException. "Not valid ask type."))))

(defn check-submit-title
  [title]
  (when-not (validation/submit-title? title)
    (throw (RuntimeException. (str "Please limit title to 80 characters.This had " (count title) ".")))))

(defn check-submit-url
  [url]
  (when-not (validation/submit-url? url)
    (throw (RuntimeException. "Not valid url. Ex: https://www.google.com"))))

(defn check-submit-text
  [text]
  (when-not (validation/submit-text? text)
    (throw (RuntimeException. "Please limit text to 2500 characters."))))

(defn check-submit-city
  [city]
  (when-not (validation/submit-city? city)
    (throw (RuntimeException. error-message/city))))

(defn check-submit-country
  [country]
  (when-not (validation/submit-city? country)
    (throw (RuntimeException. error-message/country))))

(defn check-submit-day
  [day]
  (when-not (validation/submit-day? day)
    (throw (RuntimeException. error-message/day))))

(defn check-submit-month
  [month]
  (when-not (validation/submit-month? month)
    (throw (RuntimeException. error-message/month))))

(defn check-submit-year
  [year]
  (when-not (validation/submit-year? year)
    (throw (RuntimeException. error-message/year))))

(defn check-entry-exist
  [id]
  (try
    (if-let [entry (entry-dao/find-by-id id)]
      entry
      (throw (RuntimeException. error-message/no-entry)))
    (catch Exception e
      (throw (RuntimeException. error-message/no-entry)))))

(defn check-job-exist
  [id]
  (try
    (if-let [job (job-dao/find-by-id id)]
      job
      (throw (RuntimeException. error-message/no-job)))
    (catch Exception e
      (throw (RuntimeException. error-message/no-job)))))

(defn check-event-exist
  [id]
  (try
    (if-let [event (event-dao/find-by-id id)]
      event
      (throw (RuntimeException. error-message/no-event)))
    (catch Exception e
      (throw (RuntimeException. error-message/no-event)))))

(defn check-entry-owner
  [entry ctx]
  (when-not (= (:created-by entry) (resource-util/get-username ctx))
    (throw (RuntimeException. "You are not the owner."))))

(defn check-page-data-format
  [page]
  (try
    (let [p-int (Integer/parseInt page)]
      (when (<= p-int 0)
        (throw (RuntimeException. "Not valid page number.")))
      p-int)
    (catch Exception e
      (throw (RuntimeException. "Not valid page number.")))))

(defn calendar->date
  [calendar]
  (-> calendar .getTimeInMillis Date.))