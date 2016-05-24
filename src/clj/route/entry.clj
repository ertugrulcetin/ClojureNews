(ns clj.route.entry
  (:require [compojure.core :refer [defroutes GET POST PUT]]
            [compojure.route :refer [not-found]]
            [liberator.core :refer [resource defresource]]
            [clj.dao.user :as user-dao]
            [clj.util.resource :as resource-util]
            [clj.controller.login :as controller]
            ))


(defroutes route

           (GET "/entry" []
             (resource :allowed-methods [:get]

                       :available-media-types resource-util/avaliable-media-types

                       :handle-ok (fn [ctx]

                                    (controller/login-me))

                       :handle-exception (fn [ctx]
                                           {:error (.getMessage (:exception ctx))}))))