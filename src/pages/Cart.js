import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../components/css/styles.css";
import { GlobalContext } from "../context/GlobalContext";
import ProductCart from "../components/ProductCart";

export default function Cart(){

    const {totalItem} = useContext(GlobalContext);
    return(
        <>
            <Row>
                <Col id="headCart" className="text-center mb-5">Carrito De Compras</Col>
            </Row>
            <Row>
                {totalItem !== 0 ?
                    <Row>
                        <ProductCart />
                    </Row>            
                :
                    <Row>
                        <Col id="cart-0" className="text-center">¡Ups! El carrito est&aacute; vac&iacute;o...</Col>
                    </Row>
                }
               
            </Row>
        </>
    );
}