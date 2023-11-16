import React from 'react'
import { useCartContext } from '../../hooks/useCartContext'
import './prodAdded.css'

const ProdAdded = () => {
  const { isBuyPress } = useCartContext()
  return (
    <>
      <div id='prodAddToCart' className={isBuyPress ? 'prodVisible' : 'prod'}>
        <p>Added to Cart!</p>
      </div>
    </>
  )
}

export default ProdAdded
