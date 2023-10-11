import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CoinsWidget from '../../components/widgets/coins/coins.widget';
import { useCoinContext } from '@/context/coin/coin.context';

jest.mock('../../context/coin/coin.context', () => ({
    useCoinContext: () => ({
        coins: [],
        searchCoins: jest.fn(),
    }),
}));

describe('CoinsWidget', () => {
    it('renders the component', () => {
        const { getByTestId } = render(<CoinsWidget />);

        const inputElement = getByTestId('coin-search') as HTMLInputElement;

        fireEvent.change(inputElement, { target: { value: 'BTCNGN' } });

        waitFor(() => {
            expect(inputElement.value).toBe('BTCNGN');
            expect(useCoinContext().searchCoins).toHaveBeenCalledWith('BTCNGN');
        });
    });
});
