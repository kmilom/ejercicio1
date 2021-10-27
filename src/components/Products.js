import React from "react";
import GridProducts from './GridProducts';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import "./css/styles.css";
import ProductForms from "./ProductForms";

class Products extends React.Component{
    render(){
        return(
            <>
                <Row>
                    <Row><Col className="text-center" id="store">Store</Col></Row>
                    <Row><Col className="text-center mb-3" id="pag">P&aacute;gina de compra.</Col></Row>
                    <Row><Col xs="3" className="mb-3"><ProductForms /></Col></Row>
                        <Row>
                            <Col xs={2} id="tip">10 products</Col>
                            <Col xs={10} sm={{span:4, offset:6}} className="py-2">
                                <Form>
                                    <Form.Control type="text" placeholder="buscar producto"/>
                                </Form>
                            </Col>
                        </Row>
                </Row>
                <Row><GridProducts/></Row>
            </>
        )
    }
}

export default Products;