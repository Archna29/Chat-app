
//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  FirstPage from './Components/GetStarted';
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
function App() {
  return (
    <div className="App">
   
    <Router>
    <FirstPage/>
    <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Router>
    </div>
  );
}

export default App;
