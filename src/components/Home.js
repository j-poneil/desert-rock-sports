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
import Pickles from '../img/temp/Pickles_900x600.jpg';
import SufferPup from '../img/temp/SufferPup_900x600.jpg';
// import Bouldering from '../img/temp/IMG_20190111_121054970_HDR.jpg';
import FyfeBouldering from '../img/temp/fyfe_900x600.jpg';

// ! no styles here currently
// Styles here:
// src\stylesheets\pages\_home.sass

const welcomeStyles = { height: '100%' };
// news styles in News component
const boulderingJumbotronStyle = { height: '100%' };

const picklesStyles = { width: '100%' };
const sufferPupStyles = { width: '100%' };
const fyfeBoulderingStyles = { width: '100%' };




//@Notes
// className="mt-3 mb-3" is used on every Container for some much needed spacing between components/elements/sections
// ? should i change the horizontal spacing between cols?


export default function Home(){
    return (
        // ! section? main?
        <Container fluid>
            <Splash />

            <Container fluid className="mt-3 mb-3">
                <Row xl={2} lg={2} md={1} sm={1} xs={1}>
                    <Col>
                        <Jumbotron style={ welcomeStyles }>
                            <h3>Welcome to Desert Rock Sports</h3>
                            <p>
                                the Las Vegas area's best store for climbing and wilderness adventure. Desert Rock Sports is owned and operated by climbers for backpackers, climbers, canyoneers, cavers and other outdoor sports enthusiasts.
                            </p>
                            <p>We carry top of the line technical gear and outdoor clothing not likely to be found anywhere else in the area.</p>
                            <p>Our staff is friendly and helpful. Come in and ask us about routes, conditions, permits, camping, or where to get a good beer. Use our wireless connection! We're here to help make your visit to Red Rock country a memorable one.</p>
                        </Jumbotron>
                    </Col>
                    <Col>
                        {/* <img className="temp" src='https://via.placeholder.com/500x400' alt="placeholder"/> */}
                        <Image src={ Pickles } fluid alt="pickles-placeholder" style={ picklesStyles } />
                    </Col>
                </Row>
            </Container>

            {/* Local news / happenings / sales / events */}
            {/* A cool image? */}
            <Container fluid className="mt-3 mb-3">
                <Row xl={2} lg={2} md={1} sm={1} xs={1}>
                    <Col>
                        <Image src={ SufferPup } fluid alt="simba-placeholder" style={ sufferPupStyles } />
                    </Col>
                    <Col>
                        <News />
                    </Col>
                </Row>
            </Container>

            {/* Yes, we rent bouldering pads */}
            {/* A cool image? */}
            <Container fluid className="mt-3 mb-3">
                <Row xl={2} lg={2} md={1} sm={1} xs={1}>
                    <Col>
                        <Jumbotron style={ boulderingJumbotronStyle }>
                            <h3>Yes! We rent Bouldering Pads!</h3>
                            <p>Regular size $15/day, XL $25/day</p>
                            <p>We don't do reservations anymore, but our fleet is now so large that we almost never run out.</p>
                            <p>(Stop calling us to check if we have them. Yes, we have them.)</p>
                            <p>We rent by the day, not per 24h, but we are reasonable. If you come in to rent near closing time we will only charge you for the next day.</p>
                            <p>If you are bouldering late you can return pads to Red Rock Climbing Center which is open later than we are, just make sure to write down your name and staple it to the pad so we can shread up your paperwork when we get the pad back.</p>
                        </Jumbotron>
                    </Col>
                    <Col>
                        <Image src={ FyfeBouldering } fluid alt="bouldering-placeholder" style={ fyfeBoulderingStyles } />
                    </Col>
                </Row>
            </Container>

            {/* A few popular products you can order from us */}
            {/* Maybe as a carousel */}

            {/* Check us out on IG? Subscribe to our mailing list? */}

            <Container fluid className="mt-3 mb-3">
                {/* Resoles */}
                <RRResoles />
            </Container>
            

            <Container fluid className="mt-3 mb-3">
                {/* Contact Us / where you at info */}
                <Contact />
            </Container>
            

            <Container fluid className="mt-3 mb-3">
                {/* Embedded Google Map, somewhat responsive */}
                <Map />
            </Container>
            
        </Container>
    );
}