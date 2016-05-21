(ns clj.route.login
  (:require [compojure.core :refer [defroutes GET POST PUT]]
            [compojure.route :refer [not-found]]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :as rep]
            [clj.util.resource :as resource-util]
            [clj.dao.user :as user-dao]
            [kezban.core :as kez]
            [cheshire.core :as json]))


(defroutes route

           (POST "/login" []

             )

           (POST "/logout" []

             )

           (PUT "/signup" []
             (resource :allowed-methods [:put]

                       :available-media-types resource-util/avaliable-media-types

                       :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

                       :malformed? #(resource-util/parse-json % ::data)

                       :put! (fn [ctx]
                               (let [data-as-map (resource-util/convert-data-map (::data ctx))
                                     username (:username data-as-map)
                                     password (:password data-as-map)]

                                 (if (user-dao/find-by-username username)
                                   (throw (RuntimeException. "That username is taken. Please choose another.")))

                                 {:user-obj (user-dao/create-user username password)}))

                       :as-response (fn [d ctx]
                                      (-> (rep/as-response d ctx)
                                          (assoc-in [:headers "Set-Cookie"] (resource-util/create-cookie (kez/->>> :cookie :user-obj ctx)))))

                       :handle-created (fn [_]
                                         {:success? true})

                       :handle-exception (fn [ctx]
                                           {:error (.getMessage (:exception ctx))}))))