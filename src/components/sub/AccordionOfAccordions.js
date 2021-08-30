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

//! test
import Verm from '../../img/secret/the_verm.jpg';

//@ ==================================
//! Clean stuff up!
//@ ==================================
/*
    Functional stateless component that takes several inputs as props
    Use like so:
    <AccordionOfAccordions
        title='Test Title'
        accordionIdBase='testAccordion'
        eventKeyBase='testEventKey'
        subSectionArrayOfObjects={ templatePropsTestSections }
    />

    Where templatePropsTestSections is an array of objects like so:
    const templatePropsTestSections = [
        {
            subSectionTitle: '1st subSection Title',
            subSectionContent: () => (<><p>subSection content</p></>)
        },
        {
            subSectionTitle: '2nd subSection Title',
            subSectionContent: () => (<><p>subSection content</p></>)
        },
        {
            subSectionTitle: '3rd subSection Title',
            subSectionContent: () => (<><p>subSection content</p></>)
        }
    ];

    It will automatically make a main accordion with the proper number of sub-accordions.
    Main accordion will have

    Best to export/import this array from another file.

    Sub sections will have Ids like so:
    accordionIdBase='test' ==> testId0, testId1, testId2, ...
    eventKeyBase='test' ==> test0, test1, test2, ...
*/
//@ ==================================



// photo imports
// import Photo from '..something../img/beta/photo.jpg';

//! - This stuff is a bit different now since I'm using a functional stateless component to pass props to instead of sooooo many individual BIG components just copy/paste/edit like I was doing before
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

// resolution switching 1x, 2x is screen density
// background-image: image-set( "foo.png" 1x, "foo-2x.png" 2x);
// media
{/* <picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
  <img src="mdn-logo-narrow.png" alt="MDN">
</picture> */}



export default function AccordionOfAccordions(props) {
    //@ styles
    // backgroundImage: `url('https://via.placeholder.com/50')`
    // a eye-catching, interesting image for the Card / Section Header
    // BONUS, use SVG graphics so no distortion on different screen sizes???
    // ref: https://www.webfx.com/blog/web-design/responsive-background-image/
    const titleCardStyles = {
        //! backgroundImage: `url(${ props.backgroundImage })`,
        // color displayed while image loads
        // backgroundColor: '#FFFFFF',
        backgroundColor: 'transparent',
        // scale background image proportionally so that its width and height are equal to, or greater than, the width/height of the element
        // backgroundSize: 'cover',
        // center vertically and horizontally
        // backgroundPosition: 'center center',
        // backgroundRepeat: 'no-repeat',
        // image doesn't move around with container resizing or moving, ie container is a window in front that moves
        // backgroundAttachment: 'fixed',
        // text color, etc
        color: 'white',
        textShadow: '-1px 1px 0 black, 1px 1px 0 black, 1px -1px 0 black, -1px -1px 0 black',
        position: 'relative',
        zIndex: '500'
    };
    // position: 'relative',
    //     zIndex: '500'
    const iconStyles = {
        // color: 'white',
        // filter: `drop-shadow(0 0 30px #333)`,
        // filter: `drop-shadow(16px 16px 20px red) invert(75%)`,
        filter: `invert(100%)`
    }
    const accordionStyles = {
        position: 'relative',
        zIndex: '400'
    }
    const hideAccordion = {
        display: 'none'
    }


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
    return (
        <>
            <Card data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related sections">
                <span className="sr-only">Screen Reader note: This button acts as a major section title. Clicking it shows or hides a subset of buttons which act as minor section titles. Clicking these shows or hides additional information.</span>
                
                {/*
                VERY BAD SUPPORT FOR image-set
                background: -webkit-image-set( url('path/to/image') 1x, url('path/to/high-res-image') 2x );

                Note... I can do Card as='picture' but don't know how I should specify the sources...
                <picture>
                    <source srcSet={ props.img1250 } media='(min-width: 992px)' />
                    <source srcSet={ props.img930 } media='(min-width: 768px)' />
                    <source srcSet={ props.img690 } media='(min-width: 576px)' />
                    <source srcSet={ props.img290 } media='(min-width: 0px)' />
                </picture>
                */}
                
                {/* style={ titleCardStyles } */}
                <Card.Body
                    as={ Button }
                    onClick={ cardClickHandler }
                    aria-label={ props.title + '. Hide / Show' }
                    aria-expanded={ accordionVisible ? true : false }
                    style={{'position': 'relative'}}
                >
                    <Card.Title role="heading" style={ titleCardStyles }>
                        <h2>
                            { accordionVisible ? <FaRegCaretSquareUp style={iconStyles} /> : <FaRegCaretSquareDown style={iconStyles} /> }
                            {/* { accordionVisible ? <MdExpandLess style={iconStyles} /> : <MdExpandMore style={iconStyles} /> } */}
                            &nbsp;
                            { props.title }
                        </h2>
                    </Card.Title>

                    {/* //! a hackey way to remove overflow is 'overflow': 'hidden'... but that doesn't fix the wrong image size issue */}
                    {/* <picture
                        style={{
                            'position': 'absolute',
                            'top': 0,
                            'left': 0,
                            'zIndex': 450,
                            'width': '100%',
                            'height': 'auto',
                            'overflow': 'hidden'
                        }}
                    >
                        <source srcSet={ props.img1250 } type='image/svg+xml' media='(min-width: 992px)' />
                        <source srcSet={ props.img930 } type='image/svg+xml' media='(min-width: 768px)' />
                        <source srcSet={ props.img690 } type='image/svg+xml' media='(min-width: 576px)' />
                        <source srcSet={ props.img290 } type='image/svg+xml' media='(min-width: 0px)' />
                        <img src={ props.img1250 } type='image/svg+xml' alt='test' />
                    </picture> */}
                    <img
                        src={ props.img1250 }
                        type='image/svg+xml'
                        alt='test'
                        srcSet={ `${props.img1250} 1250w, ${props.img930} 930w, ${props.img690} 690w, ${props.img290} 290w` }
                        sizes="(min-width: 992px) 1250px, (min-width: 768px) 930px, (min-width: 576px) 690px, (min-width: 0px) 290px"
                        style={{
                            'position': 'absolute',
                            'top': 0,
                            'left': 0,
                            // 'bottom': 0,
                            // 'right': 0,
                            'width': '100%',
                            // 'width': 'auto',
                            'height': '100%',
                            // 'height': 'auto',
                            'zIndex': 450,
                            // 'overflow': 'hidden',
                            // 'margin': '0 auto',
                            // 'objectFit': 'contain',
                            'objectFit': 'cover',
                            'objectPosition': '0% 50%',
                        }}
                    />
                    
                    
                </Card.Body>
                {/* 
                    Inherited breakpoints from react-bootstrap
                    --breakpoint-xs: 0;
                    --breakpoint-sm: 576px;
                    --breakpoint-md: 768px;
                    --breakpoint-lg: 992px;
                    --breakpoint-xl: 1200px;
                 */}
                
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
                                className='text-left'
                                eventKey={ props.eventKeyBase + `${index}` }
                                role="button"
                                aria-label={ element.subSectionTitle + " Section title and button"}
                                data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related information"
                                onClick={ () => accordionItemClickHandler(props.eventKeyBase + `${index}`) }
                            >
                                { accordionOpen[ props.eventKeyBase + `${index}` ] ? <MdExpandLess /> : <MdExpandMore /> }
                                &nbsp;
                                { element.subSectionTitle }
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={ props.eventKeyBase + `${index}` }>
                                <Card.Body>
                                    { element.subSectionContent() }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Animated>
            )}
        </>
    )
}
