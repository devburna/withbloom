import React, { createContext, useContext, useState } from 'react';

type LoadingContextType = {
    loading: boolean;
    setLoading: (payload: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoadingContext = () => {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error('useLoadingContext must be used within a LoadingProvider');
    }
    return context;
};

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}
