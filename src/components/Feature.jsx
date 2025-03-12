import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './feauture.css';

// Import des images
import feature1Image from '../photos/undraw_social_influencer_sgsv.png';
import feature2Image from '../photos/undraw_mention_6k5d.png';
import feature3Image from '../photos/Group 9.png';
import feature4Image from '../photos/undraw_happy_news_hxmt.png';

const Feature = () => {
    const features = [
        {
            id: 1,
            title: 'Light, Fast & Powerful',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            image: feature3Image,
            reverse: false,
            hasExtraRow: true, // Ajout d'un champ pour détecter où ajouter la section supplémentaire
        },
        {
            id: 2,
            title: 'Light, Fast & Powerful',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            image: feature4Image,
            reverse: true,
        },
        {
            id: 3,
            title: 'Light, Fast & Powerful',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            image: feature1Image,
            reverse: true,
        },
        {
            id: 4,
            title: 'Light, Fast & Powerful',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            image: feature2Image,
            reverse: true,
            hasButton: true,
        },
    ];

    return (
        <div className="feature-section">
            <Container fluid="md">
                {features.map((feature) => (
                    <Row
                        key={feature.id}
                        className={`align-items-center mb-5 ${feature.reverse ? 'flex-md-row-reverse' : ''}`}
                    >
                        

                        {/* Texte */}
                        <Col xs={12} md={6} className="text-md-start text-center">
                            <h2 className="feature-title">{feature.title}</h2>
                            <p className="feature-description">{feature.description}</p>

                            {/* Ajout du bloc supplémentaire si `hasExtraRow` est vrai */}
                            {feature.hasExtraRow && (
                                <Row className="mt-4">
                                    <Col>
                                        <h5 className="feature-subtitle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeWidth="2" d="M3 9h18M3 15h18M12 3l3 3h6v12H3V6h6l3-3z"/>
                                            </svg>
                                            <br />
                                            Title Goes Here
                                        </h5>
                                        <p className="feature-subdescription">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                                    </Col>
                                    <Col>
                                        <h5 className="feature-subtitle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeWidth="2" d="M3 9h18M3 15h18M12 3l3 3h6v12H3V6h6l3-3z"/>
                                            </svg>
                                            <br />
                                            Title Goes Here
                                        </h5>
                                        <p className="feature-subdescription">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                                    </Col>
                                </Row>
                            )}

                            {/* Bouton conditionnel */}
                            {feature.hasButton && (
                                <Button className="feature-button">Purchase Now</Button>
                            )}
                        </Col>
                        {/* Image */}
                        <Col xs={12} md={6} className="text-center">
                            <Image src={feature.image} fluid className="feature-image" alt={feature.title} />
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default Feature;
