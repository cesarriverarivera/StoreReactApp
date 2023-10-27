import React from 'react'
import Cards from '../Cards/Cards'
import { useStoreContext } from '@/hooks/useStoreContext'
import './products.css'

const Products = () => {
    const { loading } = useStoreContext()

    if(loading) {
        return <h1>Please wait, free server service on waking up! ...</h1>
    }
    else {
        return (
                <div className='cardsProd'>
                <Cards/>
                </div>
          )
    }
  
}

export default Products