import React,{useState} from 'react'
import {db,auth} from '../firebase'
import firebase from 'firebase/compat/app'
import send from './images/send.png'
import '../App.css'

function Sendmessage({scroll}){
const [message,setmessage]=useState('')
async function sendmessage(e){
e.preventDefault()
const {uid,photoURL,displayName}=auth.currentUser

await db.collection('BizChat').add({
    
    text: message,
  photoURL,
  displayName,
    uid,
    createdAt:firebase.firestore.FieldValue.serverTimestamp()
})
setmessage('')
scroll.current.scrollIntoView({ behavior: 'smooth' })
}
return(
    <div className='sendmessage'>
       
        <form   onSubmit={sendmessage}>
            
            <div className='sendMsg' >
            <input className='input'  value={message} onChange={(e)=>setmessage(e.target.value)} placeholder='Write Something...' required></input>
            <button className=' btn' type='submit'><img src={send}></img></button>
            </div>
        </form>
       
    </div>
)

}
export default Sendmessage;