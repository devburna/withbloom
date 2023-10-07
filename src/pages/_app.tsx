import { AuthProvider } from "@/context/auth/auth.context";
import { CoinProvider } from "@/context/coin/coin.context";
import { AppProps } from "next/app";

function WithBloomApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CoinProvider>
        <Component {...pageProps} />
      </CoinProvider>
    </AuthProvider>
  );
}

export default WithBloomApp;
