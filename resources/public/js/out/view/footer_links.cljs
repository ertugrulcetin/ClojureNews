(ns view.footer-links)

(defn component-formatting
  []
  [:center
   [:table
    [:tbody
     [:tr
      [:td
       [:br]
       [:p
        "Blank lines separate paragraphs."]
       [:p
        "Text after a blank line that is indented by two or more spaces is reproduced verbatim.(This is intended for code.)"]
       [:p
        "Text surrounded by asterisks is italicized, if the character after the first asterisk isn't whitespace."]
       [:p
        "Urls become links, except in the text field of a submission."]]]]]])

(defn component-guidelines
  []
  [:center
   [:table
    [:tbody
     [:tr
      [:td

       [:br]

       [:p
        [:b "What to Submit"]]
       [:p "On-Topic: Anything that good clojurist would find interesting.
       That includes more than writing macro.
       If you had to reduce it to a sentence, the answer might be: anything that gratifies one's intellectual curiosity."]
       [:p
        "Off-Topic: Most stories about politics, or crime, or sports etc.
         Videos of pratfalls or disasters, or cute animal pictures. If they'd cover it on TV news, it's probably off-topic."]

       [:br]

       [:p
        [:b "In Submissions"]]
       [:p "Please don't do things to make titles stand out, like using uppercase or exclamation points, or adding a parenthetical remark saying how great an article is.
       It's implicit in submitting something that you think it's important."]
       [:p "If you submit a link to a video or pdf, please warn us by appending [video] or [pdf] to the title."]
       [:p "Please submit the original source. If a post reports on something found on another site, submit the latter."]
       [:p "If the original title includes the name of the site, please take it out, because the site name will be displayed after the link."]
       [:p "If the original title begins with a number or number + gratuitous adjective, we'd appreciate it if you'd crop it.
       E.g. translate \"10 Ways To Do X\" to \"How To Do X,\" and \"14 Amazing Ys\" to \"Ys.\" Exception: when the number is meaningful, e.g. \"The 5 Platonic Solids.\""]
       [:p "Otherwise please use the original title, unless it is misleading or linkbait."]
       [:p "Please don't submit so many links at once that the new page is dominated by your submissions."]

       [:br]

       [:p
        [:b
         "In Comments"]]
       [:p "Be civil. Don't say things you wouldn't say in a face-to-face conversation. Avoid gratuitous negativity."]
       [:p "When disagreeing, please reply to the argument instead of calling names. E.g. \"That is idiotic; 1 + 1 is 2, not 3\" can be shortened to \"1 + 1 is 2, not 3.\""]
       [:p "Please don't insinuate that someone hasn't read an article. \"Did you even read the article? It mentions that\" can be shortened to \"The article mentions that.\""]
       [:p "Please avoid introducing classic flamewar topics unless you have something genuinely new to say about them."]
       [:p "Please don't sign comments; they're already signed with your username. If other users want to learn more about you, they can click on it to see your profile."]
       [:p "Please don't use uppercase for emphasis. If you want to emphasize a word or phrase, put *asterisks* around it and it will get italicized."]]]]]])

(defn component-faq
  []
  [:center
   [:table
    [:tbody
     [:tr
      [:td

       [:br]

       [:p
        [:b "Are there rules about submissions and comments?"]]
       [:p
        [:a {:href "/#/guidelines"} "Here it is: "
         [:u "Guidelines"]]]

       [:br]

       [:p
        [:b "How are stories ranked?"]]
       [:p "On the front page, by points divided by a power of the time since they were submitted."]
       [:p "The new page is ordered chronologically."]

       [:br]

       [:p
        [:b "How is a user's karma calculated?"]]
       [:p "Number of created entries(story, ask, comment etc.)"]

       [:br]

       [:p
        [:b "Why don't I see down arrows?"]]
       [:p "There are no down arrows.(yet)"]

       [:br]

       [:p
        [:b "What kind of formatting can you use in comments?"]]
       [:p
        [:a {:href "/#/formatting"} "Here it is: "
         [:u "Formatting Options"]]]

       [:br]

       [:p
        [:b "How do I submit a entry(story, ask, job and event)?"]]
       [:p "Use the submit link in the top bar, and select type of your entry."]

       [:br]

       [:p
        [:b "How do I make a link in a question?"]]
       [:p "You can't. This is to prevent people from submitting a link with their comments in a privileged position at the top of the page.
       If you want to submit a link with comments, just submit it, then add a regular comment."]

       [:br]

       [:p
        [:b "Can I ask people to upvote my submission?"]]
       [:p "No. Users should vote for a story because it's intellectually interesting, not because someone is promoting it."]

       [:br]

       [:p
        [:b "Can I post a job ad?"]]
       [:p "Yes, you can.
       The job posting has to be related to Clojure Jobs.
       Please do not post job ads as story submissions."]]]]]])