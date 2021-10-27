import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function ProductForms(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button variant="dark" id="aggProd" onClick={handleShow}>AGREGAR PRODUCTO</Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><Row><Col>Agregar Producto</Col></Row></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Form.Label column sm={{span:2, offset:2}}>Nombre</Form.Label>
            <Col sm="6"><Form.Control size="sm" type="text" placeholder="Nombre del producto"/></Col>
          </Row>
          <Row>
            <Form.Label column sm={{span:2, offset:2}}>Precio</Form.Label>
            <Col sm="6"><Form.Control size="sm" type="text" placeholder="Precio del producto"/></Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>Cerrar</Button>
          <Button  type="submit" variant="dark" onClick={handleClose}>Agregar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
