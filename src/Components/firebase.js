import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBogZSw2hIdHfBjgeCybMsHeimlzw7P1cw",
  authDomain: "barbershop-10.firebaseapp.com",
  projectId: "barbershop-10",
  storageBucket: "barbershop-10.appspot.com",
  messagingSenderId: "607747060964",
  appId: "1:607747060964:web:53facaa658095dba5da8f1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;