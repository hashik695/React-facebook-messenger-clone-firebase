import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBL74nigz1uNWXbfaEIsbkxtrrJ-aUBq_s",
    authDomain: "facebook-messenger-clone-90fbd.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-90fbd.firebaseio.com",
    projectId: "facebook-messenger-clone-90fbd",
    storageBucket: "facebook-messenger-clone-90fbd.appspot.com",
    messagingSenderId: "322201983682",
    appId: "1:322201983682:web:7d794e115452516f26b95b",
    measurementId: "G-H70W2RY7W3"

})   

const db=firebaseApp.firestore()

export default db;