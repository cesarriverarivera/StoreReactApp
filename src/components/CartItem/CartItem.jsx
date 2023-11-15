import { useCartContext } from '../../hooks/useCartContext'
import { FaRegTrashCan } from 'react-icons/fa6'

const CartItem = (props) => {
  const { sum, rest, deleteOne } = useCartContext()

  return (
    <>
      <div className='row cart'>
        <div className='col'>
          <img className='cart__image' src={props.item.image} alt={props.item.product_name} />
        </div>
        <div className='col'>
          <p> {props.item.product_name} </p>
        </div>
        <div className='col cart__contador'>
          <button className='cart__btnChange' onClick={() => rest(props.item.id)}>-</button>
          <p> {props.item.cantidad} </p>
          <button className='cart__btnChange' onClick={() => sum(props.item.id)}>+</button>
        </div>
        <div className='col'>
          <p> {props.item.total_price} </p>
        </div>
        <div className='col cart__contador'>
          <p>
            <button className='cart__btnTrash' onClick={() => deleteOne(props.item)}><FaRegTrashCan />
            </button>
          </p>
        </div>
      </div>

    </>

  )
}

export default CartItem
