import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'

export const RootLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-center leading-loose">
        <Navbar />
        <main className="grow">
          <Outlet />
        </main>
      </div>
    </>
  )
}
