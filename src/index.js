import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';

const  firebaseConfig = {
  apiKey: "AIzaSyDt4ohKR6iVO0WdbVX5_X6uPYq8btSqqzQ",
  authDomain: "chat-app-799e5.firebaseapp.com",
  projectId: "chat-app-799e5",
  storageBucket: "chat-app-799e5.appspot.com",
  messagingSenderId: "516017611437",
  appId: "1:516017611437:web:04949ffc490e1275ef1c24"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


