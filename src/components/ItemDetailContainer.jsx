import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import {firestoreFetchOne} from "../utils/FirestoreFetch";

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
      firestoreFetchOne (idItem)
        .then (result => setData(result))
        .catch(err => console.log(err))
       
    }, []);
    
    return (
        <ItemDetail item={data} />
    );
}

