// import firebase from 'firebase';
// import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyAuZPIi8WPojzO3DrC7bLR_DkE7ZcAMYT0",
  authDomain: "projactname.firebaseapp.com",
  projectId: "projactname",
  storageBucket: "projactname.appspot.com",
  messagingSenderId: "929553185353",
  appId: "1:929553185353:web:690a485431c467ca345d98",
  measurementId: "G-FV9L68TGX9"
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;