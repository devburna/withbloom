import { useEffect } from "react";
import { AppProps } from "next/app";
import { AuthProvider } from "@/context/auth/auth.context";
import { CoinProvider } from "@/context/coin/coin.context";
import { LoadingProvider } from "@/context/loading/loading.context";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/css/globals.css';
import '@/styles/css/responsive.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WithBloomApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <LoadingProvider>
      <AuthProvider>
        <CoinProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </CoinProvider>
      </AuthProvider>
    </LoadingProvider>
  );
}

export default WithBloomApp;
