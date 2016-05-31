(ns cljc.string-util
  (:require [clojure.string :as str]))

(defn trim-map-values
  [m]
  (reduce #(assoc %1 (first %2) (str/trim (second %2))) {} m))
