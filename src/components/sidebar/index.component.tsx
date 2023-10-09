import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/auth/auth.context";

const Sidebar = () => {
    const router = useRouter();

    const { logout } = useAuthContext();

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
            <div className="list-group-item border-0 px-4 py-3 mb-4">
                <strong className="d-block fs-4">Bl<span className="text-primary">o</span>om</strong>
            </div>
            {
                items.map((value, key) => {
                    return (<Link href={value.route} className={`list-group-item border-0 rounded fw-regular px-4 lh-lg ${router.pathname === value.route ? "active" : ""}`} key={key}>
                        {value.name}
                    </Link>)
                })
            }
            <button type="button" onClick={logout} className="list-group-item border-0 rounded-0 fw-regular text-start text-danger px-4 mb-5 mt-auto">
                Logout
            </button>
        </div>
    )
}

export default Sidebar;