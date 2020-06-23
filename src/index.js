import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOOqE1tvQZbi0wXS7W6PznB3utaaqnQtE",
  authDomain: "catalogue-fd0aa.firebaseapp.com",
  databaseURL: "https://catalogue-fd0aa.firebaseio.com",
  projectId: "catalogue-fd0aa",
  storageBucket: "catalogue-fd0aa.appspot.com",
  messagingSenderId: "376443964756",
  appId: "1:376443964756:web:791ddbe3df3ada35db8cc1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

