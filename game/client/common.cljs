(ns ^:figwheel-always game.client.common
    (:require
              [cljs.pprint :as pprint]
              [rum.core :as rum]
              [com.stuartsierra.component :as component]
              [promesa.core :as p]
              [game.client.config :as config]
              [game.client.math :as math]
              )
  (:require-macros [game.shared.macros :as macros :refer [defcom]])
  )

(defrecord JSObj [initializer data]
  component/Lifecycle
  (start [component]
    (if
      (= data nil)
      (do
        ;(println "Allocating JSObj")
        (assoc component :data (initializer)))
      component))
  ;(stop [component] (assoc component :data nil)))
  (stop [component] component))

(defn new-jsobj [initializer]
  (map->JSObj {:initializer initializer}))

(defrecord LCObj [data]
  component/Lifecycle
  (start [component] component)
  (stop [component] component))

(defn new-lc [data]
  (map->LCObj {:data data}))

(defn data [component]
  (:data component))

(rum/defc
  list-item
  [content & [attrs] ]
  (if
    attrs
    [:li attrs content]
    [:li content]))

(rum/defc
  header < rum/static
  [h]
  [:div [:h1 { :class "page-header" } h]])

(defn promise-obj
  []
  (let
    [tmp (atom {})
     p1 (p/promise
          (fn [res rej]
            (swap! tmp #(assoc % :resolve res))
            (swap! tmp #(assoc % :reject rej))
            ))]
     (aset p1 "resolve" (:resolve @tmp))
     (aset p1 "reject" (:reject @tmp))
     p1))

(defn unique-id
	([]
    (math/round 
      (+
        (-> (new js/Date) .getTime)
        (* (math/random) 100))))
  ([element]
   (let
    [id (-> element .-id)]
     (if-not
       (= id "")
       id
       (let
         [id (unique-id)]
         (set! (-> element .-id) id)
         id)))))

(defn game-time
  []
  ;(-> (new js/Date) .getTime))
  (-> js/performance .now))
