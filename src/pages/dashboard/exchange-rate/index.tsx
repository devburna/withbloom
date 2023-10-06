import { useEffect } from "react";
import AuthLayout from "@/layouts/auth/auth.layout";
import ExchangeRateWidget from "@/components/widgets/exchange-rate/exchante-rate.widget";

const ExchangeRatePage = () => {
    useEffect(() => {

    }, []);

    return (
        <AuthLayout>
            <div className="row g-4">
                <div className="col-12">
                    <h5 className="text-dark">Exchange Rate</h5>
                </div>
                <div className="col-auto">
                    <ExchangeRateWidget />
                </div>
            </div>
        </AuthLayout>
    )
}

export default ExchangeRatePage;