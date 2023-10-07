import Router from "next/router";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@/lib/firebase/firebase.lib";

export default {
    signup: (payload: Auth) => {
        createUserWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                const user = userCredential.user;

                Router.push('/dashboard');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log('errorCode: ', errorCode);
                console.log('errorMessage: ', errorMessage);

            });
    },
    login: (payload: Auth) => {
        signInWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                const user = userCredential.user;

                Router.push('/dashboard');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log('errorCode: ', errorCode);
                console.log('errorMessage: ', errorMessage);
            });
    },
    user: () => {
        return auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                return user;
            } else {
                return null;
            }
        });
    },
    logout: () => {
        auth.signOut().then(res => {
            console.log(res);
            Router.push('/');
        }).catch(err => {
            console.log(err);
        })
    }
}