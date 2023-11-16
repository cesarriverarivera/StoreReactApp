import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import MenuNav from './components/MenuNav/MenuNav'
import { RoutesIndex } from './routes/RoutesIndex'
import { StoreProvider } from './StoreContext'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import './App.css'

function App () {
  return (
    <CartProvider>
      <AuthProvider>
        <StoreProvider>
          <BrowserRouter>
            <MenuNav />
            <RoutesIndex />
          </BrowserRouter>
        </StoreProvider>
      </AuthProvider>
    </CartProvider>

  )
}

export default App
