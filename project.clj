(defproject clojure-news "0.1.0-SNAPSHOT"
  :description "Clojure News"
  :url "https://clojure.news"
  :author "Ertuğrul Çetin"
  :email "ertu.ctn@gmail.com"
  :license {:name "Apache License"
            :url  "http://www.apache.org/licenses/LICENSE-2.0"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/core.async "0.2.374"]
                 [org.clojure/clojurescript "1.8.51"]
                 [cheshire "5.6.1"]
                 [cljs-ajax "0.5.4"]
                 [ring "1.4.0"]
                 [amalloy/ring-gzip-middleware "0.1.3"]
                 [compojure "1.5.0"]
                 [kezban "0.1.1-SNAPSHOT"]
                 [liberator "0.14.1"]
                 [com.novemberain/monger "3.0.2"]
                 [pandect "0.6.0"]
                 [reagent "0.6.0-rc"]
                 [secretary "1.2.3"]
                 [hiccup "1.0.5"]
                 [com.andrewmcveigh/cljs-time "0.4.0"]
                 [com.draines/postal "2.0.0"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.slf4j/slf4j-log4j12 "1.7.21"]
                 [log4j/log4j "1.2.17" :exclusions [javax.mail/mail
                                                    javax.jms/jms
                                                    com.sun.jmdk/jmxtools
                                                    com.sun.jmx/jmxri]]]
  :plugins [[lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.3"]
            [lein-figwheel "0.5.3-1"]
            [lein-cloverage "1.0.7-SNAPSHOT"]]

  :main clj.main

  :ring {:handler clj.main/handler}

  :cljsbuild {:builds {:dev  {:id           "clojure-news"
                              :source-paths ["src/cljs" "src/cljc"]
                              :figwheel     {:load-warninged-code true}
                              :compiler     {:main       "cljs.main"
                                             :asset-path "js/out"
                                             :output-dir "resources/public/js/out"
                                             :output-to  "resources/public/js/clojure-news.js"}}

                       :prod {:id           "clojure-news"
                              :source-paths ["src/cljs" "src/cljc"]
                              :figwheel     false
                              :compiler     {:main          "cljs.main"
                                             :output-to     "resources/public/js/clojure-news.js"
                                             :optimizations :advanced
                                             :pretty-print  false}}}}
  :figwheel {:http-server-root "public"
             :server-port      3000
             ;:server-ip        "192.168.1.76"
             :css-dirs         ["resources/public/css"]
             :ring-handler     clj.main/handler})
