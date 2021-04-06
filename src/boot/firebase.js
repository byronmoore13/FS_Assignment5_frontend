import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
const firebaseConfig = {
    apiKey: "AIzaSyANYkD2bEern4sUMLN37VzfD1xQCNQeNUg",
    authDomain: "maverick-c7b35.firebaseapp.com",
    databaseURL: "https://maverick-c7b35-default-rtdb.firebaseio.com",
    projectId: "maverick-c7b35",
    storageBucket: "maverick-c7b35.appspot.com",
    messagingSenderId: "761344997153",
    appId: "1:761344997153:web:e686bb8fbeefb9374f3060"
  };

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }