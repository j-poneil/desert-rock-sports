import React from 'react';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
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

const homeOverallStyle = {
    background: 'rgb(255,255,255)',
    background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,101,35,1) 0%, rgba(139,221,255,1) 100%)',
    overflowX: 'hidden', //% hacky... but couldn't find where the extra margin was coming from, this fixes it
};


//@Notes
// className="mt-3 mb-3" is used on every Container for some much needed spacing between components/elements/sections
// ? should i change the horizontal spacing between cols?

// style={{'paddingLeft': '0', 'paddingRight': '0'}} ====> className='pl-0 pr-0'
export default function Home(){
    // const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container fluid className='pl-0 pr-0 ml-0 mr-0' style={ homeOverallStyle }>
            {/* Container fluid */}
            <Container fluid className='pl-0 pr-0 ml-0 mr-0'>
                <Splash />
            </Container>

            {/* Was fluid */}
            <Container fluid="md" className="mt-3 mb-3">
                <h3>Welcome to Desert Rock Sports</h3>
                <p>
                    the Las Vegas area's best store for climbing and wilderness adventure. Desert Rock Sports is owned and operated by climbers for climbers, canyoneers, cavers, backpackers, and other outdoor sports enthusiasts.
                </p>
                <p>
                    We carry top of the line technical gear and outdoor clothing not likely to be found anywhere else in the area.
                </p>
                <p>
                    Our staff is friendly and helpful. Come in and ask us about routes, conditions, permits, camping, or where to get a good beer. Use our WIFI! We're here to help make your visit to the area a memorable one.
                </p>
                {/* <Card>
                    <Card.Img
                        src={ Pickles }
                        // srcSet={``}
                        // sizes="100vw"
                        // at <992px vw, 1 col = img width = 100vw - padding/margins
                        // at larger sizes: 2 cols = img width = 50vw - padding/margins
                        // sizes="(min-width: 992px) 50vw - 32px, 100vw - 32px"
                        alt="A glorious dog named Pickles, looking adorable"
                        style={ picklesStyles }
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Pickles using his 'please' stare, begging you to buy more gear"
                    />
                </Card> */}
            </Container>

            {/* Local news / happenings / sales / events */}
            {/* was fluid */}
            <Container fluid="md" className="mt-3 mb-3">
                {/* <Card>
                    <Card.Img
                        src={ SufferPup }
                        // srcSet={``}
                        // sizes="100vw"
                        // at <992px vw, 1 col = img width = 100vw - padding/margins
                        // at larger sizes: 2 cols = img width = 50vw - padding/margins
                        // sizes="(min-width: 992px) 50vw - 32px, 100vw - 32px"
                        alt="Suffer Pup, a rescued dog, held high, getting the 'Simba' experience"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Suffer Pup, rescue doggo, getting the full 'Simba' experience. Everything the sun touches will be yours some day."
                    />
                </Card> */}
                
                {/* Limited to most recent HERE, but a link to a page to see all of them */}
                <News />
            </Container>

            {/* Yes, we rent bouldering pads */}
            {/* was fluid */}
            <Container fluid="md" className="mt-3 mb-3">              
                <h3 className='text-center'>Yes! We rent Bouldering Pads!</h3>
                <ul>
                    <li>**$5 / day - Book: Southern Nevada Bouldering II by Tom Moulin</li>
                    <li>$10 / day - Pad Blankets</li>
                    <li>$15 / day - Regular Size Asana Pads</li>
                    <li>$25 / day - XL Asana Pads</li>
                </ul>
                <p>We don't do reservations anymore, but our fleet is now so large that we don't run out. Please stop calling to ask if we have any available.</p>
                <p>We rent by the day, not per 24h... but we are reasonable. If you come in to rent near closing time we will only charge you for the next day.</p>
                <p>If you are bouldering late you can return pads to Red Rock Climbing Center which is open later than we are, check how late they will be open (their hours are below) and make sure to write down your name and staple it to the pad when it is returned so we can shred up your paperwork when we get the pad back.</p>
                <p>**note: Southern Nevada Bouldering II is now out of print while Tom is working on the 3rd edition, which we think will be available Spring 2023. Until then we have a -very- limited number of guides to rent out. We also have a store copy you can flip through.</p>
                

                {/* <Card>
                    <Card.Img
                        src={ Julie_480x320 }
                        srcSet={
                            `${Julie_480x320} 480w,
                            ${Julie_720x480} 720w,
                            ${Julie_1152x768} 1152w,
                            ${Julie_1242x828} 1242w`
                        }
                        // sizes="100vw"
                        // at <992px vw, 1 col = img width = 100vw - padding/margins
                        // at larger sizes: 2 cols = img width = 50vw - padding/margins
                        sizes="(min-width: 992px) 50vw - 32px, 100vw - 32px"
                        alt="Julie crushing the boulder roof crack known as Born to Bleed"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Julie on the fun Born to Bleed V2 invert offwidth boulder problem"
                    />
                </Card> */}
            </Container>

            {/* A few popular products you can order from us */}
            {/* Maybe as a carousel */}

            {/* Check us out on IG? Subscribe to our mailing list? */}
            

            <Container fluid className="mt-0 mb-0 ml-0 mr-0 pl-0 pr-0">
                {/* Contact Us info */}
                <Contact />
            </Container>
            

            <Container fluid className="mt-0 mb-0 ml-0 mr-0 pl-0 pr-0">
                {/* Embedded Google Map, somewhat responsive */}
                <Map />
            </Container>


            <Container fluid className="mt-0 mb-0 ml-0 mr-0 pl-0 pr-0">
                <NewsletterIFrame />
            </Container>


            {/* Author / credit */}
            <div
                style={{
                    textAlign: 'right',
                    padding: 0,
                    margin : 0,
                    paddingRight: '5px',
                    background: 'black',
                    color: 'white'
                }}
            >
                Site design by: <a href="https://github.com/j-poneil" target="_blank" rel="noopener noreferrer"><FaGithub /> John-Paul O'Neil</a>
            </div>
            
        </Container>
    );
}