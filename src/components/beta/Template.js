import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import { FaRegCaretSquareDown, FaRegCaretSquareUp } from 'react-icons/fa';


import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

// photo imports
// import Photo from '../../img/beta/photo.jpg';

// styles
// backgroundImage: `url('https://via.placeholder.com/50')`,
const titleCardStyles = {
    // a eye-catching, interesting image for the Card / Section Header
    // size?
    // ~650px wide for large screens would shrink it, usually
    // ~400px wide for medium
    // ~300px wide for small, xs
    // seems like thats a decent collection of options?
    // BONUS, use SVG graphics so no distortion on different screen sizes???
    backgroundImage: `url('https://via.placeholder.com/50')`,
    // backgroundRepeat: 'no-repeat',
    // switch from 'contain' to 'cover' with a real image, probably and/or have multiple images for multiple screen sizes
    backgroundSize: 'contain',
    color: 'white',
    textShadow: '-1px 1px 0 black, 1px 1px 0 black, 1px -1px 0 black, -1px -1px 0 black'
};

export default function Template() {
    const [ accordionVisible, setAccordionVisible ] = useState(false);
    const clickHandler = (e) => {
        e.preventDefault();
        return accordionVisible ?
            setAccordionVisible(false)
            : setAccordionVisible(true);
    };

    // @ instead of "as={Button}" I may be able to do role="button"... try it out
    return (
        <>
            <Card >
                <Card.Body
                    as={Button}
                    onClick={clickHandler}
                    //@ will this line work to add/remove the aria-expanded property? Whats the effect of null here?
                    { ...accordionVisible ? 'aria-expanded' : null }
                    style={titleCardStyles}>
                    <Card.Title role="heading">
                        {accordionVisible ? <FaRegCaretSquareUp /> : <FaRegCaretSquareDown />}
                         Card/Section Title
                    </Card.Title>
                    <span className="sr-only sr-only-focusable">Show/Hide Accordion Sub-Menu</span>
                </Card.Body>
            </Card>
            
            
            <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration={400} animationOutDuration={400} isVisible={accordionVisible}>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={accordionVisible ? Button : Card.Header} eventKey="test0">Title of accordion section</Accordion.Toggle>
                        <Accordion.Collapse eventKey="test0">
                            <Card.Body>Content</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={accordionVisible ? Button : Card.Header} eventKey="test1">Title of accordion section</Accordion.Toggle>
                        <Accordion.Collapse eventKey="test1">
                            <Card.Body>Content</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={accordionVisible ? Button : Card.Header} eventKey="test2">Title of accordion section</Accordion.Toggle>
                        <Accordion.Collapse eventKey="test2">
                            <Card.Body>Content</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Animated>
        </>
    )
}
