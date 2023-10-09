export interface CoinInterface {
    [key: string]: {
        rate: number;
        key: string;
    };
}

export interface ExchangeRateInterface {
    key: string;
    rate: number;
}

export interface ExchangeRateFormInterface {
    currency: string;
    amount: string;
}