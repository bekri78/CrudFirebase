import firebase from 'firebase';


  const firebaseConfig = {
    apiKey: "AIzaSyBw3N9ieL-p15t_FwTjVJ_Kyoe_8i_cTso",
    authDomain: "registrebgdigital.firebaseapp.com",
    databaseURL: "https://registrebgdigital-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "registrebgdigital",
    storageBucket: "registrebgdigital.appspot.com",
    messagingSenderId: "452442654193",
    appId: "1:452442654193:web:d454f5d8e659a0b4153050",
    measurementId: "G-R519H923D4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


export default firebase