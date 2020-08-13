import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDCpL5WXrNNASq22CJLQ91mPlbVpNkMrLg",
    authDomain: "tiktok-clone-fe099.firebaseapp.com",
    databaseURL: "https://tiktok-clone-fe099.firebaseio.com",
    projectId: "tiktok-clone-fe099",
    storageBucket: "tiktok-clone-fe099.appspot.com",
    messagingSenderId: "377460324467",
    appId: "1:377460324467:web:673e5c0805ebd434081206",
    measurementId: "G-FD56RLYW6C"
})

const db = firebaseApp.firestore()

export default db