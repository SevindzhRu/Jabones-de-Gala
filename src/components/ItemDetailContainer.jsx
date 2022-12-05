import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {CustomFetch} from "../utils/CustomFetch";
import ItemDetail from "./ItemDetail";
import { products } from "../utils/products";
// const { data } = require('../utils/Data');

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        CustomFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={data} />
    );
}

