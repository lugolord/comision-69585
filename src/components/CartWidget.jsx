import Button from 'react-bootstrap/Button'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router'

export default function CartWidget () {
  const { getProductsQuantity } = useContext(CartContext)
  const navigate = useNavigate()

  return ( 
    <Button 
      variant='light'
      onClick={() => navigate('/cart')}
    >
      🛒 {getProductsQuantity()}
    </Button>
  )
}
