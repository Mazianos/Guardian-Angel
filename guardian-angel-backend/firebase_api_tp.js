const firebaseConfig = {
  apiKey: "AIzaSyDMxJEBm62ckRWH5gBZkEyow-scvE9Qf4o",
  authDomain: "guardian-angel-fd236.firebaseapp.com",
  databaseURL: "https://guardian-angel-fd236-default-rtdb.firebaseio.com",
  projectId: "guardian-angel-fd236",
  storageBucket: "guardian-angel-fd236.appspot.com",
  messagingSenderId: "174512453055",
  appId: "1:174512453055:web:978404551696f221aa1d0a",
  measurementId: "G-L923E24DQZ"
};

firebase.initializeApp(firebaseConfig);  
const db = firebase.firestore();