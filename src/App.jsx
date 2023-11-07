import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import MenuNav from './components/MenuNav/MenuNav';
import { RoutesIndex } from './routes/RoutesIndex';
import { StoreProvider } from './context/storeContext';
import { AuthProvider } from './context/AuthContext';
import './App.css'


function App() {

  return (
    <AuthProvider>
      <StoreProvider>
        <BrowserRouter>
          <MenuNav />
          <RoutesIndex />
        </BrowserRouter>
      </StoreProvider>
    </AuthProvider>

  )
}

export default App
