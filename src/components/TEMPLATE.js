import React from 'react';
// import Styled from 'styled-components';
// import { Carousel } from 'react-responsive-carousel';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

// ! styles need to be made here-ish:
// src\stylesheets\pages\_whateverpage.sass
// ! AND imported into:
// src\stylesheets\main.scss

export default function NameOfPage(){
    return (
        <Container fluid>
            <Row xl={2} lg={2} md={2} sm={2} xs={1}>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    );
}