(ns multi-ex)

(defmulti say-hello
          (fn [person]
            (:lang person)))

(def person-en {:name    "ertu"
                :surname "çetin"
                :lang    :en})

(def person-esp {:name    "gomez"
                 :surname "peo"
                 :lang    :esp})

(defmethod say-english :en
  [person]
  (let [{:keys [name surname lang]} person]
    (println "Name is: " name)
    (println "Surname is: " surname)
    (println "Lang is: " lang)))

(defmethod say-esp :esp
  [person]
  (println "Espp!!!!"))