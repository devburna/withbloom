import { useAuthContext } from "@/context/auth/auth.context";
import Button from "@/components/forms/button/button.form";

const AppBar = ({ page }: { page: string }) => {
    const { logout }: any = useAuthContext();

    return (
        <div className="container bg-white py-3">
            <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                    <h6 className="fw-regular mb-0">{page}</h6>
                </div>
                <div className="col-auto">
                    <Button type="button" style="btn-outline-danger btn-sm" text="Logout" onClick={logout} />
                </div>
            </div>
        </div>
    )
}

export default AppBar;