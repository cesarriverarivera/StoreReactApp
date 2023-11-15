import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useStoreContext } from '@/hooks/useStoreContext'
import { useCartContext } from '../../hooks/useCartContext'
import { useAuthContext } from '../../hooks/useAuthContext'
import './VistaDetalle.css'
import ProdAdded from '../ProdAdded/ProdAdded'

const VistaDetalle = () => {
  const { productImage } = useStoreContext()
  const { prodCart } = useCartContext()
  const { isAuth } = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()
  const item = location.state
  console.log(item)

  return (
    <>
      <div className='component'>
        <ProdAdded />
      </div>
      <div className='container vistaDetalle'>

        <div className='row detalleFila'>
          <div className='col-sm-12 col-md-6 detalle'>
            <img className='imagenDetalle' src={item.image || item.images || productImage} alt='' />
          </div>

          <div className='col-sm-12 col-md-6 detalle'>
            <h2> {item.product_name} </h2>
            <p> Brand: {item.brand}</p>
            <p> Category: {item.category}</p>
            <p> Description: {item.description}</p>
            <p> Price: ${item.price} </p>
            <p> {item.isActive ? 'Disponible' : 'No disponible'} </p>
            <Button
              onClick={() => {
                isAuth
                  ? prodCart(item)
                  : navigate('/login')
              }}
              variant='success'
            >Buy
            </Button>
          </div>

        </div>

      </div>
    </>
  )
}

export default VistaDetalle
