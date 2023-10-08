import React, { useState } from 'react';
import Link from 'next/link';
import { useAuthContext } from '@/context/auth/auth.context';
import Label from '@/components/forms/label/label.component';
import Input from '@/components/forms/input/input.component';
import Button from '@/components/forms/button/button.form';

const SignupForm = () => {
    const { signup }: any = useAuthContext();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
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
        signup(formData);
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
                    placeholder="Your email address"
                    style="form-control-lg"
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
                    style="form-control-lg"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="col-12"></div>
            <div className="col-lg-12">
                <Button
                    form="signup-form"
                    id="submit"
                    type="submit"
                    style="btn-primary btn-lg lh-lg w-100"
                    text="Continue"
                />
            </div>
            <div className="col-lg-12">
                <span className="text-muted small">
                    Already have an account? <Link href="/" className="fw-regular">
                        Login
                    </Link>
                </span>
            </div>
        </form>
    );
};

export default SignupForm;
