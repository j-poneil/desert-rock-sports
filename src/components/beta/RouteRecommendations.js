import React from 'react';
import { Animated } from 'react-animated-css';
import { FaRegCaretSquareDown, FaRegCaretSquareUp } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';


import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

// icons
// Standard?
// FaExternalLinkAlt AFTER links away
// FaDirections BEFORE Gmaps links away
import { FaExternalLinkAlt, FaDirections, FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt, FaMap, FaPhone } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


// photo imports
// import Photo from '..something../img/beta/photo.jpg';

// % What this is supposed to have based on notes in Beta.js
// Climbing route recommendations
        // Shady options
        // Sunny options
        // Rainy Day / Dryout day options
        // crack climbing
        // offwidth
        // no crowds (maybe... maybe not)

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

export const routeRecommendations = {
    title: 'Route Recommendations',
    accordionIdBase: 'routeRecommendationsAccordion',
    eventKeyBase: 'routeRecommendationsEKey',
    data: [
        {
            subSectionTitle: '1st subSection Title',
            subSectionContent: () => (
                <>
                </>
            )
        },
        {
            subSectionTitle: '1st subSection Title',
            subSectionContent: () => (
                <>
                </>
            )
        },
        {
            subSectionTitle: '1st subSection Title',
            subSectionContent: () => (
                <>
                </>
            )
        },
        {
            subSectionTitle: '1st subSection Title',
            subSectionContent: () => (
                <>
                </>
            )
        },
        {
            subSectionTitle: '1st subSection Title',
            subSectionContent: () => (
                <>
                </>
            )
        },
        {
            subSectionTitle: '1st subSection Title',
            subSectionContent: () => (
                <>
                </>
            )
        },
    ]
};

