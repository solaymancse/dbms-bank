import React from 'react';
import './Header.css';
import { Nav , Navbar , Container} from 'react-bootstrap';


const Header = () => {
    return (
            <>  
                <Navbar className="top-nav">
                    <Container>
                       <div className="brand">
                            <img className="logo" src="Assets/DBMS Bank.png" alt="" srcset="" />
                       </div>
                       <div className="menuitem">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About DBMS</Nav.Link>
                                <Nav.Link href="/product_Service">Product & Service</Nav.Link>
                                <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                                <Nav.Link href="/career">Career</Nav.Link>
                            </Nav>
                            
                       </div>
                    </Container>
                </Navbar>
                
            </>
    );
};

export default Header;