import React from 'react';
import {NavLink} from 'react-router-dom';
//import doticon from './circles-menu-1.json';
import './style.css';
const FirstPage=() =>{
    return (
    <>
        <div className="card text-center">
<img src="./logo.svg"  className="card-img-top"  id="Logo" alt="..."/>
    <div className="card-body">
   <h3 className="dark">Welcome to Chattings</h3>
  <p className="card-text text-muted ">Chat with your friends, share videos and audios very fastly.
  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
  , when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  {/* <p>{doticon}</p> */}
  </div>
        </div>
        <ul className="nav justify-content-center m-3">
        <li className="nav-item">
         <NavLink to={'/signup'} className="btn btn-primary">SignUp</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={'/login'} className="btn btn-light">Login</NavLink>
        </li>
      </ul>
    </>
    )
}
export default  FirstPage;