import AuthLayout from "@/layouts/auth/auth.layout";
import CoinsWidget from "@/components/widgets/coins/coins.widget";
import { useAuthContext } from "@/context/auth/auth.context";

const DashboardPage = () => {
    const { user }: any = useAuthContext();

    const des = "Where you see a list of coins, you can search for a coin and can filter by coin.";

    return (
        <AuthLayout title="Dashboard" description={des}>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-10">
                    <h4>Hi {user.displayName || user.email} </h4>
                    <p className="text-muted small mb-0">{des}</p>
                </div>
                <div className="col-lg-10">
                    <CoinsWidget />
                </div>
            </div>
        </AuthLayout>
    )
}

export default DashboardPage;