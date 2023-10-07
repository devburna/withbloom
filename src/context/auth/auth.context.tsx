import Router from 'next/router';
import { toast } from 'react-toastify';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "@/lib/firebase/firebase.lib";

type AuthContextType = {
    login: (payload: AuthInterface) => Promise<void>;
    signup: (payload: AuthInterface) => Promise<void>;
    logout: () => Promise<void>;
    user: {}
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState({});

    const signup = async (payload: AuthInterface) => {
        await createUserWithEmailAndPassword(auth, payload.email, payload.password).then(async (userCredential) => {
            await updateProfile(userCredential.user, { displayName: payload.username });
            Router.push('/dashboard');
        }).catch((error) => {
            toast.error(error.message);
        });
    };

    const login = async (payload: AuthInterface) => {
        await signInWithEmailAndPassword(auth, payload.email, payload.password).then(() => {
            Router.push('/dashboard');
        }).catch((error) => {
            toast.error(error.message);
        });
    };

    const logout = async () => {
        await auth.signOut().then(() => {
            Router.push('/');
        }).catch((error) => {
            toast.error(error.message);
        });
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
    }, []);

    return (
        <AuthContext.Provider value={{ login, signup, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}
