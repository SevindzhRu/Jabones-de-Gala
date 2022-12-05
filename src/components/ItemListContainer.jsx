
import {CustomFetch} from '../utils/CustomFetch';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import ItemList from './ItemList';
import { products } from '../utils/products';
// const { products } = require('../utils/products');


const ItemListContainer = () => {
  const [prod, setProd] = useState ([]); 
  const { idCategory } = useParams();

  //componentDidUpdate
  useEffect(() => {
    CustomFetch(2000, products.filter(item => {
        if (idCategory === undefined) return item;
        return item.idCategory === parseInt(idCategory)
    }))
        .then(result => setProd(result))
        .catch(err => console.log(err))
}, [products]);


    return (
        <ItemList items={products} />
    )
}

export default ItemListContainer;