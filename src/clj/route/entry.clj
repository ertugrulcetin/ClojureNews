(ns clj.route.entry
  (:require [compojure.core :refer [defroutes GET POST PUT]]
            [compojure.route :refer [not-found]]
            [liberator.core :refer [resource defresource]]
            [clj.dao.user :as user-dao]
            [clj.util.resource :as resource-util]))


(defroutes route

           (GET "/entry" []
             (resource :allowed-methods [:get]

                       :available-media-types resource-util/avaliable-media-types

                       :handle-ok (fn [ctx]

                                    ;;TODO will check real log-in!
                                    ;;TODO check cookie nil control, may fetch user whose cookie nil !!!
                                    (if-let [cookie (resource-util/get-cookie ctx)]
                                      (if-let [user (user-dao/find-by-username (resource-util/get-username-from-cookie ctx))]
                                        (if (= cookie (:cookie user))
                                          {:user-obj {:username (:username user)
                                                      :karma    (:karma user)}}
                                          {:user-obj nil})
                                        {:user-obj nil})
                                      {:user-obj nil}))

                       :handle-exception (fn [ctx]
                                           {:error (.getMessage (:exception ctx))}))))