import React, { useEffect, useState } from "react";
import { useCoinContext } from "@/context/coin/coin.context";

const ExchangeRateWidget = () => {
    const { coins, searchCoins }: any = useCoinContext();
    const [keyword, setKeyword]: any = useState('');
    const [value, setValue]: any = useState();
    const [formData, setFormData] = useState({ currency: "", amount: "" });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        const selectedCoin = coins.find(([key]: [any]) => key === formData.currency);
        setValue(selectedCoin);
    }, [formData.currency]);

    useEffect(() => {
        searchCoins(keyword);
    }, [keyword]);

    const exchangeRate = value ? value[1].rate : null;
    const convertedAmount = Number(formData.amount) * exchangeRate;

    return (
        <div className="row g-3 g-lg-4">
            <div className="col-12">
                <label htmlFor="currency" className="fw-regular small mb-2">Choose currency</label>
                <div className="dropdown">
                    <button
                        className={`form-control form-control-lg shadow-none fw-regular text-start lh-lg p-3 px-4 text-${formData.currency ? '' : 'muted'}`}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {formData.currency || 'Tap to select'}
                    </button>
                    <ul className="dropdown-menu lh-lg w-100 py-0" style={{ height: 300, overflow: "scroll" }}>
                        <li className="bg-white py-3 sticky-top">
                            <div className="dropdown-item bg-transparent">
                                <input
                                    type="search"
                                    className="form-control form-control-sm lh-lg shadow-none"
                                    placeholder="Type..."
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                            </div>
                        </li>
                        {coins.length ? (
                            coins.map(([key]: [any]) => (
                                <li key={key}>
                                    <a
                                        className="dropdown-item fw-regular py-2 small"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleInputChange({ target: { name: "currency", value: key } });
                                        }}
                                    >
                                        {key}
                                    </a>
                                </li>
                            ))
                        ) : (
                            <li>
                                <div className="dropdown-item bg-transparent py-2 small">No data found</div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="col-12">
                <label htmlFor="amount" className="fw-regular small mb-2">Amount to convert</label>
                <input
                    id="amount"
                    type="number"
                    inputMode="decimal"
                    className="form-control form-control-lg shadow-none fw-regular text-center lh-lg p-3 px-4"
                    placeholder="0.00"
                    min={0.00000000}
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                />
            </div>
            {value && (
                <>
                    <div className="col-12 my-0">
                        <div className="text-center text-muted fw-regular border-start border-end small p-4 mx-4">
                            1 {formData.currency} ≈ {exchangeRate}
                        </div>
                    </div>
                    <div className="col-12 my-0">
                        <div className="input-group">
                            <input
                                id="value"
                                type="text"
                                className="form-control form-control-lg shadow-none fw-regular text-center lh-lg p-3 px-4"
                                name="value"
                                value={convertedAmount || ''}
                                readOnly
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ExchangeRateWidget;
