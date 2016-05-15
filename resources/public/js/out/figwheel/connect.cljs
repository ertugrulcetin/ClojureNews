(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [cljs.ertus]))
(figwheel.client/start {:build-id "clojure-news", :websocket-url "ws://localhost:8080/figwheel-ws"})

