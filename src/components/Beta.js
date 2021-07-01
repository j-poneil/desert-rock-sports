import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

// styles here:
// src\stylesheets\pages\_beta.sass

// ? - Accordian? Cards? Modals? Tabs?


// Hiking, Canyoneering, Showers, Free Camping, Paid Camping, Trail Running, MTB Trails, Food Beta, Laundry, Coffee Shops, Seasonal Area recommendations (summer shade/altitude, winter sun), rainy day options, Route recommendations per style?, 

export default function Beta(){
    return (
        <Container fluid>
            <Row xl={3} lg={3} md={2} sm={2} xs={1}>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    );
}