
import {CustomFetch} from '../utils/CustomFetch';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import ItemList from './ItemList';
import { products } from '../utils/products';



const ItemListContainer = () => {
  const [prod, setProd] = useState ([]); 
  const { idCategory } = useParams();

  //componentDidUpdate
  useEffect(() => {
    CustomFetch(2000, 
        !idCategory ? products : products.filter (item => item.idCategory === idCategory)
    )  .then(result => setProd(result))
       .catch(err => console.log(err))
    }, [idCategory]);
        
        

    return (
        <ItemList items={prod} />
    )
}

export default ItemListContainer;