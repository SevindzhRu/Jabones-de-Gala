import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustumNavbar from "./components/CustumNavbar";
import  ItemListContainer  from "./components/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer";
import CartContextProvider from "./components/CartContext";
import  Cart  from "./components/Cart";
import { Footer } from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';





const App = () => {
  return (
    <CartContextProvider>
     <BrowserRouter>
    <CustumNavbar />  
       <Routes>
        <Route path="/" element = {<ItemListContainer />} />
        <Route path="/category/:idCategory" element = {<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    <Footer /> 
    
  </BrowserRouter>
  </CartContextProvider>
  )
}

export default App;
