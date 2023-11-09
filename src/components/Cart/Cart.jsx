import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../../hooks/useCartContext'
import './Cart.scss'

export const Cart = () => {
    const { prodBuy, contador, add, rest } = useCartContext()

 
   
   

    return (
        <>
            {prodBuy.length === 0 ? <h2>Aun no hay productos en tu carrito</h2>
                : (
                    <div className='container cartContent'>
                        <div className='row cartContent__header'>
                            <div className='col'>
                                <p>Image</p>
                            </div>
                            <div className='col'>
                                <p>Product Name</p>
                            </div>
                            <div className='col'>
                                <p>Quantity</p>
                            </div>
                            <div className='col'>
                                <p>Total</p>
                            </div>
                        </div>

                      

                        {prodBuy.map((ele) => {
                            return (
                                <div className='row cart' key={ele.id}>
                                    <div className='col'>
                                        <img className='cart__image' src= {ele.image} alt= {ele.product_name} />
                                    </div>
                                    <div className='col'>
                                        <p> {ele.product_name} </p>
                                    </div>
                                    <div className='col cart__contador'>
                                        <button onClick={rest}>-</button>
                                        <p > {contador} </p>
                                        <button onClick={add} >+</button>
                                    </div>
                                    <div className='col'>
                                        <p> {ele.price} </p>
                                    </div>

                                </div>
                            )
                        })}
                    </div>      

                )
            }
        </>
    )
}
