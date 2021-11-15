import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBe_Ibo5WIMxfjcWpKSXgnSPKe4xfeyouc",
    authDomain: "slack-clone-e1d9c.firebaseapp.com",
    projectId: "slack-clone-e1d9c",
    storageBucket: "slack-clone-e1d9c.appspot.com",
    messagingSenderId: "925885942255",
    appId: "1:925885942255:web:b55168e729c19bb2880e1a",
    measurementId: "G-Z757PJD20P"
  };

  firebase.initalizeApp(firebaseConfig);
  firebase.analytics();
  
  export default firebase;