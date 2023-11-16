import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext debe estar dentro del proveedor CartProvider')
  }
  return context
}
