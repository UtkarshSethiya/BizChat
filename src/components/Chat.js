import './chat.css'
import '../App.css'
import Signout from './Signout';
import Sendmessage from './Sendmessage';
import { auth, db } from '../firebase'
import React, {useState,useEffect,useRef} from 'react'

function Chat(){
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
    <div className='col-6'>
       
    <div className=' msgs'>
       
<div className='nav'>
    <span><img className='navimg' src={photoURL}></img> {displayName}</span> 
    <span><Signout/></span>
</div>

<div className='space'></div>

    {msg.map(({id,text,photoURL,displayName,uid})=>(
   <div  >
    <div key={id}  className={`msg ${uid==auth.currentUser.uid ? 'send' : 'received'}`}  >

    <img className='img' src={photoURL}></img>
    <p>{text}</p>

   
   
    </div>
    </div>
    
))}
<Sendmessage scroll={scroll} />
    <div ref={scroll}> </div>
        </div>

</div>

</div>


 </div>

 );


}
export default Chat;