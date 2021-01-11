import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC5Hb4Hx0pbjIgnmfxBAFdP-xR3T7zHrKM",
  authDomain: "insta-clone-b4ff7.firebaseapp.com",
  projectId: "insta-clone-b4ff7",
  storageBucket: "insta-clone-b4ff7.appspot.com",
  messagingSenderId: "369074958931",
  appId: "1:369074958931:web:5582cdfb18a78ac8c10ca6",
  measurementId: "G-KXQR5CNE2K"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
