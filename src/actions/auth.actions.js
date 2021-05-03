//This file is for authentication during sign and signin
import firebase from 'firebase';
// import {firestore} from 'firebase';
export const register=(user)=>{
return async (dispatch) =>{
const db= firebase.firestore();
firebase.auth()
.createUserWithEmailAndPassword(user.email, user.password)
.then(user=>{console.log(user);})
.catch(err=>{console.log(err);})
}
}