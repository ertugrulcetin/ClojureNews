(ns figwheel.connect (:require [cljs.main] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "clojure-news", :websocket-url "ws://localhost:3000/figwheel-ws"})

