/* eslint-disable react/prop-types */
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ToastContainer } from 'react-toastify'
import Button from 'react-bootstrap/Button'

function ItemCount ({ product }) {
  const [count, setCount] = useState(1)
  const { addProduct } = useContext(CartContext)

  const handleSub = () => setCount(count - 1)
  const handleAdd = () => setCount(count + 1)

  const handleAddProduct = () => addProduct({...product, cantidad: count})

  return (
    <div>
      <p className='text-light'>{count}</p>

      <Button 
        onClick={handleSub} 
        className='me-2'
        variant='danger'
        disabled={count === 1}
      >
        -
      </Button>

      <Button 
        onClick={handleAdd} 
        className='me-2'
        variant='success'
      >
        +
      </Button>
      
      <Button 
        onClick={handleAddProduct}
        variant='light'
      >
        agregar al carrito
      </Button>
      <ToastContainer />
    </div>
  )
}

export default ItemCount
