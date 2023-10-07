import { useEffect, useState } from "react";
import AuthLayout from "@/layouts/auth/auth.layout";
import CoinsWidget from "@/components/widgets/coins/coins.widget";
import coinprofile from "@/lib/coinprofile/coinprofile.lib";
import { useAuth } from "@/context/auth/auth.context";

const DashboardPage = () => {
    const user = useAuth();
    const [coinlist, updateCoinlist]: any = useState({});

    useEffect(() => {
        coinprofile.listCoins().then((res: any) => {
            updateCoinlist(res.data.data.rates)
        })
    }, []);

    return (
        <AuthLayout pageName="Dashboard">
            <div className="row g-4 justify-content-center">
                {user?.email}
                <div className="col-lg-10">
                    <CoinsWidget data={coinlist} />
                </div>
            </div>
        </AuthLayout>
    )
}

export default DashboardPage;