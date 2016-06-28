(ns util.view
  (:require [goog.dom :as dom]
            [reagent.core :as r]
            [clojure.string :as str]
            [cljc.validation :as validation]
            [view.user]
            ))

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
  (js/setTimeout (fn [] (set! (.-innerText (dom/getElement "messageContainerId")) "")) 3000))

;;TODO will be changed!!! https.....!
(defn change-url
  [path]
  (set! window/location (str "http://" window/location.host path)))

(defn in?
  [element coll]
  (some #(= element %) coll))

(defn parse-comment
  [commentt]
  (interpose '([:p]) (reduce (fn [coll-p paragraph]
                                      (conj coll-p (reverse (into (list) (let [r (reduce (fn [coll-l line]
                                                                                           (if (str/starts-with? line "  ")
                                                                                             (conj coll-l [:code (apply str (cons (first (re-seq #"\s+" line)) (interpose " " (reduce (fn [coll-t token]
                                                                                                                                                                                        (conj coll-t token)) [] (str/split line #"\s+")))))])
                                                                                             (conj coll-l (let [tokens (reduce (fn [coll-t token]
                                                                                                                                 (cond
                                                                                                                                   (validation/submit-url? token) (conj coll-t [:a {:href token} token])
                                                                                                                                   (some? (re-seq #"[*].+[*]" token)) (conj coll-t [:i token])
                                                                                                                                   :else (conj coll-t token))) [] (str/split line #"\s+"))
                                                                                                                added-whitespace (interpose " " tokens)]
                                                                                                            added-whitespace)
                                                                                                   )))
                                                                                         [] (str/split paragraph #"\n"))
                                                                               ]
                                                                           (println "Here is the R: " r)
                                                                           (reduce #(if (= :code (first %2))
                                                                                     (if (= :pre (first (last %1)))
                                                                                       (conj (vec (drop-last %1)) (conj (conj (last %1) [:br]) %2))
                                                                                       (conj %1 [:pre %2]))
                                                                                     (conj %1 %2)) [] r))))))
                                    [] (reduce conj [] (str/split commentt #"\n{2,}")))))