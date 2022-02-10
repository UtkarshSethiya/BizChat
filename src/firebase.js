
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCw6JtT-nl0SfSU2WjcRZxlHCQ294ooPz4",
  authDomain: "bizchat-157cd.firebaseapp.com",
  projectId: "bizchat-157cd",
  storageBucket: "bizchat-157cd.appspot.com",
  messagingSenderId: "456040397461",
  appId: "1:456040397461:web:e93a49dae67dce5eccb99c",
  measurementId: "G-CZKGLHD00X"
}

)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{ db,auth }
