import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustumNavbar from "./components/CustumNavbar";
import  ItemListContainer  from "./components/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer";

import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




const App = () => {
  return (

  <BrowserRouter>
    <CustumNavbar />  
       <Routes>
        <Route path="/" element = {<ItemListContainer />} />
        <Route path="/category/:idCategory" element = {<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
      </Routes>
    <Footer /> 
    
  </BrowserRouter>
  )
}

export default App;
