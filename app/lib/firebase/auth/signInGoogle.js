import  {fb_auth}  from '../config';
//import {firebase} from "firebase";
import {signInWithPopup, getAuth, GoogleAuthProvider} from "firebase/auth";

// Get the authentication instance using the Firebase app
//const auth = getAuth(firebase_app);


/*export default async function signIn(){
    let result = null; //var for good result
    let error = null;  //var for errors
    const provider = new firebase.auth.GoogleAuthProvider();

    try{
        result = await signInWithGoogle(firebase_app.auth.signInWithPopup(provider));
    }catch (e){
        error = e; 
        console.error(error);
    }
    return {result,error};
}*/

export const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(fb_auth, provider);
        const user = result.user;
      // handle signed-in user
    } catch (error) {
      console.error(error);
    }
  };

  export const signOut = () => {
    fb_auth.signOut();
  }