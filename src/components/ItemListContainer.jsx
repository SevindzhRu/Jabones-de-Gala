
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import ItemList from './ItemList';
import {firestoreFetch} from '../utils/FirestoreFetch'


const ItemListContainer = () => {
  const [prod, setProd] = useState ([])
  const { idCategory } = useParams()

  
  useEffect(() => {
    firestoreFetch (idCategory)
          .then (result => setProd (result))
          .catch(err => console.log(err))
    
    }, [idCategory]);

    useEffect(() => {
        return (() => {
            setProd([]);
        })
    }, []);
        
        

    return (
        <ItemList items={prod} />
    )
}

export default ItemListContainer;