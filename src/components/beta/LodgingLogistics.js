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
// unused so far: FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt, FaMap,
import { FaExternalLinkAlt, FaDirections, FaPhone } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';


// photo imports
// import Photo from '..something../img/beta/photo.jpg';
// these SVG are now all camelCased and wrapped as JSX functional default export components, memoized too
// import LodgingLogistics_290x95_2 from '../../img/accordionBgs/asJSX/LodgingLogistics_290x95';
// import LodgingLogistics_690x95_2 from '../../img/accordionBgs/asJSX/LodgingLogistics_690x95';
// import LodgingLogistics_930x95_2 from '../../img/accordionBgs/asJSX/LodgingLogistics_930x95';
// import LodgingLogistics_1250x95_2 from '../../img/accordionBgs/asJSX/LodgingLogistics_1250x95';
import LodgingLogistics_290x95_2 from '../../img/accordionBgs/working/LodgingLogistics_290x95_2.svg';
import LodgingLogistics_690x95_2 from '../../img/accordionBgs/working/LodgingLogistics_690x95_2.svg';
import LodgingLogistics_930x95_2 from '../../img/accordionBgs/working/LodgingLogistics_930x95_2.svg';
import LodgingLogistics_1250x95_2 from '../../img/accordionBgs/working/LodgingLogistics_1250x95_2.svg';


// % What this is supposed to have based on notes in Beta.js
// Lodging / Camping / Logistics?
        // Hotels
        // Paid Camping
        // Free Camping
        // Showers
        // Laundry

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

