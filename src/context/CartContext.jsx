import { useState, useEffect, createContext  } from "react";


const CartContext = createContext()

function CartProvider ({children}) {
    const [prodBuy, setProdBuy] = useState([])
    const [contador, setContador] = useState(1)

    const prodCart = (item) => {
        setProdBuy([...prodBuy, item])
        console.log(prodBuy)
    }

    let add = () => {
        setContador(contador+1)
    }

    let rest = () => {
        setContador(contador -1)
    }

    const data = {
        prodBuy,
        prodCart,
        contador,
        add,
        rest
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