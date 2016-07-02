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

(defn create-comment-upvote
  [comment-id]
  (resource :allowed-methods [:put]

            :available-media-types resource-util/avaliable-media-types

            :known-content-type? #(resource-util/check-content-type % resource-util/avaliable-media-types)

            :malformed? #(resource-util/parse-json % ::data)

            :authorized? #(resource-util/auth? %)

            :put! (fn [ctx]

                    (let [commentt (check-comment-exists comment-id)]
                      (check-not-comment-owner commentt ctx)
                      (check-not-duplicate-vote (-> ctx :user-obj :username) comment-id)
                      (println "Here is the type: "(:type commentt))
                      (upvote-dao/create-upvote (-> ctx :user-obj :username)
                                                (if (= (:type commentt) "story") "story-comment" "ask-comment")
                                                (:entry-id commentt)
                                                comment-id)))

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

(defn check-not-comment-owner
  [commentt ctx]
  (when (= (:created-by commentt) (-> ctx :user-obj :username))
    (throw (RuntimeException. "You can not vote your own comment."))))

(defn check-not-duplicate-vote
  [created-by comment-id]
  (when (upvote-dao/find-by-created-by-and-comment-id created-by comment-id)
    (throw (RuntimeException. "You can not vote twice."))))