import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// sub components
import Map from './sub/Map';
import Splash from './sub/Splash';
import News from './sub/News';
import Contact from './sub/Contact';
// playing with options for newsletter signup form
// import NewsletterModal from './sub/NewsletterModal';
import NewsletterIFrame from './sub/NewsletterIFrame';
// import NewsletterForm from './sub/NewsletterForm';

import { FaGithub } from 'react-icons/fa';


// Images
// import Julie from '../img/HomePage/Julie_medium.jpg';
import Julie_480x320 from '../img/HomePage/Julie_480x320-min.jpg';
import Julie_720x480 from '../img/HomePage/Julie_720x480-min.jpg';
import Julie_1152x768 from '../img/HomePage/Julie_1152x768-min.jpg';
import Julie_1242x828 from '../img/HomePage/Julie_1242x828-min.jpg';

// TEMP IMAGES for mocking up only
import Pickles from '../img/temp/Pickles_900x600.jpg';
import SufferPup from '../img/temp/SufferPup_900x600.jpg';
// import Bouldering from '../img/temp/IMG_20190111_121054970_HDR.jpg';
// import FyfeBouldering from '../img/temp/fyfe_900x600.jpg';


// ! no styles here currently
// Styles here:
// src\stylesheets\pages\_home.sass

const welcomeStyles = { height: '100%' };
// news styles in News component
const boulderingJumbotronStyle = { height: '100%' };

const picklesStyles = { width: '100%' };
const sufferPupStyles = { width: '100%' };




//@Notes
// className="mt-3 mb-3" is used on every Container for some much needed spacing between components/elements/sections
// ? should i change the horizontal spacing between cols?

// style={{'paddingLeft': '0', 'paddingRight': '0'}} ====> className='pl-0 pr-0'
export default function Home(){
    // const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container fluid className='pl-0 pr-0'>
            {/* Container fluid */}
            <Container fluid className='pl-0 pr-0'>
                <Splash />
            </Container>

            <Container fluid className="mt-3 mb-3">
                <Row xl={2} lg={2} md={1} sm={1} xs={1}>
                    <Col>
                        <Jumbotron style={ welcomeStyles }>
                            <h3>Welcome to Desert Rock Sports</h3>
                            <p>
                                the Las Vegas area's best store for climbing and wilderness adventure. Desert Rock Sports is owned and operated by climbers for climbers, canyoneers, cavers, backpackers, and other outdoor sports enthusiasts.
                            </p>
                            <p>We carry top of the line technical gear and outdoor clothing not likely to be found anywhere else in the area.</p>
                            <p>Our staff is friendly and helpful. Come in and ask us about routes, conditions, permits, camping, or where to get a good beer. Use our WIFI! We're here to help make your visit to the area a memorable one.</p>
                            {/* //! Not using the button modal approach for now since I couldn't get it to work the way I wanted */}
                            {/* <NewsletterModal /> */}
                        </Jumbotron>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img
                                src={ Pickles }
                                fluid
                                alt="A glorious dog named Pickles, looking adorable"
                                style={ picklesStyles }
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Pickles using his 'please' stare, begging you to buy more gear"
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Local news / happenings / sales / events */}
            {/* A cool image? */}
            <Container fluid className="mt-3 mb-3">
                <Row xl={2} lg={2} md={1} sm={1} xs={1}>
                    <Col>
                        <Card>
                            <Card.Img
                                src={ SufferPup }
                                fluid
                                alt="Suffer Pup, a rescued dog, held high, getting the 'Simba' experience"
                                style={ sufferPupStyles }
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Suffer Pup, rescue doggo, getting the full 'Simba' experience. Everything the sun touches will be yours some day."
                            />
                        </Card>
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
                            <h3 className='text-center'>Yes! We rent Bouldering Pads!</h3>
                            <ul>
                                <li>$10 / day - Pad Blankets</li>
                                <li>$15 / day - Regular Size Asana Pads</li>
                                <li>$25 / day - XL Asana Pads</li>
                            </ul>
                            {/* <p>Regular size $15/day, XL $25/day, pad blankets $10/day</p> */}
                            <p>We don't do reservations anymore, but our fleet is now so large that we almost never run out.</p>
                            <p>(Stop calling us to check if we have them. Yes, we have them.)</p>
                            <p>We rent by the day, not per 24h... but we are reasonable. If you come in to rent near closing time we will only charge you for the next day.</p>
                            <p>If you are bouldering late you can return pads to Red Rock Climbing Center which is open later than we are, check how late they will be open (their hours are below) and make sure to write down your name and staple it to the pad when it is returned so we can shred up your paperwork when we get the pad back.</p>
                        </Jumbotron>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img
                                src={ Julie_480x320 }
                                srcSet={
                                    `${Julie_480x320} 480w,
                                    ${Julie_720x480} 720w,
                                    ${Julie_1152x768} 1152w,
                                    ${Julie_1242x828} 1242w`
                                }
                                // sizes={``}
                                fluid
                                alt="Julie crushing the boulder roof crack known as Born to Bleed"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Julie on the fun Born to Bleed V2 invert offwidth boulder problem"
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* A few popular products you can order from us */}
            {/* Maybe as a carousel */}

            {/* Check us out on IG? Subscribe to our mailing list? */}
            

            <Container fluid>
                {/* Contact Us info */}
                <Contact />
            </Container>
            

            <Container fluid className="mt-3 mb-3">
                {/* Embedded Google Map, somewhat responsive */}
                <Map />
            </Container>


            {/* <Container fluid>
                <Row xl={2} lg={2} md={1} sm={1} xs={1}>
                    <Col>
                    </Col>
                    <Col>
                        <NewsletterIFrame />
                        <NewsletterForm />
                    </Col>
                </Row>
            </Container> */}

            <Container fluid className="mb-3">
                <NewsletterIFrame />
            </Container>


            {/* Author / credit */}
            <p
                style={{
                    'textAlign': 'right',
                    'padding': 0,
                    'margin-top': 0,
                    'margin-bottom': 0,
                    'margin-right': '5px'
                }}
            >
                Site design by: <a href="https://github.com/j-poneil" target="_blank" rel="noopener noreferrer"><FaGithub />John-Paul O'Neil</a>
            </p>
            
        </Container>
    );
}