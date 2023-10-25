import React from 'react'
import Products from '../../components/Products/Products'
import MenuNav from '../../components/MenuNav/MenuNav'
import { StoreProvider } from '../../context/storeContext'
import './home.css'



const Home = () => {
  return (
    
      <StoreProvider>

        <MenuNav/>
        <Products/>
        
      </StoreProvider>
      
      
    
    
  )
}

export default Home