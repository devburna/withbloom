import { useState } from "react";
import { useAuthContext } from "@/context/auth/auth.context";
import Link from "next/link";
import { useLoadingContext } from "@/context/loading/loading.context";
import Label from "@/components/forms/label/label.component";
import Input from "@/components/forms/input/input.component";

const LoginForm = () => {
    const { login }: any = useAuthContext();
    const { loading, updateLoading }: any = useLoadingContext();


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = (e: any) => {
        e.preventDefault();
        updateLoading(true)
        login(formData)
    };

    return (
        <form id="login-form" onSubmit={handleLogin} className="row g-4">
            {loading ? <p>lpading</p> : ''}
            <div className="col-12">
                <Label id="email" text="Email Address" />
                <Input
                    form="login-form"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="col-12">
                <Label id="password" text="Password" />
                <Input
                    form="login-form"
                    id="password"
                    type="password"
                    placeholder="Choose your password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="col-12"></div>
            <div className="col-lg-12">
                <button form="login-form" type="submit" className="btn btn-primary btn-lg fw-regular lh-lg w-100" >Continue</button>
            </div>
            <div className="col-lg-12">
                <span className="text-muted small">Don't have an account? <Link href="/signup" className="fw-regular">Signup</Link></span>
            </div>
        </form>
    );
};

export default LoginForm;
