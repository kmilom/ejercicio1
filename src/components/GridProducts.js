import react, {useState, useContext} from 'react';
import ProductItem from './ProductItems';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ProductForms from "./ProductForms";
import { Form } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalContext';
import { ProductsInfo } from '../utils/ProductsInfo';

const GridProducts = () =>{

    

    const [productos, setProducts] = useState(ProductsInfo);

    const alEnviarForm = (productFromForm)=>{
        console.log(productFromForm);
        const idP= productos.length+1;
        const product = {...productFromForm,id:idP};
        setProducts([...productos,product]);
    }
        
    return(
        <>
            <Row>
                <Col xs={2} id="tip" className="mb-2">{productos.length} products</Col>
                <Col xs={10} sm={{span:4, offset:6}}><Form><Form.Control type="text" placeholder="buscar producto"/></Form></Col>
            </Row>
            <Row><Col xs="3" className="mb-3"><ProductForms agregar={alEnviarForm} /></Col></Row>
            <Row>{productos.map((p)=>(<Col xs={6} md={4} className="border border-secondary py-2 mb-1"><ProductItem producto={p}/></Col>))}</Row>
        </>
    )
}

export default GridProducts;