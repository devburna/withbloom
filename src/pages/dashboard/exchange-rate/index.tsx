import Link from "next/link";
import { useEffect, useState } from "react";
import AuthLayout from "@/layouts/auth/auth.layout";
import ExchangeRateWidget from "@/components/form/exchange-rate/exchante-rate.form";
import coinprofile from "@/lib/coinprofile/coinprofile.lib";

const ExchangeRatePage = () => {
    const [coinlist, updateCoinlist]: any = useState({});

    useEffect(() => {
        coinprofile.listCoins().then((res: any) => {
            updateCoinlist(res.data.data.rates)
        })
    }, []);

    return (
        <AuthLayout pageName="Exchange Rate">
            <div className="row g-4 justify-content-center">
                <div className="col-md-9 col-lg-7 col-xxl-5 d-none d-lg-block">
                    <h4 className="text-dark mb-1">Discover new coins and their market rates</h4>
                    <span className="text-muted small">You type how much you have in currency A and see how much you get in currency B.</span>
                </div>
                <div className="col-12"></div>
                <div className="col-md-9 col-lg-7 col-xxl-5">
                    <ExchangeRateWidget data={coinlist} />
                </div>
            </div>
        </AuthLayout >
    )
}

export default ExchangeRatePage;