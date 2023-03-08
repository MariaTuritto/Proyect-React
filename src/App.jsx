import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart';
import SendOrder from './Components/SendOrder';
import Brief from './Components/Brief';
import Footer from './Components/Footer';
import { CartContextProvider } from './Context/CartContext';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route exact path='/' element = {<Home/>}/>
      <Route exact path='/about' element = {<AboutUs/>}/>
      <Route exact path='/catalogue' element = {<ItemListContainer/>}/>
      <Route exact path='/category/:category' element = {<ItemListContainer/>}/>
      <Route exact path='/item/:id' element = {<ItemDetailContainer/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/SendOrder' element={<SendOrder/>}/>
      <Route exact path='/Brief' element={<Brief/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
