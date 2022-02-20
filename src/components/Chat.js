import './chat.css'
import '../App.css'
import Signout from './Signout';
import Sendmessage from './Sendmessage';
import { auth, db } from '../firebase'
import React, {useState,useEffect,useRef} from 'react'

function Chat(props){

    


const scroll = useRef()
    const {uid,photoURL,displayName}=auth.currentUser
const [msg,setmsg]=useState([])
useEffect(()=>{
db.collection('BizChat').orderBy('createdAt').limit(50).onSnapshot((snapshot)=>{
    setmsg(snapshot.docs.map(doc => doc.data()))
console.log(msg)

})



},[])


    return(<div>
       
<div className='row cont'>
    <div className='col-3'></div>
    <div className='col-md-6'>
       
    <div className=' msgs'>
       
<div className='nav'>
    <span className='guestname'>Welcome! {props.guest}</span> 
    <span className='guestname'>General Chat </span>
    <span><Signout/></span>
</div>
<div className='cont2' >


    {msg.map(({id,text,photoURL,displayName,uid})=>(
   <div  >
       
    <div key={id}  className={`msg ${uid==auth.currentUser.uid ? 'send' : 'received'}`}  >


    <p>{text}</p>

   
   
    </div>
    
    </div>

))}</div><div className='ref' ref={scroll}> </div>
<Sendmessage scroll={scroll} />
   
        </div>

</div>

</div>


 </div>

 );


}
export default Chat;