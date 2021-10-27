import react from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import "./css/styles.css";

const ProductItem = (propiedad) => {
    const{nombre, precio} = propiedad.producto;
    return(
        <>
            <Row>
                <Col className="producto">{nombre}</Col>
            </Row>
            <Row>
                <Col className="precio">$ {precio}</Col>
            </Row>
            <Row>
                <Col xs={6} sm={{span:4, offset:4}}>
                    <Button size="sm" variant="light" id="detalles">DETALLES</Button>
                </Col>
                <Col xs={6} sm={4}>
                    <Button size="sm" variant="dark" id="aggCart">AGREGAR AL CARRITO</Button>
                </Col>
            </Row>
        </>
    )
}

export default ProductItem;