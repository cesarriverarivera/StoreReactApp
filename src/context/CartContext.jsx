import { useState, createContext } from 'react'

const CartContext = createContext()

function CartProvider ({ children }) {
  const [prodBuy, setProdBuy] = useState([])
  const [cartPrice, setCartPrice] = useState()
  const [isBuyPress, setIsBuyPress] = useState(false)

  // funcion para agregar un producto al carrito
  const prodCart = (item) => {
    const coincidence = prodBuy.find(e => e.id === item.id)
    console.log(coincidence)
    setIsBuyPress(true)
    setTimeout(() => {
      setIsBuyPress(false)
    }, 2000)

    if (coincidence === undefined) {
      setProdBuy([...prodBuy, item])
      item.cantidad = 1
      item.total_price = item.cantidad * item.price
      coincidence.total_price = coincidence.cantidad * coincidence.price
    } else {
      console.log(coincidence.cantidad)
      coincidence.cantidad = coincidence.cantidad + 1
      coincidence.total_price = coincidence.cantidad * coincidence.price
      setIsBuyPress(true)
      setTimeout(() => {
        setIsBuyPress(false)
      }, 2000)
    }
  }

  // funcion boton aumentar
  const sum = (id) => {
    console.log(id)
    console.log(prodBuy)
    const index = prodBuy.findIndex(e => e.id === id)
    setProdBuy([...prodBuy])
    prodBuy[index].cantidad = prodBuy[index].cantidad + 1
    prodBuy[index].total_price = prodBuy[index].cantidad * prodBuy[index].price
    totalCart()
  }

  // funcion boton disminuir
  const rest = (id) => {
    console.log(id)
    console.log(prodBuy)
    const index = prodBuy.findIndex(e => e.id === id)
    setProdBuy([...prodBuy])
    prodBuy[index].cantidad === 1
      ? console.log('no puede ser menor a uno')
      : prodBuy[index].cantidad = prodBuy[index].cantidad - 1
    prodBuy[index].total_price = prodBuy[index].cantidad * prodBuy[index].price
    totalCart()
  }

  // funcion para calcular el precio total al cambiar el numero de items
  const totalCart = () => {
    const valores = []
    let sumaTotal = 0
    prodBuy.map((e) => {
      return (
        valores.push(e.total_price)
      )
    })
    valores.forEach((e) => {
      sumaTotal = sumaTotal + e
    })
    setCartPrice(sumaTotal)
  }
  // funcion para eliminar un elemento del cart
  const deleteOne = (item) => {
    const coincidence = prodBuy.findIndex(e => e.id === item.id)
    prodBuy.splice(coincidence, 1) // borra el elemnto encontrado
    setProdBuy([...prodBuy])
    totalCart() // llamo a la funcion para calcular el precio total
  }

  // funcion para eliminar todos los elementos del cart
  const deleteAll = () => {
    setProdBuy([])
  }

  const data = {
    prodBuy,
    prodCart,
    sum,
    rest,
    totalCart,
    cartPrice,
    isBuyPress,
    deleteOne,
    deleteAll
  }

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}

export {
  CartContext,
  CartProvider
}
