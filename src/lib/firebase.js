import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGyXhHmYjdz0iuwHFA79d82zDooZG32k4",
  authDomain: "fir-sample-3da81.firebaseapp.com",
  projectId: "fir-sample-3da81",
  storageBucket: "fir-sample-3da81.appspot.com",
  messagingSenderId: "870442640385",
  appId: "1:870442640385:web:3dcda8578ab9787a714c00"
};

firebase.initializeApp(firebaseConfig);