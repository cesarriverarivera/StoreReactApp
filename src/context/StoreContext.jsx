import { createContext, useEffect, useState } from "react";

const StoreContext = createContext()

function StoreProvider ( {children} ) {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedItem, setSelectedItem] = useState( {} )

    useEffect(() =>{
        fetch("https://ecommerce-json-jwt.onrender.com/items")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setList(data)
                setLoading(false)
            })
    }, [])

    const data = {
        list,
        loading,
        selectedItem,
        setSelectedItem
    }

    return (
        // pongo data dentro  de [] para que funcione el contexto
        <StoreContext.Provider value={[data]}> 
            {children}
        </StoreContext.Provider>
    )
}
    
export {
    StoreProvider,
    StoreContext
}