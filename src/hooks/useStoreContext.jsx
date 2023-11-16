import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

export const useStoreContext = () => {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStoreContext debe estar dentro del proveedor StoreProvider')
  }
  return context
}
