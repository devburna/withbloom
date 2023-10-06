import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/css/globals.css';
import '@/styles/css/responsive.css';

import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='container py-4 p-md-5'>{children}</main>
  )
}
