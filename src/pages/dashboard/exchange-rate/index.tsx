import React from "react";
import AuthLayout from "@/layouts/auth/auth.layout";
import ExchangeRateWidget from "@/components/forms/exchange-rate/exchante-rate.form";

const ExchangeRatePage = () => {
    const title = "Discover new coins and their market rates";

    return (
        <AuthLayout title="Exchange Rate" description={title}>
            <div className="row g-4 justify-content-center">
                <div className="col-md-9 col-lg-7 col-xxl-5 d-none d-lg-block">
                    <h4 className="text-dark mb-1">Discover new coins and their market rates</h4>
                    <span className="text-muted small">You type how much you have in currency A and see how much you get in currency B.</span>
                </div>
                <div className="col-12"></div>
                <div className="col-md-9 col-lg-7 col-xxl-5">
                    <ExchangeRateWidget />
                </div>
            </div>
        </AuthLayout >
    )
}

export default ExchangeRatePage;