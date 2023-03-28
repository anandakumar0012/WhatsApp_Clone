import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQKDURdPsEL-gV-0C1ga2HqezzF6WdOLA",
  authDomain: "whatsapp-mern-a9e9b.firebaseapp.com",
  projectId: "whatsapp-mern-a9e9b",
  storageBucket: "whatsapp-mern-a9e9b.appspot.com",
  messagingSenderId: "803908745258",
  appId: "1:803908745258:web:034a2e362e6197aae3eb53"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;