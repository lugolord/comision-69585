/* eslint-disable react/prop-types */
import { CartContext } from './CartContext'
import { useState } from 'react'
import { toast } from 'react-toastify'

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const isInCart = id => cart.some(prod => prod.id === id)

  const clearCart = () => setCart([])

  const deleteProduct = id => {
    const newCart = cart.filter(prod => prod.id !== id)
    setCart(newCart)
  }
  
  const addProduct = product => {
    if (isInCart(product.id)) {
      toast.error('el producto ya esta en el carrito', { position: 'bottom-right' })
    } else {
      setCart([...cart, product])
    }
  }

  const getProductsQuantity = () => {
    const soloCantidades = cart.map(prod => prod.cantidad)
    const cantidadTotal = soloCantidades.reduce((acc, current) => acc + current, 0)
    
    return cantidadTotal
  }

  const getTotal = () => {
    const soloCantidades = cart.map(prod => prod.cantidad*prod.price)
    const total = soloCantidades.reduce((acc, current) => acc + current, 0)
    
    return total
  }

  const values = {
    clearCart,
    addProduct,
    deleteProduct,
    getProductsQuantity, 
    getTotal,
    cart
  }

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
