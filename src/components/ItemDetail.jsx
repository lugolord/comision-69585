/* eslint-disable react/prop-types */
import ItemCount from './ItemCount'

function ItemDetail ({ detail }) {
  return (
    <div className='d-flex justify-content-center'>
      <div className='w-50'>
        <img src={detail?.image} alt={detail?.name} />
        <h3 className='text-light'>{detail?.name}</h3>
        <p className='text-light'>{detail?.description}</p>
        <ItemCount product={detail} />
      </div>
    </div>
  )
}

export default ItemDetail
