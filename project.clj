(defproject clojure-news "0.1.0-SNAPSHOT"
  :description "Clojure News"
  :url "http://www.clojure.news"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/core.async "0.2.374"]
                 [org.clojure/clojurescript "1.8.51"]
                 [cheshire "5.6.1"]
                 [cljs-ajax "0.5.4"]
                 [ring "1.4.0"]
                 [compojure "1.5.0"]
                 [kezban "0.1.1-SNAPSHOT"]
                 [liberator "0.14.1"]
                 [com.novemberain/monger "3.0.2"]
                 [pandect "0.6.0"]
                 [reagent "0.6.0-alpha2"]
                 [secretary "1.2.3"]
                 [hiccup "1.0.5"]
                 [com.andrewmcveigh/cljs-time "0.4.0"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.slf4j/slf4j-log4j12 "1.7.21"]
                 [log4j/log4j "1.2.17" :exclusions [javax.mail/mail
                                                    javax.jms/jms
                                                    com.sun.jmdk/jmxtools
                                                    com.sun.jmx/jmxri]]]
  :plugins [[lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.3"]
            [lein-figwheel "0.5.3-1"]]

  :main clj.main

  :ring {:handler clj.main/handler}

  :cljsbuild {
              :builds [{:id           "clojure-news"
                        :source-paths ["src/cljs" "src/cljc"]
                        :figwheel     true
                        :compiler     {:main       "cljs.main"
                                       :asset-path "js/out"
                                       :output-dir "resources/public/js/out"
                                       :output-to  "resources/public/js/clojure-news.js"}}]}
  :figwheel {
             :http-server-root "public"
             :server-port      8080
             ;:server-ip        "192.168.1.84"
             :css-dirs         ["resources/public/css"]
             :ring-handler     clj.main/handler})
