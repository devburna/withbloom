import Router from "next/router";
import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "@/lib/firebase/firebase.lib";

export default {
    firebase: {
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
            return onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log(user);
                    return user;
                } else {
                    return null;
                }
            });
        },
        logout: async () => {
            await signOut(auth).then(res => {
                console.log(res);
                Router.push('/');
            }).catch(err => {
                console.log(err);

            })
        }
    }
}