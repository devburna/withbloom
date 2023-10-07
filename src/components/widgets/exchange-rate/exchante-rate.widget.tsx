import { useState } from "react";

const ExchangeRateWidget = (data: any) => {
    const items = Object.entries(data.data);

    const [formData, setFormData] = useState({
        currency: "",
        amount: '',
        value: 0,
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="row g-4">
            <div className="col-12">
                <label htmlFor="currency" className="fw-regular small mb-2">Choose currency</label>
                <select id="currency" className="form-select form-select-lg shadow-none fw-regular lh-lg p-3 px-4" name="currency" onChange={handleInputChange}>
                    <option value={""} defaultValue="" disabled>Tap to select</option>
                    {items.length ? items.map(([key, value]: any) => {
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
                <input id="amount" type="number" inputMode="decimal" className="form-control form-control-lg shadow-none fw-regular text-center fs-5 lh-lg p-3 px-4" placeholder="0.00" name="amount" value={formData.amount} onChange={handleInputChange} />
            </div>
            <div className="col-12 my-0">
                <div className="text-center text-muted fw-regular border-start border-end small p-4 mx-4">
                    {formData.currency ? (<span>1 {formData.currency} ~ {data.data[formData.currency].rate}</span>) : ''}
                </div>
            </div>
            <div className="col-12 my-0">
                <div className="input-group">
                    <input id="value" type="text" className="form-control form-control-lg shadow-none fw-regular text-center fs-5 lh-lg p-3 px-4" name="value" value={formData.currency ? (Number(formData.amount) * data.data[formData.currency].rate) : 0} />
                </div>
            </div>
        </div>
    )
}

export default ExchangeRateWidget;