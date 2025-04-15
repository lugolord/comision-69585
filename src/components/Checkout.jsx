import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/db'

function Checkout () {
  const { cart, clearCart } = useCart()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const email = form[0].value
    const name = form[1].value
    const phone = form[2].value

    const order = {
      items: cart,
      user: { name, email, phone },
      date: serverTimestamp()
    }

    const id = await createOrder(order)

    if (id) {
      withReactContent(Swal).fire({
        title: `Muchas gracias por tu compra ♥️ El ID de tu orden es ${id}`,
      })

      navigate('/')

      clearCart()
    } else {
      withReactContent(Swal).fire({
        title: 'Hubo un error',
      })
    }
  }

  return (
    <div className='d-flex justify-content-center mt-5'>
      <Form className='w-50' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className='text-light'>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="pepito@gmail.com" 
            required 
            defaultValue='pepito@perez.com'
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label className='text-light'>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Pepito Perez" 
            required 
            defaultValue='Pepito Perez'
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label className='text-light'>Phone</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="+5491123433445" 
            required
            defaultValue='+5491123423234' 
          />
        </Form.Group>

        <Button 
          variant="success" 
          type='submit' 
          className='w-100'
        >
          Finalizar compra 🎉
        </Button>
      </Form>
    </div>
  )
}

export default Checkout
