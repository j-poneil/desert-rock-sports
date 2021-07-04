import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';


import GearCarousel from '../components/sub/GearCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Styled from 'styled-components';
// styles here:
// src\stylesheets\pages\_gear.sass


// generic responsive media query template from: https://angrytools.com/css/mediaquery/

export default function Gear(){

    const CarouselContainer = Styled.div`
        // ! - may not need all these media queries if all the images are the same aspect ratio
        // ! - better yet if I also do the different file sizes for different screen sizes AND pixel densities
        // every device
        margin: 0 auto;

        //desktops - higher resolution
        @media (min-width: 1281px) {}

        /*laptops, desktops*/
        @media (min-width: 1025px) and (max-width: 1280px) {}

        /*tablets, ipads (portrait)*/
        @media (min-width: 768px) and (max-width: 1024px) {}

        /*tablets, ipads (landscape)*/
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}

        /*low resolution tablets, mobiles (landscape)*/
        @media (min-width: 481px) and (max-width: 767px) {}

        /*smartphones mobiles (portrait)*/
        @media (min-width: 320px) and (max-width: 480px) {}
    `;

    return (
        <Container fluid>
            {/* The carousel of gear photos */}
            <CarouselContainer>
                <GearCarousel />
            </CarouselContainer>

            <Jumbotron className="text-center">
                <h1>What are you looking for?</h1>
            </Jumbotron>

            {/* Climbing / Canyoneering */}
            {/* Hiking, Backpacking, and Camping --- ? */}
            {/* Clothing? Whatever else? */}
            <Container>
                <Row xl={3} lg={3} md={2} sm={2} xs={1}>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </Container>
    );
}