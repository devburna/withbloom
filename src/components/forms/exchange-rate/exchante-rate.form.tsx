import React, { ChangeEvent, useEffect, useState } from 'react';
import { useCoinContext } from '../../../context/coin/coin.context';
import Dropdown from '../../../components/forms/dropdown/dropdown.component';
import Input from '../../../components/forms/input/input.component';
import Label from '../../../components/forms/label/label.component';
import { ExchangeRateFormInterface, ExchangeRateInterface } from '../../../interface/global/global.interface';

const ExchangeRateWidget = () => {
    const { coins, searchCoins } = useCoinContext();
    const [keyword, setKeyword] = useState<string>('');
    const [selectedValue, setSelectedValue] = useState<[string, ExchangeRateInterface] | null>(null);
    const [formData, setFormData] = useState<ExchangeRateFormInterface>({ currency: '', amount: '' });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCurrencySelect = (selectedCurrency: string) => {
        setFormData({ ...formData, currency: selectedCurrency });
        setKeyword('');
    };

    useEffect(() => {
        const selectedCoin = coins.find(([key]: [string]) => key === formData.currency);
        setSelectedValue(selectedCoin);
    }, [formData.currency, coins]);

    useEffect(() => {
        searchCoins(keyword);
    }, [keyword, searchCoins]);

    const exchangeRate = selectedValue ? selectedValue[1].rate : null;
    const convertedAmount = Number(formData.amount) * (exchangeRate || 0);

    return (
        <div className="row g-3 g-lg-4">
            <div className="col-12">
                <Label htmlFor="currency" text="Choose currency" />
                <Dropdown
                    id="currencies"
                    className="form-control-lg"
                    options={coins.map(([key]: [string]) => key)}
                    onSelect={handleCurrencySelect}
                    placeholder="Tap to select"
                />
            </div>
            <div className="col-12">
                <Label htmlFor="amount" text="Amount to convert" />
                <Input
                    id="amount"
                    type="number"
                    inputMode="decimal"
                    className="form-control-lg fw-regular text-center lh-lg p-3 px-4"
                    placeholder="0.00"
                    min={0.00000000}
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                />
            </div>
            <div className="col-12 my-0">
                <div className="text-center text-muted fw-regular border-start border-end small p-4 mx-4">
                    {formData.currency ? `1 ${formData.currency} ≈ ${exchangeRate}` : ''}
                </div>
            </div>
            <div className="col-12 my-0">
                <div className="input-group">
                    <Input
                        id="value"
                        type="text"
                        className="form-control-lg fw-regular text-center p-3 px-4"
                        name="value"
                        value={convertedAmount || ''}
                        readOnly
                        aria-labelledby="value"
                    />
                </div>
            </div>
        </div>
    );
};

export default ExchangeRateWidget;
