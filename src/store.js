import db from './firebase'
 import * as firebase from "firebase/app"
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    user: null

  },
  mutations: {
    setCars(state, payload){
      state.cars.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },

    hiredCar(state, payload) {
      state.cars.forEach(car => {
        if (car.model === payload.model) {
             car = payload 
            }
          })
        }
      

  },
  actions: {
    async loadedCars ({ commit }, payload) {
      const car = []
      await db.collection('cars').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              'id': doc.id,
              'imageUrl': doc.data().src,
              'model': doc.data().model,
              'rating': doc.data().rating,
              'a': doc.data().a,
              'b': doc.data().b,
              'one': doc.data().one,
              'two': doc.data().two,
              'three': doc.data().three,
              'four': doc.data().four,
              'five': doc.data().five,
              'six': doc.data().six,
              'status': doc.data().status,
              'selection': doc.data().selection,
              'price': doc.data().price,
              'registration': doc.data().registration,
              
              
           
              }
              
              commit('setCars', data)
            })
        }).catch(err => {
          console.log()
        })
      
    },

    async signUserUp ({ commit }, payload) {
      await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          let newUser = {
            id: user.user.user.uid,
            hiredCars: []
          }
         commit('setUser', newUser)
        })
        .catch(err => {
          console.log()
        })
    },

    async signUserIn({commit}, payload) {
      await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
       .then(
         user => {
          const newUser = {
            id: user.user.uid,
            hiredCar: []
          }
          commit('setUser', newUser)
        }).catch( err => {
          console.log()
       })
  
     },

     autoSignIn({commit}, payload) {
       commit('setUser', {id:payload.uid, hiredCar:{}})
      },

     async logout ({commit}) {
       commit('setUser', null)
      await firebase.auth().signOut()
     alert('You have successifully logged out!!')

     },
     async hiredCar({commit, getters}, payload) {
      await db.collection('cars').get()
       .then(querySnapshot => {
         querySnapshot.forEach(doc => {
           if (doc.data().status === null && doc.data().model === payload.model) {
             doc.ref.update({
               status: 'Hired Out',
               
             })
           }
           commit('hiredCar', doc.data())
        
          })
         }).catch(err => {
         console.log()
         })
       }
      
      },
      
    
  getters: {
    loadCars(state) {
      return state.cars
    },
    loadCar (state) {
      return (CarId) => {
        return state.cars.find((car) => {
          return car.model === CarId
        })
      }
    },
    user (state) {
      return state.user
    },

  }

  })
