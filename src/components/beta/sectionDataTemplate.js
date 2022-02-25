import React from 'react';
// import { Animated } from 'react-animated-css';
// import { FaRegCaretSquareDown, FaRegCaretSquareUp } from 'react-icons/fa';
// import { MdExpandMore, MdExpandLess } from 'react-icons/md';


// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';

// icons
// Standard?
// FaExternalLinkAlt AFTER links away
// FaDirections BEFORE Gmaps links away
// import { FaExternalLinkAlt, FaDirections, FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt, FaMap, FaPhone } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';


// photo imports
// import Photo from '..something../img/beta/photo.jpg';
//@ Section name
// these SVG are now all camelCased and wrapped as JSX functional default export components, memoized too (using https://svg2jsx.com/)
//import __ from '../../img/accordionBgs/asJSX/____';
// NOTE: this JSX functional export components of SVG code is not what I am using at the moment. Probably far future upgrade though?



// % What this is supposed to have based on notes in beta.js
//! - FOR EXAMPLE ONLY
// Food
        // Grocery Stores
        // Coffee Shops
        // Restraunts
        // Breweries / Bars

{/* <AccordionOfAccordions
    title='Test Title'
    accordionIdBase='testAccordion'
    eventKeyBase='testEventKey'
    subSectionArrayOfObjects={ templatePropsTestSections }
/> */}
// access like food.title, food.accordionIdBase, food.eventKeyBase, food.data
// 'foodAccordion' ==> 'foodAccordionId0' ... 'foodEKey' ==> 'foodEKey0'

// the parent of subSectionContent is <Card.Body></Card.Body>
// So Card.Text and Card.Subtitle are logical tags to use

export const food = {
    title: 'Grocery, Food, and Drink Options',
    accordionIdBase: 'foodAccordion',
    eventKeyBase: 'foodEKey',
    img290: '',
    img690: '',
    img930: '',
    img1250: '',
    data: [
        {
            subSectionTitle: '1st subSection Title',
            subSectionContent: () => (
                <>
                </>
            )
        },
    ]
};

