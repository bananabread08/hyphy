import { Shell, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ModeToggle } from './ModeToggle'
import { useCart } from '@/hooks/useCart'

const CartLink = () => {
  const { state } = useCart()
  return (
    <Link to="/cart">
      <div className="relative">
        <ShoppingBag />
        <div className="h-5 w-5 absolute top-[-0.5rem] right-[-0.5rem] z-10 font-bold bg-red-400 text-white rounded-full text-sm text-center">
          {state.length}
        </div>
      </div>
    </Link>
  )
}

export const Navbar = () => {
  return (
    <header className="grow shadow-sm shadow-accent z-10">
      <nav className="container mx-auto px-6 py-3 flex items-center">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <Shell />
          <span className="hidden md:block">HyPhy</span>
        </Link>
        <div className="flex items-center gap-4 ml-auto">
          <ModeToggle />
          <Link to="/shop">Shop</Link>
          <CartLink />
        </div>
      </nav>
    </header>
  )
}
