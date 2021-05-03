import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import store from './store';
const  firebaseConfig = {
  apiKey: "AIzaSyDt4ohKR6iVO0WdbVX5_X6uPYq8btSqqzQ",
  authDomain: "chat-app-799e5.firebaseapp.com",
  projectId: "chat-app-799e5",
  storageBucket: "chat-app-799e5.appspot.com",
  messagingSenderId: "516017611437",
  appId: "1:516017611437:web:04949ffc490e1275ef1c24"
};

firebase.initializeApp(firebaseConfig);
window.store=store;
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


