import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import ValueCart from "./ValueCart";

const ProductCart = () => {
    const {cart, increase, decrease, removeProduct} = useContext(GlobalContext)

    const cantAviable = (p) => {
        return p.quantity > 1;
    }

    return(
        <Row>
            <Col sm={6} >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio (und)</th>
                            <th>Cantidad</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((p)=>(
                        <tr>
                            <td>{p.productName}</td>
                            <td>{p.price}</td>
                            <td>{p.quantity}</td>
                            <td>
                                <Button onClick={() => increase(p)} className="btn btn-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                                    </svg>
                                </Button>
                            </td>
                            <td>
                                {cantAviable(p) ?
                                <Button onClick={() => decrease(p)} className="btn btn-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                        <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
                                    </svg>
                                </Button>
                                :
                                <Button onClick={() => removeProduct(p)} className="btn btn-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                        <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
                                    </svg>
                                </Button>
                                }
                            </td>
                        </tr>
                        ))}
                    </tbody> 
                </Table>
            </Col>
            <Col><ValueCart /></Col>
        </Row>
    )
}

export default ProductCart;

