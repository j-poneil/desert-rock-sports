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
const titleCardStyles = {
    backgroundImage: `url('https://via.placeholder.com/50')`,
    // switch to 'cover' with a real image, probably and/or have multiple images for multiple screen sizes
    // backgroundRepeat: 'no-repeat',
    // but a pattern background repeated, could look nice on any screen size... BUT maybe not as nice...
    backgroundSize: 'contain',
    color: 'white',
    // textShadow
    textShadow: '-1px 1px 0 black, 1px 1px 0 black, 1px -1px 0 black, -1px -1px 0 black'
};

export default function Template() {
    const [ accordionVisible, setAccordionVisible ] = useState(false);
    const clickHandler = (e) => {
        e.preventDefault();
        return accordionVisible ? setAccordionVisible(false) : setAccordionVisible(true);
    };

    // @ instead of "as={Button}" I may be able to do role="button"... try it out
    return (
        <>
            <Card >
                <Card.Body
                    as={Button}
                    onClick={clickHandler}
                    style={titleCardStyles}>
                    <Card.Title>{accordionVisible ? <FaRegCaretSquareUp /> : <FaRegCaretSquareDown />} Card/Section Title </Card.Title>
                    <div className="sr-only sr-only-focusable">Show/Hide Accordion Sub-Menu</div>
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
