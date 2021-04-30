import React ,{useState} from 'react';
import Layout from '../../Components/Layout';
import Images from '../../Images.jsx';

const SignUp=()=>{
 const[name,setUsername]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[confirmpassword,setConfirmPassword]=useState('');
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
         <form>
         <div className="form-group">
          <input type="text" id="exampleInput" className="form" placeholder="UserName" onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="Email" id="exampleInputEmail1" className="form" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="password" id="exampleInputPassword1" className="form" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="password" id="exampleInputPassword1" className="form" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </div>
     <button type="button" className="btn" id="signuploginButton">SignUp</button>
     </form>
</div>
        </>
    )
}
export default SignUp;