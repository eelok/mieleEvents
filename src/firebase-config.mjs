import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAW7TdbKm8BULPRhX6zvhu_KAjbMQ404VU",
    authDomain: "miele-events.firebaseapp.com",
    projectId: "miele-events",
    storageBucket: "miele-events.appspot.com",
    messagingSenderId: "703855689887",
    appId: "1:703855689887:web:cb36f51cc024fcd787a2aa",
    measurementId: "G-JDWX57QRB4"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

let db = app.firestore();
export {db};
