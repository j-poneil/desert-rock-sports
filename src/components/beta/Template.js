import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import { FaRegCaretSquareDown, FaRegCaretSquareUp } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';


import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

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
const accordionStyles = {
    position: 'relative',
    zIndex: '400'
}


export default function Template() {
    // Keeps track of if the accordion is visible or not. Visibility is toggled and the accordion scrolls down into view or up out of view from behind the Card / Section Title when the Card is clicked.
    const [ accordionVisible, setAccordionVisible ] = useState(false);
    const cardClickHandler = (e) => {
        e.preventDefault();
        accordionVisible ?
            setAccordionVisible(false)
            : setAccordionVisible(true);
    };

    //@ just playing around with an idea...
    // Keeping track of the open/closed state of the individual accordion sections using an array
    // Will most likely go with the idea below which uses an object to keep track of this state instead, using eventKey's
    // which are already in place and should be unique and hand coded for each... but still thinking.
    // If I was to use array like this, I'd need to make sure that the number of "false" entries matches the number of
    // accordion sections
    //! ... but I'm not totally sure that this array approach would work when everything is composed together and there are so many
    // ... instances of this same setup with same variable names, many times in the Beta.js page...
    // ... I think I'd trust react to manage it fine somehow... but I'm not entirely sure it would work like that.
    const [ accordionOpen, setAccordionOpen ] = useState([false, false, false]);
    // { accordionOpen[index] ? <MdExpandLess /> : <MdExpandMore /> }
    const handler = (index) => {
        index.preventDefault();
        let copy = accordionOpen;
        copy[index] = !copy[index];
        setAccordionOpen(copy);
    }

    //@ thinking about keeping track of when any children accordion sections of the Card are open/closed, no matter how many such sections there are. This way I can have contextual open/close icons, which would really help a lot, I think. I'd obviously change these variable names around a bit.
    // called when any is clicked, being passed in which one was clicked
    // ... either i code which, or use the eventKey 's which are already in place, yeah...
    // this.eventKey ???
    // onClick={ () => handler2(acc1) } ----- or ------ handler2(this.eventKey)
    // corresponds to a key in an object {acc1: false, ..., ...}
    // if open/closed, shown by the below in the title of the accordion sections
    // { accordionOpen2[key] ? <MdExpandLess /> : <MdExpandMore /> }
    // below instead of acc1, it would be whatever eventKey1 is, etc..
    const [ accordionOpen2, setAccordionOpen2 ] = useState({acc1: false, acc2: false, acc3: false});
    const handler2 = (key) => {
        key.preventDefault();
        let copy = { ...accordionOpen2 };
        copy[key] = !copy[key];
        setAccordionOpen2(copy);
    }


    return (
        <>
            <Card data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related sections">
                <span className="sr-only">Screen Reader note: This button acts as a major section title. Clicking it shows or hides a subset of buttons which act as minor section titles. Clicking these shows or hides additional information.</span>
                
                <Card.Body
                    as={ Button }
                    onClick={ cardClickHandler }
                    style={ titleCardStyles }
                    aria-label="(Card/Section Title). Hide / Show"
                    aria-expanded={ accordionVisible ? true : false }
                >
                    <Card.Title role="heading">
                        <h2>
                            { accordionVisible ? <FaRegCaretSquareUp /> : <FaRegCaretSquareDown /> }
                            { accordionVisible ? <MdExpandLess /> : <MdExpandMore /> }
                            &nbsp;
                            Card/Section Title
                        </h2>
                    </Card.Title>
                </Card.Body>
            </Card>
            

            <Animated
                animationIn="fadeInDown"
                animationOut="fadeOutUp"
                animationInDuration={ 400 }
                animationOutDuration={ 200 }
                isVisible={ accordionVisible }
            >
                <Accordion id='templateAccordionId' style={ accordionStyles }>
                    <span className="sr-only">Screen Reader note: these buttons show / hide information related to the the button's text which is like a minor section title</span>
                    <Card>
                        {/* I was using: as={accordionVisible ? Button : Card.Header} in the Accordion.Toggle s and role="heading" before.*/}
                        {/* as={Card.Header} is what is supposed to make it able to be clicked on anywhere to open/close, but it appears to work just fine without it! varient='outline-dark' doesn't work... */}
                        <Accordion.Toggle
                            as={ Button }
                            eventKey="test0"
                            role="button"
                            aria-label="Section title(Put the title) and button"
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related information"
                        >
                            Title of accordion section
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="test0">
                            <Card.Body>Content</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion id='templateAccordionId' style={ accordionStyles }>
                    <span className="sr-only">Screen Reader note: these buttons show / hide information related to the the button's text which is like a minor section title</span>
                    <Card>
                        {/* I was using: as={accordionVisible ? Button : Card.Header} in the Accordion.Toggle s and role="heading" before.*/}
                        {/* as={Card.Header} is what is supposed to make it able to be clicked on anywhere to open/close, but it appears to work just fine without it! varient='outline-dark' doesn't work... */}
                        <Accordion.Toggle
                            as={ Button }
                            eventKey="test1"
                            role="button"
                            aria-label="Section title(Put the title) and button"
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related information"
                        >
                            Title of accordion section
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="test1">
                            <Card.Body>Content</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Animated>
        </>
    )
}
