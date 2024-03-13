import firebase from 'firebase';


  const firebaseConfig = {
    apiKey: "AIzaSyAOQdQOgmE9vf9nUbXWXOTzKt86ub_ylLA",
    authDomain: "idobatakaigi-with-ham-97a6d.firebaseapp.com",
    projectId: "idobatakaigi-with-ham-97a6d",
    storageBucket: "idobatakaigi-with-ham-97a6d.appspot.com",
    messagingSenderId: "308549881216",
    appId: "1:308549881216:web:5eb4c4fc0b0a264d1bc565"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messagesRef = database.ref('messages');

  export const pushMessage = ({ name, text}) => {
    messagesRef.push({ name , text});
  };




 