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
});

export default app;