(ns clj.controller.comment-entry
  (:require [liberator.core :refer [resource defresource]]
            [clj.util.resource :as resource-util]
            [clj.dao.user :as user-dao]
            [clj.dao.entry :as entry-dao]
            [clj.dao.comment-entry :as comment-entry-dao]
            [cljc.validation :as validation]
            [clojure.string :as str]
            [monger.json]))

(declare check-story-exists
         check-text)

(defn create-story-comment
  []
  (resource :allowed-methods [:put]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? (fn [ctx]

                           (if-let [cookie (resource-util/get-cookie ctx)]
                             (if-let [username (resource-util/get-username-from-cookie ctx)]
                               (if-let [user (user-dao/find-by-username username)]
                                 (if (= cookie (:cookie user))
                                   {:user-obj user})))))

            :put! (fn [ctx]
                    (let [data-as-map (resource-util/convert-data-map (::data ctx))
                          story-id (:story-id data-as-map)
                          text (:text data-as-map)]

                      (check-story-exists story-id)
                      (check-text text)

                      (let [commentt (comment-entry-dao/create-comment-entry story-id (-> ctx :user-obj :username) nil (str/trim text) ::story)]
                        (entry-dao/inc-entry-comment-count story-id)
                        {:cn-story-comment commentt})))

            :handle-created (fn [_]
                              {:comment-added? true})

            :handle-exception (fn [ctx]
                                (resource-util/get-exception-message ctx))))

(defn check-story-exists
  [story-id]
  (try
    (if-not (entry-dao/find-by-id story-id)
      (throw (RuntimeException. "No such story")))
    (catch Exception e
      (throw (RuntimeException. "No such story")))))

(defn check-text
  [text]
  (if-not (validation/submit-text? text)
    (throw (RuntimeException. "Please limit text to 2500 characters."))))