import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAmUYRcXTqAh3SK-XCPRjuDtvp3tvBxRDk",
  authDomain: "todoapp-leminhan-itss.firebaseapp.com",
  projectId: "todoapp-leminhan-itss",
  storageBucket: "todoapp-leminhan-itss.appspot.com",
  messagingSenderId: "993108527621",
  appId: "1:993108527621:web:008c71b92996c086c22a6c",
  measurementId: "G-PGYGY4ECVE"
};

firebase.initializeApp(firebaseConfig);
