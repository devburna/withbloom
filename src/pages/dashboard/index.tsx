import { useEffect } from "react";
import AuthLayout from "@/layouts/auth/auth.layout";
import CoinsWidget from "@/components/widgets/coins/coins.widget";

const DashboardPage = () => {
    useEffect(() => {

    }, []);

    return (
        <AuthLayout>
            <div className="row g-4">
                <div className="col-12">
                    <h5 className="text-dark">Dashboard</h5>
                </div>
                <div className="col-auto">
                    <CoinsWidget />
                </div>
            </div>
        </AuthLayout>
    )
}

export default DashboardPage;