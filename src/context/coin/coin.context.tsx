import coinprofile from '@/lib/coinprofile/coinprofile.lib';
import React, { createContext, useContext, useEffect, useState } from 'react';

const CoinContext = createContext();

export const useCoinContext = () => {
    return useContext(CoinContext);
};

export function CoinProvider({ children }: { children: React.ReactNode }) {
    const [coins, setCoins] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    useEffect(() => {
        const fetchData = coinprofile.listCoins().then((res: any) => {
            setCoins(Object.entries(res.data.data.rates))
        })

        return () => {
            fetchData();
        };
    }, []);

    const searchCoins = (keyword: string) => {
        setSearchKeyword(keyword);
    };

    const filteredCoins = coins.filter((coin) =>
        coin[0].toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <CoinContext.Provider value={{ coins: filteredCoins, searchCoins }}>
            {children}
        </CoinContext.Provider>
    );
}
