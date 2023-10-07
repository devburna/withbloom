import Link from "next/link";
import { useEffect, useState } from "react";
import AuthLayout from "@/layouts/auth/auth.layout";
import ExchangeRateWidget from "@/components/widgets/exchange-rate/exchante-rate.widget";
import coinprofile from "@/lib/coinprofile/coinprofile.lib";

const ExchangeRatePage = () => {
    const [coinlist, updateCoinlist]: any = useState({});

    useEffect(() => {
        coinprofile.listCoins().then((res: any) => {
            updateCoinlist(res.data.data.rates)
        })
    }, []);

    return (
        <AuthLayout>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-6">
                    <h5 className="text-dark mb-1">Exchange Rate</h5>
                    <span className="small">Discover new coins and their market rates.</span>
                </div>
                <div className="col-12 mt-0"></div>
                <div className="col-lg-6">
                    <ExchangeRateWidget data={coinlist} />
                </div>
                <div className="col-12"></div>
                <div className="col-lg-6">
                    <Link className="btn btn-primary btn-sm fw-regular lh-lg px-3" href="/dashboard/">View all coins</Link>
                </div>
            </div>
        </AuthLayout >
    )
}

export default ExchangeRatePage;