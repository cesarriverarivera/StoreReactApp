import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useStoreContext } from '@/hooks/useStoreContext'
import './VistaDetalle.css'


const VistaDetalle = () => {
   const {productImage} = useStoreContext()
   const location =useLocation()
   let item = location.state
   console.log(item)
  return (
    <>
    <div className='container vistaDetalle'> 
        <div className='row detalleFila'>
            <div className='col-6 detalle'>
                <h2> {item.product_name} </h2>
                <p> Brand: {item.brand}</p>
                <p> Category: {item.category}</p>
                <p> Description: {item.description}</p>
                <p> Price: ${item.price} </p>
                <p> {item.isActive ? "Disponible" : "No disponible"} </p>
                <Button variant="success">Buy</Button>{' '}
            </div>
            <div className='col-6 detalle'>
                <img className='imagenDetalle' src= {item.image || item.images || productImage } alt="" />
            </div>
        </div>
        
    </div>
    </>
  )
}

export default VistaDetalle