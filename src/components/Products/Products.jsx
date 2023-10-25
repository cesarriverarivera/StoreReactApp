import React from 'react'
import Cards from '../Cards/Cards'
import { useStoreContext } from '../../hooks/useStoreContext'
import './products.css'

const Products = () => {
    const [list, loading, setSelectedItem] = useStoreContext()
    
    if(loading) {
        <h1>Cargando...</h1>
    }
    else {
        return (
            
                <div className='cardsProd'>
                {
                    console.log(list)
                    
                }    
                
                {
                    list.list.map((item, index) => {
                        return (
                            <Cards item={item} key={index} /> 
                        )
                    })
                }
                </div>
            
          )
    }
  
}

export default Products