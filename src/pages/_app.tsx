import { AuthProvider } from "@/context/auth/auth.context";
import { CoinProvider } from "@/context/coin/coin.context";
import { AppProps } from "next/app";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/css/globals.css';
import '@/styles/css/responsive.css';

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
