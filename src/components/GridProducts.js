import react, {useState, useEffect} from 'react';
import ProductItem from './ProductItems';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ProductForms from "./ProductForms";
import { Form } from 'react-bootstrap';
import { ProductsInfo } from '../utils/ProductsInfo';
import PlaceService from "../services/PlaceServices";

const GridProducts = () =>{

    //const [productos, setProducts] = useState(ProductsInfo);

    const InitialTableState = [];
    const [places, setPlaces] = useState(InitialTableState);

    useEffect(()=>{
        const getAllPlaces = ()=>{
            PlaceService.getAll().then(response => {
                setPlaces(response.data);
            }).catch(e =>{
                console.log(e);
            })
        }
        getAllPlaces();
    },[])

    /*const alEnviarForm = (productFromForm)=>{
        console.log(productFromForm);
        const idP= productos.length+1;
        const product = {...productFromForm,id:idP};
        setProducts([...productos,product]);
    }
    
            
            <Row><Col xs="3" className="mb-3"><ProductForms agregar={alEnviarForm} /></Col></Row>
    */
        
    return(
        <>
            <Row>
                <Col xs={2} id="tip" className="mb-2">{places.length} products</Col>
                <Col xs={10} sm={{span:4, offset:6}}><Form><Form.Control type="text" placeholder="buscar producto"/></Form></Col>
            </Row>
            <Row>{places.map((p)=>(<Col xs={6} md={4} className="border border-secondary py-2 mb-1"><ProductItem producto={p}/></Col>))}</Row>
        </>
    )
}

export default GridProducts;