import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    
    return (
        <>
            <Button onClick={decrement}>-</Button>
            {count}
            <Button onClick={increment}>+</Button>
            <p></p>
            {
                stock
                ? <p><Button onClick={() => onAdd(count)}>Agregar al carrito</Button></p>
                : <p><Button disabled>Agregar al carrito</Button></p>
            }
        </>
    );
}

export default ItemCount;