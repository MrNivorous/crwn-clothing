import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBLiiPVHqcX5m0Kiz0pYdF7GNC1Js8ZbKw",
    authDomain: "crwn-db-d638f.firebaseapp.com",
    databaseURL: "https://crwn-db-d638f.firebaseio.com",
    projectId: "crwn-db-d638f",
    storageBucket: "crwn-db-d638f.appspot.com",
    messagingSenderId: "919254994085",
    appId: "1:919254994085:web:b0e63a4ac11bea451a514c",
    measurementId: "G-X34GP156ZG"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
