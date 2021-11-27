import react, {useState, useContext, useEffect} from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import "./css/styles.css";
import {Modal} from "react-bootstrap";
import { GlobalContext } from '../context/GlobalContext';

const ProductItem = (product) => {

    const {cart, addProduct, totalItem} = useContext(GlobalContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const{productName, price} = product.producto;

    /*const addToCart = () => {
        return cart.find(p => p.id === product.id) != null ? false : true
    }*/

    const handleClick = (e) => {
        if (e.target.id === "add") {
            addProduct(productName)
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
                    <Button size="sm" variant="dark" onClick={handleClick} type="button" id="add" className="btn btn-secondary">Agregar al carrito</Button>   
                </Col>
            </Row>
        </>
    )
}



export default ProductItem;