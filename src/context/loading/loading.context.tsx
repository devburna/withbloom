import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export const useLoadingContext = () => {
    return useContext(LoadingContext);
};

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [loading, setLoading]: any = useState(false);

    const updateLoading = (payload: boolean) => {
        return setLoading(payload);
    }

    return (
        <LoadingContext.Provider value={{ loading, updateLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}
