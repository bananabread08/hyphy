import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './components/RootLayout'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { ThemeProvider } from './context/ThemeContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
