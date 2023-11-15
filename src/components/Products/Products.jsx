import React from 'react'
import Cards from '../Cards/Cards'
import { useStoreContext } from '@/hooks/useStoreContext'
import './products.css'
import { Loading } from '../Loading/Loading'

const Products = () => {
  const { loading } = useStoreContext()

  if (loading) {
    return <Loading />
  } else {
    return (
      <div className='cardsProd'>
        <Cards />
      </div>
    )
  }
}

export default Products
