import react from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Header extends react.Component{
    render(){
        return(
           <Row>
               <Col xs={4} sm={{span:4, offset:4}} className="py-2 mb-5 text-center" id="head">
                   <Link to='/About'>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/">Store</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/Cart">Cart</Link>
               </Col>
           </Row>
        )
    }
}

export default Header;