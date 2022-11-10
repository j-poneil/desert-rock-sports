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
                        <Card.Subtitle>Albertsons</Card.Subtitle>
                        <Card.Text className="pl-3">
                            <a href="https://goo.gl/maps/2UggTM6D53dUCuqF7" target="_blank" rel="noopener noreferrer"><FaDirections /> Albertsons</a>
                            <br />
                            Many Vegas locations. This is the closest one to Red Rock, its a pretty popular spot to meetup and carpool from. If you are going to do this, please utilize the side parking if you are leaving a larger vehicle like a sprinter van to minimize our visual impact as climbers. Be sure to check out the marked down bakery items. If you need breakfast sometimes they have egg, sausage, and cheese breakfast biscuits or burritos pre-made at the already hot and ready food area.
                        </Card.Text>
                        <Card.Subtitle>Smith's</Card.Subtitle>
                        <Card.Text className="pl-3">
                            <a href="https://goo.gl/maps/zY275qnzF7Hs3DNJ6" target="_blank" rel="noopener noreferrer"><FaDirections /> Smith's - Charleston & Hualapai</a>
                            <br />
                            Way better cheese selection than Albertsons. Many locations.
                        </Card.Text>
                        <Card.Subtitle>Trader Joe's</Card.Subtitle>
                        <Card.Text className="pl-3">
                            <a href="https://goo.gl/maps/JRfX4mLS2BdnF1t27" target="_blank" rel="noopener noreferrer"><FaDirections /> Trader Joe's</a>
                            <br />
                            There are several Trader Joe's locations in Vegas now, this one is within walking distance of the Summerlin WinCo.
                        </Card.Text>
                        <Card.Subtitle>WinCo</Card.Subtitle>
                        <Card.Text className="pl-3">
                            <a href="https://goo.gl/maps/HBLyPAFXNDLUm7sp9" target="_blank" rel="noopener noreferrer"><FaDirections /> WinCo - Summerlin</a>
                            <br />
                            WinCo is an excellent place to get closer to bulk foods. Excellent prices on many things, great variety of ready to heat meal options. Part of how they keep their prices low is by not accepting credit cards at all. They only take debit cards and cash.
                        </Card.Text>
                        <Card.Subtitle>168 Market</Card.Subtitle>
                        <Card.Text className="pl-3">
                            <a href="https://goo.gl/maps/mBGhrA29egwRQznj8" target="_blank" rel="noopener noreferrer"><FaDirections /> 168 Market</a>
                            <br />
                            Excellent Asian grocery store. Highly recommend.
                        </Card.Text>
                        <Card.Subtitle>Whole Foods</Card.Subtitle>
                        <Card.Text className="pl-3">
                            <a href="https://goo.gl/maps/S2sPjxojaQhz749t5" target="_blank" rel="noopener noreferrer"><FaDirections /> Whole Foods</a>
                            <br />
                            Yep, there is Whole Paycheck in Vegas.
                        </Card.Text>
                        <Card.Subtitle>Sprouts</Card.Subtitle>
                        <Card.Text className="pl-3">
                            <a href="https://goo.gl/maps/JFsgC3Tu1LAWgkw96" target="_blank" rel="noopener noreferrer"><FaDirections /> Sprouts Farmers Market</a>
                            <br />
                            Another good grocery store.
                        </Card.Text>
                    </div>
                </>
            )
        },
        {
            subSectionTitle: 'Coffee Shops',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Madhouse Coffee</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/TheMadHouseCoffee?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Madhouse Coffee</a><br />
                    </Card.Text>
                    <Card.Subtitle>Sambalatte</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/sambalatte-boca-park?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Sambalatte</a><br />
                        Close to REI and Total Wine
                    </Card.Text>
                    <Card.Subtitle>Makers &amp; Finders</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/MakersLV2?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Makers &amp; Finders</a><br />
                        Coffee and Latin Food
                    </Card.Text>
                    <Card.Subtitle>Grouchy John's Coffee</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/SGJW6Pv6suJa1VUJ6" target="_blank" rel="noopener noreferrer"><FaDirections /> Grouchy John's Coffee</a><br />
                    </Card.Text>
                    <Card.Subtitle>Desert Wind Coffee Roasters</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/desertwindcoffee?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Desert Wind Coffee Roasters</a><br />
                    </Card.Text>
                    <Card.Subtitle>Gabi Coffee &amp; Bakery</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/kbyPUayVEjKkWRPJ7" target="_blank" rel="noopener noreferrer"><FaDirections /> Gabi Coffee &amp; Bakery</a>
                        <br />
                        Nice option.
                    </Card.Text>
                    <Card.Subtitle>Starbucks</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://www.starbucks.com/store-locator?map=36.151802,-115.279791,15z" target="_blank" rel="noopener noreferrer">Starbucks Store Finder <FaExternalLinkAlt /></a><br />
                        Of course, Starbucks is everywhere
                    </Card.Text>
                    <Card.Subtitle>Dutch Bros</Card.Subtitle>
                    <Card.Text className="pl-3">
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
                    <Card.Subtitle>Mark Rich's NY Pizza &amp; Pasta</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/w5YjFknbdCtt8Kn28" target="_blank" rel="noopener noreferrer"><FaDirections /> Mark Rich's NY Pizza &amp; Pasta</a>
                        <br />
                        Convieniently located super close to Red Rock. Huge menu.
                    </Card.Text>
                    <Card.Subtitle>Pieology Summerlin</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/wDgZvTsQNdpwawb58" target="_blank" rel="noopener noreferrer"><FaDirections /> Pieology Summerlin</a>
                        <br />
                        Fast build your own pizza option.
                    </Card.Text>
                    <Card.Subtitle>Giordano's</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/XZWFimiW4ebmzttPA" target="_blank" rel="noopener noreferrer"><FaDirections /> Giordano's</a>
                        <br />
                        Known for their deep dish pizzas, tons of good reviews.
                    </Card.Text>
                    <Card.Subtitle>Napoli Pizza</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/Napoli-Pizza-Sahara?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Napoli Pizza</a>
                        <br />
                        Another good choice, tons of reviews.
                    </Card.Text>
                    <br />

                    <Card.Subtitle>AYCE - All You Can Eat</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Yama Sushi</Card.Subtitle>
                    <Card.Text className="pl-3">
                        Yama means Mountain, so pretty appropriate for climbers. Awesome place to go with large groups and fuel back up after long days of epic multipitch climbing! Now with 3 locations.
                        <br />
                        <a href="https://goo.gl/maps/skRFqRthPRqRjJym7" target="_blank" rel="noopener noreferrer"><FaDirections /> Yama Sushi - Spring Mtn</a>
                        <br />
                        <a href="https://goo.gl/maps/mmmJPip6E9aCTq9Z8" target="_blank" rel="noopener noreferrer"><FaDirections /> Yama Sushi - East Flamingo</a>
                        <br />
                        <a href="https://goo.gl/maps/wRSGq21tkJDaq2TN6" target="_blank" rel="noopener noreferrer"><FaDirections /> Yama Sushi - The Strip</a>
                    </Card.Text>
                    <Card.Subtitle>Sasa Sushi</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/dhnD9hzFAxjTpF259" target="_blank" rel="noopener noreferrer"><FaDirections /> Sasa Sushi</a>
                        <br />
                        Climber owned???
                    </Card.Text>
                    <Card.Subtitle>Biwon KBBQ &amp; Sushi</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/Biwon?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Biwon KBBQ &amp; Sushi</a>
                        <br />
                        A great mix of AYCE options! Tons of reviews!
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Thai</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Pin Kaow Thai</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/pin-kaow-thai-restaurant-rainbow?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Pin Kaow Thai</a>
                        <br />
                        Awesome small Thai restraunt that has been around for a long time.
                    </Card.Text>
                    <Card.Subtitle>Nittaya's Secret Kitchen</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/3GbCe16ejNq6mQ3g9" target="_blank" rel="noopener noreferrer"><FaDirections /> Nittaya's Secret Kitchen</a>
                        <br />
                        A bit more high end. Excellent for a good date night.
                    </Card.Text>
                    <Card.Subtitle>Archi's Thai</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/zsHvzcmqm4Y8J9ZC6" target="_blank" rel="noopener noreferrer"><FaDirections /> Archi's - Sahara</a>
                        <br />
                        A few locations in Vegas now. Great option.
                    </Card.Text>
                    <Card.Subtitle>Lemongrass &amp; Lime</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/Phh7P5ULBvPp7q259" target="_blank" rel="noopener noreferrer"><FaDirections /> Lemongrass &amp; Lime</a>
                        <br />
                        In the last shopping center heading out to Red Rock. Still very new, but good. An excellent close option if you are staying at the Campground or carpooling from that Albertson's parking lot.
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Indian</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Mint Indian Bistro</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/VNrXpMjd1uD8wPXeA" target="_blank" rel="noopener noreferrer"><FaDirections /> Mint Indian Bistro</a>
                        <br />
                        Awesome selection of Indian dishes. Usually not busy. Even has an Inferno Menu for those chili-heads. Two locations if I remember correctly.
                    </Card.Text>
                    <Card.Subtitle>Mt. Everest India's Cuisine</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/tSFAcpdRhuKazw9T7" target="_blank" rel="noopener noreferrer"><FaDirections /> Mt. Everest India's Cuisine</a>
                        <br />
                        Long running restraunt with great dishes and reviews.
                    </Card.Text>
                    <Card.Subtitle>Curry Leaf - Flavors of India</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/Curryleafindianfood?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Curry Leaf - Flavors of India</a>
                        <br />
                        Great option.
                    </Card.Text>
                    <Card.Subtitle>Pure Indian Cuisine, Inc</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/ChT41sVZhyw3f9Rf7" target="_blank" rel="noopener noreferrer"><FaDirections /> Pure Indian Cuisine, Inc</a>
                        <br />
                        Great option.
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Burgers</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Fuku Burger</Card.Subtitle>
                    <Card.Text className="pl-3">
                        Super messy and super delicious American burgers with a Japanese twist.
                        <br />
                        <a href="https://g.page/fukuburger-chinatown?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Fuku Burger - Chinatown</a>
                        <br />
                        <a href="https://g.page/fukuburgerbuffalo?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Fuku Burger - Buffalo</a>
                    </Card.Text>
                    <Card.Subtitle>Gordon Ramsay Burger</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/Xe7x4hEAcTEwWTdM6" target="_blank" rel="noopener noreferrer"><FaDirections /> Gordon Ramsay Burger</a>
                        <br />
                        Supposed to be good. I don't know!
                    </Card.Text>
                    <Card.Subtitle>Dave's Hot Chicken</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/TZf9ba9QbixxhqNq9" target="_blank" rel="noopener noreferrer"><FaDirections /> Dave's Hot Chicken</a>
                        <br />
                        Spicy Chicken sandwiches and more. Close enough to burgers, IMHO.
                    </Card.Text>
                    <Card.Subtitle>Freddy's Frozen Custard &amp; Steakburgers</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/FreddysLasVegasCharleston?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Freddy's Frozen Custard &amp; Steakburgers</a>
                        <br />
                        A few locations. Supposed to be good.
                    </Card.Text>
                    <Card.Subtitle>In-N-Out</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/h7QBv9Y9BwqaeYhH6" target="_blank" rel="noopener noreferrer"><FaDirections /> In-N-Out</a>
                        <br />
                        Many locations. One popular chain.
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Vegetarian, Vegan, and Healthy Options</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Flower Child</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/flower-child-las-vegas?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Flower Child</a>
                        <br />
                        A favorite with climbers. Healthy and tasty options.
                    </Card.Text>
                    <Card.Subtitle>True Food Kitchen</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/MwF4Zddxm42fpeiv5" target="_blank" rel="noopener noreferrer"><FaDirections /> True Food Kitchen</a>
                        <br />
                        Another great option.
                    </Card.Text>
                    <Card.Subtitle>Grabbagreen Food + Juice</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/grabbagreenlv?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Grabbagreen Food + Juice</a>
                        <br />
                        Great bowls!
                    </Card.Text>
                    <Card.Subtitle>Vegano's Kitchen</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/VeganosKitchen?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Vegano's Kitchen</a>
                        <br />
                        Vegan mexican food
                    </Card.Text>
                    <Card.Subtitle>theProteinSource</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://theproteinsource.kitchen/locations/" target="_blank" rel="noopener noreferrer">theProteinSource finder <FaExternalLinkAlt /></a>
                        <br />
                        A great healthy option with 2 Vegas locations.
                    </Card.Text>
                    <Card.Subtitle>Greens and Proteins</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://www.greensandproteins.com/locations/" target="_blank" rel="noopener noreferrer">Greens and Proteins finder <FaExternalLinkAlt /></a>
                        <br />
                        Health concious options with several Vegas area locations.
                    </Card.Text>
                    {/* <Card.Subtitle></Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /> Name</a>
                        <br />
                    </Card.Text> */}
                    <br />

                    <Card.Subtitle>Ramen</Card.Subtitle>
                    <hr />
                    {/* <Card.Subtitle></Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /> Name</a>
                        <br />
                    </Card.Text> */}
                    <br />

                    <Card.Subtitle>24H Options</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Roberto's Taco Shop</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://robertostacoshop.com/locations/" target="_blank" rel="noopener noreferrer">Roberto's Taco Shop Locator <FaExternalLinkAlt /></a>
                        <br />
                        Tons of Vegas locations, all 24H (I think). Try the ham or bacon breakfast burrito, always great, never too greasy, re-heats well, awesome vehicle for hot sauce delivery. (T2 is addicted to them). Great to grab on your way out to Red Rock to fuel a long day.
                    </Card.Text>
                    {/* <Card.Subtitle></Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /> Name</a>
                        <br />
                    </Card.Text> */}
                    <br />

                    <Card.Subtitle>Sweet Tooth ?</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Mazzoa Donuts</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/nuA5JanCRUmAemK66" target="_blank" rel="noopener noreferrer"><FaDirections /> Mazzoa Donuts</a>
                        <br />
                        New, but already making a buzz. Two Vegas locations.
                    </Card.Text>
                    <Card.Subtitle>Dunkin'</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/Vc8Cw1PKCftCTT4J9" target="_blank" rel="noopener noreferrer"><FaDirections /> Dunkin'</a>
                        <br />
                        Located very close to Red Rock, this is a very popular stop people make on their way out of town to get their fix before their multipitch plans. Opens at 5am. Remember to use the restroom, or bring a wag bag!
                    </Card.Text>
                    <Card.Subtitle>Pinkbox Donuts</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/qU9zgigffYxucoN18" target="_blank" rel="noopener noreferrer"><FaDirections /> Pinkbox Donuts</a>
                        <br />
                        Several Vegas locations. Open 24H!
                    </Card.Text>
                    <Card.Subtitle>Ronald's Donuts</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/FWRzQD525GXbzig19" target="_blank" rel="noopener noreferrer"><FaDirections /> Ronald's Donuts</a>
                        <br />
                        Awesome no-frills place in Chinatown.
                    </Card.Text>
                    <Card.Subtitle>Donut Bar</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/DonutBarLasVegas?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Donut Bar</a>
                        <br />
                        Not a convienient location for climbers, but if you find yourself near the strip and crave donuts, this could be a good option.
                    </Card.Text>
                    <Card.Subtitle>Handel's Homemade Ice Cream &amp; Yogurt</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/FvrUgkzuuNn9zy9n6" target="_blank" rel="noopener noreferrer"><FaDirections /> Handel's Homemade Ice Cream &amp; Yogurt</a>
                        <br />
                        Amazing ice cream that has been featured in many top lists.
                    </Card.Text>
                    <Card.Subtitle>Cold Stone Creamery</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/Ice-cream-shop-Las-Vegas1?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Cold Stone Creamery</a>
                        <br />
                        Great mixed ice cream. This location is next to a movie theater and Thai restraunt. Convient options for a rainy day!
                    </Card.Text>
                    <Card.Subtitle>CJ's Italian Ice &amp; Custard</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/Hq2e4yv3eAH3V9EZ6" target="_blank" rel="noopener noreferrer"><FaDirections /> CJ's Italian Ice &amp; Custard</a>
                        <br />
                        Another great option.
                    </Card.Text>
                    <Card.Subtitle>Matcha Cafe Maiko</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/MatchaCafeMaikoLV?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Matcha Cafe Maiko</a>
                        <br />
                        Fantastic place for Matcha infused ice cream, shakes, and other desserts!
                    </Card.Text>
                    <Card.Subtitle>Is Sweet Coffee &amp; Dessert</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/ih5oEb3aQbzBuhHq8" target="_blank" rel="noopener noreferrer"><FaDirections /> Is Sweet Coffee &amp; Dessert</a>
                        <br />
                        Great options!
                    </Card.Text>
                    {/* <Card.Subtitle></Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /> Name</a>
                        <br />
                    </Card.Text> */}
                    <br />

                    <Card.Subtitle>Other</Card.Subtitle>
                    <Card.Text>Other random stuff that looks worth trying... because I'm hungry right now</Card.Text>
                    <hr />
                    <Card.Subtitle>Bb.q Chicken</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://g.page/bbqchickenlasvegas?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Bb.q Chicken</a>
                        <br />
                        Korean style BBQ chicken. Looks good. I don't know!
                    </Card.Text>
                    {/* <Card.Subtitle></Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /> Name</a>
                        <br />
                    </Card.Text> */}
                </>
            )
        },
        {
            subSectionTitle: 'Breweries & Bars',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Breweries</Card.Subtitle>
                    <Card.Text className="pl-3">
                        {/* <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /></a><br /> */}
                    </Card.Text>
                    <Card.Subtitle>Bars</Card.Subtitle>
                    <Card.Text className="pl-3">
                        {/* <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"><FaDirections /></a><br /> */}
                    </Card.Text>
                </>
            )
        }
    ]
}