(ns clj.route.entry
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE]]
            [compojure.route :refer [not-found]]
            [clj.controller.entry :as controller]))

(defroutes route

           (GET "/" []
             (controller/home-page))

           ;(GET "/entry/:id" [id]
           ;  (controller/entry id))
           ;
           (PUT "/entry/story" []
             (controller/create-story))

           ;(POST "/entry/:id" [id]
           ;  (controller/entry-update id))
           ;
           ;(DELETE "/entry/:id" [id]
           ;  (controller/entry-delete id))

           )

