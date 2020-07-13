import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from "firebase";
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAJwSpXiOdCdT6Hl7kjWvONxI5aW14I-vw",
  authDomain: "rich-text-notes.firebaseapp.com",
  databaseURL: "https://rich-text-notes.firebaseio.com",
  projectId: "rich-text-notes",
  storageBucket: "rich-text-notes.appspot.com",
  messagingSenderId: "339032380598",
  appId: "1:339032380598:web:3f0ccb7a6b17c553fac217",
  measurementId: "G-XCJZM99RYS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('note-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
