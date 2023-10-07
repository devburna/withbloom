import authServices from "@/services/auth/auth.services";

const AppBar = ({ page }: { page: string }) => {
    return (
        <div className="container bg-white p-3">
            <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                    <h6 className="fw-regular mb-0">{page}</h6>
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={authServices.logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default AppBar;