import { useEffect, useState } from "react";
import AuthLayout from "@/layouts/auth/auth.layout";
import CoinsWidget from "@/components/widgets/coins/coins.widget";
import coinprofile from "@/lib/coinprofile/coinprofile.lib";
import { useAuthContext } from "@/context/auth/auth.context";

const DashboardPage = () => {
    const user = useAuthContext();
    const [coinlist, updateCoinlist]: any = useState();

    useEffect(() => {
        coinprofile.listCoins().then((res: any) => {
            updateCoinlist(res.data.data.rates)
        })
    }, []);

    const des = "Where you see a list of coins, you can search for a coin and can filter by coin.";

    return (
        <AuthLayout title="Dashboard" description={des}>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-10">
                    <h4>Hi {user?.displayName} </h4>
                    <p className="text-muted small">{des}</p>
                </div>
                <div className="col-lg-10">
                    <CoinsWidget data={coinlist} />
                </div>
            </div>
        </AuthLayout>
    )
}

export default DashboardPage;