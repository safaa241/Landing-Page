
import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Price.css'; // Import du fichier CSS

function Prix() {
    return (
        <div id="root">
            {/* NavBar */}
            <Navbar>
                <Container>
                    <Row className="align-items-center">
                        <Navbar className="me-auto">
                            <Navbar.Brand href="#home" className="mx-auto" style={{ fontWeight: 'bold' }}>Landing</Navbar.Brand>  
                            <Button variant="dark" className="btn-buy-now" >Purchase now</Button>
                            
                        </Navbar>
                    </Row>

                    
                    <Row>
                        <Col xs={6} className="text-left">
                            <Nav className="justify-content-start">
                                <Nav.Link href="#home" className="footer-link">Home</Nav.Link>
                                <Nav.Link href="#about" className="footer-link">About</Nav.Link>
                                <Nav.Link href="#contact" className="footer-link">Contact</Nav.Link>
                            </Nav>
                        </Col>                        
                    </Row>
                </Container>
            </Navbar>
        </div>
    );
}

export default Prix;
