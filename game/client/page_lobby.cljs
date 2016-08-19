(ns ^:figwheel-always game.client.page-lobby
  (:require
    [cljs.pprint :as pprint]
    [com.stuartsierra.component :as component]
    [jayq.core :as jayq :refer [$]]
    [promesa.core :as p]
    [cats.core :as m]
    [rum.core :as rum]
    [game.client.common :as common :refer [list-item header]]
    [game.client.routing :as routing]
    [game.client.sente-setup :as sente-setup]
    [game.shared.schema :as schema]
    [sablono.core :as sablono :refer-macros [html]]
    [clojure.string :as string :refer [join]]
    )
  (:require-macros [game.shared.macros :as macros :refer [defcom]])
  )

(defn
  select-list-item
  [event]
  (let
    [target (-> event .-target $)]
    (->
      target
      .siblings
      (.removeClass "selected"))
    (-> target
      (.toggleClass "selected"))))

(defn
  format-game-list
  [game-list]
  (doall
    (for
      [gameid (keys game-list)]
      (let
        [g (get game-list gameid)
         players (str "(" (count (:players g)) "/" (:max-player-count g) ")")]
        (rum/with-key
          (list-item
            (str players " " (:name g) ": " (join "," (map #(:display-name %) (vals (:players g)))))
            {:id (:id g)
             :on-click select-list-item
             })
          (:id g))))))

(rum/defc
  game-list < rum/reactive
  [state]
  (if-let
    [game-list (:game-list (rum/react state))]
    [:ul { :class "game-list col-md-9" } (format-game-list game-list)]
    ;[:ul { :class "game-list col-md-9" } (str game-list)]
    [:div "No active games"]))

(rum/defc
  user-list < rum/reactive
  [state]
  [:ul { :class "user-list" }
   (for
      [[i u] (map-indexed vector (:user-list (rum/react state)))]
      (rum/with-key (list-item (:display-name u)) i))])

(rum/defc
  message-list < rum/reactive
  [state]
  [:ul { :class "message-list" }
   (for
     [[i msg] (map-indexed vector (:message-list (rum/react state)))]
     (let
       [msg (str (:user msg) "> " (:message msg))]
       (rum/with-key (list-item msg) i)))])

(defn
  input-handler
  [component event]
  (let
    [keyCode (-> event .-nativeEvent .-keyCode)
     timeout (get-in component [:config :sente :request-timeout])
     ]
    (if
      (= keyCode (-> js/KeyEvent .-DOM_VK_RETURN))
      (do
        (->
          (sente-setup/send-cb
            (:sente-setup component)
            :rts/chat-message
            (-> ($ "#chat-input") .val))
          (p/then
            (fn
              [event]
              (println "chat-reply" event)
              (-> ($ "#chat-input") (.val "")))))))))

(rum/defc
  chat-input < rum/static
  [component]
  [:input {:class "col-md-12"
           :type "text"
           :id "chat-input"
           :name "chat-input"
           :on-key-down (partial input-handler component)
           }]
  )

(defn new-game-handler
  [component event]
  (println "new-game")
  (sente-setup/send-cb
    (:sente-setup component)
    :rts/new-game
    {}))

(rum/defc
  new-game < rum/static
  [component]
  [:button
   {:type "button"
    :class "btn btn-default btn-lg btn-outline"
    :on-click (partial new-game-handler component)
    }
   "New Game"])

(defn join-game-handler
  [component event]
  (if-let
    [game-id (-> ($ ".game-list .selected") (.attr "id"))]
    (->
      (sente-setup/send-cb
        (:sente-setup component)
        :rts/join-game
        { :game-id game-id })
      (p/then
        (fn [reply]
          (println "join-game" reply)
          (routing/change-page (str "#game-lobby/" game-id "/")))))))

(rum/defc
  join-game < rum/static
  [component]
  [:button
   {
    :class "btn btn-default btn-lg btn-outline"
    :type "button"
    :on-click (partial join-game-handler component)
    } "Join Game"])

(rum/defc
  lobby < rum/static
  [component state]
  (let
    ; calling html on each list item as workaround
    ; see https://github.com/r0man/sablono/issues/57
    [
     div-user-list (html
                     [:div { :class "col-md-3" }
                      [:h3 "Players" ]
                      (user-list state)])
     div-message-list (html
                        [:div { :class "col-md-9" }
                         (message-list state)
                         (chat-input component)])
     div-game-buttons (html
                        [:div
                         {
                          :class "btn-group game-buttons col-md-12"
                          :role "group"
                          }
                         (new-game component)
                         (join-game component)])
     div-game-list (html
                     [:div { :class "col-md-12" }
                       [:div { :class "col-md-9" }
                        (header "Games")
                        (game-list state)
                        div-game-buttons
                        ]
                      [:div { :class "col-md-3" }
                       (header "Profile")
                       [:a { :href "logout" } "Logout"]
                       ]
                      ])
     div-lobby-chat (html
           [:div { :class "col-md-12" }
            (header "Lobby Chat")
            div-message-list
            div-user-list])
     row1 [:div { :class "row" } div-game-list]
     row2 [:div { :class "row" } div-lobby-chat]
     content (html [:div { :class "container" } row1 row2])
     ]
    content))

(defn
  update-user-list
  [state message]
  (swap! state #(assoc-in % [:user-list] (schema/validate-user-list message))))

(defn
  update-game-list
  [state message]
  ;(println "game-list" message)
  (swap!
    state
    #(assoc-in % [:game-list] (schema/validate-game-list message))))

(defn
  update-message-list
  [state message]
  ;(println "upd-msg" message)
  (swap!
    state
    (fn [state]
      (update-in
        state
        [:message-list]
        (fn
          [mlist]
          (conj
            (subvec mlist (max 0 (- (count mlist) 20)))
            (schema/validate-chat-message message)))))))

(defn start
  [component]
  (let
    [state
      (or
        (:state component)
        (atom {
               :user-list []
               :message-list []
               :game-list []
               }))
     sente-setup (:sente-setup component)
     ]
    (do
      (sente-setup/register-handler sente-setup :rts/user-list (partial update-user-list state))
      (sente-setup/register-handler sente-setup :rts/game-list (partial update-game-list state))
      (sente-setup/register-handler sente-setup :rts/chat-message (partial update-message-list state)))
    (rum/mount (lobby component state) (aget (:$page component) 0))
    (->
      component
      (assoc :state state)
      )))

(defn stop [component] 
  ;(println "unmounting lobby")
  (if-let
    [page (aget (:$page component) 0)]
    (rum/unmount page))
  component)

(defcom
  new-lobby
  [config sente-setup routing]
  [state]
  start
  stop)
