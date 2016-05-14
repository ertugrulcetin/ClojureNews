(defproject clojure-news "0.1.0-SNAPSHOT"
  :description "Clojure News"
  :url "http://www.clojure.news"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/core.async "0.2.374"]
                 [org.clojure/clojurescript "1.8.51"]
                 [ring "1.4.0"]
                 [compojure "1.5.0"]
                 [kezban "0.1.1-SNAPSHOT"]
                 [liberator "0.14.1"]
                 [com.novemberain/monger "3.0.2"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.3"]]

  :main clj.core
  )
