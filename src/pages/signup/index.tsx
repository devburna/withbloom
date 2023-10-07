import GuestLayout from "@/layouts/guest/guest.layout";
import SignupForm from "@/components/form/signup/signup.form";

const SignupPage = () => {
  const title = "Create an Account";
  const des = "Let's get you started"

  return (
    <GuestLayout title={title} description={des}>
      <SignupForm />
    </GuestLayout>
  )
}

export default SignupPage;