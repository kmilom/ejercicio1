import react, {useState, useContext} from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./css/styles.css";
import {Modal} from "react-bootstrap";
import { GlobalContext } from '../context/GlobalContext';

const ProductItem = (props) => {

    const {cart, addProduct, increase} = useContext(GlobalContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //const [prod, setProd] = useState(props.produto);


    const {name, description} = props.producto;
    var  prod = new Object();
        prod.productName = name;
        prod.price = description;

    const addToCart = (p) => {
        console.log(prod)
        return !cart.find(item => item.id === p.id) 
    }

    /*function prod(productName, price){
        this.productName = productName;
        this.price = price;
    }*/

    const handleClick = (e) => {
        //var convertirAObjectCart = new prod(props.producto.name, parseInt(props.producto.description))
        
        //console.log(prod)
        
        if (e.target.id === "add") {           
            addProduct(prod)            
        }  
        if(e.target.id === "addMore"){
            increase(prod)
        }
    }

    

    return(
        <>
            <Row>
                <Col className="producto">{prod.productName}</Col>
            </Row>
            <Row>
                <Col className="precio">$ {prod.price}</Col>
            </Row>
            <Row>
                <Col xs={6} sm={{span:4, offset:4}}>
                    <Button onClick={handleShow} size="sm" variant="light" id="detalles">DETALLES</Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title><Row><Col>Detalles</Col></Row></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col>Todos los detalles del producto</Col>
                            </Row>
                        </Modal.Body>
                    </Modal>
                </Col>
                <Col xs={6} sm={4}>
                    {addToCart(prod) ?
                        <Button size="sm" variant="dark" onClick={handleClick} type="button" id="add" className="btn btn-secondary">AGREGAR AL CARRITO</Button>   
                    :
                        <Button size="sm" variant="dark" onClick={handleClick} type="button" id="addMore" className="btn btn-secondary">AGREGAR M&Aacute;S</Button>
                    }
                    </Col>
            </Row>
        </>
    )
}



export default ProductItem;

/*import React, {useState,useEffect} from "react";
import Table from "react-bootstrap/Table";
import PlaceService from '../services/PlaceServices';
const PlaceListTable = ()=>{
    const InitialTableState = [];
    const [places, setPlaces] = useState(InitialTableState);

    useEffect(()=>{
        const getAllPlaces = ()=>{
            PlaceService.getAll().then(response => {
                setPlaces(response.data);
            }).catch(e =>{
                console.log(e);
            })
        }
        getAllPlaces();
    },[])
    return (<>
        <h2>Listado de Sitios</h2>
        <Table bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {places.length > 0 ?(
                    places.map((place, index)=>(
                        <tr key={index}>
                            <td>{place.id}</td>
                            <td>{place.name}</td>
                            <td>{place.description}</td>
                            <td><img src={place.image} alt="" height="80" width="80"></img></td>
                        </tr>
                    )
                  )

                ):(<tr>
                    <td colSpan={4}>No se encontraron sitios</td></tr>)

                }
            </tbody>
        </Table>
    </>);
}

export default PlaceListTable;*/