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
            subSectionTitle: '1st subSection Title',
            subSectionContent: () => (
                <>
                    content
                </>
            )
        },
        {
            subSectionTitle: '2st subSection Title',
            subSectionContent: () => (
                <>
                    more content
                </>
            )
        },
    ]
};

