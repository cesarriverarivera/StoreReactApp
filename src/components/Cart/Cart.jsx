import { useCartContext } from '../../hooks/useCartContext'
import { FaRegTrashCan } from 'react-icons/fa6'
import './Cart.scss'

export const Cart = () => {
  const { prodBuy, cartPrice, deleteAll, sum, rest, deleteOne } = useCartContext()
  const prodCart = prodBuy

  return (
    <>
      {prodBuy.length === 0
        ? <h2>Aun no hay productos en tu carrito</h2>
        : (
          <>
            <table className='table table-hover cart'>
              <thead>
                <tr>
                  <th className='cart__contador' scope='col'>Image</th>
                  <th className='cart__contador' scope='col'>Name</th>
                  <th className='cart__contador' scope='col'>Quantity</th>
                  <th className='cart__contador' scope='col'>Total price</th>
                  <th className='cart__contador' scope='col'>
                    <button
                      className='cartContent__btnDeleteAll'
                      onClick={deleteAll}
                    >Delete All
                    </button>
                  </th>
                </tr>
              </thead>

              {prodCart.map((ele) => {
                return (
                  <tbody key={ele.id}>
                    <tr>
                      <th scope='row'> <img className='cart__image' src={ele.image} alt={ele.product_name} /></th>
                      <td className='cart__contador'>{ele.product_name}</td>
                      <td className='cart__contador'>
                        <div className='cart__btnContainer'>
                          <button className='cart__btnChange' onClick={() => rest(ele.id)}>-</button>
                          {ele.cantidad}
                          <button className='cart__btnChange' onClick={() => sum(ele.id)}>+</button>
                        </div>
                      </td>
                      <td className='cart__contador'>
                        {ele.total_price}
                      </td>
                      <td className='cart__contador'>
                        <button className='cart__btnTrash' onClick={() => deleteOne(ele)}><FaRegTrashCan />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                )
              })}
            </table>

            <div className='container'>
              <div className='row cart'>
                <div className='col-5'>
                  <p className='cart__p'>Total a pagar:</p>
                </div>
                <div className='col'>
                  <p className='cart__p'> {cartPrice} </p>
                </div>
              </div>
            </div>

          </>

          )}
    </>
  )
}
