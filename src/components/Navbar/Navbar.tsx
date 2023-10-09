import { Shell, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ModeToggle } from './ModeToggle'

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
          <Link to="#">About</Link>
          <Link to="/cart">
            <ShoppingBag />
          </Link>
        </div>
      </nav>
    </header>
  )
}
