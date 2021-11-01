import react, {useState} from 'react';
import ProductItem from './ProductItems';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ProductForms from "./ProductForms";
import { Form } from 'react-bootstrap';

const GridProducts = () =>{
    
        const productos = [ 
            {id:1,nombre:'Buffalo - Striploin',precio:39.100},
            {id:2,nombre:'Bacardi Breezer - Tropical',precio:257.900},
            {id:3,nombre:'Wine - Gato Negro Cabernet',precio:51.100},
            {id:4,nombre:'Cabbage - Nappa',precio:250.900},
            {id:5,nombre:'Sping Loaded Cup Dispenser',precio:175.850},
            {id:6,nombre:'Bread - Mait',precio:82.600},
            {id:7,nombre:'Glass Clear 8 Oz',precio:201.100},
            {id:8,nombre:'Sour Puss Raspberry',precio:134.990},
            {id:9,nombre:'Pork - Chop Frenched',precio:199.150}
        ]

        const [products, setProducts] = useState(productos);

        const alEnviarForm = (productFromForm)=>{
            console.log(productFromForm);
            const idP= products.length+1;
            const product = {...productFromForm,id:idP};
            setProducts([...products,product]);
        }
        
        return(
            <>
                <Row>
                    <Col xs={2} id="tip" className="mb-2">{products.length} products</Col>
                    <Col xs={10} sm={{span:4, offset:6}}><Form><Form.Control type="text" placeholder="buscar producto"/></Form></Col>
                </Row>
                <Row><Col xs="3" className="mb-3"><ProductForms agregar={alEnviarForm} /></Col></Row>
                <Row>{products.map(p=>(<Col xs={6} md={4} className="border border-secondary py-2 mb-1"><ProductItem key={p.id} producto={p}/></Col>))}</Row>
            </>
        )
    
}

export default GridProducts;