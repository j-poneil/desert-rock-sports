import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';


import GearCarousel from '../components/sub/GearCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Styled from 'styled-components';
// styles here:
// src\stylesheets\pages\_gear.sass


// % I may just have to NOT use the full screen width. Still need to resize images anyways, but something like width: '70vw', height: 'auto' may be totally acceptable
// % Hard coding heights here doesn't work, images override... regardless of dynamic height = true/false
// * a demo used a ratio that ended up being 2.4:1... IE 1920/800 = 2.4:1
// * a demo used files of 960x400 and ~31KB each
// * a 3:2 crop is not sufficient, especially considering the space needed for the thumbsnails below
// * a 16:9 crop wont work either, considering the icons below and the nav, tabs, searchbar, etc above
// * a 2.4:1 crop works, just barely!
//      quick way in paint 3D is divide the width of the crop area you want by 2.4, then set height to that number and crop
//      % BUT
//      2.4:1 looks lame on iPhone vertical...
//      ? Does it look OK sideways? Yeah... kinda
//      ? Can I just do something to completely center the carousel in the middle of the viewport so there is no scrolling up/down regardless of image dimensions and aspect ratio?
// ? Think about media queries ... vs ... bootstrap breakpoints
const testStyles = {
    // height: '700px'
    // testing
    // objectFit cover
    // objectFit contain you can specify a width or height
    // objectFit: 'cover',
    // width: '100%',
    // height: '250px'
    objectFit: 'cover',
    width: '100%',
    height: '250px'
};

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
        <Container fluid className='pl-0 pr-0'>
            {/* The carousel of gear photos */}
            <CarouselContainer style={testStyles}>
                <GearCarousel />
            </CarouselContainer>

            <Jumbotron className='text-center ml-3 mr-3'>
                <h1>What are you looking for?</h1>
            </Jumbotron>

            {/* Climbing / Canyoneering */}
            {/* Hiking, Backpacking, and Camping --- ? */}
            {/* Clothing? Whatever else? */}
            <Container className='ml-3 mr-3'>
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