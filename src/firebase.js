import * as firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB5sjgDW7p1jL_h2R4iT4Qb-5ZhysCWogc",
    authDomain: "cars-af3d0.firebaseapp.com",
    databaseURL: "https://cars-af3d0.firebaseio.com",
    projectId: "cars-af3d0",
    storageBucket: "cars-af3d0.appspot.com",
    messagingSenderId: "747014725426",
    appId: "1:747014725426:web:b32daf327782715f"

}

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()

export default firestore  