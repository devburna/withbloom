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
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="container py-5" id="guest">
        <div className="row justify-content-center py-lg-5">
          <div className="col-lg-5">
            <div className="card p-md-4">
              <div className="card-header bg-transparent border-0 p-2 p-lg-3">
                <div>
                  <h5>{title}</h5>
                  <p className="text-muted small">{description}</p>
                </div>
              </div>
              <div className="card-body p-2 p-lg-3">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
