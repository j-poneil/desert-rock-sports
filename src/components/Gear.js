import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';


// import GearCarousel from '../components/sub/GearCarousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

import GearGallery from '../components/sub/GearGallery';

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
            {/* <CarouselContainer style={testStyles}>
                <GearCarousel />
            </CarouselContainer> */}

            <Jumbotron className='text-center ml-3 mr-3 mt-3'>
                <h1>What are you looking for?</h1>
                <p>We try to keep a good selection of gear on hand to cover climbing: sport, trad, and bouldering. We also try to keep a bit of a stock of general camping supplies.</p>
            </Jumbotron>

            <Jumbotron className="text-center mt-3 ml-3 mr-3">
                <GearGallery />
            </Jumbotron>

            <Jumbotron className="mt-3 ml-3 mr-3">
                <h2>Consignment</h2>
                <p>We sell used gear. You can bring us used items you don't want any more. You can price them or we can price them. After they sell you get 75% of whatever they sold for as store credit or 60% as a check (notify us and give us a few days to get it written by a manager). Our system does not automatically drop prices over time and there is no notification when things sell. People just check back from time to time when they are in the area or call us periodically. Credit on file has no expiration.</p>
                <p>We reserve the right to change prices. Both to increase prices on high quality items so you and we both make more off them, as well as dropping prices on lower quality or low demand items to get them to sell to make more space for other items. We can also take items out of consignment and notify you to pick them up or have us donate them... Mostly this happens to low quality things we should have never accepted in the first place that just sit in consignment for years with no interest.</p>
                <h3>Examples of things we take:</h3>
                <ul>
                    <li>Gently used climbing shoes, approach shoes, mountaineering boots, hiking boots, trail runners. We don't want blown out shoes. No one wants to buy a shoe that they need to immediately send in for resole and wait to be able to even use. MAYBE at times we will accept some, with the understanding that we will have to price them very low.</li>
                    <li>Gently used clothing. We are looking mostly for known great outdoor brands: Patagonia, Prana, TNF, Arcteryx, Outdoor Research, Rab, etc...</li>
                    <li>Climbing hard goods: cams, stoppers, hexes, pitons, carabiners, sport draws, belay and rappel devices, progress capture devices, pulleys, nut tools, etc...</li>
                    <li>Gently used climbing helmets.</li>
                    <li>Crash Pads, Hangboards</li>
                    <li>Climbing and hiking backpacks, rope tarps, chalk bags, bouldering buckets, good travel luggage, portaledges, haul bags, etc...</li>
                    <li>Tents, Sleeping Bags, Pads, stoves, trekking poles, etc...</li>
                    <li>Misc: Portable power banks, solar panels, headlamps, etc...</li>
                    <li>Misc: Snow pickets, microspikes, ice tools, etc...</li>
                    <li>Guidebooks and other general outdoorsy interest books for the subjects our store is tailored to.</li>
                    <li>Sometimes we will take items which don't really fit with our normal items if we feel they will still sell.</li>
                </ul>

                <h3>Examples of things we DON'T take:</h3>
                <ul>
                    <li>Climbing soft goods: ropes, harnesses, slings, PAS, etc... If you bring us a used harness we won't re-sell it. We will cut it up and Travis will salvage the metal buckle hardware for personal sewing projects. If you bring us a used rope we will cut it up or give it away for general non-life-safety use. You have been warned!</li>
                    <li>Bikes, Skis, Snowboards, Kayaks, SUPs... We don't have the space for bulky items like these.</li>
                </ul>
            </Jumbotron>

            {/* Climbing / Canyoneering */}
            {/* Hiking, Backpacking, and Camping --- ? */}
            {/* Clothing? Whatever else? */}
            {/* <Container className='ml-3 mr-3'>
                <Row xl={3} lg={3} md={2} sm={2} xs={1}>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container> */}
        </Container>
    );
}