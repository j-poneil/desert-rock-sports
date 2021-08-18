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

// % What this is supposed to have based on notes in Beta.js
// Food
        // Grocery Stores
        // Coffee Shops
        // Restraunts
        // Breweries / Bars

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
const iconStyles = {
    // color: 'white',
    // filter: `drop-shadow(0 0 30px #333)`,
    // filter: `drop-shadow(16px 16px 20px red) invert(75%)`,
    filter: `invert(100%)`,
    position: 'relative',
    zIndex: '500'
}
const accordionStyles = {
    position: 'relative',
    zIndex: '400'
}
const hideAccordion = { display: 'none' }


export default function Template() {
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


    return (
        <>
            <Card data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related sections">
                <span className="sr-only">Screen Reader note: This button acts as a major section title. Clicking it shows or hides a subset of buttons which act as minor section titles. Clicking these shows or hides additional information.</span>
                
                <Card.Body
                    as={ Button }
                    onClick={ cardClickHandler }
                    style={ titleCardStyles }
                    aria-label="Grocery, Food, and Drink Options. Hide / Show"
                    aria-expanded={ accordionVisible ? true : false }
                >
                    <Card.Title role="heading">
                        <h2>
                            { accordionVisible ? <FaRegCaretSquareUp style={iconStyles} /> : <FaRegCaretSquareDown style={iconStyles} /> }
                            {/* { accordionVisible ? <MdExpandLess style={iconStyles} /> : <MdExpandMore style={iconStyles} /> } */}
                            &nbsp;
                            Food
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
                style={ accordionVisible ? accordionStyles : {...accordionStyles, ...hideAccordion} }
            >
                <Accordion id='foodAccordionId' style={ accordionStyles }>
                    <span className="sr-only">Screen Reader note: these buttons show / hide information related to the the button's text which is like a minor section title</span>
                    <Card>
                        {/* I was using: as={accordionVisible ? Button : Card.Header} in the Accordion.Toggle s and role="heading" before.*/}
                        {/* as={Card.Header} is what is supposed to make it able to be clicked on anywhere to open/close, but it appears to work just fine without it! varient='outline-dark' doesn't work... */}
                        <Accordion.Toggle
                            as={ Button }
                            eventKey="food0"
                            role="button"
                            aria-label="Grocery Stores section title and button"
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related information"
                            onClick={() => accordionItemClickHandler('food0') }
                        >
                            { accordionOpen['food0'] ? <MdExpandLess /> : <MdExpandMore /> }
                            &nbsp;
                            Grocery Stores
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="food0">
                            <Card.Body>
                                <Card.Text>
                                    <a href="https://goo.gl/maps/2UggTM6D53dUCuqF7" target="_blank" rel="noopener noreferrer"><FaDirections /> Albertsons</a><br />
                                    <p>Many Vegas locations. This is the closest one to Red Rock, its a pretty popular spot to meetup and carpool from. If you are going to do this, please utilize the side parking if you are leaving a larger vehicle like a sprinter van to minimize our visual impact as climbers. Be sure to check out the marked down bakery items. If you need breakfast sometimes they have egg, sausage, and cheese breakfast biscuits or burritos pre-made at the already hot and ready food area.</p>
                                    <a href="https://goo.gl/maps/JRfX4mLS2BdnF1t27" target="_blank" rel="noopener noreferrer"><FaDirections /> Trader Joe's</a><br />
                                    <p>There are several Trader Joe's locations in Vegas now, this one is within walking distance of the Summerlin WinCo.</p>
                                    <a href="https://goo.gl/maps/HBLyPAFXNDLUm7sp9" target="_blank" rel="noopener noreferrer"><FaDirections /> WinCo - Summerlin</a><br />
                                    <p>WinCo is an excellent place to get closer to bulk foods. Excellent prices on many things, great variety of ready to heat meal options. Part of how they keep their prices low is by not accepting credit cards at all. They only take debit cards and cash.</p>
                                    <a href="https://goo.gl/maps/mBGhrA29egwRQznj8" target="_blank" rel="noopener noreferrer"><FaDirections /> 168 Market</a><br />
                                    <p>Excellent Asian grocery store. Highly recommend.</p>
                                    <a href="https://goo.gl/maps/S2sPjxojaQhz749t5" target="_blank" rel="noopener noreferrer"><FaDirections /> Whole Foods</a><br />
                                    <p>Yep, there is Whole Paycheck in Vegas.</p>
                                    <a href="https://goo.gl/maps/JFsgC3Tu1LAWgkw96" target="_blank" rel="noopener noreferrer"><FaDirections /> Sprouts Farmers Market</a><br />
                                    <p>Another good grocery store.</p>
                                </Card.Text>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion id='foodAccordionId' style={ accordionStyles }>
                    <span className="sr-only">Screen Reader note: these buttons show / hide information related to the the button's text which is like a minor section title</span>
                    <Card>
                        {/* I was using: as={accordionVisible ? Button : Card.Header} in the Accordion.Toggle s and role="heading" before.*/}
                        {/* as={Card.Header} is what is supposed to make it able to be clicked on anywhere to open/close, but it appears to work just fine without it! varient='outline-dark' doesn't work... */}
                        <Accordion.Toggle
                            as={ Button }
                            eventKey="food1"
                            role="button"
                            aria-label="Coffee Shops section title and button"
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related information"
                            onClick={() => accordionItemClickHandler('food1') }
                        >
                            { accordionOpen['food1'] ? <MdExpandLess /> : <MdExpandMore /> }
                            &nbsp;
                            Coffee Shops
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="food1">
                            <Card.Body>
                                <Card.Subtitle>Madhouse Coffee</Card.Subtitle>
                                <Card.Text>
                                    <a href="https://g.page/TheMadHouseCoffee?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Madhouse Coffee</a><br />
                                    <p></p>
                                </Card.Text>
                                <Card.Subtitle>Sambalatte</Card.Subtitle>
                                <Card.Text>
                                    <a href="https://g.page/sambalatte-boca-park?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Sambalatte</a><br />
                                    <p></p>
                                </Card.Text>
                                <Card.Subtitle>Makers &amp; Finders</Card.Subtitle>
                                <Card.Text>
                                    <a href="https://g.page/MakersLV2?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Makers &amp; Finders</a><br />
                                    <p>Coffee and Latin Food</p>
                                </Card.Text>
                                <Card.Subtitle>Grouchy John's Coffee</Card.Subtitle>
                                <Card.Text>
                                    <a href="https://goo.gl/maps/SGJW6Pv6suJa1VUJ6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Grouchy John's Coffee</a><br />
                                    <p></p>
                                </Card.Text>
                                <Card.Subtitle>Desert Wind Coffee Roasters</Card.Subtitle>
                                <Card.Text>
                                    <a href="https://g.page/desertwindcoffee?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Desert Wind Coffee Roasters</a><br />
                                    <p></p>
                                </Card.Text>
                                <Card.Subtitle></Card.Subtitle>
                                <Card.Text>
                                    <a href="https://goo.gl/maps/kbyPUayVEjKkWRPJ7" target="_blank" rel="noopener noreferrer"><FaDirections /> Gabi Coffee &amp; Bakery</a><br />
                                    <p>Nice option.</p>
                                </Card.Text>
                                <Card.Subtitle>Starbucks</Card.Subtitle>
                                <Card.Text>
                                    <a href="https://www.starbucks.com/store-locator?map=36.151802,-115.279791,15z" target="_blank" rel="noopener noreferrer">Starbucks Store Finder <FaExternalLinkAlt /></a><br />
                                    <p>Of course, Starbucks is everywhere</p>
                                </Card.Text>
                                <Card.Subtitle>Dutch Bros</Card.Subtitle>
                                <Card.Text>
                                    <a href="https://www.dutchbros.com/locations/" target="_blank" rel="noopener noreferrer">Dutch Bros Finder <FaExternalLinkAlt /></a><br />
                                    <p>Some locations have opened recently. Apparently its a thing?</p>
                                </Card.Text>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion id='foodAccordionId' style={ accordionStyles }>
                    <span className="sr-only">Screen Reader note: these buttons show / hide information related to the the button's text which is like a minor section title</span>
                    <Card>
                        {/* I was using: as={accordionVisible ? Button : Card.Header} in the Accordion.Toggle s and role="heading" before.*/}
                        {/* as={Card.Header} is what is supposed to make it able to be clicked on anywhere to open/close, but it appears to work just fine without it! varient='outline-dark' doesn't work... */}
                        <Accordion.Toggle
                            as={ Button }
                            eventKey="food2"
                            role="button"
                            aria-label="Restraunts section title and button"
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related information"
                            onClick={() => accordionItemClickHandler('food2') }
                        >
                            { accordionOpen['food2'] ? <MdExpandLess /> : <MdExpandMore /> }
                            &nbsp;
                            Restraunts
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="food2">
                            <Card.Body>
                                <Card.Subtitle>Pizza</Card.Subtitle>
                                <Card.Text>
                                    <a href="https://goo.gl/maps/w5YjFknbdCtt8Kn28" target="_blank" rel="noopener noreferrer"><FaDirections /> Mark Rich's NY Pizza &amp; Pasta</a><br />
                                    <p>Convieniently located super close to Red Rock. Huge menu.</p>
                                    <a href="https://goo.gl/maps/wDgZvTsQNdpwawb58" target="_blank" rel="noopener noreferrer"><FaDirections /> Pieology Summerlin</a><br />
                                    <p>Fast build your own pizza option.</p>
                                    <a href="https://goo.gl/maps/XZWFimiW4ebmzttPA" target="_blank" rel="noopener noreferrer"><FaDirections /> Giordano's</a><br />
                                    <p>Known for their deep dish pizzas, tons of good reviews.</p>
                                    <a href="https://g.page/Napoli-Pizza-Sahara?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Napoli Pizza</a><br />
                                    <p>Another good choice, tons of reviews.</p>
                                    {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p> */}
                                </Card.Text>
                                <Card.Subtitle>AYCE - All You Can Eat</Card.Subtitle>
                                <Card.Text>
                                    <p>Options for AYCE Sushi, KBBQ, and Buffets</p>
                                    <a href="https://goo.gl/maps/skRFqRthPRqRjJym7" target="_blank" rel="noopener noreferrer"><FaDirections /> Yama Sushi - Spring Mtn</a><br />
                                    <a href="https://goo.gl/maps/mmmJPip6E9aCTq9Z8" target="_blank" rel="noopener noreferrer"><FaDirections /> Yama Sushi - East Flamingo</a><br />
                                    <a href="https://goo.gl/maps/wRSGq21tkJDaq2TN6" target="_blank" rel="noopener noreferrer"><FaDirections /> Yama Sushi - The Strip</a><br />
                                    <p>Yama means Mountain, so pretty appropriate for climbers. Awesome place to go with large groups and fuel back up after long days of epic multipitch climbing! Now with 3 locations.</p>
                                    <a href="https://goo.gl/maps/dhnD9hzFAxjTpF259" target="_blank" rel="noopener noreferrer"><FaDirections /> Sasa Sushi</a><br />
                                    <p>Climber owned???</p>
                                    <a href="https://g.page/Biwon?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Biwon KBQ &amp; Sushi</a><br />
                                    <p>A great mix of AYCE options! Tons of reviews!</p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                </Card.Text>
                                <Card.Subtitle>Thai</Card.Subtitle>
                                <Card.Text>
                                    {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p> */}
                                </Card.Text>
                                <Card.Subtitle>Indian</Card.Subtitle>
                                <Card.Text>
                                    <a href="https://goo.gl/maps/VNrXpMjd1uD8wPXeA" target="_blank" rel="noopener noreferrer"><FaDirections /> Mint Indian Bistro</a><br />
                                    <p>Awesome selection of Indian dishes. Usually not busy. Even has an Inferno Menu for those chili-heads. Two locations (IIRC).</p>
                                    <a href="https://goo.gl/maps/tSFAcpdRhuKazw9T7" target="_blank" rel="noopener noreferrer"><FaDirections /> Mt. Everest India's Cuisine</a><br />
                                    <p>Long running restraunt with great dishes and reviews.</p>
                                    <a href="https://g.page/Curryleafindianfood?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Curry Leaf - Flavors of India</a><br />
                                    <p>Great option.</p>
                                    <a href="https://goo.gl/maps/ChT41sVZhyw3f9Rf7" target="_blank" rel="noopener noreferrer"><FaDirections /> Pure Indian Cuisine, Inc</a><br />
                                    <p>Great option.</p>
                                    {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br /> */}
                                    <p></p>
                                </Card.Text>
                                <Card.Subtitle>Burgers</Card.Subtitle>
                                <Card.Text>
                                    {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p> */}
                                    <a href="https://g.page/fukuburger-chinatown?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Fuku Burger - Chinatown</a><br />
                                    <a href="https://g.page/fukuburgerbuffalo?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Fuku Burger - Buffalo</a><br />
                                    <p>Super messy and super delicious American burgers with a Japanese twist.</p>
                                    {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p> */}
                                </Card.Text>
                                <Card.Subtitle>Vegetarian, Vegan, and Healthy Options</Card.Subtitle>
                                <Card.Text>
                                    <a href="https://g.page/flower-child-las-vegas?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Flower Child</a><br />
                                    <p>A favorite with climbers.</p>
                                    <a href="https://goo.gl/maps/MwF4Zddxm42fpeiv5" target="_blank" rel="noopener noreferrer"><FaDirections /> True Food Kitchen</a><br />
                                    <p>Another great option.</p>
                                    <a href="https://g.page/grabbagreenlv?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Grabbagreen Food + Juice</a><br />
                                    <p>Great bowls!</p>
                                    <a href="https://g.page/VeganosKitchen?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Vegano's Kitchen</a><br />
                                    <p>Vegan mexican food</p>
                                    <a href="https://theproteinsource.kitchen/locations/" target="_blank" rel="noopener noreferrer">theProteinSource finder <FaExternalLinkAlt /></a><br />
                                    <p>A great healthy option with 2 Vegas locations.</p>
                                    <a href="https://www.greensandproteins.com/locations/" target="_blank" rel="noopener noreferrer">Greens and Proteins finder <FaExternalLinkAlt /></a><br />
                                    <p>Health concious options with several Vegas area locations.</p>
                                    {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p> */}
                                </Card.Text>
                                <Card.Subtitle>Ramen</Card.Subtitle>
                                <Card.Text>
                                    {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p> */}
                                </Card.Text>
                                <Card.Subtitle>24H Options</Card.Subtitle>
                                <Card.Text>
                                    <a href="https://robertostacoshop.com/locations/" target="_blank" rel="noopener noreferrer">Roberto's Taco Shop Locator <FaExternalLinkAlt /></a><br />
                                    <p>Tons of Vegas locations, all 24H (I think). Try the ham breakfast burrito, always great, never too greasy, re-heats well, awesome vehicle for hot sauce. (T2 is addicted to them). Great to grab on your way out to Red Rock to fuel a long day.</p>
                                    {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p> */}
                                </Card.Text>
                                <Card.Subtitle>Sweet Tooth ?</Card.Subtitle>
                                <Card.Text>
                                    <a href="https://goo.gl/maps/nuA5JanCRUmAemK66" target="_blank" rel="noopener noreferrer"><FaDirections /> Mazzoa Donuts</a><br />
                                    <p>New, but already making a buzz. Two Vegas locations.</p>
                                    <a href="https://goo.gl/maps/Vc8Cw1PKCftCTT4J9" target="_blank" rel="noopener noreferrer"><FaDirections /> Dunkin'</a><br />
                                    <p>Located very close to Red Rock, this is a very popular stop people make on their way out of town to get their fix before their multipitch plans. Opens at 5am. Remember to use the restroom, or bring a wag bag!</p>
                                    <a href="https://goo.gl/maps/qU9zgigffYxucoN18" target="_blank" rel="noopener noreferrer"><FaDirections /> Pinkbox Donuts</a><br />
                                    <p>Several Vegas locations. Open 24H!</p>
                                    <a href="https://goo.gl/maps/FWRzQD525GXbzig19" target="_blank" rel="noopener noreferrer"><FaDirections /> Ronald's Donuts</a><br />
                                    <p>Awesome no-frills place in Chinatown.</p>
                                    <a href="https://g.page/DonutBarLasVegas?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Donut Bar</a><br />
                                    <p>Not a convienient location for climbers, but if you find yourself near the strip and crave donuts, this could be a good option.</p>
                                    <a href="https://goo.gl/maps/FvrUgkzuuNn9zy9n6" target="_blank" rel="noopener noreferrer"><FaDirections /> Handel's Homemade Ice Cream &amp; Yogurt</a><br />
                                    <p>Amazing ice cream that has been featured in top lists.</p>
                                    <a href="https://g.page/Ice-cream-shop-Las-Vegas1?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Cold Stone Creamery</a><br />
                                    <p>Great mixed ice cream. This location is next to a movie theater and Thai restraunt. Convient options for a rainy day!</p>
                                    <a href="https://goo.gl/maps/Hq2e4yv3eAH3V9EZ6" target="_blank" rel="noopener noreferrer"><FaDirections /> CJ's Italian Ice &amp; Custard</a><br />
                                    <p>Another great option.</p>
                                    <a href="https://g.page/MatchaCafeMaikoLV?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Matcha Cafe Maiko</a><br />
                                    <p>Fantastic place for Matcha infused ice cream, shakes, and other desserts!</p>
                                    <a href="https://goo.gl/maps/ih5oEb3aQbzBuhHq8" target="_blank" rel="noopener noreferrer"><FaDirections /> Is Sweet Coffee &amp; Dessert</a><br />
                                    <p>Great options!</p>
                                    {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                    <p></p> */}
                                </Card.Text>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion id='foodAccordionId' style={ accordionStyles }>
                    <span className="sr-only">Screen Reader note: these buttons show / hide information related to the the button's text which is like a minor section title</span>
                    <Card>
                        {/* I was using: as={accordionVisible ? Button : Card.Header} in the Accordion.Toggle s and role="heading" before.*/}
                        {/* as={Card.Header} is what is supposed to make it able to be clicked on anywhere to open/close, but it appears to work just fine without it! varient='outline-dark' doesn't work... */}
                        <Accordion.Toggle
                            as={ Button }
                            eventKey="food3"
                            role="button"
                            aria-label="Breweries and Bars section title and button"
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related information"
                            onClick={() => accordionItemClickHandler('food3') }
                        >
                            { accordionOpen['food3'] ? <MdExpandLess /> : <MdExpandMore /> }
                            &nbsp;
                            Breweries &amp; Bars
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="food3">
                            <Card.Body>
                                <Card.Subtitle>Breweries</Card.Subtitle>
                                <Card.Text>
                                    <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /></a><br />
                                    <p></p>
                                </Card.Text>
                                <Card.Subtitle>Bars</Card.Subtitle>
                                <Card.Text>
                                    <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /></a><br />
                                    <p></p>
                                    <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /></a><br />
                                    <p></p>
                                </Card.Text>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Animated>
        </>
    )
}
