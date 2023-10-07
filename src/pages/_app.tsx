import { AuthProvider } from "@/context/auth/auth.context";
import { CoinProvider } from "@/context/coin/coin.context";
import { AppProps } from "next/app";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WithBloomApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CoinProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </CoinProvider>
    </AuthProvider>
  );
}

export default WithBloomApp;
