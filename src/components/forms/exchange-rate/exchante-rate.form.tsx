import React, { useEffect, useState } from "react";
import { useCoinContext } from "@/context/coin/coin.context";
import Dropdown from "@/components/forms/dropdown/dropdown.component";
import Input from "@/components/forms/input/input.component";
import Label from "@/components/forms/label/label.component";

const ExchangeRateWidget = () => {
    const { coins, searchCoins }: any = useCoinContext();
    const [keyword, setKeyword]: any = useState('');
    const [value, setValue]: any = useState();
    const [formData, setFormData] = useState({ currency: "", amount: "" });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCurrencySelect = (selectedCurrency: string) => {
        setFormData({ ...formData, currency: selectedCurrency });
        setKeyword('');
    };

    useEffect(() => {
        const selectedCoin = coins.find(([key]: [any]) => key === formData.currency);
        setValue(selectedCoin);
    }, [formData.currency, coins]);

    useEffect(() => {
        searchCoins(keyword);
    }, [keyword, searchCoins]);

    const exchangeRate = value ? value[1].rate : null;
    const convertedAmount = Number(formData.amount) * exchangeRate;

    return (
        <div className="row g-3 g-lg-4">
            <div className="col-12">
                <Label id="currency" text="Choose currency" />
                <Dropdown
                    style="form-control-lg"
                    options={coins.map(([key]: [any]) => key)}
                    onSelect={handleCurrencySelect}
                    placeholder="Tap to select"
                />
            </div>
            <div className="col-12">
                <Label id="amount" text="Amount to convert" />
                <Input
                    id="amount"
                    type="number"
                    inputMode="decimal"
                    style="form-control-lg fw-regular text-center lh-lg p-3 px-4"
                    placeholder="0.00"
                    min={0.00000000}
                    name="amount"
                    value={formData.amount} onChange={handleInputChange}
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
                        style="form-control-lg fw-regular text-center p-3 px-4"
                        name="value"
                        value={convertedAmount || ''}
                        readOnly={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default ExchangeRateWidget;