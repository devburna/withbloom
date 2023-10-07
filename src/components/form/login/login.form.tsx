import { useState } from 'react';
import { useAuthContext } from '@/context/auth/auth.context';
import Link from 'next/link';

const LoginForm = () => {
    const { login }: any = useAuthContext();

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

    const handleLogin = (e: any) => {
        e.preventDefault();
        
        login(formData)
    };

    return (
        <form onSubmit={handleLogin} className="row g-4">
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
                    required
                />
            </div>
            <div className="col-12">
                <label htmlFor="password" className="fw-regular small mb-2">Password</label>
                <div className="input-group">
                    <input
                        className="form-control form-control-lg shadow-none lh-lg"
                        id="password"
                        type="password"
                        placeholder="Choose your password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>
            <div className="col-12"></div>
            <div className="col-lg-12">
                <button type="submit" className="btn btn-primary btn-lg fw-regular lh-lg w-100" >Continue</button>
            </div>
            <div className="col-lg-12">
                <span className="text-muted small">Don have an account? <Link href="/signup" className="fw-regular">Signup</Link></span>
            </div>
        </form>
    );
};

export default LoginForm;
