import React from "react"
import GoogleSigninImg from "../../googleLoginBtn.png"

import { auth } from "./firebaseConfig"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"

const SignIn = () => {
    const GoogleSignin = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }
    return (
        <main className="welcome">
            <h2>Signin to chatapp</h2>
            <p>Sign in with google to chat with your friend.</p>
            <button className="sign-in" onClick={GoogleSignin}>
                <img src={GoogleSigninImg}/>
            </button>
        </main>
    )
}

export default SignIn;