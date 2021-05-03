import React ,{useState} from 'react';
import Layout from '../../Components/Layout';
import Images from '../../Images.jsx';
import {register} from '../../actions';
import { useDispatch } from 'react-redux';
const SignUp=(props)=>{
  
 const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[confirmpassword,setConfirmPassword]=useState('');
const  dispatch = useDispatch();

function registerUser(e){
  e.preventDefault();
  const user={
    name, email, password, confirmpassword}
  dispatch(register(user))
}

    return (
        <>
        <div className="overlay" style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + 'loginimage.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
        <Layout
         source ={Images[0].src}
         />
         <form >
         <div className="form-group">
          <input type="text" id="exampleInput" className="form" placeholder="UserName" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="Email" id="exampleInputEmail1" className="form" placeholder="Email"   value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="password" id="exampleInputPassword1" className="form" placeholder="Password"   value={password}
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="password" id="exampleInputPassword1" className="form" placeholder="Confirm Password"
           value={confirmpassword}  onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </div>
     <button type="button" className="btn" id="signuploginButton" onClick={registerUser} >SignUp</button>
     </form>
</div>
        </>
    )
}
export default SignUp;