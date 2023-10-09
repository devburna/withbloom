import React from 'react';
import Head from 'next/head';
import Sidebar from '../../components/sidebar/index.component';
import AppBar from '../../components/appbar/index.component';
import BottomNav from '../../components/bottom-nav/index.component';
import { CoinProvider } from '../../context/coin/coin.context';

export default function AuthLayout({
  children,
  title,
  description
}: {
  children: React.ReactNode,
  title: string,
  description?: string
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <CoinProvider>
        <main className="container-fluid vh-100">
          <div className="row g-4 h-100">
            <div className="col-xl-3 col-xxl-2 position-fixed border-end d-none d-xl-block h-100">
              <Sidebar />
            </div>
            <div className="col offset-xl-3 offset-xxl-2">
              <div className="row">
                <div className="col-12 sticky-top border-bottom">
                  <AppBar page={title} />
                </div>
                <div className="col-12">
                  <div className="p-2 py-4 py-lg-5">{children}</div>
                </div>
                <div className="col-12 d-block d-xl-none"><div className="py-5"></div></div>
                <div className="col-12 fixed-bottom d-block d-xl-none p-0">
                  <BottomNav />
                </div>
              </div>
            </div>
          </div>
        </main></CoinProvider></>
  )
}
