(ns util.view
  (:require [goog.dom :as dom]
            [reagent.core :as r]
            [clojure.string :as str]
            [cljc.validation :as validation]
            [view.user]
            [cljs-time.core :as cljs-time]))

(defonce main-container (dom/getElement "mainContainerId"))

(defonce message-container (dom/getElement "messageContainerId"))

(defn create-field-val-map
  [field-ids]
  (reduce #(assoc %1 (keyword (.-name (dom/getElement %2))) (.-value (dom/getElement %2))) {} field-ids))

(defn render-error-message
  [message]
  (r/render-component [(fn [] [:p {:style {:color "red"}} message])] util.view/message-container))

(defn render-update-successfully
  []
  (r/render-component [view.user/component-update] util.view/message-container)
  (js/setTimeout (fn [] (set! (.-innerText (dom/getElement "messageContainerId")) "")) 2500))

(defn render-forgot-password-successfully
  []
  (r/render-component [view.user/component-send-forgot-email] util.view/message-container))

(defn change-url
  [path]
  (set! window/location (str window.location.protocol "//" window/location.host path)))

(defn change-url-to-story
  []
  (change-url "/#!/story"))

(defn change-url-to-ask
  []
  (change-url "/#!/ask"))

(defn change-url-to-jobs
  []
  (change-url "/#!/job"))

(defn change-url-to-events
  []
  (change-url "/#!/event"))

(defn in?
  [element coll]
  (some #(= element %) coll))

(defn get-italic-token
  [token]
  (str/trim (apply str (drop-last (drop 1 token)))))

(defn create-code-token
  [line]
  [:code (apply str (cons (first (re-seq #"\s+" line)) (interpose " " (reduce conj [] (str/split line #"\s+")))))])

(defn create-tokens
  [line]
  (let [tokens (reduce (fn [coll-t token]
                         (cond
                           (validation/submit-url? token) (conj coll-t [:a {:href token :target "_blank"} [:u token]])
                           (some? (re-seq #"[*].+[*]" token)) (conj coll-t [:i (get-italic-token token)])
                           :else (conj coll-t token))) [] (str/split line #"\s+"))
        added-whitespace (interpose " " tokens)]
    added-whitespace))

(defn split-into-lines
  [paragraph]
  (reduce (fn [coll-l line]
            (if (str/starts-with? line "  ")
              (conj coll-l (create-code-token line))
              (conj coll-l (create-tokens line)))) [] (str/split paragraph #"\n")))

(defn group-code-tokens
  [lines]
  (reduce #(if (= :code (first %2))
            (if (= :pre (first (last %1)))
              (conj (vec (drop-last %1)) (conj (conj (last %1) [:br]) %2))
              (conj %1 [:pre %2]))
            (conj %1 %2)) [] lines))

(defn split-into-paragraphs
  [commentt]
  (reduce (fn [coll-p paragraph]
            (conj coll-p (reverse (into (list) (group-code-tokens (split-into-lines paragraph))))))
          []
          (reduce conj [] (filter #(not (str/blank? %)) (str/split commentt #"\n{2,}")))))

(defn parse-comment
  [commentt]
  (interpose '([:p]) (split-into-paragraphs commentt)))

(defn scroll-to-top
  []
  (.scrollTo js/window 0 (.-scrollHeight (.-body js/document))))

(defn generate-comment-status
  [number-of-comments]
  (case number-of-comments
    0 "discuss"
    1 "1 comment"
    (str number-of-comments " comments")))


(defn generate-upvote-status
  [number-of-upvotes]
  (if (> number-of-upvotes 1)
    (str number-of-upvotes " points by ")
    (str number-of-upvotes " point by ")))

(defn generate-age-status
  [created-date]
  (try
    (let [current-date (js/Date.)
          created-date-as-js (js/Date. created-date)
          min (cljs-time/in-minutes (cljs-time/interval created-date-as-js current-date))
          hour (cljs-time/in-hours (cljs-time/interval created-date-as-js current-date))
          day (cljs-time/in-days (cljs-time/interval created-date-as-js current-date))]
      (cond
        (< min 60) (if (= min 1) (str min " minute ago") (str min " minutes ago"))
        (< hour 24) (if (= hour 1) (str hour " hour ago") (str hour " hours ago"))
        :else
        (if (= day 1) (str day " day ago") (str day " days ago"))))
    (catch js/Error e
      "0 minutes ago")))

(defn- parse-date
  [date]
  (str/split (.substring date 0 10) #"-"))

(defn get-day-of-date
  [day]
  (last (parse-date day)))

(defn get-month-of-date
  [month]
  (second (parse-date month)))

(defn get-year-of-date
  [year]
  (first (parse-date year)))

(defn change-color-to-default
  []
  (doseq [element-id ["headerNewId" "headerStoryId" "headerAskId" "headerJobId" "headerEventId" "headerSubmitId"]]
    (set! (-> (dom/getElement element-id) .-style .-color) "#FFFFFF")))

(defn change-color-to-blue
  [element-id]
  (do
    (change-color-to-default)
    (set! (-> (dom/getElement element-id) .-style .-color) "#1850C7")))

(defn starts-with
  [token page]
  (when token
    (= (.indexOf token page) 0)))

(defn select-header-button
  [token]
  (cond
    (starts-with token "/new") (change-color-to-blue "headerNewId")
    (starts-with token "/story") (change-color-to-blue "headerStoryId")
    (starts-with token "/ask") (change-color-to-blue "headerAskId")
    (starts-with token "/job") (change-color-to-blue "headerJobId")
    (starts-with token "/event") (change-color-to-blue "headerEventId")
    (= token "/submit") (change-color-to-blue "headerSubmitId")
    (or (= token "/") (= token "")) (change-color-to-blue "headerStoryId")
    :else
    (change-color-to-default)))

(defn change-page-title
  [title]
  (set! (.-title js/document) (str title " | Clojure News")))

(defn change-header-links-page-titles
  [token]
  (case token
    "/new" (change-page-title "Newest")
    "/story" (change-page-title "Story")
    "/ask" (change-page-title "Ask")
    "/job" (change-page-title "Clojure Jobs")
    "/event" (change-page-title "Events")
    "/submit" (change-page-title "Submit")
    nil))
