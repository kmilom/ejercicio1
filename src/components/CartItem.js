import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const CartItem = (props) => {
    const{productName, price} = props.producto;

    return(
        <>
            <Row>
                <Col className="producto">{productName}</Col>
            </Row>
            <Row>
                <Col className="precio">$ {price}</Col>
            </Row>
        </>
    )
}

export default CartItem;
