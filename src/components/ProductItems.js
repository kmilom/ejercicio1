import react, {useState, useContext} from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./css/styles.css";
import {Modal} from "react-bootstrap";
import { GlobalContext } from '../context/GlobalContext';

const ProductItem = (props) => {

    const {cart, addProduct, increase} = useContext(GlobalContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const{productName, price} = props.producto;

    const addToCart = (p) => {
        return !cart.find(item => item.id === p.id) 
    }

    const handleClick = (e) => {
        if (e.target.id === "add") {
            addProduct(props.producto)
            console.log(cart[cart.length - 1])
            
        }  
        if(e.target.id === "addMore"){
            increase(props.producto)
        }
    }

    return(
        <>
            <Row>
                <Col className="producto">{productName}</Col>
            </Row>
            <Row>
                <Col className="precio">$ {price}</Col>
            </Row>
            <Row>
                <Col xs={6} sm={{span:4, offset:4}}>
                    <Button onClick={handleShow} size="sm" variant="light" id="detalles">DETALLES</Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title><Row><Col>Detalles</Col></Row></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col>Todos los detalles del producto</Col>
                            </Row>
                        </Modal.Body>
                    </Modal>
                </Col>
                <Col xs={6} sm={4}>
                    {addToCart(props.producto) ?
                        <Button size="sm" variant="dark" onClick={handleClick} type="button" id="add" className="btn btn-secondary">AGREGAR AL CARRITO</Button>   
                    :
                        <Button size="sm" variant="dark" onClick={handleClick} type="button" id="addMore" className="btn btn-secondary">AGREGAR M&Aacute;S</Button>
                    }
                    </Col>
            </Row>
        </>
    )
}



export default ProductItem;