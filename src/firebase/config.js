import firebase from 'firebase/app';
import 'firebase/firestore'; // Add other Firebase services as needed
import 'firebase/auth';
import { isNavigationFailure } from 'vue-router';
const firebaseConfig = {
    apiKey: "AIzaSyDqUAP8gX3wqnHjC1QxmaH7XvhcXq11xWs",
    authDomain: "live-chat-2d5a0.firebaseapp.com",
    projectId: "live-chat-2d5a0",
    storageBucket: "live-chat-2d5a0.appspot.com",
    messagingSenderId: "929874977441",
    appId: "1:929874977441:web:77d1c0184b8026270406e0",
    measurementId: "G-HBDCJE42QD"
  }; 

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  let timestamp = firebase.firestore.FieldValue.serverTimeStamp;

  export{db, timestamp}