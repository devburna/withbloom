import { useState } from 'react';
import { useAuthContext } from '@/context/auth/auth.context';
import Link from 'next/link';
import Label from '@/components/forms/label/label.component';
import Input from '@/components/forms/input/input.component';

const SignupForm = () => {
    const { signup }: any = useAuthContext();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignup = (e: any) => {
        e.preventDefault();

        signup(formData)
    };

    return (
        <form id="signup-form" onSubmit={handleSignup} className="row g-4">
            <div className="col-12">
                <Label id="username" text="Username" />
                <Input
                    form="signup-form"
                    id="username"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="col-12">
                <Label id="email" text="Email Address" />
                <Input
                    form="signup-form"
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
                    form="signup-form"
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
                <button form="signup-form" type="submit" className="btn btn-primary btn-lg fw-regular lh-lg w-100" >Continue</button>
            </div>
            <div className="col-lg-12">
                <span className="text-muted small">Already have an account? <Link href="/" className="fw-regular">Login</Link></span>
            </div>
        </form>
    );
};

export default SignupForm;
