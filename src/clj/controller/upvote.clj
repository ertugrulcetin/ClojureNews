(ns clj.controller.upvote
  (:require [liberator.core :refer [resource defresource]]
            [clj.util.resource :as resource-util]
            [clj.dao.user :as user-dao]
            [clj.dao.comment-entry :as comment-entry-dao]
            [clj.dao.upvote :as upvote-dao]
            [monger.json]))

(declare check-comment-exists
         check-not-comment-owner
         check-not-duplicate-vote)

(defn create-story-comment-upvote
  [comment-id]
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

                    (let [commentt (check-comment-exists comment-id)]
                      (check-not-comment-owner commentt ctx)
                      (check-not-duplicate-vote (-> ctx :user-obj :username) comment-id)
                      (upvote-dao/create-upvote (-> ctx :user-obj :username) "story-comment" (:entry-id commentt) comment-id)))

            :handle-created (fn [_]
                              {:upvoted? true})

            :handle-exception (fn [ctx]
                                (resource-util/get-exception-message ctx))))

(defn check-comment-exists
  [comment-id]
  (try
    (if-let [commentt (comment-entry-dao/find-by-id comment-id)]
      commentt
      (throw (RuntimeException. "No such comment!")))
    (catch Exception e
      (throw (RuntimeException. "No such comment!")))))

(defn check-not-comment-owner
  [commentt ctx]
  (when (= (:created-by commentt) (-> ctx :user-obj :username))
    (throw (RuntimeException. "You can not vote your own comment."))))

(defn check-not-duplicate-vote
  [created-by comment-id]
  (when (upvote-dao/find-by-created-by-and-comment-id created-by comment-id)
    (throw (RuntimeException. "You can not vote twice."))))