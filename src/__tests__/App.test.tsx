import { render, screen } from '@testing-library/react'
import { CartProvider } from '@/context/CartContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { routesConfig } from '@/routesConfig'
import userEvent from '@testing-library/user-event'

describe('App Component', () => {
  it('Renders Home Page', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/'],
    })
    render(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ThemeProvider>,
    )
    const linkElement = screen.getByText(/Air 75/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('Navigate to and render Shop Page', async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/'],
    })
    render(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ThemeProvider>,
    )
    const user = userEvent.setup()
    await user.click(screen.getByText(/shop/i))
    const shopFilter = screen.getByText(/filter/i)
    expect(shopFilter).toBeInTheDocument()
  })

  it('Render Product Page', async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/'],
    })
    render(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ThemeProvider>,
    )
    const user = userEvent.setup()
    await user.click(screen.getByText(/shop/i))
    await user.click(screen.getByLabelText('/shop/air75-v2'))
    const addToCart = screen.getByText(/add to cart/i)
    expect(addToCart).toBeInTheDocument()
  })

  it('Opens Cart Sheet', async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/'],
    })
    render(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ThemeProvider>,
    )
    const user = userEvent.setup()
    await user.click(screen.getByTitle('cart-button'))
    const yourCart = screen.getByText(/Your Cart/i)
    expect(yourCart).toBeInTheDocument()
  })
})
