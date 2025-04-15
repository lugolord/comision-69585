/* eslint-disable react/prop-types */
import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function ItemList ({ items }) {
  return (
    <Container className='mt-3'>
      <Row>
        {items.map(item => <Item item={item} key={item.id} />)}
      </Row>
    </Container>
  )
}

export default ItemList
