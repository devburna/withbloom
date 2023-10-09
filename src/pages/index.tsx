import React from "react";
import GuestLayout from "@/layouts/guest/guest.layout";
import LoginForm from "@/components/forms/login/login.form";

const WelcomePage = () => {
  const title = "Welcome to Bloom";
  const des = "Sign in or create an account to get started"

  return (
    <GuestLayout title={title} description={des}>
      <LoginForm />
    </GuestLayout>
  )
}

export default WelcomePage;