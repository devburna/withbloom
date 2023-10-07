import { useEffect, useState } from "react";
import AuthLayout from "@/layouts/auth/auth.layout";
import CoinsWidget from "@/components/widgets/coins/coins.widget";
import coinprofile from "@/lib/coinprofile/coinprofile.lib";
import { useAuthContext } from "@/context/auth/auth.context";

const DashboardPage = () => {
    const user = useAuthContext();
    const [coinlist, updateCoinlist]: any = useState({});

    useEffect(() => {
        coinprofile.listCoins().then((res: any) => {
            updateCoinlist(res.data.data.rates)
        })
    }, []);

    return (
        <AuthLayout pageName="Dashboard">
            <div className="row g-4 justify-content-center">
                <div className="col-lg-10">
                    <h4>Hi {user?.displayName} 👋🏼</h4>
                    <p className="text-muted small">Welcome to your WithBloom dashboard, you can browse a list of coins, search for a specific coin, and apply filters based on the coin's attributes.</p>
                </div>
                <div className="col-lg-10">
                    <CoinsWidget data={coinlist} />
                </div>
            </div>
        </AuthLayout>
    )
}

export default DashboardPage;