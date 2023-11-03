import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import MenuNav from './components/MenuNav/MenuNav';
import { RoutesIndex } from './routes/RoutesIndex';
import { StoreProvider } from './context/storeContext';


function App() {

  return (

    <StoreProvider>
      <BrowserRouter>
        <MenuNav />
        <RoutesIndex />
      </BrowserRouter>
    </StoreProvider>

  )
}

export default App
