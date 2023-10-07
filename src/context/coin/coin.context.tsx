import coinprofile from '@/lib/coinprofile/coinprofile.lib';
import React, { createContext, useContext, useEffect, useState } from 'react';

const CoinContext = createContext();

export const useCoinContext = () => {
    return useContext(CoinContext);
};

export function CoinProvider({ children }: { children: React.ReactNode }) {
    const [coins, setCoins]: any = useState([]);
    const [searchKeyword, setSearchKeyword]: any = useState('');

    useEffect(() => {
        const fetchData = coinprofile.listCoins().then((res: any) => {
            setCoins(Object.entries(res.data.data.rates))
        })

        return () => {
            fetchData;
        };
    }, []);

    const searchCoins = (keyword: string) => {
        setSearchKeyword(keyword);
    };

    const filteredCoins = coins.filter((coin: any) =>
        coin[0].toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <CoinContext.Provider value={{ coins: filteredCoins, searchCoins }}>
            {children}
        </CoinContext.Provider>
    );
}
