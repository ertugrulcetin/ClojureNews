(ns clj.controller.entry
  (:require [liberator.core :refer [resource defresource]]
            [clj.util.resource :as resource-util]
            [clj.dao.user :as user-dao]
            [clj.dao.entry :as entry-dao]
            [clj.dao.comment-entry :as comment-entry-dao]
            [clj.dao.upvote :as upvote-dao]
            [hiccup.core :as hiccup]
            [cljc.validation :as validation]
            [clojure.string :as str]
            [monger.json]))

(declare get-user
         create-ask
         create-entry
         check-story-type
         check-ask-type
         check-submit-type
         check-submit-title
         check-submit-url
         check-submit-text
         check-entry-exist
         check-entry-owner
         check-page-data-format
         group-by-parent-and-sort-by-vote
         create-comment-tree
         flat-one-level
         flat-until-every-vector
         create-comments
         get-entry-by-page
         get-own-entries
         get-upvoted-entries)

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
                                            [:td
                                             [:center
                                              [:p
                                               "Clojure News is in " [:b "beta"] ". Please don't hesitate to report bugs to "
                                               [:a {:href "mailto:info@clojure.news"}
                                                [:u
                                                 "info@clojure.news"]]]]]]
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
                                               [:a {:class "pagebottomgray", :href "/#/guidelines"} "Guidelines"] " | "
                                               [:a {:class "pagebottomgray", :href "/#/faq"} "FAQ"] " | "
                                               [:a {:class "pagebottomgray", :href "/#/lists"} "Lists"] " | "
                                               [:a {:class "pagebottomgray", :href "mailto:info@clojure.news"} "Contact"]]
                                              [:br]
                                              [:br]]]]]]]
                                        [:script {:src "/js/clojure-news.js", :type "text/javascript"}]]]))

            :handle-exception (fn [_]
                                "Something went wrong")))

(defn entry
  []
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]
                         (entry-dao/get-newest-stories-and-asks))

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

                      (let [story (entry-dao/create-story (str/capitalize (str/trim title))
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

                         (let [stories (get-entry-by-page "story" (check-page-data-format page) resource-util/data-per-page resource-util/last-n-days)]
                           (if-let [user (get-user ctx)]
                             {:story-entry           stories
                              :story-own-entries     (get-own-entries (:username user) "story" stories)
                              :story-upvoted-entries (get-upvoted-entries (:username user) "story" stories)}
                             {:story-entry stories})))

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
                                                                                  [] (comment-entry-dao/get-comments-by-entry-id id)))}]
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
                         (entry-dao/edit-story-by-id id (str/trim title))
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

            :authorized? (fn [ctx]

                           (if-let [cookie (resource-util/get-cookie ctx)]
                             (if-let [username (resource-util/get-username-from-cookie ctx)]
                               (if-let [user (user-dao/find-by-username username)]
                                 (if (= cookie (:cookie user))
                                   {:user-obj user})))))

            :put! (fn [ctx]
                    (let [data-as-map (resource-util/convert-data-map (::data ctx))
                          type (:type data-as-map)
                          title (:title data-as-map)
                          text (:text data-as-map)]

                      (check-submit-type type)
                      (check-ask-type type)

                      (check-submit-title title)
                      (check-submit-text text)

                      {:cn-ask (entry-dao/create-ask (str/capitalize (str/trim title))
                                                     (str/trim text)
                                                     (:username (:user-obj ctx)))}))

            :handle-created (fn [ctx]
                              {:entry-id (-> ctx :cn-ask :_id)})

            :handle-exception (fn [ctx]
                                (resource-util/get-exception-message ctx))))

(defn get-ask-by-page
  [page]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]

                         (let [stories (get-entry-by-page "ask" (check-page-data-format page) resource-util/data-per-page resource-util/last-n-days)]
                           (if-let [user (get-user ctx)]
                             {:ask-entry           stories
                              :ask-own-entries     (get-own-entries (:username user) "ask" stories)
                              :ask-upvoted-entries (get-upvoted-entries (:username user) "ask" stories)}
                             {:ask-entry stories})))

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
                                                                                [] (comment-entry-dao/get-comments-by-entry-id id)))}]
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

                         (entry-dao/edit-ask-by-id id (str/trim title) text)
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

(defn get-own-entries
  [username type entries]
  (let [object-ids (reduce #(conj %1 (:_id %2)) [] entries)
        own-entries (entry-dao/get-entries-by-username-and-entries-in-it username type object-ids)]
    (reduce #(conj %1 (str (:_id %2))) [] own-entries)))

(defn get-upvoted-entries
  [username type entries]
  (let [ids (reduce #(conj %1 (str (:_id %2))) [] entries)
        upvoted-entries (upvote-dao/get-upvotes-by-username-and-upvotes-in-it username type ids)]
    (reduce #(conj %1 (:entry-id %2)) [] upvoted-entries)))

(defn get-entry-by-page
  [entry-type page data-per-page last-n-days]

  (let [entries (entry-dao/get-last-n-days-entries entry-type last-n-days)
        ranked-entries (resource-util/create-ranked-links entries)]
    (resource-util/get-links page data-per-page ranked-entries)))

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
  (if-not (validation/submit-type? type)
    (throw (RuntimeException. "Not valid type."))))

(defn check-story-type
  [type]
  (if-not (= type "story")
    (throw (RuntimeException. "Not valid story type."))))

(defn check-ask-type
  [type]
  (if-not (= type "ask")
    (throw (RuntimeException. "Not valid ask type."))))

(defn check-submit-title
  [title]
  (if-not (validation/submit-title? title)
    (throw (RuntimeException. (str "Please limit title to 80 characters.This had " (count title) ".")))))

(defn check-submit-url
  [url]
  (if-not (validation/submit-url? url)
    (throw (RuntimeException. "Not valid url. Ex: https://www.google.com"))))

(defn check-submit-text
  [text]
  (if-not (validation/submit-text? text)
    (throw (RuntimeException. "Please limit text to 2500 characters."))))

(defn check-entry-exist
  [id]
  (try
    (if-let [entry (entry-dao/find-by-id id)]
      entry
      (throw (RuntimeException. "No such entry!")))
    (catch Exception e
      (throw (RuntimeException. "No such entry!")))))

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