import react, {useState, useContext} from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./css/styles.css";
import {Modal} from "react-bootstrap";

const ProductItem = ({product,addToCart}) => {

    console.log("render", product)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Row>
                <Col className="producto">{product.name}</Col>
            </Row>
            <Row>
                <Col className="precio">$ {product.description}</Col>
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
                {!product.quantity?
                    <Button size="sm" variant="dark" onClick={()=>addToCart(product)} type="button" id="add" className="btn btn-secondary">AGREGAR AL CARRITO</Button>   
                :
                    <Button size="sm" variant="dark" onClick={()=>addToCart(product)} type="button" id="addMore" className="btn btn-secondary">AGREGAR M&Aacute;S</Button>
                } </Col>
            </Row>
        </>
    )
}

export default ProductItem;