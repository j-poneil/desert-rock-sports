import React, { useState } from 'react';
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

//@ Checklist
//! - Did you Set the main card title?
//! - Did you set the titles/accordion toggles?
//! - Did you import/add a background image?
//! - Did you set it to cover? Or otherwise style it so it will look good responsively?
//! - Did you set the aria-label on the card?
//! - Did you set the aria-label on every single accordion toggle?
//! - Do the event keys in accordion toggle and accordion collapse match?
//! - Are you sure the event keys are unique and not used in a different accordion component?
//! - Does the main card have a unique id to use as a skip to link? Also for custom styles, etc...

// % What this is supposed to have based on notes in Beta.js


//@ Notes
// you can add tooltips with:
// data-bs-toggle="tooltip" data-bs-placement="top" title="whatever text"


//@ styles
// backgroundImage: `url('https://via.placeholder.com/50')`
// a eye-catching, interesting image for the Card / Section Header
    // size?
    // ~650px wide for large screens would shrink it, usually
    // ~400px wide for medium
    // ~300px wide for small, xs
    // seems like thats a decent collection of options?
    // BONUS, use SVG graphics so no distortion on different screen sizes???
// backgroundRepeat: 'no-repeat',
// switch from backgroundSize: 'contain' to 'cover' with a real image, probably and/or have multiple images for multiple screen sizes
const titleCardStyles = {
    backgroundImage: `url('https://via.placeholder.com/50')`,
    backgroundSize: 'contain',
    color: 'white',
    textShadow: '-1px 1px 0 black, 1px 1px 0 black, 1px -1px 0 black, -1px -1px 0 black',
    position: 'relative',
    zIndex: '500'
};
const iconStyles = {
    // color: 'white',
    // filter: `drop-shadow(0 0 30px #333)`,
    // filter: `drop-shadow(16px 16px 20px red) invert(75%)`,
    filter: `invert(100%)`,
    position: 'relative',
    zIndex: '500'
}
const accordionStyles = {
    position: 'relative',
    zIndex: '400'
}
const hideAccordion = {
    display: 'none'
}


export default function Template(props) {
    // Keeps track of if the accordion is visible or not. Visibility is toggled and the accordion scrolls down into view or up out of view from behind the Card / Section Title when the Card is clicked.
    const [ accordionVisible, setAccordionVisible ] = useState(false);
    const cardClickHandler = (e) => {
        e.preventDefault();
        accordionVisible ?
            setAccordionVisible(false)
            : setAccordionVisible(true);
    };

    //@ Keeps track of the open/closed state of the individual accordion sections to be able to show expand/collapse icons contextually
    // called when any is clicked, being passed in which one was clicked
    // onClick={ () => accordionItemClickHandler('eventKeyAsString') }
    // Show in titles with:
    // { accordionOpen['eventKeyAsString'] ? <MdExpandLess /> : <MdExpandMore /> }
    // below instead of acc1, it would be whatever eventKey1 is, etc...
    const [ accordionOpen, setAccordionOpen ] = useState({acc1: false, acc2: false, acc3: false});
    const accordionItemClickHandler = (key) => {
        // key.preventDefault();
        let copy = { ...accordionOpen };
        copy[key] = !copy[key];
        setAccordionOpen(copy);
    }

    // props.title - 'Test Title'
    // props.accordionIdBase -- 'testAccordion'
    // props.eventKeyBase -- 'testEventKey'
    // element.subSectionTitle -- '1st subSection Title'
    // element.subSectionContent -- 'subSection content'
    const ariaLabelText = props.title + '. Hide / Show';


    return (
        <>
            <Card data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related sections">
                <span className="sr-only">Screen Reader note: This button acts as a major section title. Clicking it shows or hides a subset of buttons which act as minor section titles. Clicking these shows or hides additional information.</span>
                
                <Card.Body
                    as={ Button }
                    onClick={ cardClickHandler }
                    style={ titleCardStyles }
                    aria-label={ ariaLabelText }
                    aria-expanded={ accordionVisible ? true : false }
                >
                    <Card.Title role="heading">
                        <h2>
                            { accordionVisible ? <FaRegCaretSquareUp style={iconStyles} /> : <FaRegCaretSquareDown style={iconStyles} /> }
                            {/* { accordionVisible ? <MdExpandLess style={iconStyles} /> : <MdExpandMore style={iconStyles} /> } */}
                            &nbsp;
                            { props.title }
                        </h2>
                    </Card.Title>
                </Card.Body>
            </Card>
            


            {/* map over array to output multiple Animated components and all the content that should fill them */}
            { props.subSectionArrayOfObjects.map((element, index) => 
                <Animated
                    animationIn="fadeInDown"
                    animationOut="fadeOutUp"
                    animationInDuration={ 400 }
                    animationOutDuration={ 200 }
                    isVisible={ accordionVisible }
                    style={ accordionVisible ? accordionStyles : {...accordionStyles, ...hideAccordion} }
                    key={ index }
                >
                    <Accordion id={ props.accordionIdBase + `Id${index}` } style={ accordionStyles }>
                        <span className="sr-only">Screen Reader note: these buttons show / hide information related to the the button's text which is like a minor section title</span>
                        <Card>
                            <Accordion.Toggle
                                as={ Button }
                                eventKey={ props.eventKeyBase + `${index}` }
                                role="button"
                                aria-label={ element.subSectionTitle + " Section title and button"}
                                data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related information"
                                onClick={() => accordionItemClickHandler(`props.eventKeyBase + ${index}`) }
                            >
                                { accordionOpen[`props.eventKeyBase + ${index}`] ? <MdExpandLess /> : <MdExpandMore /> }
                                &nbsp;
                                { element.subSectionTitle }
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={ props.eventKeyBase + `${index}` }>
                                <Card.Body>
                                    { element.subSectionContent }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Animated>
            )}
        </>
    )
}
