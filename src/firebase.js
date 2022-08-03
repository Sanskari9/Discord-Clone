
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyByu-ouYJQU1JbaxkOq19PgAZvN4uAhspc",
    authDomain: "discord-clone-app-815f4.firebaseapp.com",
    projectId: "discord-clone-app-815f4",
    storageBucket: "discord-clone-app-815f4.appspot.com",
    messagingSenderId: "1024507846457",
    appId: "1:1024507846457:web:b0061c9a079fda41ffd2e8"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;