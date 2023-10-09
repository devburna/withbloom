interface CoinInterface {
    [key: string]: {
        rate: number;
        key: string;
    };
}

interface ExchangeRateInterface {
    key: string;
    rate: number;
}

interface ExchangeRateFormInterface {
    currency: string;
    amount: string;
}