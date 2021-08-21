import React, { useState } from 'react';

// icons
// Standard?
// FaExternalLinkAlt AFTER links away
// FaDirections BEFORE Gmaps links away
import { FaExternalLinkAlt, FaDirections, FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt, FaMap, FaPhone } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';

// AccordionOfAccordions which I made
import AccordionOfAccordions from './sub/AccordionOfAccordions';

// for when testing the template used for the other section components
// import Template from './beta/Template';
// import TemplatePropsTest from './beta/TemplatePropsTest';

// section components based off Template ... They will functionally be Card components
import { generalInfo } from './beta/generalInfo';
import { lodgingLogistics } from './beta/lodgingLogistics';
import { food } from './beta/food';
import { otherOutdoor } from './beta/otherOutdoor';
import { routeRecommendations } from './beta/routeRecommendations';
import { gyms } from './beta/gyms';

//! test or temp
import Verm from '../img/secret/the_verm.jpg';
//% Photo imports for the background imgs of the main (outer) accordions
// import ___ from '../img/accordionBgs/____';



// styles here:
// src\stylesheets\pages\_beta.sass

//@ - Card Section Titles with a captivating img background
    // Click on them to show/hide an accordion of related sections that slides down into view

//@ Major sections and accordion items
//@ ... sub-titles could be good to have too
    // General Info
        // RR General Info (hours, logistics, timed entry, site link(s))
        // Rescue
        // Local Ethics
        // Wet Rock
        // SNCC
    // Lodging / Camping / Logistics?
        // Hotels
        // Paid Camping
        // Free Camping
        // Showers
        // Laundry
    // Food
        // Grocery Stores
        // Coffee Shops
        // Restraunts
        // Breweries / Bars
    // Other outdoor fun
        // Hiking
        // Trail Running
        // Mtn Biking
        // Canyoneering
        // Rainy day options (hiking, hot springs, touristy stuff, etc...)
    // Climbing route recommendations
        // Shady options
        // Sunny options
        // Rainy Day / Dryout day options
        // crack climbing
        // offwidth
        // no crowds (maybe... maybe not)
    // Climbing Gyms
    


//@ - K's ideas:
/*
Containers / divs (Cards) with images as background and white text titles of each section
Makes it visually appealing
- bg inline or with css
3 cols on Md-bigger
1 col below that
ONLY WANTS TO SEE THE CARD INITIALLY
THEN the open accordion -- or maybe -- a MODAL
- general info: some canyon background
- rescue: some helicopter
When you click on the div/img, have it flip away or slide up or something and show/open the accordion with all the things related to that title
SLIM DOWN -- less recommendations
--- OR maybe a different page with recs
Separate out the individual things into separate files, like components/beta/GeneralInfo.js
The individual files will have the accordions
Beta JS will have the return with all the components in it
Other
- if you want to change the default bootstrap theme colors (prob good idea)
-- make a custom.scss or App.scss file, see documentation
? - problem...
I can't click on a card and have it turn into an accordion... because then I have nothing I can click on to turn it back into a card...
Maybe better to keep the Card/Section title, and just open/close the accordion group below it on click of the card/section title
... also... whats the accessibility impact of this kinda stuff? I have no idea
? - How do I make it obvious that your supposed to click on these cards w/o saying "click me"?
? - What about accessibility?
... v turning into ^ or... > turning into <, etc...
... what about for screen readers? maybe an invisible except to screen readers 'sub-menu visible' 'sub-menu hidden' message in the sub-title of the card???

*/


