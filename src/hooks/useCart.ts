import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined)
    throw new Error('useAuth must be used within an AuthProvider')

  return context
}
