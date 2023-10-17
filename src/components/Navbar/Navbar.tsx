import { Shell, ShoppingBag, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ModeToggle } from './ModeToggle'
import { useCart } from '@/hooks/useCart'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Button } from '../ui/button'

const CartLink = () => {
  const { state, dispatch } = useCart()
  const subtotal = state.reduce((acc, item) => {
    console.log(item)
    const itemTotal = item.quantity * item.price
    console.log(itemTotal)
    return acc + itemTotal
  }, 0)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative p-0 h-6 w-6">
          <ShoppingBag />
          <div className="h-5 w-5 absolute top-[-0.5rem] right-[-0.5rem] z-10 font-bold bg-red-400 text-white rounded-full text-sm text-center">
            {state.length}
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto h-full">
        {state.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center text-xl font-bold">
            <p>Your cart is currently empty</p>
          </div>
        ) : (
          <>
            <SheetHeader>
              <SheetTitle>Your Cart</SheetTitle>
              <SheetDescription>Make changes to your orders.</SheetDescription>
            </SheetHeader>
            <ul className="flex flex-col gap-4 my-8">
              {state.map((item, index) => {
                const nufolio = item.nufolio ? item.nufolio : 'Not included'
                return (
                  <li
                    key={item.id + item.variant.color + '_cart'}
                    className="flex flex-col gap-2"
                  >
                    <div className="grid grid-cols-2 place-items-center">
                      <img
                        src={item.variant.img}
                        width={100}
                        height={100}
                        className="rounded-md"
                      ></img>

                      <div className="text-sm">
                        <h2 className="font-semibold">{item.name}</h2>
                        <p className="capitalize">{`${item.variant.color} / ${item.switch} / ${nufolio}`}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex-1 text-center text-muted-foreground">
                        <p>${item.price}</p>
                      </div>
                      <div className="flex items-center gap-4 self-end flex-1">
                        <Button
                          size="icon"
                          onClick={() =>
                            dispatch({
                              type: 'increment',
                              payload: { id: item.id, variant: item.variant },
                            })
                          }
                        >
                          <Plus />
                        </Button>
                        <p>{item.quantity}</p>
                        <Button
                          size="icon"
                          onClick={() =>
                            dispatch({
                              type: 'decrement',
                              payload: { id: item.id, variant: item.variant },
                            })
                          }
                        >
                          <Minus />
                        </Button>
                      </div>
                    </div>
                    {index !== state.length - 1 ? <hr></hr> : null}
                  </li>
                )
              })}
            </ul>
            <p className="text-center my-4">
              Subtotal: ${subtotal.toFixed(2)}{' '}
            </p>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Checkout</Button>
              </SheetClose>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
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
