import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function ProductForms(props){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const estadoInicialForm = {
    nombre: '',
    precio: ''
  };

  const [estadoForm, cambiarEstadoForm] = useState(estadoInicialForm);

  const gestionarCamposForm = event => {
    const {name, value} = event.target;
    cambiarEstadoForm({...estadoForm,[name]:value});
  }

  const onSubmitForm = ev =>{
    ev.preventDefault();
    console.log(estadoForm);
    props.agregar(estadoForm);
    cambiarEstadoForm(estadoInicialForm);
    handleClose();
  }

  return(
    <>
      <Button variant="dark" id="aggProd" onClick={handleShow}>AGREGAR PRODUCTO</Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><Row><Col>Agregar Producto</Col></Row></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={onSubmitForm} >
            <Form.Group>
              <Row>
                <Form.Label column sm={{span:2, offset:2}}>Nombre</Form.Label>
                <Col sm="6"><Form.Control name="nombre" id="nameProduct" size="sm" type="text" placeholder="Nombre del producto" value={estadoForm.nombre} onChange={gestionarCamposForm} /></Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Form.Label column sm={{span:2, offset:2}} >Precio</Form.Label>
                <Col sm="6"><Form.Control name="precio" id="precio" size="sm" type="text" placeholder="Precio del producto" value={estadoForm.precio} onChange={gestionarCamposForm} /></Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col column sm={{span:3, offset:3}} className="py-4"><Button type="submit" variant="dark">Guardar</Button></Col>
                <Col sm={3} className="py-4"><Button onClick={handleClose} variant="secondary">Cancelar</Button></Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body> 
      </Modal>
    </>
  );
}
