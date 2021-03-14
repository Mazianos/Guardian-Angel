import * as firebase from 'firebase';
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: public.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: public.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: public.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: public.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderID: public.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appID: public.env.REACT_APP_FIREBASE_APPID,
  measurementID: public.env.REACT_APP_FIREBASE_MEASUREMENTID
});

export default app;