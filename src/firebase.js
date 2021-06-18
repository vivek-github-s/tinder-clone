import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB2JxVmbgOAlGR_i3_o0ccMuSVvf2JRHh8",
    authDomain: "tinder-clone-2b42e.firebaseapp.com",
    projectId: "tinder-clone-2b42e",
    storageBucket: "tinder-clone-2b42e.appspot.com",
    messagingSenderId: "681861496947",
    appId: "1:681861496947:web:5ddbfe829a0aa09f8aaa06",
    measurementId: "G-06QLPG2J8V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;