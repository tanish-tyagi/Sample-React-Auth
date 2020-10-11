import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGLszpNyK6ik9apy-lbU-xjv_wakDeKDg",
    authDomain: "reactsocialapp-8b027.firebaseapp.com",
    databaseURL: "https://reactsocialapp-8b027.firebaseio.com",
    projectId: "reactsocialapp-8b027",
    storageBucket: "reactsocialapp-8b027.appspot.com",
    messagingSenderId: "1094311175340",
    appId: "1:1094311175340:web:45711232ccc98b1ae72b09"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;