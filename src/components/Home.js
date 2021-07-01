import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';

// sub components
import Map from './sub/Map';
import Splash from './sub/Splash';
import News from './sub/News';
import RRResoles from './sub/RRResoles';
import Contact from './sub/Contact';

// TEMP IMAGES for mocking up only
import Pickles from '../img/temp/Pickles.jpg';
import Simba from '../img/temp/IMG_20190320_215434_122.jpg';
import Bouldering from '../img/temp/IMG_20190111_121054970_HDR.jpg';

// ! no styles here currently
// Styles here:
// src\stylesheets\pages\_home.sass


export default function Home(){
    return (
        // ! section? main?
        <Container fluid>
            <Splash />

            <Container fluid>
                <Row xl={2} lg={2} md={2} sm={2} xs={1}>
                    <Col>
                        <Jumbotron>
                            <p><strong>Welcome to Desert Rock Sports</strong></p>
                            <p>
                                the Las Vegas area's best store for climbing and wilderness adventure. Desert Rock Sports is owned and operated by climbers for backpackers, climbers, canyoneers, cavers and other outdoor sports enthusiasts.
                            </p>
                            <p>We carry top of the line technical gear and outdoor clothing not likely to be found anywhere else in the area.</p>
                            <p>Our staff is friendly and helpful. Come in and ask us about routes, conditions, permits, camping, or where to get a good beer. Use our wireless connection! We're here to help make your visit to Red Rock country a memorable one.</p>
                        </Jumbotron>
                    </Col>
                    <Col>
                        {/* <img className="temp" src='https://via.placeholder.com/500x400' alt="placeholder"/> */}
                        <Image src={ Pickles } roundedCircle fluid alt="pickles-placeholder" />
                    </Col>
                </Row>
            </Container>

            {/* Local news / happenings / sales / events */}
            {/* A cool image? */}
            <Container fluid>
                <Row xl={2} lg={2} md={2} sm={2} xs={1}>
                    <Col>
                        <Image src={ Simba } alt="simba-placeholder" fluid />
                    </Col>
                    <Col>
                        <News />
                    </Col>
                </Row>
            </Container>

            {/* Yes, we rent bouldering pads */}
            {/* A cool image? */}
            <Container>
                <Row xl={2} lg={2} md={2} sm={2} xs={1}>
                    <Col>
                        <Jumbotron>
                            <p><strong>Yes! We rent Bouldering Pads!</strong></p>
                            <p>Regular size $15/day, XL $25/day</p>
                            <p>We don't do reservations anymore, but our fleet is now so large that we almost never run out.</p>
                        </Jumbotron>
                    </Col>
                    <Col>
                        <Image src={ Bouldering } alt="bouldering-placeholder" fluid />
                    </Col>
                </Row>
            </Container>

            {/* A few popular products you can order from us */}
            {/* Maybe as a carousel */}

            {/* Check us out on IG? Subscribe to our mailing list? */}

            <Container fluid>
                {/* Resoles */}
                <RRResoles />
            </Container>
            

            <Container fluid>
                {/* Contact Us / where you at info */}
                <Contact />
            </Container>
            

            <Container fluid>
                {/* Embedded Google Map, somewhat responsive */}
                <Map />
            </Container>
            
        </Container>
    );
}