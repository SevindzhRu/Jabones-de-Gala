import {Item} from "./Item";
import Row from 'react-bootstrap/Row';

const ItemList = ({ items }) => {
    return (
        
        <Row xs={1} sm={2} md={3} lg={5} className="m-3 p-3">
        {
        items.length > 0
        ? items.map(item => (<Item key={item.id} {...item}/>))
        : <p>Cargando...</p>
        }
        </Row>
        
    );
}

export default ItemList;