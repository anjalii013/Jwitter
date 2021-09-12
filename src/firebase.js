import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq9rpotoaeUbMlnFr0uvzl4kzYkeHwpWI",
  authDomain: "jwitter-92abd.firebaseapp.com",
  databaseURL: "https://jwitter-92abd.firebaseio.com",
  projectId: "jwitter-92abd",
  storageBucket: "jwitter-92abd.appspot.com",
  messagingSenderId: "375111924194",
  appId: "1:375111924194:web:0fb7b7ff437b2a664461bb",
  measurementId: "G-XNK7PGBNMQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
