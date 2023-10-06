import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/css/globals.css';
import '@/styles/css/responsive.css';

export default function GuestLayout({
  children,
  title,
  caption
}: {
  children: React.ReactNode,
  title?: string,
  caption?: string
}) {
  return (
    <>
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
