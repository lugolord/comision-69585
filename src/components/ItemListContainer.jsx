import { useState, useEffect } from 'react'
import { withLoading } from '../hoc/withLoading'
import { useParams } from 'react-router'
import { getItems, filterByCategory } from '../firebase/db'
import ItemList from './ItemList'

const ItemListWithLoading = withLoading(ItemList)

function ItemListContainer () {
  const [items, setItems] = useState([])
  const { id } = useParams()
  
  useEffect(() => {
    if (id) {
      filterByCategory(id)
        .then(data => setItems(data))
    } else {
      getItems()
        .then(data => setItems(data))
    }
  }, [id])

  return (
    <ItemListWithLoading items={items} />
  )
}

export default ItemListContainer
