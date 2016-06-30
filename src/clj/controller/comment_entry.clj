(ns clj.controller.comment-entry
  (:require [liberator.core :refer [resource defresource]]
            [clj.util.resource :as resource-util]
            [clj.dao.user :as user-dao]
            [clj.dao.entry :as entry-dao]
            [clj.dao.comment-entry :as comment-entry-dao]
            [cljc.validation :as validation]
            [cljc.error-messages :as error-message]
            [monger.json]))

(declare check-entry-exists
         check-comment-exists
         check-text
         check-real-owner)

(defn create-comment
  []
  (resource :allowed-methods [:put]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :put! (fn [ctx]
                    (let [data-as-map (resource-util/convert-data-map (::data ctx))
                          entry-id (:entry-id data-as-map)
                          text (:text data-as-map)]

                      ;;TODO change story with entry
                      (check-entry-exists entry-id)
                      (check-text text)

                      ;;TODO change type story -> (:type entry)
                      (let [commentt (comment-entry-dao/create-comment-entry
                                       entry-id
                                       (resource-util/get-username ctx)
                                       nil
                                       text
                                       "story")]
                        (entry-dao/inc-entry-comment-count entry-id)
                        {:comment-entry commentt})))

            :handle-created (fn [_]
                              {:comment-added? true})

            :handle-exception #(resource-util/get-exception-message %)))

(defn reply-comment
  []
  (resource :allowed-methods [:put]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :put! (fn [ctx]
                    (let [data-as-map (resource-util/convert-data-map (::data ctx))
                          parent-comment-id (:parent-comment-id data-as-map)
                          text (:text data-as-map)]

                      (check-text text)

                      (let [parent-comment (check-comment-exists parent-comment-id)
                            commentt (comment-entry-dao/create-comment-entry (:entry-id parent-comment)
                                                                             (resource-util/get-username ctx)
                                                                             (str (:_id parent-comment))
                                                                             text
                                                                             "story")]
                        (entry-dao/inc-entry-comment-count (:entry-id parent-comment))
                        {:cn-story {:entry-id (:entry-id commentt)}})))

            :handle-created (fn [ctx]
                              (:cn-story ctx))

            :handle-exception #(resource-util/get-exception-message %)))

(defn get-comment-by-id
  [id]
  (resource :allowed-methods [:get]

            :available-media-types resource-util/avaliable-media-types

            :handle-ok (fn [ctx]
                         (let [commentt (check-comment-exists id)]

                           {:user-obj      {:username (if-let [username (resource-util/get-username-from-cookie ctx)]
                                                           (if-let [user (user-dao/find-by-username username)]
                                                             (:username user)))}
                            :comment-entry commentt}))

            :handle-exception #(resource-util/get-exception-message %)))

(defn edit-comment-by-id
  [id]
  (resource :allowed-methods [:post]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :post! (fn [ctx]

                     (let [commentt (check-comment-exists id)]
                       (check-real-owner commentt ctx))

                     (let [data-as-map (resource-util/convert-data-map (::data ctx))
                           text (:text data-as-map)]

                       (check-text text)
                       (comment-entry-dao/edit-comment-by-id id text)))

            :handle-created (fn [_]
                              {:edit? true})

            :handle-exception #(resource-util/get-exception-message %)))

(defn check-entry-exists
  [id]
  (try
    (when-not (entry-dao/find-by-id id)
      (throw (RuntimeException. error-message/no-entry)))
    (catch Exception e
      (throw (RuntimeException. error-message/no-entry)))))

(defn check-comment-exists
  [id]
  (try
    (if-let [comment (comment-entry-dao/find-by-id id)]
      comment
      (throw (RuntimeException. error-message/no-comment)))
    (catch Exception e
      (throw (RuntimeException. error-message/no-comment)))))

(defn check-text
  [text]
  (when-not (validation/submit-text? text)
    (throw (RuntimeException. error-message/text))))

(defn check-real-owner
  [commentt ctx]
  (when-not (= (:created-by commentt) (resource-util/get-username ctx))
    (throw (RuntimeException. error-message/comment-owner))))