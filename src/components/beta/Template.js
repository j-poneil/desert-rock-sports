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
    textShadow: '-1px 1px 0 black, 1px 1px 0 black, 1px -1px 0 black, -1px -1px 0 black'
};
const accordionToggleStyles = {
    background: 'white',
    color: 'black',
    textAlign: 'left'
};
// const activeStyle = {
//     outline: '5px solid green'
// };

export default function Template() {
    const [ accordionVisible, setAccordionVisible ] = useState(false);
    const clickHandler = (e) => {
        e.preventDefault();
        return accordionVisible ?
            setAccordionVisible(false)
            : setAccordionVisible(true);
    };

    return (
        <>
            <Card>
                <span className="sr-only">Screen Reader note: This button acts as a major section title. Clicking it shows or hides a subset of buttons which act as minor section titles. Clicking these shows or hides additional information.</span>
                <Card.Body
                    as={ Button }
                    onClick={ clickHandler }
                    style={ titleCardStyles }
                    aria-label="(Card/Section Title). Hide / Show"
                    aria-expanded={ accordionVisible ? true : false }
                >
                    <Card.Title role="heading">
                        { accordionVisible ? <FaRegCaretSquareUp /> : <FaRegCaretSquareDown /> }
                        &nbsp;
                        Card/Section Title
                    </Card.Title>
                </Card.Body>
            </Card>
            

            <Animated
                animationIn="fadeInDown"
                animationOut="fadeOutUp"
                animationInDuration={400}
                animationOutDuration={200}
                isVisible={ accordionVisible }
            >
                <Accordion>
                    <span className="sr-only">Screen Reader note: these buttons show / hide information related to the the button's text which is like a minor section title</span>
                    <Card>
                        {/* I was using: as={accordionVisible ? Button : Card.Header} in the Accordion.Toggle s and role="heading" before.*/}
                        {/* as={Card.Header} is what is supposed to make it able to be clicked on anywhere to open/close, but it appears to work just fine without it! */}
                        <Accordion.Toggle
                            as={ Button }
                            varient='outline-dark'
                            // as={accordionVisible ? Button : Card.Header}
                            eventKey="test0"
                            style={ accordionToggleStyles }
                            role="button"
                            aria-label="Section title(Put the title) and button"
                            // aria-expanded={ someVariable ? true : false }
                        >
                            Title of accordion section
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="test0">
                            <Card.Body>Content</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Animated>
        </>
    )
}
