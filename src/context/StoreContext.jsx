import { createContext, useEffect, useState } from 'react'

const StoreContext = createContext()

function StoreProvider ({ children }) {
  const [list, setList] = useState([])
  const [listFiltred, setListFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [productImage, setProductImage] = useState('https://sellmyuniform.co.uk/wp-content/uploads/2023/03/looking_for.jpg')

  useEffect(() => {
    fetch('https://ecommerce-json-jwt.onrender.com/items')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setList(data)
        setLoading(false)
      })
  }, [])

  function handlerSearch (texto) {
    const newList = []
    list.map((e) => {
      const item = e.product_name
      if (item.toLowerCase().includes(texto.toLowerCase())) {
        console.log(e)
        newList.push(e)
        console.log(newList)
        setListFiltered(newList)
        console.log(listFiltred.length)
      }
    })
  }

  const data = {
    list,
    loading,
    productImage,
    handlerSearch,
    listFiltred

  }

  return (
    <StoreContext.Provider value={data}>
      {children}
    </StoreContext.Provider>
  )
}

export {
  StoreProvider,
  StoreContext
}
