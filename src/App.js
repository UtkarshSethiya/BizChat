
import './App.css';
import SingnIn from './components/SignIn';
import Chat from './components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase';
import React,{useState} from 'react';
import Signout from './components/Signout';

function App() {
  const [guest,setguest]=useState('')
const guestnametransfer=(datafromsignup)=>{
setguest(datafromsignup)

}
const [user] = useAuthState(auth)
console.log(guest)
  return (
    <div className="App">
 
    
    {user ? <Chat guest={guest}/>  : <SingnIn guestnametransfer_app={guestnametransfer}  />}
   

    </div>
  );
}

export default App;
