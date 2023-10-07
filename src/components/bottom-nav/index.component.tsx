import Link from "next/link";

const items = [
    {
        name: 'Dashboard',
        route: '/dashboard'
    },
    {
        name: 'Exchange Rate',
        route: '/dashboard/exchange-rate'
    }
]

const BottomNav = () => {
    return (
        <div className="container-fluid bg-white shadow fw-regular small lh-lg">
            <div className="row justify-content-around">
                {
                    items.map((value, key) => {
                        return (<Link href={value.route} className="col-auto py-3" key={key}>
                            {value.name}
                        </Link>)
                    })
                }
            </div>
        </div>
    )
}

export default BottomNav;