import { useEffect, useState } from "react";
import AuthLayout from "@/layouts/auth/auth.layout";
import CoinsWidget from "@/components/widgets/coins/coins.widget";
import coinprofile from "@/lib/coinprofile/coinprofile.lib";
import Link from "next/link";

const DashboardPage = () => {
    const [coinlist, updateCoinlist]: any = useState({});

    useEffect(() => {
        coinprofile.listCoins().then((res: any) => {
            updateCoinlist(Object.entries(res.data.data.rates))
        })
    }, []);

    return (
        <AuthLayout>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-10">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h5 className="text-dark mb-1">Dashboard</h5>
                            <span className="small">Explore the cryptoeconomy</span>
                        </div>
                        <div>
                            <Link className="btn btn-primary btn-sm fw-regular lh-lg px-3" href="/dashboard/exchange-rate">Exchange Rate</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10">
                    <CoinsWidget data={coinlist} />
                </div>
            </div>
        </AuthLayout>
    )
}

export default DashboardPage;