export const lodgingLogistics = {
    title: 'Lodging / Camping / Logistics',
    accordionIdBase: 'lodgingLogisticsAccordion',
    eventKeyBase: 'lodgingLogisticsEKey',
    img290: LodgingLogistics_290x95_2,
    img690: LodgingLogistics_690x95_2,
    img930: LodgingLogistics_930x95_2,
    img1250: LodgingLogistics_1250x95_2,
    data: [
        {
            subSectionTitle: 'Hotels',
            subSectionContent: () => (
                <>
                    {/* <Card.Text className="pl-3">( There are too many options in Vegas to list them all )</Card.Text> */}
                    <Card.Subtitle>Red Rock Casino Resort &amp; Spa</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/eHaBJWw1kSGk62Fb6" target="_blank" rel="noopener noreferrer"><FaDirections /> Red Rock Casino Resort &amp; Spa</a>
                        <br />
                        The closest option to Red Rock Canyon. Recommended if you are serious about getting a lot of climbing in due to the short commute to Red Rock. Remember, if your going for big and/or popular multipitch, you want to be one of the first parties at the trailhead. Short commute = more sleep = better climbing.
                    </Card.Text>
                    <Card.Subtitle>AirBNB, Vrbo, etc... vacation rental houses</Card.Subtitle>
                    <Card.Text className="pl-3">
                        The casinos are rather hostile to vacation rental houses, however there are still enough options. This is a good way to go if you are going with a big group of friends who can split the cost. Remember to try to book in advance!
                        </Card.Text>
                    <Card.Subtitle>The Strip...</Card.Subtitle>
                    <Card.Text className="pl-3">
                        If you stay at the strip, its unlikely that you will get as much climbing in with the distractions and hassle of commuting so much further every morning and evening. Not recommended unless you are looking for The Strip experience itself and less so climbing.
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Paid Camping Options',
            subSectionContent: () => (
                <>
                    <Card.Subtitle className="text-warning">MAKE SURE YOUR CAMPFIRE IS DEAD OUT, BETTER YET, JUST DON'T HAVE ONE. WE HAVE HAD TOO MANY FIRES. WANT THE WARMTH AND LIGHT? JUST SNUGGLE WITH YOUR FRIENDS... IF YOU MUST HAVE ONE, MAKE SURE THAT WE ARE NOT IN THE MIDDLE OF A BURN BAN, WHICH IS COMMON.</Card.Subtitle>
                    <br />
                    <Card.Subtitle>Prime Season (Oct - Apr) Options</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Red Rock Canyon Campground</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://www.recreation.gov/camping/campgrounds/250877" target="_blank" rel="noopener noreferrer">Check availability and make reservations at Recreaction.gov <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/rcQa5GeBqndbNNw18" target="_blank" rel="noopener noreferrer"><FaDirections /> Red Rock Canyon Campground</a><br />
                        Minutes from Red Rock, ~20mi from The Strip. For campground inquiries, please call: <a href="tel:1-702-515-5387" target="_blank" rel="noopener noreferrer"><FaPhone /> 1-702-515-5387</a>
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Summer Options (covered in snow / maybe closed in winter)</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Mahogany Grove @ Mt Charleston</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://www.recreation.gov/camping/campgrounds/232167" target="_blank" rel="noopener noreferrer">Check availability and make reservations at Recreation.gov <FaExternalLinkAlt /></a><br />
                        Higher elevation option for summer
                    </Card.Text>
                    <Card.Subtitle>Hilltop @ Mt Charleston</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://www.recreation.gov/camping/campgrounds/232276" target="_blank" rel="noopener noreferrer">Check availability and make reservations at Recreation.gov <FaExternalLinkAlt /></a><br />
                        Higher elevation option for summer
                    </Card.Text>
                    <Card.Subtitle>McWilliams @ Mt Charleston</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://www.recreation.gov/camping/campgrounds/232168" target="_blank" rel="noopener noreferrer">Check availability and make reservations at Recreation.gov <FaExternalLinkAlt /></a><br />
                        Higher elevation option for summer
                    </Card.Text>
                    <Card.Subtitle>Fletcher View @ Mt Charleston</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://www.recreation.gov/camping/campgrounds/234005" target="_blank" rel="noopener noreferrer">Check availability and make reservations at Recreaction.gov <FaExternalLinkAlt /></a><br />
                        Higher elevation option for summer
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Free Camping and "Vanlife" Options',
            subSectionContent: () => (
                <>
                    <Card.Subtitle className="text-warning">MAKE SURE YOUR CAMPFIRE IS DEAD OUT, BETTER YET, JUST DON'T HAVE ONE. WE HAVE HAD TOO MANY FIRES. WANT THE WARMTH AND LIGHT? JUST SNUGGLE WITH YOUR FRIENDS... IF YOU MUST HAVE ONE, MAKE SURE THAT WE ARE NOT IN THE MIDDLE OF A BURN BAN, WHICH IS COMMON.</Card.Subtitle>
                    <br />
                    <Card.Subtitle>Prime Season (Oct - Apr) Options</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Lovell Canyon Rd</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/aug9pC7dWnG7ck1XA" target="_blank" rel="noopener noreferrer"><FaDirections /> Lovell Canyon Rd</a><br />
                        This is the go to for everyone climbing at RR during the prime season. Lovell Canyon Rd has free dispersed camping along a great length of it as well as a designated free campground which has no amenities, its just a cluster of spots closer together. TONS of little dirt roads branch off the main road leading to many, many spots. Higher up locations should have good cell service. Lower down ones, especially after many miles after turning onto the road, will tend to have no cell service.<br />
                        Avoid the tempation to try to sleep at Late Night Trailhead or off any of the dirt roads near Black Velvet Canyon, Windy Peak, etc... You will be asked to leave or be ticketed.
                    </Card.Text>
                    <Card.Subtitle>Free and Legal Camping Near Black Velvet Canyon</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="http://www.southernnevadaclimberscoalition.org/local-ethics/camping-reservations/#free-and-legal-climber-camping" target="_blank" rel="noopener noreferrer">SNCC Page with details <FaExternalLinkAlt /></a><br />
                        High clearance is a must. Some Sprinter Vans have made it back here, otheres have decided not to.
                    </Card.Text>
                    <Card.Subtitle>Various Casino Parking Lots, and other spots</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="http://ioverlander.com/" target="_blank" rel="noopener noreferrer">Link to iOverlander search tool <FaExternalLinkAlt /></a><br />
                        Vegas has tons of Casinos. While none of them would want you to set up a tent in their parking lot, several will have no problem with you sleeping discreetly in a van or RV. This is really only an option in the cooler months, remember that Vegas is lower elevation than Red Rock, so its hotter. There are also some random streets and lots that people have been using successfully for years... and others that are cracking down.
                    </Card.Text>
                    <Card.Subtitle>iOverlander app / site</Card.Subtitle>
                    <Card.Text className="pl-3">
                        On iOverlander, browse the map, deselect all filters, then check Informal Campsite and Wild Camping, this will let you see all the spots around Vegas that others have shared. Tthe app is a great tool to download and always have ready on your phone when you just need to find some place to sleep for the night when on a long road trip.
                    </Card.Text>
                    <Card.Subtitle>Skid Row - a cautionary tale</Card.Subtitle>
                    <Card.Text className="pl-3">
                        Skid Row, is/was a place near the RR sign that everyone takes photos with. It was on the the south side of the road. If it had been only ocassionally used, as a last resort, it is very possible that it would still be open today and a convient spot to use if you rolled into town late or just got back from an epic and were in bad need of sleep right away... However, due to the predictable overuse by climbers when the next free dispersed camping options are 40min-1h away, it has been shut down. It was getting very bad. 40+ vehicles car camping every night during the peak season, people getting out of their vehicles and peeing in full view of the tourists driving by, people setting up grills, a few tents... Signs have been put up limiting hours that its legal to park there, such that you can't park there overnight anymore without getting ticketed. There is a smaller cluster that is now abused very close to where skid row was, near a water overflow catchment, which will probably also get shut down soon, which is unfourtunate, because its the parking for a trail system and there is no other parking nearby for people trying to access that.
                    </Card.Text>
                    <Card.Subtitle>Red Rock Camping - Backcountry only</Card.Subtitle>
                    <Card.Text className="pl-3">
                        Backcountry camping is allowed within Red Rock Canyon National Conservation Area above 5,000 feet in the Rainbow Mountain Wilderness, and above 6,500 feet in the La Madre Mountain Wilderness. A permit is required and can be obtained thru Recreation.gov. This currently seems like it only applies to certain parties doing very remote very big climbs. It used to just be a number you called and left your details with. You probably still could just get a pass for the closest valid climb to where you will be, then leave a note with details on your car dash... but then you are actively telling people that your car will be left alone... Not a great idea considering the possibility of theft. The current system has big issues.
                    </Card.Text>
                    <Card.Text className="pl-3">
                        Camping is also allowed on BLM managed public land outside of the Las Vegas Valley for up to two weeks without charge. Popular primitive (no facilities) sites include Bitter Spring Back Country Byway, Gold Butte Back Country Byway, Knob Hill, Virgin Mountains, Christmas Tree Pass, and Logandale Trails System... You could even camp out near Keyhole Canyon and get some J-Tree like granite climbing in.
                    </Card.Text>
                    <Card.Text className="pl-3">
                        Presumably you could drive behind Red Rock using Rocky Gap Road, a quite serious 4x4 only road with significant rock crawling required that connects Willow Springs inside the scenic loop with Lovell Canyon outside of it... and then only have a short hike to a suitable spot to backcountry camp... if breaking down in a remote area with zero cell reception sounds fun... The backcountry camping is meant more for people hiking and camping longer remote objectives like Bridge Mountain or various big routes with big approaches and descents.
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Summer Options (covered in snow / maybe closed in winter)</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Mack's Canyon Rd @ Lee Canyon</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/QpmiJYPMCKxnNK6x7" target="_blank" rel="noopener noreferrer"><FaDirections /> Mack's Canyon Rd</a><br />
                        Great high elevation option to avoid the summer Vegas temperatures and stay close to the limestone sport climbing around Mt Charleston. There is an open free campground without amenities near the end, but plenty of pulloffs along the way, many are far from level however... Pit toilets are available a short drive away at the Sawmill Trailhead parking lot.
                    </Card.Text>
                    {/* <Card.Subtitle>Champion Rd @ Lee Canyon</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/YZQNF5puDaivLR3a8" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Champion Rd</a><br />
                        <p>Great high elevation option across the road from Mack's Canyon Rd. Tons of spots. Many not level.</p>
                    </Card.Text> */}
                    <Card.Subtitle>Other Options</Card.Subtitle>
                    <Card.Text className="pl-3">
                        There are no other good high altitude options within a reasonable driving distance of Vegas / Red Rock Canyon... If these don't work, then its time to look into apartments or people needing room mates for a house. Everyones heat tollerance is different, so maybe you could make Lovell Canyon work for instance for some period of time... but do your due diligence by looking at temperature graphs for when you would want to stay there and see if it cools down enough for you to actually sleep well... and consider that your vehicle needs to cool down as well, if your sleeping in it. Its pretty rough when its still 80F outside at 11pm while your sun baked vehicle is even hotter inside.
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Where to get a shower?',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Red Rock Climbing Center</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/fu1zaPsdpwXy8c3M6" target="_blank" rel="noopener noreferrer"><FaDirections /> Red Rock Climbing Center</a>
                        <br />
                        $5 showers. One stall each in Men's and Women's Restrooms. Bring your own towel and soap. Convieniently located in the same shopping center as Desert Rock Sports so if you have a big group, just hangout in the shop, mooch the WIFI, and talk/research the routes you want to do while your group all takes their turns.
                    </Card.Text>
                    <Card.Subtitle>The Refuge Climbing &amp; Fitness</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="http://climbrefuge.com/" target="_blank" rel="noopener noreferrer">The Refuge <FaExternalLinkAlt /></a>
                        <br />
                        They have showers!
                    </Card.Text>
                    <Card.Subtitle>Desert Breeze Aquatic Center</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/zYqfaJt6xtLDEF2t6" target="_blank" rel="noopener noreferrer"><FaDirections /> Desert Breeze Aquatic Center</a>
                        <br />
                        $3 Showers, tell them you are there only for a shower
                    </Card.Text>
                    <Card.Subtitle>Aloha Aquatic Center</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/gGS2DVcG23KsoW3f8" target="_blank" rel="noopener noreferrer"><FaDirections /> Aloha Aquatic Center</a>
                        <br />
                        $3 Showers, tell them you are there only for a shower
                    </Card.Text>
                    
                    {/* <Card.Subtitle>Truck stop?</Card.Subtitle>
                    <Card.Text className="pl-3"></Card.Text> */}
                </>
            )
        },
        {
            subSectionTitle: 'Where to do Laundry?',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Rainbow Laundromat</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/vfxyEZeCor9Wgck6A" target="_blank" rel="noopener noreferrer"><FaDirections /> Rainbow Laundromat</a><br />
                    </Card.Text>
                    <Card.Subtitle>Spin City Laundromat</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://goo.gl/maps/AKDDsGxCjZuycBWV6" target="_blank" rel="noopener noreferrer"><FaDirections /> Spin City Laundromat</a><br />
                    </Card.Text>
                </>
            )
        },
    ]
};

