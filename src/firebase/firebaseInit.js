import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId:process.env.APP_ID,
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
