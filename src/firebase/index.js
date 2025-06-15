import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth' 
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyANuRzzTV6_NjZlxwwvRrHLQG7Cyg7FPWE",
  authDomain: "fresh-auth-log.firebaseapp.com",
  projectId: "fresh-auth-log",
  storageBucket: "fresh-auth-log.firebasestorage.app",
  messagingSenderId: "228296879433",
  appId: "1:228296879433:web:06eadba7a0fe4a4121fe98"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  
const db = getFirestore(app);

export { auth, db, onAuthStateChanged }; 