export default function Beta(){
    return (
        <Container fluid>
            {/* //@ SR skip / get to quick links */}
            {/* //! Makes sense to hold off on filling this out until the content is in sub-components */}
            <a id='skip-to-RR-general-info' class="sr-only sr-only-focusable" href='#RR-general-info'>Skip to Red Rock General Info</a>
            {/* //? Should I do it so that you skip to the card, which can be opened (and say that in the sr-only text)... or should I make a compact list that allows you to skip to any individual accordion item on the entire page all from here?... that would be "slick" but may be a bit harder... would they get the info w/o having to open the cards?... hmm ohh... yeah, especially once I componentize this all. Hmm should still be able to do like href="#idOfSection", since they will be in the page once the component is imported ... yeah... a SR-only link list here going to each individual accordion item would be ideal... the pretty cards and accordions are for quick sighted navigation, something quick for blind navigation as well would be best. */}
            <a id='skip-to-SNCC-ethics-camping-showers-laundry' class="sr-only sr-only-focusable" href='#SNCC-ethics-camping-showers-laundry'>Skip to Southern Nevada Climbers Coalition, Local Ethics, Camping, Showers, and Laundry</a>

            <a id='skip-or-skip-to' class="sr-only sr-only-focusable" href='#main-content'>Skip / Skip to</a>
            <a id='skip-or-skip-to' class="sr-only sr-only-focusable" href='#main-content'>Skip / Skip to</a>
            <a id='skip-or-skip-to' class="sr-only sr-only-focusable" href='#main-content'>Skip / Skip to</a>
            <a id='skip-or-skip-to' class="sr-only sr-only-focusable" href='#main-content'>Skip / Skip to</a>
            <a id='skip-or-skip-to' class="sr-only sr-only-focusable" href='#main-content'>Skip / Skip to</a>
            <a id='skip-or-skip-to' class="sr-only sr-only-focusable" href='#main-content'>Skip / Skip to</a>
            <a id='skip-or-skip-to' class="sr-only sr-only-focusable" href='#main-content'>Skip / Skip to</a>
            <a id='skip-or-skip-to' class="sr-only sr-only-focusable" href='#main-content'>Skip / Skip to</a>
            <a id='skip-or-skip-to' class="sr-only sr-only-focusable" href='#main-content'>Skip / Skip to</a>

            {/* 
                //! - style={{'height': '100%'}}
                //! - Can I use it to get things to look better?
                //! - Should I use it?
                //? - Should I maybe just have 1 column... or rather no column?
                    //? - then inside of each major section component have row/col set up to break stuff up?
                    //... thinking no... but not thinking too hard about it either right now
            */}
            {/* <Row xxl={3} xl={3} lg={3} md={2} sm={2} xs={1}> */}
            <Row xxl={2} xl={2} lg={2} md={2} sm={2} xs={1}>
                {/* style={{ backgroundImage: `url('https://via.placeholder.com/50')` }} */}
                <Col>
                    <AccordionOfAccordions
                        title={ generalInfo.title }
                        accordionIdBase={ generalInfo.accordionIdBase }
                        eventKeyBase={ generalInfo.eventKeyBase }
                        subSectionArrayOfObjects={ generalInfo.data }
                        backgroundImage={ Verm }
                    />
                    <AccordionOfAccordions
                        title={ lodgingLogistics.title }
                        accordionIdBase={ lodgingLogistics.accordionIdBase }
                        eventKeyBase={ lodgingLogistics.eventKeyBase }
                        subSectionArrayOfObjects={ lodgingLogistics.data }
                        backgroundImage={ Verm }
                    />
                    <AccordionOfAccordions
                        title={ food.title }
                        accordionIdBase={ food.accordionIdBase }
                        eventKeyBase={ food.eventKeyBase }
                        subSectionArrayOfObjects={ food.data }
                        backgroundImage={ Verm }
                    />
                    <AccordionOfAccordions
                        title={ otherOutdoor.title }
                        accordionIdBase={ otherOutdoor.accordionIdBase }
                        eventKeyBase={ otherOutdoor.eventKeyBase }
                        subSectionArrayOfObjects={ otherOutdoor.data }
                        backgroundImage={ Verm }
                    />
                    <AccordionOfAccordions
                        title={ routeRecommendations.title }
                        accordionIdBase={ routeRecommendations.accordionIdBase }
                        eventKeyBase={ routeRecommendations.eventKeyBase }
                        subSectionArrayOfObjects={ routeRecommendations.data }
                        backgroundImage={ Verm }
                    />
                    <AccordionOfAccordions
                        title={ gyms.title }
                        accordionIdBase={ gyms.accordionIdBase }
                        eventKeyBase={ gyms.eventKeyBase }
                        subSectionArrayOfObjects={ gyms.data }
                        backgroundImage={ Verm }
                    />
                </Col>
                <Col>
                    {/* //! will need to do something different... like completely independent columns instead? */}
                    <Card style={{'height': '100%'}}>

                    </Card>
                </Col>
            </Row>
        </Container>
    );
}