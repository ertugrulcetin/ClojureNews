(ns util.route)



(defmacro combine-routes
  [& routes]
  `(do ~@routes))