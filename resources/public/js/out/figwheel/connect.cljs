(ns figwheel.connect (:require [cljs.main] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:load-warninged-code true, :build-id "clojure-news", :websocket-url "ws://localhost:8080/figwheel-ws"})

