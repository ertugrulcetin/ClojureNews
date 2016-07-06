(ns clj.controller.upvote
  (:require [liberator.core :refer [resource defresource]]
            [clj.util.resource :as resource-util]
            [clj.dao.comment-entry :as comment-entry-dao]
            [clj.dao.upvote :as upvote-dao]
            [cljc.error-messages :as error-message]
            [clj.dao.entry :as entry-dao]
            [monger.json]))

(declare check-comment-exists
         check-not-owner
         check-not-duplicate-comment-vote
         check-not-duplicate-entry-vote
         check-entry-exist)

(defn create-comment-upvote
  [comment-id]
  (resource :allowed-methods [:put]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :put! (fn [ctx]

                    (let [commentt (check-comment-exists comment-id)
                          username (resource-util/get-username ctx)]
                      (check-not-owner commentt ctx)
                      (check-not-duplicate-comment-vote username comment-id)
                      (upvote-dao/create-upvote username
                                                (if (= (:type commentt) "story") "story-comment" "ask-comment")
                                                (:entry-id commentt)
                                                comment-id)))

            :handle-created (fn [_]
                              {:upvoted? true})

            :handle-exception #(resource-util/get-exception-message %)))

(defn create-entry-upvote
  [entry-id]
  (resource :allowed-methods [:put]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :put! (fn [ctx]

                    (let [entry (check-entry-exist entry-id)
                          type (if (= (:type entry) "story") "story" "ask")
                          username (resource-util/get-username ctx)]
                      (check-not-owner entry ctx)
                      (check-not-duplicate-entry-vote username entry-id type)
                      (upvote-dao/create-upvote username type entry-id nil)
                      (entry-dao/inc-entry-upvote-count entry-id)))

            :handle-created (fn [_]
                              {:upvoted? true})

            :handle-exception #(resource-util/get-exception-message %)))

(defn check-comment-exists
  [comment-id]
  (try
    (if-let [commentt (comment-entry-dao/find-by-id comment-id)]
      commentt
      (throw (RuntimeException. "No such comment!")))
    (catch Exception e
      (throw (RuntimeException. "No such comment!")))))

(defn check-not-owner
  [commentt ctx]
  (when (= (:created-by commentt) (-> ctx :user-obj :username))
    (throw (RuntimeException. "You can not vote your own comment."))))

(defn check-not-duplicate-comment-vote
  [created-by comment-id]
  (when (upvote-dao/find-by-created-by-and-comment-id created-by comment-id)
    (throw (RuntimeException. "You can not vote twice."))))

(defn check-not-duplicate-entry-vote
  [created-by entry-id type]
  (when (upvote-dao/find-by-created-by-and-entry-id-and-type created-by entry-id type)
    (throw (RuntimeException. "You can not vote twice."))))

(defn check-entry-exist
  [id]
  (try
    (if-let [entry (entry-dao/find-by-id id)]
      entry
      (throw (RuntimeException. error-message/no-entry)))
    (catch Exception e
      (throw (RuntimeException. error-message/no-entry)))))