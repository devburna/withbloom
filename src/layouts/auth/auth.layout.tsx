import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/css/globals.css';
import '@/styles/css/responsive.css';

import React from 'react';
import Sidebar from '@/components/sidebar/index.component';
import AppBar from '@/components/appbar/index.component';
import BottomNav from '@/components/bottom-nav/index.component';
import { AuthProvider } from '@/context/auth/auth.context';

export default function AuthLayout({
  children,
  pageName
}: {
  children: React.ReactNode,
  pageName: string
}) {
  return (
    <AuthProvider>
      <div className="container-fluid p-0 vh-100">
        <div className="row g-3 h-100">
          <div className="col-xl-3 col-xxl-2 position-fixed border-end d-none d-xl-block h-100">
            <Sidebar />
          </div>
          <div className="col offset-xl-3 offset-xxl-2">
            <div className="row">
              <div className="col-12 sticky-top border-bottom">
                <AppBar page={pageName} />
              </div>
              <div className="col-12">
                <div className="container p-3 py-4 py-lg-5">{children}</div>
              </div>
              <div className="col-12 d-block d-xl-none"><div className="py-5"></div></div>
              <div className="col-12 fixed-bottom d-block d-xl-none p-0">
                <BottomNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}
