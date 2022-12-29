
import { BsCart } from "react-icons/bs";
import { useContext } from 'react';
import { CartContext } from './CartContext';


const CartWidget = () => {
    const ctx = useContext(CartContext);

    return (
        <p className="cart"><BsCart/>{ctx.calcItemsQty()}</p>
    )
}

export default CartWidget;