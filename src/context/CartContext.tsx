import { createContext, useReducer, useEffect } from 'react'
import { CartItem, KBVariant } from '@/types/type'

/**
 * TODO
 * create increment item and decrement item for cart
 */

type Action =
  | { type: 'add'; payload: CartItem }
  | { type: 'remove'; payload: { id: string; variant: KBVariant } }
  | { type: 'clear' }
  | { type: 'increment'; payload: { id: string; variant: KBVariant } }
  | { type: 'decrement'; payload: { id: string; variant: KBVariant } }

type Dispatch = (action: Action) => void
type State = CartItem[]
type CartProviderProps = { children: React.ReactNode }

const initialState: State = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart') || '')
  : []

export const CartContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add': {
      const exists = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.variant.color === action.payload.variant.color,
      )
      if (exists) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...exists, quantity: exists.quantity + 1 }
            : item,
        )
      }
      return state?.concat(action.payload)
    }
    case 'remove': {
      const newState = state.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.variant.color === action.payload.variant.color
          ),
      )
      console.log({ newState })
      return [...newState]
    }
    case 'increment': {
      return state.map((item) => {
        if (
          item.variant.color === action.payload.variant.color &&
          item.id === action.payload.id
        ) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    }
    case 'decrement': {
      return state.map((item) => {
        if (
          item.variant.color === action.payload.variant.color &&
          item.id === action.payload.id
        ) {
          if (item.quantity - 1 === 0) return item
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
    }
    case 'clear':
      return []
    default: {
      throw new Error('Unhandled action type')
    }
  }
}

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const value = { state, dispatch }

  useEffect(() => {
    if (state) localStorage.setItem('cart', JSON.stringify(state))
    else localStorage.removeItem('cart')
  }, [state])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export { CartProvider }
