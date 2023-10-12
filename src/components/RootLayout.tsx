import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'
import { Footer } from './Footer'

export const RootLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-center leading-loose">
        <Navbar />
        <main className="grow">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  )
}
