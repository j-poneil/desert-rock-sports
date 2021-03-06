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
// unused: FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt, FaMap, FaPhone
import { FaExternalLinkAlt, FaDirections } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';


// photo imports
// import Photo from '..something../img/beta/photo.jpg';
// these SVG are now all camelCased and wrapped as JSX functional default export components, memoized too
// import Food_290_1 from '../../img/accordionBgs/asJSX/Food_290x95';
// import Food_690_1 from '../../img/accordionBgs/asJSX/Food_690x95';
// import Food_930_1 from '../../img/accordionBgs/asJSX/Food_930x95';
// import Food_1250_1 from '../../img/accordionBgs/asJSX/Food_1250x95';
import Food_290_1 from '../../img/accordionBgs/working/Food_290x95_1.svg';
import Food_690_1 from '../../img/accordionBgs/working/Food_690x95_1.svg';
import Food_930_1 from '../../img/accordionBgs/working/Food_930x95_1.svg';
import Food_1250_1 from '../../img/accordionBgs/working/Food_1250x95_1.svg';

// % What this is supposed to have based on notes in beta.js
// Food
        // Grocery Stores
        // Coffee Shops
        // Restraunts
        // Breweries / Bars

/* <AccordionOfAccordions
    title='Test Title'
    accordionIdBase='testAccordion'
    eventKeyBase='testEventKey'
    subSectionArrayOfObjects={ templatePropsTestSections }
/> */
// access like food.title, food.accordionIdBase, food.eventKeyBase, food.data
// 'foodAccordion' ==> 'foodAccordionId0' ... 'foodEKey' ==> 'foodEKey0'

// the parent of subSectionContent is <Card.Body></Card.Body>
// So Card.Text and Card.Subtitle are logical tags to use


