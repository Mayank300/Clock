import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAXVdveXtTDp_ADsPX84hc9snAFkst_2H4",
  authDomain: "todo-ca0e5.firebaseapp.com",
  projectId: "todo-ca0e5",
  databaseURL: "https://todo-ca0e5.firebaseio.com",
  storageBucket: "todo-ca0e5.appspot.com",
  messagingSenderId: "391481586656",
  appId: "1:391481586656:web:c9813363f489f7067e3185",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
