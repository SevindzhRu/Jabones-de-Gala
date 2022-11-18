import CustumNavbar from "./components/CustumNavbar";
import { ItemListContainer } from "./components/ItemListContainer";

import { Footer } from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {
  return (
    <>
    <CustumNavbar />
    <ItemListContainer mensaje="Hola ItemListContainer" />
    <h1 className="titulo">Los mejores jabones del Peru</h1>
    <Footer /> 
    
 

    </>
  )
}

export default App;
