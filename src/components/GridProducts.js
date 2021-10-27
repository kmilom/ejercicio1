import react from 'react';
import ProductItem from './ProductItems';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class GridProducts extends react.Component{
    render(){
        const productos = [ 
            {id:1,nombre:'Buffalo - Striploin',precio:39.100},
            {id:2,nombre:'Bacardi Breezer - Tropical',precio:257.900},
            {id:3,nombre:'Wine - Gato Negro Cabernet',precio:51.100},
            {id:4,nombre:'Cabbage - Nappa',precio:250.900},
            {id:5,nombre:'Sping Loaded Cup Dispenser',precio:175.850},
            {id:6,nombre:'Bread - Mait',precio:82.600},
            {id:7,nombre:'Glass Clear 8 Oz',precio:201.100},
            {id:8,nombre:'Sour Puss Raspberry',precio:134.990},
            {id:9,nombre:'Pork - Chop Frenched',precio:199.150}
        ]
        const alEnviarForm = () =>{
            productos.push({id:10,nombre:'Porc - Shop Frenched',precio:199.150})
        }
        return(
            <Row>{productos.map(p=><Col xs={6} md={4} className="border border-secondary py-2 mb-1"><ProductItem producto={p}/></Col>)}</Row>
        )
    }
}

export default GridProducts;