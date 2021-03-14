import firebase from "firebase/app";
import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
//   databaseURL: process.env.REACT_APP_databaseURL
// });

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = firebase.initializeApp({
  apiKey: "AIzaSyDMxJEBm62ckRWH5gBZkEyow-scvE9Qf4o",
  authDomain: "guardian-angel-fd236.firebaseapp.com",
  databaseURL: "https://guardian-angel-fd236-default-rtdb.firebaseio.com",
  projectId: "guardian-angel-fd236",
  storageBucket: "guardian-angel-fd236.appspot.com",
  messagingSenderId: "174512453055",
  appId: "1:174512453055:web:978404551696f221aa1d0a",
  measurementId: "G-L923E24DQZ"
});


export default app;