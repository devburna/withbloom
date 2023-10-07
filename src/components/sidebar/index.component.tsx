import Link from "next/link";
import { useAuthContext } from "@/context/auth/auth.context";

const Sidebar = () => {
    const { logout }: any = useAuthContext();

    const items = [
        {
            name: 'Dashboard',
            route: '/dashboard'
        },
        {
            name: 'Exchange Rate',
            route: '/dashboard/exchange-rate'
        }
    ];

    return (
        <div className="list-group rounded-0 gap-3 h-100">
            <div className="list-group-item border-0 px-5 py-3">
                <strong className="d-block fs-4">Bl<span className="text-primary">o</span>om</strong>
            </div>
            {
                items.map((value, key) => {
                    return (<Link href={value.route} className="list-group-item border-0 rounded-0 fw-regular px-5" key={key}>
                        {value.name}
                    </Link>)
                })
            }
            <button type="button" onClick={logout} className="list-group-item border-0 rounded-0 fw-regular text-start text-danger px-5 mb-5 mt-auto">
                Logout
            </button>
        </div>
    )
}

export default Sidebar;