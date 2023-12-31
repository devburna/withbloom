import React from "react";
import AuthLayout from "@/layouts/auth/auth.layout";
import CoinsWidget from "@/components/widgets/coins/coins.widget";
import { useAuthContext } from "@/context/auth/auth.context";
import { useLoadingContext } from "@/context/loading/loading.context";

const DashboardPage = () => {
    const { user }: any = useAuthContext();
    const { loading } = useLoadingContext();

    const des = "Where you see a list of coins, you can search for a coin and can filter by coin.";

    return (
        <AuthLayout title="Dashboard" description={des}>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-10">
                    <h4>Hi {user.displayName || user.email} </h4>
                    <p className="text-muted small mb-0">{des}</p>
                </div>
                <div className="col-lg-10">
                    {loading ? <p className="text-muted text-center small p-5">Please wait...</p> : <CoinsWidget />}

                </div>
            </div>
        </AuthLayout>
    )
}

export default DashboardPage;