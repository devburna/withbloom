import React, { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { useAuthContext } from '@/context/auth/auth.context';
import Label from '@/components/forms/label/label.component';
import Input from '@/components/forms/input/input.component';
import Button from '@/components/forms/button/button.form';
import { AuthInterface } from '@/interface/auth/auth.interface';

const LoginForm = () => {
  const { login } = useAuthContext();

  const [formData, setFormData] = useState<AuthInterface>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <form id="login-form" onSubmit={handleLogin} className="row g-4">
      <div className="col-12">
        <Label id="email" text="Email Address" />
        <Input
          form="login-form"
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
          form="login-form"
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
          form="login-form"
          id="submit"
          type="submit"
          style="btn-primary btn-lg lh-lg w-100"
          text="Continue"
        />
      </div>
      <div className="col-lg-12">
        <span className="text-muted small">
          Do not have an account?{' '}
          <Link href="/signup" className="fw-regular">
            Signup
          </Link>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
