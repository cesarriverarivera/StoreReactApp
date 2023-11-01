import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VistaDetalle from './components/VistaDetalle/VistaDetalle.jsx';



const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h2>No encontre la ruta!</h2>,
    // children: [
    //   {
    //     path: "/detalle",
    //     element: <VistaDetalle/>
    //   }
    // ]
   
  },
  {
    path: "/detalle/:product_name",
    element: <VistaDetalle/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
