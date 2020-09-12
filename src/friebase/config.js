 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC-fIyQNHT5Fltx2eIYRgCYWCWWgl0MsFY",
    authDomain: "react-demo-99620.firebaseapp.com",
    databaseURL: "https://react-demo-99620.firebaseio.com",
    projectId: "react-demo-99620",
    storageBucket: "react-demo-99620.appspot.com",
    messagingSenderId: "927188122881",
    appId: "1:927188122881:web:55e361389ced459bf2af00"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimeStamp;

  export {projectStorage,projectFirestore,timeStamp};