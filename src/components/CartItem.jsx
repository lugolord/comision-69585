/* eslint-disable react/prop-types */
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { useCart } from '../context/useCart'

function CartItem ({ prod }) {
  const { deleteProduct } = useCart()

  return (
    <ListGroup.Item className='d-flex justify-content-between'>
      {prod.name} x {prod.cantidad} - {prod.price} c/u 
      <Button variant='danger' onClick={() => deleteProduct(prod.id)}>X</Button>
    </ListGroup.Item>
  )
}

export default CartItem
