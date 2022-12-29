import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CartContext } from './CartContext';



const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState (0)
    
    const ctx = useContext(CartContext);

    function swalqty (qty) {
        const swalQty = withReactContent(Swal)
        if (qty > 1) {
            swalQty.fire({
                title: `You have selected ${qty} items`,
                })
        } else {
            swalQty.fire({
                title: `You have selected ${qty} item`,
                })
        }
    } 

    const onAdd = (qty) => {
        if ((qty) > 0) {
        swalqty(qty)
        setItemCount(qty);
        ctx.addToCart(item, qty);
    }}

    return (
        <>
        {
            item && item.thumbnail
            ?
            <>
            <div className='product-wrapper'>
                <div className="product-image">
                    <img className='' src={item.thumbnail} alt="" />
                </div>
                <div className="product-text">
                    <p className='product-title'>{item.title}</p>
                    <p><b>Sobre el producto:</b></p>
                    <p className='bottom'>{item.description}</p>
                    <p>Precio: S/. {item.price}</p>
                    <p>Unidades en stock: {item.stock}</p>{
                         itemCount === 0
                         ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                         : <Link to='/cart' style={{textDecoration: "none"}}><Button>CheckOut</Button></Link>
                    }
                  
                 
                </div>
            </div>
            </>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;