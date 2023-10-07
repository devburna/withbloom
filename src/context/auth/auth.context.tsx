import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@/lib/firebase/firebase.lib";
import Router from 'next/router';

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState({});

    const signup = (payload: Auth) => {
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
    };

    const login = (payload: Auth) => {
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
    };

    const logout = () => {
        auth.signOut().then(res => {
            console.log(res);
            Router.push('/');
        }).catch(err => {
            console.log(err);
        })
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser({});
            }
        });

        return () => {
            unsubscribe();
        };
    }, [user]);

    return (
        <AuthContext.Provider value={{ login, signup, user, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
