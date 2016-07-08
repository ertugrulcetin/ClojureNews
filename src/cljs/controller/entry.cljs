(ns controller.entry
  (:require [ajax.core :as ajax :refer [GET POST PUT DELETE]]
            [cljc.validation :as validation]
            [cljc.error-messages :as error-message]
            [reagent.core :as r]
            [goog.dom :as dom]
            [util.view]
            [util.controller]
            [view.entry.story-entry]
            [view.entry.ask-entry]
            [view.entry.job]
            [view.entry.event]
            [view.list.story]
            [view.list.ask]
            [view.list.job]
            [view.list.event]
            [view.list.newest]
            [controller.upvote]
            [controller.comment-entry]))

(declare add-event-listener-to-add-comment-button
         add-event-listener-to-upvote-buttons-for-comments
         add-event-listener-to-edit-story-button
         add-event-listener-to-edit-ask-button
         add-event-listener-to-story-button-yes
         add-event-listener-to-story-button-no
         add-event-listener-to-ask-button-yes
         add-event-listener-to-ask-button-no
         add-event-listener-to-edit-job-button
         add-event-listener-to-delete-job-button-yes
         add-event-listener-to-delete-job-button-no
         add-event-listener-to-upvote-buttons-for-entries
         add-event-listener-to-upvote-buttons-for-newest-entries
         add-event-listener-to-edit-event-button
         add-event-listener-to-delete-event-button-yes
         add-event-listener-to-delete-event-button-no
         add-event-listener-to-upvote-button-for-entry)

