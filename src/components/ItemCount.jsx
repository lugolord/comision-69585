import { useState } from 'react'

function ItemCount () {
  const [count, setCount] = useState(0)
  //const [estado, funcion set] = useState(valor inicial)

  const handleSub = () => {
    setCount(count - 1)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleSub}>-</button>
      <button onClick={handleAdd}>+</button>
    </div>
  )
}

export default ItemCount
