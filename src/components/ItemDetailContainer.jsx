import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getItem } from '../firebase/db'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer () {
  const [detail, setDetail] = useState()
  const { id } = useParams()

  useEffect(() => {
    getItem(id)
      .then(item => setDetail(item))
  }, [id])

  return (
    <ItemDetail detail={detail} />
  )
}
