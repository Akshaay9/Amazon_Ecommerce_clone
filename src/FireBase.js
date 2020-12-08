import firebase from "firebase"
const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyB4p5URo11pMnFmFQaiRWMYrLLLuoCS3AE",
    authDomain: "clone-react-7972a.firebaseapp.com",
    projectId: "clone-react-7972a",
    storageBucket: "clone-react-7972a.appspot.com",
    messagingSenderId: "699049039352",
    appId: "1:699049039352:web:b2c61cb2927a864f39b20d"
  });
  const db=firebaseApp.firestore()
  const auth=firebase.auth();
  export {auth}
