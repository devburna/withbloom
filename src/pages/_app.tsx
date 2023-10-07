import { AuthProvider } from "@/context/auth/auth.context";
import { AppProps } from "next/app";

function WithBloomApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default WithBloomApp;
