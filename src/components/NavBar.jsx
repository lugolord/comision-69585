import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import Dropdown from 'react-bootstrap/Dropdown'
import { NavLink } from 'react-router'

function NavBar () {
  return (   
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand 
          to="/"
          as={NavLink}
        >
          SomeCoolName
        </Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            categories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item 
              to='/category/cellphones'  
              as={NavLink}
            >
              cellphones
            </Dropdown.Item>
            <Dropdown.Item 
              to='/category/laptops'  
              as={NavLink}
            >
              laptops
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar
