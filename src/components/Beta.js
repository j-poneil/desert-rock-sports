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

// for when testing the template used for the other section components
import Template from './beta/Template';

// section components based off Template ... They will functionally be Card components
import GeneralInfo from './beta/GeneralInfo';
import LodgingLogistics from './beta/LodgingLogistics';
import Food from './beta/Food';
import OtherOutdoor from './beta/OtherOutdoor';
import RouteRecommendations from './beta/RouteRecommendations';
import Gyms from './beta/Gyms';



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

            <Row xxl={3} xl={3} lg={3} md={2} sm={2} xs={1}>
                <Col>
                    <GeneralInfo />
                    <LodgingLogistics />




                    {/* //! ^ Working on filling out / hooking up */}
                    {/* //! TESTING BELOW */}
                    <Template />
                    <Template />
                    {/* //! TESTING ABOVE */}

                </Col>
                <Col>
                    {/* //@ 2nd Accordion: Coffee, Restraunts, Breweries/Bars */}
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="6">Coffee Shops</Accordion.Toggle>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    <Card.Title>Coffee Shops</Card.Title>
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
                            <Accordion.Toggle as={Card.Header} eventKey="7">Restaurants</Accordion.Toggle>
                            <Accordion.Collapse eventKey="7">
                                <Card.Body>
                                    <Card.Title>Restraunts</Card.Title>
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
                            <Accordion.Toggle as={Card.Header} eventKey="8">Grocery Stores</Accordion.Toggle>
                            <Accordion.Collapse eventKey="8">
                                <Card.Body>
                                    <Card.Subtitle>Grocery Stores</Card.Subtitle>
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
                            <Accordion.Toggle as={Card.Header} eventKey="9">Breweries &amp; Bars</Accordion.Toggle>
                            <Accordion.Collapse eventKey="9">
                                <Card.Body>
                                <Card.Subtitle>Breweries &amp; Bars</Card.Subtitle>
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
                </Col>
                <Col>
                    {/* //@ 3rd Accorion: Hiking, Trail Running, Mtn Biking, Canyoneering */}
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="10">Hiking</Accordion.Toggle>
                            <Accordion.Collapse eventKey="10">
                                <Card.Body>
                                    <Card.Title>Hiking</Card.Title>
                                    <Card.Subtitle>General Resources</Card.Subtitle>
                                    <Card.Text>
                                        <a href="https://www.alltrails.com" target="_blank" rel="noopener noreferrer">AllTrails <FaExternalLinkAlt /></a><br />
                                        <a href="https://www.birdandhike.com" target="_blank" rel="noopener noreferrer">Bird and Hike <FaExternalLinkAlt /></a><br />
                                        <a href="https://www.hikinglasvegas.com/" target="_blank" rel="noopener noreferrer">Hiking Las Vegas <FaExternalLinkAlt /></a><br />
                                        <a href="https://www.52peakclub.com/" target="_blank" rel="noopener noreferrer">52 Peaks Club <FaExternalLinkAlt /></a><br />
                                    </Card.Text>
                                    <Card.Subtitle>White Rock Loop + La Madre Spring - 7.5mi 1500' gain</Card.Subtitle>
                                    <Card.Text>
                                        <a href="https://www.alltrails.com/explore/trail/us/nevada/white-rock-la-madre-springs-loop-trail" target="_blank" rel="noopener noreferrer">See it on AllTrails <FaExternalLinkAlt /></a><br />
                                        <p>T2's favorite for hiking and trail running. T2 prefers to start at Willow Springs and go clockwise around White Rock. In the summer it can still be a good option if you time it so that you are starting later in the day and aiming to finish around the time the scenic loop closes. This way you start in the sun for maybe 30min, then the cast shadows cover you up and you are in shadow the rest of the loop.</p>
                                    </Card.Text>
                                    <Card.Subtitle>Bridge Mountain - 14.2mi 4700' gain</Card.Subtitle>
                                    <Card.Text>
                                        <a href="https://www.alltrails.com/explore/trail/us/nevada/bridge-mountain-trail" target="_blank" rel="noopener noreferrer">See it on AllTrails <FaExternalLinkAlt /></a><br />
                                        <a href="https://www.birdandhike.com/Hike/Red_Rocks/BridgeMtnTr/_BridgeMtn.htm" target="_blank" rel="noopener noreferrer">See it part 1 on Bird and Hike <FaExternalLinkAlt /></a><br />
                                        <a href="https://www.birdandhike.com/Hike/Red_Rocks/BridgeMtnRt/_BridgeMtnRt.htm" target="_blank" rel="noopener noreferrer">See it part 2 on Bird and Hike <FaExternalLinkAlt /></a><br />
                                        <p>Bridge Mountain is a huge hike with scrambling near the end for a huge day. It takes you to very remote areas of Red Rock. Take it seriously. You will want ample water and snacks, approach shoes, emergency supplies, and ample time.</p>
                                    </Card.Text>
                                    <Card.Subtitle>The Grand Circle - 11.5mi 1500' gain</Card.Subtitle>
                                    <Card.Text>
                                        <a href="https://www.alltrails.com/explore/trail/us/nevada/grand-circle-adventure-trail" target="_blank" rel="noopener noreferrer">See it on AllTrails <FaExternalLinkAlt /></a><br />
                                        <p>The Grand Circle is huge loop trail. Perhaps on the sunny side, but great training for trail running. You can add Turtle Head Peak and/or White Rock Loop if you are a glutton for punishment. Get an early start.</p>
                                    </Card.Text>
                                    <Card.Subtitle>Mt Wilson via First Creek - 10mi 3400' gain</Card.Subtitle>
                                    <Card.Text>
                                        <a href="https://www.alltrails.com/explore/trail/us/nevada/mount-wilson-via-first-creek-trail" target="_blank" rel="noopener noreferrer">See it on AllTrails <FaExternalLinkAlt /></a><br />
                                        <p>This could be a great option for climbers who are looking to do any of the big multipitch routes on Mt Wilson and plan to walk down. You can scope out your descent ahead of time!</p>
                                    </Card.Text>
                                    <Card.Subtitle>Bristlecone Loop @ Charleston 5.7mi 930'</Card.Subtitle>
                                    <Card.Text>
                                        <a href="https://www.alltrails.com/explore/trail/us/nevada/upper-and-lower-bristlecone-loop" target="_blank" rel="noopener noreferrer">See it at AllTrails <FaExternalLinkAlt /></a><br />
                                        <p>Great loop up at higher elevation to hike or trail run in the summer. Most people tend to go counter clockwise from the lower trailhead. You can also use it to access the Bonanza trail if you are looking for more of an all day hike.</p>
                                    </Card.Text>
                                    <Card.Subtitle>Mary Jane Falls @ Charleston - 2.5mi 930' gain</Card.Subtitle>
                                    <Card.Text>
                                        <a href="https://www.alltrails.com/explore/trail/us/nevada/mary-jane-falls-trail" target="_blank" rel="noopener noreferrer">See it at AllTrails <FaExternalLinkAlt /></a><br />
                                        <p>A good short option at elevation. Still a bit of a climb. Nice shortly after a rain as the falls may actually be running then, OR when there is still snow melt above.</p>
                                    </Card.Text>
                                    <Card.Subtitle>Griffith Peak @ Charleston - 10.2mi 3500' gain</Card.Subtitle>
                                    <Card.Text>
                                        <a href="https://www.alltrails.com/explore/trail/us/nevada/griffith-peak-via-south-loop" target="_blank" rel="noopener noreferrer">See it on AllTrails <FaExternalLinkAlt /></a><br />
                                        <p>This is an excellent option to get a lot of elevation gain in quickly for training and/or altitude acclimation.Nice views all around and not quite as committing as Charleston Peak.</p>
                                    </Card.Text>
                                    <Card.Subtitle>Charleston Peak - 14-21.5+ mi ~5000' gain</Card.Subtitle>
                                    <Card.Text>
                                        <a href="https://www.alltrails.com/explore/trail/us/nevada/charleston-peak-south-trail" target="_blank" rel="noopener noreferrer">South Loop Trail - 16.6mi 4900' gain <FaExternalLinkAlt /></a><br />
                                        <a href="https://www.alltrails.com/explore/trail/us/nevada/mount-charleston-north-to-south-via-trail-canyon" target="_blank" rel="noopener noreferrer">N to S via Trail Canyon - 18.2mi 4900' gain <FaExternalLinkAlt /></a><br />
                                        <a href="https://www.alltrails.com/explore/trail/us/nevada/charleston-peak-north-trail--2" target="_blank" rel="noopener noreferrer">North Loop Trail - 21.5mi 5650' gain <FaExternalLinkAlt /></a><br />
                                        <a href="https://www.alltrails.com/explore/trail/us/nevada/mt-charleston-via-deer-creek-trail" target="_blank" rel="noopener noreferrer">Via Deer Creek Trail - 14.7mi 5500'gain <FaExternalLinkAlt /></a><br />
                                        <p>Many options. All with a ton of elevation gain. This is a long day, but a great summit. You need to know full well what you are getting into.</p>
                                    </Card.Text>
                                    <Card.Subtitle>Raintree Trail  @ Charleston - 5.3mi 1800' gain</Card.Subtitle>
                                    <Card.Text>
                                        <a href="https://www.alltrails.com/explore/trail/us/nevada/raintree-trail" target="_blank" rel="noopener noreferrer">See it at AllTrails <FaExternalLinkAlt /></a><br />
                                        <p>Great hike to a huge old growth Bristlecone Pine. If you want a longer day, you can branch out and go do <a href="https://www.alltrails.com/explore/trail/us/nevada/mummy-mountain-via-mummy-spring-trail" target="_blank" rel="noopener noreferrer">Mummy Peak (11.1mi 3750' gain) <FaExternalLinkAlt /></a> too, though it is not much of an established trail and will easily double the time needed for the hiking, atleast.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="11">Trail Running</Accordion.Toggle>
                            <Accordion.Collapse eventKey="11">
                                <Card.Body>
                                    <Card.Title>Trail Running</Card.Title>
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
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="12">Mtn Biking</Accordion.Toggle>
                            <Accordion.Collapse eventKey="12">
                                <Card.Body>
                                    <Card.Title>Mountain Biking</Card.Title>
                                    <Card.Subtitle>Soooo many options. Its insane.</Card.Subtitle>
                                    <Card.Text>
                                        <a href="https://www.trailforks.com/" target="_blank" rel="noopener noreferrer">Trailforks Route Database <FaExternalLinkAlt /></a><br />
                                        <p>This is your best bet for finding the best trails.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="13">Canyoneering</Accordion.Toggle>
                            <Accordion.Collapse eventKey="13">
                                <Card.Body>
                                    <Card.Title>Canyoneering</Card.Title>
                                    <Card.Subtitle>Las Vegas Slots by Rick Ianniello</Card.Subtitle>
                                    <Card.Text>
                                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                        <p>Great book for canyoneers to get familiar with what the Vegas area has to offer. Available at Desert Rock Sports.</p>
                                    </Card.Text>
                                    <Card.Subtitle>BluuGnome</Card.Subtitle>
                                    <Card.Text>
                                        <a href="http://www.bluugnome.com/cyn_route/red-rock_nv/canyon-routes__red-rock_nv.aspx" target="_blank" rel="noopener noreferrer">Red Rock Canyoneering Routes <FaExternalLinkAlt /></a><br />
                                        <a href="http://www.bluugnome.com/cyn_route/charleston_nv/canyon-routes__charleston_nv.aspx" target="_blank" rel="noopener noreferrer">Mt Charleston Canyoneering Routes <FaExternalLinkAlt /></a><br />
                                        <a href="http://www.bluugnome.com/cyn_route/lake-mead/canyon-routes__lake-mead.aspx" target="_blank" rel="noopener noreferrer">Lake Mead Area Canyoneering Routes <FaExternalLinkAlt /></a><br />
                                        <a href="http://www.bluugnome.com/cyn_route/stateline-hills_nv/canyon-routes__stateline-hills_nv.aspx" target="_blank" rel="noopener noreferrer">Stateline Hills Canyoneering Routes <FaExternalLinkAlt /></a><br />
                                        <a href="http://www.bluugnome.com/cyn_route/valley-of-fire/canyon-routes__valley-of-fire.aspx" target="_blank" rel="noopener noreferrer">Valley of Fire Canyoneering Routes <FaExternalLinkAlt /></a><br />
                                    </Card.Text>
                                    <Card.Subtitle>Adventure Hikes and Canyoneering in the Southwest</Card.Subtitle>
                                    <Card.Text>
                                        <a href="http://www.dankat.com/swhikes/content.htm" target="_blank" rel="noopener noreferrer">Adventure Hikes and Canyoneering in the Southwest <FaExternalLinkAlt /></a><br />
                                        <p>Great resource</p>
                                    </Card.Text>
                                    <Card.Subtitle>Las Vegas Canyoneering Meetup Group</Card.Subtitle>
                                    <Card.Text>
                                        <a href="https://www.meetup.com/Las-Vegas-Canyoneering-Meetup-Group/" target="_blank" rel="noopener noreferrer">Meetup Group <FaExternalLinkAlt /></a><br />
                                        <p>Some comment</p>
                                    </Card.Text>
                                    {/* <Card.Subtitle></Card.Subtitle>
                                    <Card.Text>
                                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                        <p></p>
                                    </Card.Text> */}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col>
                    {/* //@ 4th Accordion: Shady, Sunny, Rainy, Crack, OW, No-Crowds */}
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="14">Shady Climbing Options</Accordion.Toggle>
                            <Accordion.Collapse eventKey="14">
                                <Card.Body>
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
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="15">Sunny Climbing Options</Accordion.Toggle>
                            <Accordion.Collapse eventKey="15">
                                <Card.Body>
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
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="16">Rainy Day Climbing Options</Accordion.Toggle>
                            <Accordion.Collapse eventKey="16">
                                <Card.Body>
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
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="17">Crack Climbing Options</Accordion.Toggle>
                            <Accordion.Collapse eventKey="17">
                                <Card.Body>
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
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="18">Offwidth Climbing Options</Accordion.Toggle>
                            <Accordion.Collapse eventKey="18">
                                <Card.Body>
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
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="19">No-Crowd Options</Accordion.Toggle>
                            <Accordion.Collapse eventKey="19">
                                <Card.Body>
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
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col>
                    {/* //@ 5th Accordion: Non-Climbing day options: Rainy Day or otherwise */}
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="20">Non-Climbing Options (Rainy or Rest Day)</Accordion.Toggle>
                            <Accordion.Collapse eventKey="20">
                                <Card.Body>
                                    <Card.Title>Non-Climbing Options</Card.Title>
                                    <Card.Subtitle>(Rainy or Rest Day)</Card.Subtitle>
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
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="21">Title of accordion section</Accordion.Toggle>
                            <Accordion.Collapse eventKey="21">
                                <Card.Body>
                                    <Card.Title></Card.Title>
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
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="22">Title of accordion section</Accordion.Toggle>
                            <Accordion.Collapse eventKey="22">
                                <Card.Body>
                                    <Card.Title></Card.Title>
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
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="23">Title of accordion section</Accordion.Toggle>
                            <Accordion.Collapse eventKey="23">
                                <Card.Body>
                                    <Card.Title></Card.Title>
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
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                {/* //! Only temporary as reference for what the icons are named / look like */}
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                1. <FaExternalLinkAlt /> - FaExternalLinkAlt<br />
                                2. <FaDirections /> - FaDirections<br />
                                <FaMapMarked /> - FaMapMarked<br />
                                <FaMapMarkedAlt /> - FaMapMarkedAlt<br />
                                <FaMapMarkerAlt /> - FaMapMarkerAlt<br />
                                <FaMap /> - FaMap<br />
                                
                            </Card.Text>
                            
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}