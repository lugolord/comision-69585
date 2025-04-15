import { BrowserRouter, Routes, Route } from "react-router"
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'

function App () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/product/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />  
        <Route path='/checkout' element={<Checkout/>} />  
      </Routes>
    </BrowserRouter>
  )
}

export default App