(defn get-stories-by-page
  [page]
  (GET (str "/entry/story/p/" page)
       {:handler         (fn [response]
                           (util.view/change-page-title "Story")
                           (r/render-component [(fn []
                                                  (view.list.story/component-list-story response page))] util.view/main-container)
                           (add-event-listener-to-upvote-buttons-for-entries response :story))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn get-story-by-id
  [id]
  (GET (str "/entry/story/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title (-> response :story-entry :title))
                           (r/render-component [(fn []
                                                  (view.entry.story-entry/component-story response))] util.view/main-container)

                           (add-event-listener-to-add-comment-button get-story-by-id id)
                           (add-event-listener-to-upvote-buttons-for-comments response :story)
                           (add-event-listener-to-upvote-button-for-entry id))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-story-by-id
  [id]
  (GET (str "/entry/story/info/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title (-> response :story-entry :title))
                           (r/render-component [(fn []
                                                  (view.entry.story-entry/component-edit response))] util.view/main-container)
                           (add-event-listener-to-edit-story-button id))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-story
  [id field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        title (:title data)]

    (cond
      (not (validation/submit-title? title))
      (util.view/render-error-message error-message/title)

      :else
      (POST (str "/entry/story/edit/" id)
            {:params          data
             :handler         (fn [_]
                                (util.view/change-url (str "/#/story/" id)))
             :error-handler   util.controller/error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))

(defn delete-story-by-id
  [id]
  (GET (str "/entry/story/info/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title (-> response :story-entry :title))
                           (r/render-component [(fn []
                                                  (view.entry.story-entry/component-delete response))] util.view/main-container)
                           (add-event-listener-to-story-button-yes id)
                           (add-event-listener-to-story-button-no))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn delete-story
  [id]
  (DELETE (str "/entry/story/delete/" id)
          {:handler         (fn []
                              (util.view/change-url-to-story))
           :error-handler   util.controller/error-handler
           :format          (ajax/json-request-format)
           :response-format (ajax/json-response-format {:keywords? true})}))

(defn get-ask-by-id
  [id]
  (GET (str "/entry/ask/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title (str "Ask CN: " (-> response :ask-entry :title)))
                           (r/render-component [(fn []
                                                  (view.entry.ask-entry/component-ask response))] util.view/main-container)
                           (add-event-listener-to-add-comment-button get-ask-by-id id)
                           (add-event-listener-to-upvote-buttons-for-comments response :ask)
                           (add-event-listener-to-upvote-button-for-entry id))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn get-ask-by-page
  [page]
  (GET (str "/entry/ask/p/" page)
       {:handler         (fn [response]
                           (util.view/change-page-title "Ask")
                           (r/render-component [(fn []
                                                  (view.list.ask/component-list-ask response page))] util.view/main-container)
                           (add-event-listener-to-upvote-buttons-for-entries response :ask))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-ask-by-id
  [id]
  (GET (str "/entry/ask/info/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title (str "Ask CN: " (-> response :ask-entry :title)))
                           (r/render-component [(fn []
                                                  (view.entry.ask-entry/component-edit response))] util.view/main-container)
                           (add-event-listener-to-edit-ask-button id))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-ask
  [id field-ids]
  (let [data (util.view/create-field-val-map field-ids)
        title (:title data)
        text (:text data)]

    (cond
      (not (validation/submit-title? title))
      (util.view/render-error-message error-message/title)

      (not (validation/submit-text? text))
      (util.view/render-error-message error-message/text)

      :else
      (POST (str "/entry/ask/edit/" id)
            {:params          data
             :handler         (fn [_]
                                (util.view/change-url (str "/#/ask/" id)))
             :error-handler   util.controller/error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))

(defn delete-ask-by-id
  [id]
  (GET (str "/entry/ask/info/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title (str "Ask CN: " (-> response :ask-entry :title)))
                           (r/render-component [(fn []
                                                  (view.entry.ask-entry/component-delete response))] util.view/main-container)
                           (add-event-listener-to-ask-button-yes id)
                           (add-event-listener-to-ask-button-no))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn delete-ask
  [id]
  (DELETE (str "/entry/ask/delete/" id)
          {:handler         (fn []
                              (util.view/change-url-to-ask))
           :error-handler   util.controller/error-handler
           :format          (ajax/json-request-format)
           :response-format (ajax/json-response-format {:keywords? true})}))

(defn get-newest-by-page
  [page]
  (GET (str "/entry/newest/p/" page)
       {:handler         (fn [response]
                           (util.view/change-page-title "Newest")
                           (r/render-component [(fn []
                                                  (view.list.newest/component-list-newest response page))] util.view/main-container)
                           (add-event-listener-to-upvote-buttons-for-newest-entries response))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn get-jobs-by-page
  [page]
  (GET (str "/entry/job/p/" page)
       {:handler         (fn [response]
                           (util.view/change-page-title "Jobs")
                           (r/render-component [(fn []
                                                  (view.list.job/component-job response page))] util.view/main-container))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-job-by-id
  [id]
  (GET (str "/entry/job/info/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title (-> response :job-entry :title))
                           (r/render-component [(fn []
                                                  (view.entry.job/component-edit response))] util.view/main-container)
                           (add-event-listener-to-edit-job-button id))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-job
  [id field-ids]

  (let [data (util.view/create-field-val-map field-ids)
        title (:title data)
        url (:url data)
        country (:country data)
        city (:city data)]

    (cond
      (not (validation/submit-title? title))
      (util.view/render-error-message error-message/title)

      (not (validation/submit-url? url))
      (util.view/render-error-message error-message/url)

      (not (validation/submit-country? country))
      (util.view/render-error-message error-message/country)

      (not (validation/submit-city? city))
      (util.view/render-error-message error-message/city)

      :else
      (POST (str "/entry/job/edit/" id)
            {:params          (assoc data :remote? (.-checked (dom/getElement "remoteId")))
             :handler         (fn [_]
                                (util.view/change-url-to-jobs))
             :error-handler   util.controller/error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))

(defn delete-job-by-id
  [id]
  (GET (str "/entry/job/info/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title (-> response :job-entry :title))
                           (r/render-component [(fn []
                                                  (view.entry.job/component-delete response))] util.view/main-container)

                           (add-event-listener-to-delete-job-button-yes id)
                           (add-event-listener-to-delete-job-button-no))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn delete-job
  [id]
  (DELETE (str "/entry/job/delete/" id)
          {:handler         (fn []
                              (util.view/change-url-to-jobs))
           :error-handler   util.controller/error-handler
           :format          (ajax/json-request-format)
           :response-format (ajax/json-response-format {:keywords? true})}))


(defn get-events-by-page
  [page]
  (GET (str "/entry/event/p/" page)
       {:handler         (fn [response]
                           (util.view/change-page-title "Events")
                           (r/render-component [(fn []
                                                  (view.list.event/component-event response page))] util.view/main-container))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-event-by-id
  [id]
  (GET (str "/entry/event/info/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title (-> response :event-entry :title))
                           (r/render-component [(fn []
                                                  (view.entry.event/component-edit response))] util.view/main-container)
                           (add-event-listener-to-edit-event-button id))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn edit-event
  [id field-ids]

  (let [data (util.view/create-field-val-map field-ids)
        title (:title data)
        url (:url data)
        country (:country data)
        city (:city data)
        day (:starting-date-day data)
        month (:starting-date-month data)
        year (:starting-date-year data)]

    (cond
      (not (validation/submit-title? title))
      (util.view/render-error-message error-message/title)

      (not (validation/submit-url? url))
      (util.view/render-error-message error-message/url)

      (not (validation/submit-country? country))
      (util.view/render-error-message error-message/country)

      (not (validation/submit-city? city))
      (util.view/render-error-message error-message/city)

      (not (validation/submit-day? day))
      (util.view/render-error-message error-message/day)

      (not (validation/submit-month? month))
      (util.view/render-error-message error-message/month)

      (not (validation/submit-year? year))
      (util.view/render-error-message error-message/year)

      :else
      (POST (str "/entry/event/edit/" id)
            {:params          data
             :handler         (fn [_]
                                (util.view/change-url-to-events))
             :error-handler   util.controller/error-handler
             :format          (ajax/json-request-format)
             :response-format (ajax/json-response-format {:keywords? true})}))))

(defn delete-event-by-id
  [id]
  (GET (str "/entry/event/info/" id)
       {:handler         (fn [response]
                           (util.view/change-page-title (-> response :event-entry :title))
                           (r/render-component [(fn []
                                                  (view.entry.event/component-delete response))] util.view/main-container)

                           (add-event-listener-to-delete-event-button-yes id)
                           (add-event-listener-to-delete-event-button-no))
        :error-handler   util.controller/error-handler
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})}))

(defn delete-event
  [id]
  (DELETE (str "/entry/event/delete/" id)
          {:handler         (fn []
                              (util.view/change-url-to-events))
           :error-handler   util.controller/error-handler
           :format          (ajax/json-request-format)
           :response-format (ajax/json-response-format {:keywords? true})}))

(defn add-event-listener-to-add-comment-button
  [entry id]
  (.addEventListener (dom/getElement "buttonAddCommentId") "click" (fn [_]
                                                                     (controller.comment-entry/add-comment entry id ["textId"]))))
(defn add-event-listener-to-upvote-buttons-for-comments
  [response type]

  (let [comments (if (= type :story) :story-comments :ask-comments)
        upvoted-comments (if (= type :story) :story-upvoted-comments :ask-upvoted-comments)]

    (doseq [commentt (-> response comments)]
      (let [comment-id (:_id commentt)
            upvoted-comments (-> response upvoted-comments)]
        (when-not (util.view/in? comment-id upvoted-comments)
          (when-let [node (dom/getElement (str "id-upvote-" comment-id))]
            (.addEventListener node "click" (fn [_]
                                              (controller.upvote/upvote-comment comment-id)))))))))

(defn add-event-listener-to-upvote-buttons-for-entries
  [response type]

  (let [entries (if (= type :story) :story-entry :ask-entry)
        upvoted-entries (if (= type :story) :story-upvoted-entries :ask-upvoted-entries)]

    (doseq [entry (-> response entries)]
      (let [entry-id (:_id entry)
            upvoted-entries-coll (-> response upvoted-entries)]
        (when-not (util.view/in? entry-id upvoted-entries-coll)
          (when-let [node (dom/getElement (str "id-upvote-" entry-id))]
            (.addEventListener node "click" (fn [_]
                                              (controller.upvote/upvote-entry entry-id)))))))))

(defn add-event-listener-to-upvote-buttons-for-newest-entries
  [response]

  (let [entries :newest-entry
        upvoted-entries :newest-upvoted-entries]

    (doseq [entry (-> response entries)]
      (let [entry-id (:_id entry)
            upvoted-entries-coll (-> response upvoted-entries)]
        (when-not (util.view/in? entry-id upvoted-entries-coll)
          (when-let [node (dom/getElement (str "id-upvote-" entry-id))]
            (.addEventListener node "click" (fn [_]
                                              (controller.upvote/upvote-entry entry-id)))))))))

(defn add-event-listener-to-edit-story-button
  [id]
  (.addEventListener (dom/getElement "buttonStoryEditId") "click" (fn [_]
                                                                    (edit-story id ["titleId"]))))

(defn add-event-listener-to-edit-ask-button
  [id]
  (.addEventListener (dom/getElement "buttonAskEditId") "click" (fn [_]
                                                                  (edit-ask id ["titleId" "textId"]))))

(defn add-event-listener-to-story-button-yes
  [id]
  (.addEventListener (dom/getElement "buttonDeleteStoryYesId") "click" (fn [_]
                                                                         (delete-story id))))

(defn add-event-listener-to-story-button-no
  []
  (.addEventListener (dom/getElement "buttonDeleteStoryNoId") "click" (fn [_]
                                                                        (util.view/change-url-to-story))))

(defn add-event-listener-to-ask-button-yes
  [id]
  (.addEventListener (dom/getElement "buttonDeleteAskYesId") "click" (fn [_]
                                                                       (delete-ask id))))

(defn add-event-listener-to-ask-button-no
  []
  (.addEventListener (dom/getElement "buttonDeleteAskNoId") "click" (fn [_]
                                                                      (util.view/change-url-to-ask))))

(defn add-event-listener-to-edit-job-button
  [id]
  (.addEventListener (dom/getElement "jobEditButtonId") "click" (fn [_]
                                                                  (edit-job id ["titleId" "urlId" "countryId" "cityId" "remoteId"]))))

(defn add-event-listener-to-delete-job-button-yes
  [id]
  (.addEventListener (dom/getElement "buttonDeleteJobYesId") "click" (fn [_]
                                                                       (delete-job id))))

(defn add-event-listener-to-delete-job-button-no
  []
  (.addEventListener (dom/getElement "buttonDeleteJobNoId") "click" (fn [_]
                                                                      (util.view/change-url-to-jobs))))

(defn add-event-listener-to-edit-event-button
  [id]
  (.addEventListener (dom/getElement "eventEditButtonId") "click" (fn [_]
                                                                    (edit-event id ["titleId" "urlId" "countryId" "cityId" "startingDateDayId" "startingDateMonthId" "startingDateYearId"]))))

(defn add-event-listener-to-delete-event-button-yes
  [id]
  (.addEventListener (dom/getElement "buttonDeleteEventYesId") "click" (fn [_]
                                                                         (delete-event id))))

(defn add-event-listener-to-delete-event-button-no
  []
  (.addEventListener (dom/getElement "buttonDeleteEventNoId") "click" (fn [_]
                                                                        (util.view/change-url-to-events))))

(defn add-event-listener-to-upvote-button-for-entry
  [entry-id]
  (when-let [element (dom/getElement (str "id-upvote-" entry-id))]
    (.addEventListener element "click" (fn [_]
                                         (controller.upvote/upvote-entry entry-id)))))