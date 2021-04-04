import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCFsQYs_QPuUFzwO5dSLMqRChNthdit6mI",
  authDomain: "clone-d7385.firebaseapp.com",
  projectId: "clone-d7385",
  storageBucket: "clone-d7385.appspot.com",
  messagingSenderId: "483363682041",
  appId: "1:483363682041:web:3c5574252d54f422b05428",
  measurementId: "G-XCLE7Q1VHX",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
