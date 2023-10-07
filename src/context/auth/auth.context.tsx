import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '@/lib/firebase/firebase.lib';

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState({});

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
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
}
