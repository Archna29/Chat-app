import React from 'react';
import './style.css';
const Layout=(props)=>{
    return(
      <>
<div className="Card"> 
        <img src={props.source} id ="img" alt=""/>
        <h3 className="text-center text-white ">Chattings</h3>
       </div>
      </>
    )
}
export default Layout;

