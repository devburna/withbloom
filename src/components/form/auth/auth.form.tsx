import authServices from '@/services/auth/auth.services';
import { useState } from 'react';

const AuthForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = () => {
        authServices.firebase.login(formData)
    };

    const handleSignup = () => {
        authServices.firebase.signup(formData)
    };

    return (
        <div className="row g-4">
            <div className="col-12">
                <label htmlFor="email" className="fw-regular small mb-2">Email Address</label>
                <input
                    className="form-control form-control-lg shadow-none lh-lg"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="col-12">
                <label htmlFor="password" className="fw-regular small mb-2">Password</label>
                <input
                    className="form-control form-control-lg shadow-none lh-lg"
                    id="password"
                    type="password"
                    placeholder="Choose your password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </div>
            <div className="col-12"></div>
            <div className="col-6">
                <button className="btn btn-primary btn-lg fw-regular lh-lg w-100" onClick={handleLogin}>Login</button>
            </div>
            <div className="col-6">
                <button className="btn btn-primary btn-lg fw-regular lh-lg w-100" onClick={handleSignup}>Signup</button>
            </div>
        </div>
    );
};

export default AuthForm;
