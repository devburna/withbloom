import coinprofile from '../../lib/coinprofile/coinprofile.lib';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLoadingContext } from '../loading/loading.context';

type CoinContextType = {
    coins: any[];
    searchCoins: (keyword: string) => void;
};

const CoinContext = createContext<CoinContextType | undefined>(undefined);

export const useCoinContext = () => {
    const context = useContext(CoinContext);
    if (context === undefined) {
        throw new Error('useCoinContext must be used within a CoinProvider');
    }
    return context;
};

export function CoinProvider({ children }: { children: React.ReactNode }) {
    const [coins, setCoins] = useState<any[]>([]);
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const { setLoading } = useLoadingContext();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await coinprofile.listCoins();
                setCoins(Object.entries(res.data.data.rates));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching coin data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [setLoading]);

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
