(ns clj.util.resource
  (:require [clojure.data.json :as json]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clj.dao.user :as user-dao])
  (:import (java.util Date)))

(defonce avaliable-media-types ["application/json" "application/json; charset=UTF-8" "application/json; charset=utf-8"])

(defn- body-as-string
  [ctx]
  (if-let [body (get-in ctx [:request :body])]
    (condp instance? body
      String body
      (slurp (io/reader body)))))

(defn check-content-type
  [ctx content-types]
  (if (#{:put :post} (get-in ctx [:request :request-method]))
    (or
      (some #{(get-in ctx [:request :headers "content-type"])}
            content-types)
      [false {:message "Unsupported Content-Type"}])
    true))

(defn parse-json [ctx key]
  (when (#{:put :post} (get-in ctx [:request :request-method]))
    (try
      (if-let [body (body-as-string ctx)]
        (let [data (json/read-str body)]
          [false {key data}])
        {:message "No body"})
      (catch Exception e
        (.printStackTrace e)
        {:message (format "IOException: %s" (.getMessage e))}))))

(defn create-cookie
  [cookie]
  (str "user=" cookie "; expires=" (.toString (Date. (+ (.getTime (Date.)) (* 1000 60 60 24 365 10)))) "; path=/; HttpOnly"))

;;TODO check secure flag
(defn delete-cookie
  [cookie]
  (str "user=" cookie "; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; HttpOnly; secure"))

(defn convert-data-map
  "Converts clojure map's string keywords to keyword functions"
  [json-clojure-map]
  (reduce #(assoc %1 (keyword (first %2)) (second %2)) {} json-clojure-map))

(defn get-cookie
  [ctx]
  (-> ctx :request :cookies (get "user") :value))

(defn get-username-from-cookie
  [ctx]
  (if-let [cookie (get-cookie ctx)]
    (.substring cookie 0 (str/index-of cookie "&"))))

(defn get-exception-message
  [ctx]
  {:error (.getMessage (:exception ctx))})

(defn get-pure-url
  [url]
  (let [s (str/replace url #"^(https?)://(www.)?" "")]
    (if-let [index (str/index-of s "/")]
      (.substring s 0 index)
      s)))

(defn auth?
  [ctx]
  (if-let [cookie (get-cookie ctx)]
    (if-let [username (get-username-from-cookie ctx)]
      (if-let [user (user-dao/find-by-username username)]
        (if (= cookie (:cookie user))
          {:user-obj user})))))

(defn get-username
  [ctx]
  (-> ctx :user-obj :username))

(defn create-rank
  [number-of-votes hour]
  (/ (- number-of-votes 1) (Math/pow (+ hour 2) 1.8)))

(defn create-ranked-links
  [links]
  (sort-by :rank #(compare %2 %1) (reduce (fn [coll link]
                                            (conj coll
                                                  (assoc link :rank (create-rank (:upvote link)
                                                                                 (-> (- (.getTime (Date.)) (.getTime (:created-date link)))
                                                                                     (quot 1000)
                                                                                     (quot 60)
                                                                                     (quot 60)))))) [] links)))

(defn get-links
  [page data-per-page links]
  (take data-per-page (drop (* (- data-per-page 1) (- page 1)) links)))

(defn capitalize
  [text]
  (let [s (str/split text #"\s+")
        first-s (first s)
        rest-s (rest s)]
    (apply str (interpose " " (concat [(str/capitalize first-s)] rest-s)))))

(defn random-password
  ([] (random-password 9))
  ([n]
   (let [chars (map char (range 35 127))
         password (take n (repeatedly #(rand-nth chars)))]
     (apply str password))))

(defn create-google-analytics-code
  [ga]
  (str "(function(i,s,o,g,r,a,m)
  {i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
  a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })
  (window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n
  ga('create', " (str "'" ga "'") ", 'auto');\n  ga('send', 'pageview');\n"))

(defn create-rss-item
  [title link pubDate comments]
  (str "<item>"
       "<title>" title "</title>"
       "<link>" link "</link>"
       "<pubDate>" pubDate "</pubDate>"
       "<comments>" comments "</comments>"
       "<description>"
       (str "<![CDATA[<a href=" comments ">Comments</a>]]>")
       "</description>"
       "</item>"))

(defn create-rss-feed
  [items]
  (str "<rss version=\"2.0\">"
       "<channel>"
       "<title>" "Clojure News" "</title>"
       "<link>" "https://clojure.news" "</link>"
       "<description>" "Links for the intellectually curious, ranked by Clojurists." "</description>"
       (apply str items)
       "</channel>"
       "</rss>"))