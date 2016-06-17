(ns clj.deneme)

(def m [
        {:id     "ertu"
         :parent nil
         :vote   6}
        {:id     "can"
         :parent nil
         :vote   3}
        {:id     "melis"
         :parent "ertu"
         :vote   1}
        {:id     "buse"
         :parent "ertu"
         :vote   1}
        {:id     "gökmen"
         :parent "melis"
         :vote   2}
        {:id     "mert"
         :parent "melis"
         :vote   3}
        {:id     "kerem"
         :parent "can"
         :vote   2}
        {:id     "fatih"
         :parent "gökmen"
         :vote   8}])

(defn group-by-parent-and-sort-by-vote
  [comment-map]
  (reduce #(assoc %1 (first %2) (vec
                                  (sort-by :vote (fn [a b]
                                                   (compare b a)) (second %2))))
          {}
          (group-by :parent comment-map)))

(defn create-comment-tree
  [key grouped-comments coll]
  (let [comments (get grouped-comments key)]
    (if (nil? comments)
      (seq coll)
      (for [comment* (get grouped-comments key)]
        (if (nil? (:parent comment*))
          (create-comment-tree (:id comment*) grouped-comments (conj coll [comment*]))
          (create-comment-tree (:id comment*) grouped-comments (update-in coll [(dec (count coll))] conj comment*)))))))

(defn group-by-parent-and-sort-by-vote
  [comment-tree]
  (reduce #(assoc %1 (first %2) (vec
                                  (sort-by :vote (fn [a b]
                                                   (compare b a)) (second %2))))
          {}
          (group-by :parent comment-tree)))


(defn flatten-one-level [coll]
  (mapcat #(if (vector? %) [%] %) coll))

(defn flat-until-every-vector
  [coll]
  (if (every? vector? coll)
    coll
    (recur (flatten-one-level coll))))


(defn create-comment-hierarchy
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