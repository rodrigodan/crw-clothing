import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBEe71WH9_CxjNl7-Nss1tQRKeU4ZALY-g",
    authDomain: "crwn-db-d8407.firebaseapp.com",
    databaseURL: "https://crwn-db-d8407.firebaseio.com",
    projectId: "crwn-db-d8407",
    storageBucket: "crwn-db-d8407.appspot.com",
    messagingSenderId: "167109706826",
    appId: "1:167109706826:web:6b72526e09c4984fad52b3",
    measurementId: "G-7FST0GFJJW"
  };

  export const createUserProfileDocument = async (userAuth, addionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addionalData
        })
      }
      catch(error){
        console.log('error creating user', error.message);
      }

    }

    const test = await firestore.doc('users/aMFtcJ3ZgRJAjoqzeLp5').get();
    console.log(test);
    console.log(test.data());
    
    // const test = await firestore.collection('users');
    // const elemento = await test.get();
    // console.log(elemento);
    // console.log(elemento.docs);
    // test.add({name:'Danilo',age:21});


    
    // console.log(snapShot);
    // we may need to use userRef to do other things 
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;