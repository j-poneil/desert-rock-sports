import React from 'react';
// import { Animated } from 'react-animated-css';
// import { FaRegCaretSquareDown, FaRegCaretSquareUp } from 'react-icons/fa';
// import { MdExpandMore, MdExpandLess } from 'react-icons/md';


import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';

// icons
// Standard?
// FaExternalLinkAlt AFTER links away
// FaDirections BEFORE Gmaps links away
// unused so far:  FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt, FaMap, FaPhone 
import { FaExternalLinkAlt, FaDirections } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';


// photo imports
// import Photo from '..something../img/beta/photo.jpg';
// these SVG are now all camelCased and wrapped as JSX functional default export components, memoized too
// import Gyms_290_1 from '../../img/accordionBgs/asJSX/Gyms_290x95';
// import Gyms_690_1 from '../../img/accordionBgs/asJSX/Gyms_690x95';
// import Gyms_930_1 from '../../img/accordionBgs/asJSX/Gyms_930x95';
// import Gyms_1250_1 from '../../img/accordionBgs/asJSX/Gyms_1250x95';
import Gyms_290_1 from '../../img/accordionBgs/working/Gyms_290x95_1.svg';
import Gyms_690_1 from '../../img/accordionBgs/working/Gyms_690x95_1.svg';
import Gyms_930_1 from '../../img/accordionBgs/working/Gyms_930x95_1.svg';
import Gyms_1250_1 from '../../img/accordionBgs/working/Gyms_1250x95_1.svg';

// % What this is supposed to have based on notes in Beta.js
// Climbing Gyms
        // didn't fill out stuff...

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

export const gyms = {
    title: 'Gyms',
    accordionIdBase: 'gymAccordion',
    eventKeyBase: 'gymEKey',
    img290: Gyms_290_1,
    img690: Gyms_690_1,
    img930: Gyms_930_1,
    img1250: Gyms_1250_1,
    data: [
        {
            subSectionTitle: 'Climbing Gyms',
            subSectionContent: () => (
                <>
                    {/* <a href="" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a><br /> */}
                    <Card.Subtitle>Red Rock Climbing Center (R2C2)</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.redrockclimbingcenter.com/" target="_blank" rel="noopener noreferrer">Red Rock Climbing Center <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/eJtf2ZcR8DKuMio2A" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Red Rock Climbing Center</a>
                        <p>Located in the same shopping center as our shop! Bouldering, Lead, Top Rope, and Auto Belays!</p>
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>The Refuge Climbing &amp; Fitness</Card.Subtitle>
                    <Card.Text>
                        <a href="http://climbrefuge.com/" target="_blank" rel="noopener noreferrer">The Refuge <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/8Hbc31i8PNqaJkVt7" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to The Refuge</a>
                        <p>Just west of McCarran International Airport. Primarily Bouldering, with a few Auto Belays.</p>
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>Nevada Climbing Center</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.nvclimbingcenter.com/" target="_blank" rel="noopener noreferrer">Nevada Climbing Center <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/LiY1EHZRYDGTJXay8" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Nevada Climbing Center</a>
                        <p>Just east of McCarran International Airport. Bouldering, Lead, Top Rope, and Auto Belays!</p>
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>The Pad Henderson (used to be Origin)</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.thepadclimbing.org/" target="_blank" rel="noopener noreferrer">The Pad <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/1GkbKu3ULz3mzSGq6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to The Pad</a>
                        <p>Located in Southwest Vegas / Henderson. Bouldering, Lead, Top Rope, and Auto Belays!</p>
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>Lifetime Fitness</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.lifetime.life/life-time-locations/nv-las-vegas-summerlin.html" target="_blank" rel="noopener noreferrer">Lifetime Fitness - Summerlin <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/857D9QcztBJqJu11A" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Lifetime Fitness</a>
                        <p>Located off Charleston in W Vegas / Summerlin, this location has a climbing wall. If you are already a Lifetime Fitness member, it may be worthwhile.</p>
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'regular boring gyms',
            subSectionContent: () => (
                <>
                    (thoughts ... probably not enough reason to have this section)
                </>
            )
        },
    ]
};

