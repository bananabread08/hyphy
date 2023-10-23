import { RootLayout } from './components/RootLayout'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { loader as productLoader } from './components/Product/Product.loader'
import { loader as shopLoader } from './components/Product/Shop.loader'
import { Shop } from './pages/Shop'
import { Product } from './pages/Product'

export const routesConfig = [
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
    ],
  },
]
