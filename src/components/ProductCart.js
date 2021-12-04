import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import CartItem from "./CartItem";

const ProductCart = () => {
    const {cart} = useContext(GlobalContext)
    return(
        
        <Row>{cart.map((p)=>(<Col><CartItem producto={p} /></Col>))}</Row>
    )
}

export default ProductCart;

