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
    img290: '',
    img690: '',
    img930: '',
    img1250: '',
    data: [
        {
            subSectionTitle: 'Shady Climbing Options',
            subSectionContent: () => (
                <>
                    <Card.Title>Shady Options</Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Sunny Climbing Options',
            subSectionContent: () => (
                <>
                    <Card.Title>Sunny Options</Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Rainy / Dry out day options',
            subSectionContent: () => (
                <>
                    <Card.Title>Rainy day / dryout day options</Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Crack Options',
            subSectionContent: () => (
                <>
                    <Card.Title>Crack Options</Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Offwidth Options',
            subSectionContent: () => (
                <>
                    <Card.Title>Offwidth Options</Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'No Crowd Options',
            subSectionContent: () => (
                <>
                    <Card.Title>No-Crowd Options</Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                </>
            )
        },
    ]
};

