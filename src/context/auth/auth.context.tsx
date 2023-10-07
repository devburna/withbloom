import Router from 'next/router';
import { toast } from 'react-toastify';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "@/lib/firebase/firebase.lib";

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState({});

    const signup = (payload: AuthInterface) => {
        createUserWithEmailAndPassword(auth, payload.email, payload.password)
            .then(async (userCredential) => {
                await updateProfile(userCredential.user, { displayName: payload.username });

                Router.push('/dashboard');

            })
            .catch((error) => {
                toast(error.message)
            });
    };

    const login = (payload: AuthInterface) => {
        signInWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                const { user } = userCredential;

                Router.push('/dashboard');
            })
            .catch((error) => {
                toast(error.message)
            });
    };

    const logout = () => {
        auth.signOut().then(() => {
            Router.push('/');
        }).catch(error => {
            toast(error.message)
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
