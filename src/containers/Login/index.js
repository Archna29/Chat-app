import React,{useState} from 'react'
import Layout from '../../Components/Layout';
import Images from '../../Images';
import './style.css';

const Login=()=>{
    const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
    return (

        <div className="overlay" style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + 'loginimage.jpg'})`,
            backgroundRepeat: 'no-repeat',
          backgroundPosition:'bottom'
          }}>
        <Layout
            source={Images[1].src}
        />
        <form id="Loginlayout">
        <div className="form-group">
          <input type="Email" id="exampleInputEmail1" className="form" placeholder="Email" value={email} 
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="password" id="exampleInputPassword1" className="form" placeholder="Password" value={password} 
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>
<button type="button" className="btn " id="signuploginButton">Login</button>
        </form>   
        </div>
  
    )
  
}
export default Login;