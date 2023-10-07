import { useEffect, useState } from "react";
import { useCoinContext } from "@/context/coin/coin.context";

const ExchangeRateWidget = (data: any) => {
    const { coins, searchCoins }: any = useCoinContext();
    const [value, setValue]: any = useState();

    const [formData, setFormData] = useState({
        currency: "",
        amount: "",
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        const value = coins.find((item: any) => item[0] === formData.currency);

        setValue(value)

    }, [formData.currency])

    return (
        <div className="row g-3 g-lg-4">
            <div className="col-12">
                <label htmlFor="currency" className="fw-regular small mb-2">Choose currency</label>
                <select id="currency" className="form-select form-select-lg shadow-none fw-regular lh-lg p-3 px-4" name="currency" onChange={handleInputChange}>
                    <option defaultValue={""}>Tap to select</option>
                    {coins.length ? coins.map(([key, value]: any) => {
                        return (
                            <option value={key} key={key}>{key}</option>
                        )
                    }) : (
                        <option value="" defaultValue="" disabled>No data found</option>
                    )}

                </select>
            </div>
            <div className="col-12">
                <label htmlFor="amount" className="fw-regular small mb-2">Amount to convert</label>
                <input id="amount" type="number" inputMode="decimal" className="form-control form-control-lg shadow-none fw-regular text-center lh-lg p-3 px-4" placeholder="0.00" name="amount" value={formData.amount} onChange={handleInputChange} />
            </div>
            {value ? (<>
                <div className="col-12 my-0">
                    <div className="text-center text-muted fw-regular border-start border-end small p-4 mx-4">
                        1 {formData.currency} ≈ {value[1].rate}
                    </div>
                </div>
                <div className="col-12 my-0">
                    <div className="input-group">
                        <input id="value" type="text" className="form-control form-control-lg shadow-none fw-regular text-center lh-lg p-3 px-4" name="value" value={Number(formData.amount) * value[1].rate} onChange={handleInputChange}
                            disabled readOnly />
                    </div>
                </div></>) : ''}
        </div>
    )
}

export default ExchangeRateWidget;