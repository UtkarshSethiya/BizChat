
import './App.css';
import SingnIn from './components/SignIn';
import Chat from './components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase';
import Signout from './components/Signout';
function App() {

const [user] = useAuthState(auth)

  return (
    <div className="App">
    
    {user ? <Chat/>  : <SingnIn/>}
   

    </div>
  );
}

export default App;
