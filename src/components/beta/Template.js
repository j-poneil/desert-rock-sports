import React, { useState } from 'react';
import { Animated } from 'react-animated-css';

import { HiCursorClick } from 'react-icons/hi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { CgChevronDown, CgChevronUp, CgChevronDownR, CgChevronUpR, CgArrowDown, CgArrowUp, CgArrowDownR, CgArrowUpR } from 'react-icons/cg';
import { VscFoldDown, VscFoldUp, VscArrowDown, VscArrowUp } from 'react-icons/vsc';
import { TiArrowDownOutline, TiArrowUpOutline, TiArrowDownThick, TiArrowUpThick } from 'react-icons/ti';
import { FaRegCaretSquareDown, FaRegCaretSquareUp } from 'react-icons/fa';


import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';

export default function Template() {
    const [ accordionVisible, setAccordionVisible ] = useState(false);
    const clickHandler = (e) => {
        e.preventDefault();
        return accordionVisible ? setAccordionVisible(false) : setAccordionVisible(true);
    };

    return (
        <>
            <Card onClick={clickHandler}>
                <Card.Body style={{
                    backgroundImage: `url('https://via.placeholder.com/50')`,
                    // switch to 'cover' with a real image, probably
                    // and/or have multiple images for multiple screen sizes
                    // backgroundRepeat: 'no-repeat',
                    // but a pattern background repeated, could look nice on any screen size... BUT maybe not as nice...
                    backgroundSize: 'contain'
                }}>
                    <Card.Title>{accordionVisible ? <FaRegCaretSquareUp /> : <FaRegCaretSquareDown />} Card/Section Title</Card.Title>
                    <Card.Subtitle>Sub title (and maybe hidden screen reader instructions?)</Card.Subtitle>
                    <Card.Text>
                        Some text... shouldn't be needed
                    </Card.Text>
                </Card.Body>
            </Card>
            
            <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration={400} animationOutDuration={400} isVisible={accordionVisible}>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="test0">Title of accordion section</Accordion.Toggle>
                        <Accordion.Collapse eventKey="test0">
                            <Card.Body>Content</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="test1">Title of accordion section</Accordion.Toggle>
                        <Accordion.Collapse eventKey="test1">
                            <Card.Body>Content</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="test2">Title of accordion section</Accordion.Toggle>
                        <Accordion.Collapse eventKey="test2">
                            <Card.Body>Content</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Animated>
        </>
    )
}
