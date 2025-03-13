import React from 'react';  
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';  
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../components/Price.css';  

// Composant réutilisable pour la carte de prix, avec une récursivité pour les sous-cartes  
const PriceCardRecursive = ({ title, description, amount, subtitle, buttonText, subPrices }) => (  
    <Col xs={12} md={6} lg={4}>  {/* Ajustez les largeurs pour chaque taille d'écran */}  
        <Card className="price-card">  
            <Card.Body>  
                <Card.Title className="price-title">{title}</Card.Title>  
                <Card.Text className="price-description">{description}</Card.Text>  
                <h2 className="price-amount">{amount}</h2>  
                <Card.Subtitle className="price-subtitle">{subtitle}</Card.Subtitle>  
                <Card.Text className="price-text">See, One price. Simple.</Card.Text>  
                <Button variant="primary" className="price-button">{buttonText}</Button>  
                
                {subPrices?.length > 0 && (  // Affiche les sous-prix s'ils existent  
                    <Row className="sub-price-row">  
                        {subPrices.map((subPrice, index) => (  
                            <PriceCardRecursive key={index} {...subPrice} />  
                        ))}  
                    </Row>  
                )}  
            </Card.Body>  
        </Card>  
    </Col>  
);  

// Composant réutilisable pour les liens du footer  
const FooterLinks = ({ links }) => (  
    <Nav className="justify-content-start">  
        {links.map((link, index) => (  
            <Nav.Link key={index} href={link.href} className="footer-link">{link.text}</Nav.Link>  
        ))}  
    </Nav>  
);  

// Composant principal Prix  
function Prix() {  
    const priceData = [  
        {  
            title: "A Price To Suit Everyone",  
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",  
            amount: "$40",  
            subtitle: "UI Design Kit",  
            buttonText: "Purchase Now",  
             
        }  
    ];  

    const footerLinks = [  
        { href: "#home", text: "Home" },  
        { href: "#about", text: "About" },  
        { href: "#contact", text: "Contact" }  
    ];  

    const socialLinks = ["f", "t", "i", "in", "y"];  

    return (  
        <div id="root">  
            <div className="main-content">  
                <div className="pill">  
                    <div className="text-center">  
                        <Row className="justify-content-center">  
                            {priceData.map((price, index) => (  
                                <PriceCardRecursive key={index} {...price} />  
                            ))}  
                        </Row>  
                    </div>  
                </div>  
            </div>  

            <footer className="footer">  
                <Container>  
                    <Row className="align-items-center">  
                        <Navbar className="me-auto">  
                            <p className="footer-text">©2023 Yourcompany</p>  
                            <Navbar.Brand href="#home" className="mx-auto" style={{ fontWeight: 'bold' }}>Landing</Navbar.Brand>  
                            <Button variant="dark" className="btn-buy-now" style={{ padding: '5px 40px', marginRight: '20px' }}>Purchase now</Button>  
                        </Navbar>  
                    </Row>  

                    <hr className="footer-divider" />  

                    <Row>  
                        <Col xs={6} className="text-left">  
                            <FooterLinks links={footerLinks} />  
                        </Col>  

                        <Col>  
                            <Nav className="justify-content-center">  
                                {socialLinks.map((icon, index) => (  
                                    <Nav.Link key={index} href="#" className="social-link">{icon}</Nav.Link>  
                                ))}  
                            </Nav>  
                        </Col>  
                    </Row>  
                </Container>  
            </footer>  
        </div>  
    );  
}  

export default Prix;  