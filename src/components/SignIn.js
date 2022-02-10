import './signin.css';
import React from 'react';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase.js'



function SingnIn(){
function signin(){

const provider= new firebase.auth.GoogleAuthProvider()

auth.signInWithPopup(provider)


}

    return(
      <div  className='sign border'>

<h1 >Chat SignIn Page</h1>
<button className='btn-primary btn' onClick={signin}>Sign In with Google</button>
      </div>
    );


}
export default SingnIn;