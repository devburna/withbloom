import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ExchangeRateWidget from '../../components/forms/exchange-rate/exchante-rate.form';

jest.mock('../../context/coin/coin.context', () => ({
    useCoinContext: () => ({
        coins: [
            ['USD', { rate: 1.0 }],
            ['EUR', { rate: 0.85 }],
        ],
        searchCoins: jest.fn(),
    }),
}));

describe('ExchangeRateWidget', () => {

    it('updates the converted amount when input changes', () => {
        const { getByTestId } = render(<ExchangeRateWidget />);

        const amountInput = getByTestId('amount') as HTMLInputElement;
        const valueInput = getByTestId('value') as HTMLInputElement;

        fireEvent.change(amountInput, { target: { value: '100' } });

        waitFor(() => {
            expect(valueInput.value).toBe('85');
        });
    });
});
