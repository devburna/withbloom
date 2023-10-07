import { useAuthContext } from "@/context/auth/auth.context";

const AppBar = ({ page }: { page: string }) => {
    const { logout }: any = useAuthContext();

    return (
        <div className="container bg-white p-3">
            <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                    <h6 className="fw-regular mb-0">{page}</h6>
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default AppBar;