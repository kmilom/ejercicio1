import React from "react";
import GridProducts from './GridProducts';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import "./css/styles.css";

class Products extends React.Component{
    render(){
        return(
            <>
                <Row>
                    <Row><Col className="text-center" id="store">Store</Col></Row>
                    <Row><Col className="text-center mb-3" id="pag">P&aacute;gina de compra.</Col></Row>
                </Row>
                <GridProducts/>
            </>
        )
    }
}

export default Products;