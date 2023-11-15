import { useCartContext } from '../../hooks/useCartContext'
import './Cart.scss'
import CartItem from '../CartItem/CartItem'

export const Cart = () => {
  const { prodBuy, cartPrice, deleteAll } = useCartContext()
  const prodCart = prodBuy

  return (
    <>
      {prodBuy.length === 0
        ? <h2>Aun no hay productos en tu carrito</h2>
        : (
          <div className='container cartContent'>
            <div className='row cartContent__header'>
              <div className='col cartContent__element'>
                <p>Image</p>
              </div>
              <div className='col cartContent__element'>
                <p>Product Name</p>
              </div>
              <div className='col cartContent__element'>
                <p>Quantity</p>
              </div>
              <div className='col cartContent__element'>
                <p>Total</p>
              </div>
              <div className='col cartContent__element'>
                <p>
                  <button
                    className='cartContent__btnDeleteAll'
                    onClick={deleteAll}
                  >Delete All
                  </button>
                </p>
              </div>
            </div>

            {prodCart.map((ele, index) => {
              return (
                <CartItem item={ele} key={index} />
              )
            })}

            <div className='row cart'>
              <div className='col-5'>
                <p className='cart__p'>Total a pagar:</p>
              </div>
              <div className='col'>
                <p className='cart__p'> {cartPrice} </p>
              </div>
            </div>
          </div>

          )}
    </>
  )
}
