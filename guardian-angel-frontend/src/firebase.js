<<<<<<< HEAD
import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
=======
import * as firebase from 'firebase';
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderID: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appID: process.env.REACT_APP_FIREBASE_APPID,
  measurementID: process.env.REACT_APP_FIREBASE_MEASUREMENTID
>>>>>>> 1fbdf143d516ecd0a04d0b21f31242acfd4d2b37
});

export default app;