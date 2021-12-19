import react, {useState, useEffect, useContext} from 'react';
import ProductItem from './ProductItems';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ProductForms from "./ProductForms";
import { Form } from 'react-bootstrap';
import PlaceService from "../services/PlaceServices";
import { GlobalContext } from '../context/GlobalContext';
import exportedObjects from '../services/PlaceServices';

const GridProducts = () =>{
    const {cart, addProduct, increase} = useContext(GlobalContext)

    const InitialTableState = [];
    const [places, setPlaces] = useState(InitialTableState);
    const getAllPlaces = ()=>{
        PlaceService.getAll().then(response => {
            setPlaces(response.data);
        }).catch(e =>{
            console.log(e);
        })
    }

    useEffect(()=>{
        getAllPlaces();
    },[])

    const alEnviarForm = async (productFromForm)=>{
        console.log(productFromForm)
        try {            
            const response = await exportedObjects.create(productFromForm)
            getAllPlaces()
            console.log(response)
        } catch (error) {
            console.log(error)            
        }
    }
    
    const addToCart = (product) => {
        const exist = cart.find(productItem=> productItem.id === product.id)
        if(exist) {
            increase(product)
        }
        else{
            const newProducts = places.map(productItem=>{
                if(productItem.id === product.id){
                    productItem.quantity = 1
                }
                return productItem
            })
            setPlaces(newProducts)
            addProduct(product)
        }
    }
    
    return(
        <>
            <Row>
                <Col xs={2} id="tip" className="mb-2">{places.length} products</Col>
                
                <Col xs={10} sm={{span:4, offset:6}}><Form><Form.Control type="text" placeholder="buscar producto"/></Form></Col>
            </Row>
            <Row><Col xs="3" className="mb-3"><ProductForms agregar={alEnviarForm} /></Col></Row>
            <Row>{places.map((p)=>(<Col key={p.id} xs={6} md={4} className="border border-secondary py-2 mb-1"><ProductItem product={p} addToCart={addToCart}/></Col>))}</Row>
        </>
    )
}

export default GridProducts;