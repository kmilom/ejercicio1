import React from "react";
import GridProducts from './GridProducts';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import "./css/styles.css";

class Products extends React.Component{
    render(){
        return(
            <>
                <Row>
                    <Row><Col className="text-center" id="store">Store</Col></Row>
                    <Row><Col className="text-center" id="pag">P&aacute;gina de compra.</Col></Row>
                    <Form>
                        <Row>
                            <Col xs={2} id="tip">10 products</Col>
                            <Col xs={10} sm={{span:4, offset:6}} className="py-2">
                                <Form.Control placeholder="buscar" />
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Row><GridProducts /></Row>
            </>
        )
    }
}

export default Products;