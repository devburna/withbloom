interface CoinInterface {
    [key: string]: {
        rate: number;
        key: string;
    };
}

interface ExchangeRateInterface {
    currency: string;
    amount: string;
}