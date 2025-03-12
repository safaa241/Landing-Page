// src/components/Header.js
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

// Données dynamiques pour la navigation et les boutons
const navItems = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Contact", href: "#contact" },
];

const buttons = [
  { id: 1, label: "Purchase UI Kit", className: "btn-purchase-kit" },
  { id: 2, label: "Learn More", className: "btn-learn-more" },
];

// Composant récursif pour afficher les liens
const RecursiveNav = ({ items }) => {
  return items.map((item) => (
    <Nav.Link key={item.id} href={item.href} className="nav-link-custom">
      {item.label}
    </Nav.Link>
  ));
};

const Header = () => {
  return (
    <>
      {/* Navbar responsive */}
      <Navbar expand="lg" fixed="top" className="navbar-custom">
        <Container>
          {/* Bouton toggle pour petits écrans */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Liens dynamiques */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <RecursiveNav items={navItems} />
            </Nav>
            <Navbar.Brand href="#home" className="mx-auto" style={{ fontWeight: 'bold' }}>Landing</Navbar.Brand>  
            <Button variant="dark" className="btn-buy-now" style={{ padding: '2px 40px', marginRight: '20px'}}>Buy now</Button>
                                    
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Section principale */}
      <div className="header-section">
        <Container className="header-content">
          <h1 className="header-title">
            Introduce Your Product <br /> Quickly & Effectively
          </h1>
          <p className="header-description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br /> 
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque <br />
          penatibus et magnis dis parturient montes, nascetur ridiculus <br />
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, <br />
          sem. Nulla consequat massa quis enim.
          </p>

          {/* Boutons dynamiques */}
          <div className="btn-container">
            {buttons.map((btn) => (
              <Button key={btn.id} className={btn.className}>
                {btn.label}
              </Button>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