export const food = {
    title: 'Grocery, Food, and Drink Options',
    accordionIdBase: 'foodAccordion',
    eventKeyBase: 'foodEKey',
    img290: Food_290_1,
    img690: Food_690_1,
    img930: Food_930_1,
    img1250: Food_1250_1,
    data: [
        {
            subSectionTitle: 'Grocery Stores',
            subSectionContent: () => (
                <>
                    <div>
                        <a href="https://goo.gl/maps/2UggTM6D53dUCuqF7" target="_blank" rel="noopener noreferrer"><FaDirections /> Albertsons</a><br />
                        <Card.Text>Many Vegas locations. This is the closest one to Red Rock, its a pretty popular spot to meetup and carpool from. If you are going to do this, please utilize the side parking if you are leaving a larger vehicle like a sprinter van to minimize our visual impact as climbers. Be sure to check out the marked down bakery items. If you need breakfast sometimes they have egg, sausage, and cheese breakfast biscuits or burritos pre-made at the already hot and ready food area.</Card.Text>
                        <a href="https://goo.gl/maps/JRfX4mLS2BdnF1t27" target="_blank" rel="noopener noreferrer"><FaDirections /> Trader Joe's</a><br />
                        <Card.Text>There are several Trader Joe's locations in Vegas now, this one is within walking distance of the Summerlin WinCo.</Card.Text>
                        <a href="https://goo.gl/maps/HBLyPAFXNDLUm7sp9" target="_blank" rel="noopener noreferrer"><FaDirections /> WinCo - Summerlin</a><br />
                        <Card.Text>WinCo is an excellent place to get closer to bulk foods. Excellent prices on many things, great variety of ready to heat meal options. Part of how they keep their prices low is by not accepting credit cards at all. They only take debit cards and cash.</Card.Text>
                        <a href="https://goo.gl/maps/mBGhrA29egwRQznj8" target="_blank" rel="noopener noreferrer"><FaDirections /> 168 Market</a><br />
                        <Card.Text>Excellent Asian grocery store. Highly recommend.</Card.Text>
                        <a href="https://goo.gl/maps/S2sPjxojaQhz749t5" target="_blank" rel="noopener noreferrer"><FaDirections /> Whole Foods</a><br />
                        <Card.Text>Yep, there is Whole Paycheck in Vegas.</Card.Text>
                        <a href="https://goo.gl/maps/JFsgC3Tu1LAWgkw96" target="_blank" rel="noopener noreferrer"><FaDirections /> Sprouts Farmers Market</a><br />
                        <Card.Text>Another good grocery store.</Card.Text>
                    </div>
                </>
            )
        },
        {
            subSectionTitle: 'Coffee Shops',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Madhouse Coffee</Card.Subtitle>
                    <Card.Text>
                        <a href="https://g.page/TheMadHouseCoffee?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Madhouse Coffee</a><br />
                    </Card.Text>
                    <Card.Subtitle>Sambalatte</Card.Subtitle>
                    <Card.Text>
                        <a href="https://g.page/sambalatte-boca-park?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Sambalatte</a><br />
                        Close to REI and Total Wine
                    </Card.Text>
                    <Card.Subtitle>Makers &amp; Finders</Card.Subtitle>
                    <Card.Text>
                        <a href="https://g.page/MakersLV2?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Makers &amp; Finders</a><br />
                        Coffee and Latin Food
                    </Card.Text>
                    <Card.Subtitle>Grouchy John's Coffee</Card.Subtitle>
                    <Card.Text>
                        <a href="https://goo.gl/maps/SGJW6Pv6suJa1VUJ6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Grouchy John's Coffee</a><br />
                    </Card.Text>
                    <Card.Subtitle>Desert Wind Coffee Roasters</Card.Subtitle>
                    <Card.Text>
                        <a href="https://g.page/desertwindcoffee?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Desert Wind Coffee Roasters</a><br />
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="https://goo.gl/maps/kbyPUayVEjKkWRPJ7" target="_blank" rel="noopener noreferrer"><FaDirections /> Gabi Coffee &amp; Bakery</a><br />
                        Nice option.
                    </Card.Text>
                    <Card.Subtitle>Starbucks</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.starbucks.com/store-locator?map=36.151802,-115.279791,15z" target="_blank" rel="noopener noreferrer">Starbucks Store Finder <FaExternalLinkAlt /></a><br />
                        Of course, Starbucks is everywhere
                    </Card.Text>
                    <Card.Subtitle>Dutch Bros</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.dutchbros.com/locations/" target="_blank" rel="noopener noreferrer">Dutch Bros Finder <FaExternalLinkAlt /></a><br />
                        Some locations have opened recently. Apparently its a thing?
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Restraunts',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Pizza</Card.Subtitle>
                    <hr />
                    <Card.Text>
                        <a href="https://goo.gl/maps/w5YjFknbdCtt8Kn28" target="_blank" rel="noopener noreferrer"><FaDirections /> Mark Rich's NY Pizza &amp; Pasta</a><br />
                        Convieniently located super close to Red Rock. Huge menu.<br />
                        <a href="https://goo.gl/maps/wDgZvTsQNdpwawb58" target="_blank" rel="noopener noreferrer"><FaDirections /> Pieology Summerlin</a><br />
                        Fast build your own pizza option.<br />
                        <a href="https://goo.gl/maps/XZWFimiW4ebmzttPA" target="_blank" rel="noopener noreferrer"><FaDirections /> Giordano's</a><br />
                        Known for their deep dish pizzas, tons of good reviews.<br />
                        <a href="https://g.page/Napoli-Pizza-Sahara?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Napoli Pizza</a><br />
                        Another good choice, tons of reviews.
                        {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br /> */}
                    </Card.Text>
                    <br />

                    <Card.Subtitle>AYCE - All You Can Eat</Card.Subtitle>
                    <hr />
                    <Card.Text>
                        Options for AYCE Sushi, KBBQ, and Buffets<br />
                        <a href="https://goo.gl/maps/skRFqRthPRqRjJym7" target="_blank" rel="noopener noreferrer"><FaDirections /> Yama Sushi - Spring Mtn</a><br />
                        <a href="https://goo.gl/maps/mmmJPip6E9aCTq9Z8" target="_blank" rel="noopener noreferrer"><FaDirections /> Yama Sushi - East Flamingo</a><br />
                        <a href="https://goo.gl/maps/wRSGq21tkJDaq2TN6" target="_blank" rel="noopener noreferrer"><FaDirections /> Yama Sushi - The Strip</a><br />
                        Yama means Mountain, so pretty appropriate for climbers. Awesome place to go with large groups and fuel back up after long days of epic multipitch climbing! Now with 3 locations.<br />
                        <a href="https://goo.gl/maps/dhnD9hzFAxjTpF259" target="_blank" rel="noopener noreferrer"><FaDirections /> Sasa Sushi</a><br />
                        Climber owned???<br />
                        <a href="https://g.page/Biwon?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Biwon KBQ &amp; Sushi</a><br />
                        A great mix of AYCE options! Tons of reviews!
                        {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br /> */}
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Thai</Card.Subtitle>
                    <hr />
                    <Card.Text>
                        {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br /> */}
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Indian</Card.Subtitle>
                    <hr />
                    <Card.Text>
                        <a href="https://goo.gl/maps/VNrXpMjd1uD8wPXeA" target="_blank" rel="noopener noreferrer"><FaDirections /> Mint Indian Bistro</a><br />
                        Awesome selection of Indian dishes. Usually not busy. Even has an Inferno Menu for those chili-heads. Two locations (IIRC).<br />
                        <a href="https://goo.gl/maps/tSFAcpdRhuKazw9T7" target="_blank" rel="noopener noreferrer"><FaDirections /> Mt. Everest India's Cuisine</a><br />
                        Long running restraunt with great dishes and reviews.<br />
                        <a href="https://g.page/Curryleafindianfood?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Curry Leaf - Flavors of India</a><br />
                        Great option.<br />
                        <a href="https://goo.gl/maps/ChT41sVZhyw3f9Rf7" target="_blank" rel="noopener noreferrer"><FaDirections /> Pure Indian Cuisine, Inc</a><br />
                        Great option.
                        {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br /> */}
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Burgers</Card.Subtitle>
                    <hr />
                    <Card.Text>
                        {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p> */}
                        <a href="https://g.page/fukuburger-chinatown?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Fuku Burger - Chinatown</a><br />
                        <a href="https://g.page/fukuburgerbuffalo?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Fuku Burger - Buffalo</a><br />
                        Super messy and super delicious American burgers with a Japanese twist.
                        {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br /> */}
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Vegetarian, Vegan, and Healthy Options</Card.Subtitle>
                    <hr />
                    <Card.Text>
                        <a href="https://g.page/flower-child-las-vegas?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Flower Child</a><br />
                        A favorite with climbers.<br />
                        <a href="https://goo.gl/maps/MwF4Zddxm42fpeiv5" target="_blank" rel="noopener noreferrer"><FaDirections /> True Food Kitchen</a><br />
                        Another great option.<br />
                        <a href="https://g.page/grabbagreenlv?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Grabbagreen Food + Juice</a><br />
                        Great bowls!<br />
                        <a href="https://g.page/VeganosKitchen?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Vegano's Kitchen</a><br />
                        Vegan mexican food<br />
                        <a href="https://theproteinsource.kitchen/locations/" target="_blank" rel="noopener noreferrer">theProteinSource finder <FaExternalLinkAlt /></a><br />
                        A great healthy option with 2 Vegas locations.<br />
                        <a href="https://www.greensandproteins.com/locations/" target="_blank" rel="noopener noreferrer">Greens and Proteins finder <FaExternalLinkAlt /></a><br />
                        Health concious options with several Vegas area locations.
                        {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br /> */}
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Ramen</Card.Subtitle>
                    <hr />
                    <Card.Text>
                        {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br /> */}
                    </Card.Text>
                    <br />

                    <Card.Subtitle>24H Options</Card.Subtitle>
                    <hr />
                    <Card.Text>
                        <a href="https://robertostacoshop.com/locations/" target="_blank" rel="noopener noreferrer">Roberto's Taco Shop Locator <FaExternalLinkAlt /></a><br />
                        Tons of Vegas locations, all 24H (I think). Try the ham breakfast burrito, always great, never too greasy, re-heats well, awesome vehicle for hot sauce delivery. (T2 is addicted to them). Great to grab on your way out to Red Rock to fuel a long day.
                        {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br /> */}
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Sweet Tooth ?</Card.Subtitle>
                    <hr />
                    <Card.Text>
                        <a href="https://goo.gl/maps/nuA5JanCRUmAemK66" target="_blank" rel="noopener noreferrer"><FaDirections /> Mazzoa Donuts</a><br />
                        New, but already making a buzz. Two Vegas locations.<br />
                        <a href="https://goo.gl/maps/Vc8Cw1PKCftCTT4J9" target="_blank" rel="noopener noreferrer"><FaDirections /> Dunkin'</a><br />
                        Located very close to Red Rock, this is a very popular stop people make on their way out of town to get their fix before their multipitch plans. Opens at 5am. Remember to use the restroom, or bring a wag bag!<br />
                        <a href="https://goo.gl/maps/qU9zgigffYxucoN18" target="_blank" rel="noopener noreferrer"><FaDirections /> Pinkbox Donuts</a><br />
                        Several Vegas locations. Open 24H!<br />
                        <a href="https://goo.gl/maps/FWRzQD525GXbzig19" target="_blank" rel="noopener noreferrer"><FaDirections /> Ronald's Donuts</a><br />
                        Awesome no-frills place in Chinatown.<br />
                        <a href="https://g.page/DonutBarLasVegas?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Donut Bar</a><br />
                        Not a convienient location for climbers, but if you find yourself near the strip and crave donuts, this could be a good option.<br />
                        <a href="https://goo.gl/maps/FvrUgkzuuNn9zy9n6" target="_blank" rel="noopener noreferrer"><FaDirections /> Handel's Homemade Ice Cream &amp; Yogurt</a><br />
                        Amazing ice cream that has been featured in top lists.<br />
                        <a href="https://g.page/Ice-cream-shop-Las-Vegas1?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Cold Stone Creamery</a><br />
                        Great mixed ice cream. This location is next to a movie theater and Thai restraunt. Convient options for a rainy day!<br />
                        <a href="https://goo.gl/maps/Hq2e4yv3eAH3V9EZ6" target="_blank" rel="noopener noreferrer"><FaDirections /> CJ's Italian Ice &amp; Custard</a><br />
                        Another great option.<br />
                        <a href="https://g.page/MatchaCafeMaikoLV?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Matcha Cafe Maiko</a><br />
                        Fantastic place for Matcha infused ice cream, shakes, and other desserts!<br />
                        <a href="https://goo.gl/maps/ih5oEb3aQbzBuhHq8" target="_blank" rel="noopener noreferrer"><FaDirections /> Is Sweet Coffee &amp; Dessert</a><br />
                        Great options!
                        {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br /> */}
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Breweries & Bars',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Breweries</Card.Subtitle>
                    <Card.Text>
                        {/* <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /></a><br /> */}
                    </Card.Text>
                    <Card.Subtitle>Bars</Card.Subtitle>
                    <Card.Text>
                        {/* <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /></a><br /> */}
                    </Card.Text>
                </>
            )
        }
    ]
}