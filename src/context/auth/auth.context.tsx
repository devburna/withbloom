import Router from 'next/router';
import { toast } from 'react-toastify';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "../../lib/firebase/firebase.lib";
import { useLoadingContext } from '../loading/loading.context';
import { AuthInterface } from '../../interface/auth/auth.interface';

type AuthContextType = {
    login: (payload: AuthInterface) => Promise<void>;
    signup: (payload: AuthInterface) => Promise<void>;
    logout: () => Promise<void>;
    user: {};
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
    const { setLoading } = useLoadingContext();

    const signup = async (payload: AuthInterface) => {
        setLoading(true);

        await createUserWithEmailAndPassword(auth, payload.email, payload.password).then(async (userCredential) => {
            await updateProfile(userCredential.user, { displayName: payload.username });
            Router.push('/dashboard');
        }).catch((error) => {
            toast.error(error.message);
        }).finally(() => {
            setLoading(false);
        })
    };

    const login = async (payload: AuthInterface) => {
        setLoading(true);

        await signInWithEmailAndPassword(auth, payload.email, payload.password).then(() => {
            Router.push('/dashboard');
        }).catch((error) => {
            toast.error(error.message);
        }).finally(() => {
            setLoading(false);
        })
    };

    const logout = async () => {
        setLoading(true);

        await auth.signOut().then(() => {
            Router.push('/');
        }).catch((error) => {
            toast.error(error.message);
        }).finally(() => {
            setLoading(false);
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
            unsubscribe;
        };
    }, []);

    return (
        <AuthContext.Provider value={{ login, signup, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}
