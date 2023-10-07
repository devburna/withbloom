import React from 'react';
import Head from 'next/head';

export default function GuestLayout({
  children,
  title,
  description
}: {
  children: React.ReactNode,
  title?: string,
  description?: string
}) {
  return (
    <>
      <Head>
        <title>{title} - Bloom</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="container py-5" id='guest'>
        <div className="row justify-content-center py-5">
          <div className="col-lg-5">
            <div className="card p-md-4">
              <div className="card-body">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
