import Link from "next/link";

const AppBar = ({ page }: { page: string }) => {
    return (
        <div className="container bg-white p-3 py-4">
            <div className="row">
                <div className="col-auto">
                    <h6 className="fw-regular mb-0">{page}</h6>
                </div>
            </div>
        </div>
    )
}

export default AppBar;