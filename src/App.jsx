import CustumNavbar from "./components/CustumNavbar";
import { ItemListContainer } from "./components/ItemListContainer";

import { Footer } from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {
  return (
    <>
    <CustumNavbar />
    <ItemListContainer mensaje="Los mejores jabones del Peru" />
    <Footer /> 
    
 

    </>
  )
}

export default App;
