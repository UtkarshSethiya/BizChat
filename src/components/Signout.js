import React from 'react'
import {auth} from '../firebase'
import './signout.css'

function Signout(){
return(
 <div className='signout'>
    <button className='btn ' onClick={()=>auth.signOut()}>SignOut</button>
 </div>

);

}
export default Signout;