import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router'
import CartList from './CartList'
import Button from 'react-bootstrap/Button'

function CartContainer () {
  const { cart, getTotal } = useCart()
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <h2 className='text-light mt-5 text-center'>No tienes productos en el carrito 😔</h2>
    )
  }

  return (
    <div className='d-flex flex-column align-items-center'>
      <CartList cart={cart} />
      <h2 className='text-light mb-5'>Total: {getTotal()}</h2>
      <Button 
        className='w-50' 
        variant='success'
        onClick={() => navigate('/checkout')}
      >
        ir al checkout
      </Button>
    </div>
  )
}

export default CartContainer
