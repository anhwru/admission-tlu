import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBwLDTVFdBsMUZPqEijzE12GhYdRnupmqU",
    authDomain: "imagetuyensinhtlu.firebaseapp.com",
    databaseURL: "https://imagetuyensinhtlu.firebaseio.com",
    projectId: "imagetuyensinhtlu",
    storageBucket: "imagetuyensinhtlu.appspot.com",
    messagingSenderId: "518744467363",
    appId: "1:518744467363:web:cb24f797e36efee2f99c16",
    measurementId: "G-YKWQJRHN7D"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  
  export { storage, firebase as default };