import firebase from "@/lib/firebase/firebase.lib";
import Router from "next/router";

export default {
    firebase: {
        signup: (payload: Auth) => {
            firebase.createUserWithEmailAndPassword(firebase.auth, payload.email, payload.password)
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
            firebase.signInWithEmailAndPassword(firebase.auth, payload.email, payload.password)
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
            return firebase.onAuthStateChanged(firebase.auth, (user) => {
                if (user) {
                    console.log(user);
                    return user;
                } else {
                    return null;
                }
            });
        },
        logout: async () => {
            await firebase.signOut(firebase.auth).then(res => {
                console.log(res);
                Router.push('/');
            }).catch(err => {
                console.log(err);

            })
        }
    }
}