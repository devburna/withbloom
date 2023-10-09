import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomNav = () => {
    const router = useRouter();

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
        <div className="container-fluid bg-white shadow fw-regular small lh-lg">
            <div className="row justify-content-around">
                {
                    items.map((value, key) => {
                        return (<Link href={value.route} className={`col-auto text-${router.pathname === value.route ? "primary" : "dark"} py-3 `} key={key}>
                            {value.name}
                        </Link>)
                    })
                }
            </div>
        </div>
    )
}

export default BottomNav;