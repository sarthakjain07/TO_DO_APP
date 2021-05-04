// to connect our todo app with the firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {

//   };

import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCh4D9jAie4MOs7B-DdSVqwSm3Mhcq-F_c",
    authDomain: "todo-app-cp-2042a.firebaseapp.com",
    projectId: "todo-app-cp-2042a",
    storageBucket: "todo-app-cp-2042a.appspot.com",
    messagingSenderId: "734027256514",
    appId: "1:734027256514:web:2bcb79b3d9f2447f4ee15b",
    measurementId: "G-CW0Z9LB1J9"

});

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export default db;