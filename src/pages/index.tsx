import GuestLayout from "@/layouts/guest/guest.layout";
import AuthForm from "@/components/form/auth/auth.form";

const WelcomePage = () => {
  return (
    <GuestLayout>
      <div className="mb-4">
        <h5>Welcome to WithBloom</h5>
        <p className="text-muted small">Sign in or create an account to get started</p>
      </div>
      <AuthForm />
    </GuestLayout>
  )
}

export default WelcomePage;