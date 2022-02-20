import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyA0-_E8uixr6gmlgARQ2DBu7P49jYcskIY",
  authDomain: "eduministic-cfbbc.firebaseapp.com",
  projectId: "eduministic-cfbbc",
  storageBucket: "eduministic-cfbbc.appspot.com",
  messagingSenderId: "864592839945",
  appId: "1:864592839945:web:8ea71c8aacb9677d21ffd8",
  measurementId: "G-9KQMGCWYPN"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth, app }
