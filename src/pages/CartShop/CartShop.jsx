import React from 'react'
import { Cart } from '../../components/Cart/Cart'
import { useCartContext } from '../../hooks/useCartContext'

const CartShop = () => {
    const {prodBuy} = useCartContext()

  return (
    <Cart/>
  )
}

export default CartShop