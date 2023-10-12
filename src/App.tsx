import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './components/RootLayout'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { ThemeProvider } from './context/ThemeContext'
import { loader as productLoader } from './components/Product/Product.loader'
import { loader as shopLoader } from './components/Product/Shop.loader'
import { Product } from './pages/Product'
import { Cart } from './pages/Cart'
import { CartProvider } from './context/CartContext'
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
        loader: shopLoader,
      },
      {
        path: '/shop/:id',
        element: <Product />,
        loader: productLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ThemeProvider>
    </>
  )
}

export default App
