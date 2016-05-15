(ns clj.route.user
  (:require [compojure.core :refer [defroutes GET POST PUT]]
            [compojure.route :refer [not-found]]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :as rep]
            [ring.util.response :as response]
            [clj.util.resource :as resource-util]
            [clj.dao.user :as user-dao]
            [clojure.data.json :as json]
            [clojure.java.io :as io]))


(defroutes route

           (GET "/" []
             (io/resource "index.html"))

           (GET "/ex" []
             (resource :allowed-methods [:get]
                       :available-media-types ["application/json"]
                       :known-content-type? #(resource-util/check-content-type % ["application/json"])
                       :handle-ok (fn [ctx] (throw (RuntimeException. "Please man!")))
                       :handle-exception (fn [ctx]
                                           {:error "Invalid Username"})))

           (GET "/user/:username" [username]
             )

           (POST "/user/login" []

             )

           (POST "/user/logout" []

             )

           (POST "/user/info" []
             )

           (PUT "/user/signup" []
             (resource :allowed-methods [:put]
                       :available-media-types ["application/json"]
                       :known-content-type? #(resource-util/check-content-type % ["application/json"])
                       :malformed? #(resource-util/parse-json % ::data)
                       :put! (fn [ctx]
                               (let [m (map #(second %) (::data ctx))
                                     username (first m)
                                     password (second m)]
                                 {:ertu (user-dao/create-user username password)}))
                       :as-response (fn [d ctx]
                                      (-> (rep/as-response d ctx) ;; default implementation
                                          (assoc-in [:headers "Set-Cookie"] "username=Ertus Ye; expires=Thu, 20 Dec 2016 12:00:00 UTC; path=/; HttpOnly")))
                       :handle-created (fn [ctx]
                                         (::data ctx))))

           (not-found "Unknown."))