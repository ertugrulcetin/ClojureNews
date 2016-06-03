(ns cljc.string-util
  (:require [clojure.string :as str]))

(defn trim-map-values
  [m]
  (reduce #(assoc %1 (first %2) (if (str/blank? (second %2)) "" (second %2))) {} m))

(defn new-line-tokens
  [about]
  (filter #(not (str/blank? %)) (str/split (or about "") #"\n")))