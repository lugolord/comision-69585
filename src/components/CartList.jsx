/* eslint-disable react/prop-types */
import ListGroup from 'react-bootstrap/ListGroup'
import CartItem from './CartItem'

function CartList ({ cart }) {
  return (
    <ListGroup className='my-5 w-50'>
      {cart.map(prod => <CartItem key={prod.id} prod={prod} />)}
    </ListGroup>
  )
}

export default CartList
