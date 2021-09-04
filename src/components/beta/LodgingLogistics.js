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
import LodgingLogistics_290x95_1 from '../../img/accordionBgs/working/LodgingLogistics_290x95_1.svg';
import LodgingLogistics_690x95_1 from '../../img/accordionBgs/working/LodgingLogistics_690x95_1.svg';
import LodgingLogistics_930x95_1 from '../../img/accordionBgs/working/LodgingLogistics_930x95_1.svg';
import LodgingLogistics_1250x95_1 from '../../img/accordionBgs/working/LodgingLogistics_1250x95_1.svg';


// % What this is supposed to have based on notes in Beta.js
// Lodging / Camping / Logistics?
        // Hotels
        // Paid Camping
        // Free Camping
        // Showers
        // Laundry

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

export const lodgingLogistics = {
    title: 'Lodging / Camping / Logistics',
    accordionIdBase: 'lodgingLogisticsAccordion',
    eventKeyBase: 'lodgingLogisticsEKey',
    img290: LodgingLogistics_290x95_1,
    img690: LodgingLogistics_690x95_1,
    img930: LodgingLogistics_930x95_1,
    img1250: LodgingLogistics_1250x95_1,
    data: [
        {
            subSectionTitle: 'Hotels',
            subSectionContent: () => (
                <>
                    <p>( There are too many options in Vegas to list them all )</p>
                    <Card.Subtitle>Red Rock Casino Resort &amp; Spa</Card.Subtitle>
                    <a href="https://goo.gl/maps/eHaBJWw1kSGk62Fb6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Maps</a><br />
                    <p>The closest option to Red Rock Canyon. Recommended if you are serious about getting a lot of climbing in due to the short commute to Red Rock. Remember, if your going for big and/or popular multipitch, you want to be one of the first parties at the trailhead. Short commute = more sleep = better climbing.</p>
                    <Card.Subtitle>AirBNB, Vrbo, etc... vacation rental houses</Card.Subtitle>
                    <p>The casinos are rather hostile to vacation rental houses, however there are still enough options. This is a good way to go if you are going with a big group of friends who can split the cost. Remember to try to book in advance!</p>
                    <Card.Subtitle>The Strip...</Card.Subtitle>
                    <p>If you stay at the strip, its unlikely that you will get as much climbing in with the distractions and hassle of commuting so much further every morning and evening. Not recommended unless you are looking for The Strip experience itself and less so climbing.</p>
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
                    <Card.Text>
                        <a href="https://www.recreation.gov/camping/campgrounds/250877" target="_blank" rel="noopener noreferrer">Check availability and make reservations at Recreaction.gov <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/rcQa5GeBqndbNNw18" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Red Rock Canyon Campground</a><br />
                        <p>Minutes from Red Rock, ~20mi from The Strip. For campground inquiries, please call: <a href="tel:1-702-515-5387" target="_blank" rel="noopener noreferrer"><FaPhone /> 1-702-515-5387</a></p>
                    </Card.Text>
                    <br />

                    <Card.Subtitle>Summer Options (covered in snow / maybe closed in winter)</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Mahogany Grove @ Mt Charleston</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.recreation.gov/camping/campgrounds/232167" target="_blank" rel="noopener noreferrer">Check availability and make reservations at Recreation.gov <FaExternalLinkAlt /></a><br />
                        <p>Higher elevation option for summer</p>
                    </Card.Text>
                    <Card.Subtitle>Hilltop @ Mt Charleston</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.recreation.gov/camping/campgrounds/232276" target="_blank" rel="noopener noreferrer">Check availability and make reservations at Recreation.gov <FaExternalLinkAlt /></a><br />
                        <p>Higher elevation option for summer</p>
                    </Card.Text>
                    <Card.Subtitle>McWilliams @ Mt Charleston</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.recreation.gov/camping/campgrounds/232168" target="_blank" rel="noopener noreferrer">Check availability and make reservations at Recreation.gov <FaExternalLinkAlt /></a><br />
                        <p>Higher elevation option for summer</p>
                    </Card.Text>
                    <Card.Subtitle>Fletcher View @ Mt Charleston</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.recreation.gov/camping/campgrounds/234005" target="_blank" rel="noopener noreferrer">Check availability and make reservations at Recreaction.gov <FaExternalLinkAlt /></a><br />
                        <p>Higher elevation option for summer</p>
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
                    <Card.Text>
                        <a href="https://goo.gl/maps/aug9pC7dWnG7ck1XA" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Lovell Canyon Rd</a><br />
                        <p>This is the go to for everyone climbing at RR during the prime season. Lovell Canyon Rd has free dispersed camping along a great length of it as well as a designated free campground which has no amenities, its just a cluster of spots closer together. TONS of little dirt roads branch off the main road leading to many, many spots. Higher up locations should have good cell service. Lower down ones, especially after many miles after turning onto the road, will tend to have no cell service.</p>
                        <p>Avoid the tempation to try to sleep at Late Night Trailhead or off any of the dirt roads near Black Velvet Canyon, Windy Peak, etc... You will be asked to leave or be ticketed.</p>
                    </Card.Text>
                    <Card.Subtitle>Free and Legal Camping Near Black Velvet Canyon</Card.Subtitle>
                    <Card.Text>
                        <a href="http://www.southernnevadaclimberscoalition.org/local-ethics/camping-reservations/#free-and-legal-climber-camping" target="_blank" rel="noopener noreferrer">SNCC Page with details <FaExternalLinkAlt /></a><br />
                        <p>High clearance is a must. Some Sprinter Vans have made it back here, otheres have decided not to.</p>
                    </Card.Text>
                    <Card.Subtitle>Various Casino Parking Lots, and other spots</Card.Subtitle>
                    <Card.Text>
                        <a href="http://ioverlander.com/" target="_blank" rel="noopener noreferrer">Link to iOverlander search tool <FaExternalLinkAlt /></a><br />
                        <p>Vegas has tons of Casinos. While none of them would want you to set up a tent in their parking lot, several will have no problem with you sleeping discreetly in a van or RV. This is really only an option in the cooler months, remember that Vegas is lower elevation than Red Rock, so its hotter. There are also some random streets and lots that people have been using successfully for years.</p>
                    </Card.Text>
                    <Card.Subtitle>iOverlander app / site</Card.Subtitle>
                    <Card.Text>
                        <p>On iOverlander, browse the map, deselect all filters, then check Informal Campsite and Wild Camping, this will let you see all the spots around Vegas that others have shared. BTW the app is a great tool to download and always have ready on your phone when you just need to find some place to sleep for the night when on a long road trip.</p>
                    </Card.Text>
                    <Card.Subtitle>Skid Row - a cautionary tale</Card.Subtitle>
                    <Card.Text>
                        <p>Skid Row, is/was a place near the RR sign that everyone takes photos with. It was on the the south side of the road. If it had been only ocassionally used, as a last resort, it is very possible that it would still be open today and a convient spot to use if you rolled into town late or just got back from an epic and were in bad need of sleep right away... However, due to the predictable overuse by climbers when the next free dispersed camping options are 40min-1h away, it has been shut down. It was getting very bad. 40+ vehicles car camping every night during the peak season, people getting out of their vehicles and peeing in full view of the tourists driving by, people setting up grills, a few tents... Signs have been put up limiting hours that its legal to park there, such that you can't park there overnight anymore without getting ticketed. There is a smaller cluster that is now abused very close to where skid row was, which will probably also get shut down soon, which is unfourtunate, because its the parking for a trail system and there is no other parking nearby for people trying to access that.</p>
                    </Card.Text>
                    <Card.Subtitle>Red Rock Camping - Backcountry only</Card.Subtitle>
                    <p>Backcountry camping is allowed within Red Rock Canyon National Conservation Area above 5,000 feet in the Rainbow Mountain Wilderness, and above 6,500 feet in the La Madre Mountain Wilderness. A permit is required and can be obtained by calling: 702-515-5050. (number still applicable?).</p>
                    <p>Camping is also allowed on BLM managed public land outside of the Las Vegas Valley for up to two weeks without charge. Popular primitive (no facilities) sites include Bitter Spring Back Country Byway, Gold Butte Back Country Byway, Knob Hill, Virgin Mountains, Christmas Tree Pass and Logandale Trails System.</p>
                    <p>Presumably you could drive using Rocky Gap Road, a quite serious 4x4 only road with significant rock crawling required that connects Willow Springs inside the scenic loop with Lovell Canyon outside of it... and then only have a short hike to a suitable spot to backcountry camp... if breaking down in a remote area with zero cell reception sounds fun... The backcountry camping is meant more for people hiking and camping longer remote objectives like Bridge Mountain or various Red Rock peak linkups.</p>
                    <br />

                    <Card.Subtitle>Summer Options (covered in snow / maybe closed in winter)</Card.Subtitle>
                    <hr />
                    <Card.Subtitle>Mack's Canyon Rd @ Lee Canyon</Card.Subtitle>
                    <Card.Text>
                        <a href="https://goo.gl/maps/QpmiJYPMCKxnNK6x7" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Mack's Canyon Rd</a><br />
                        <p>Great high elevation option to avoid the summer Vegas temperatures and stay close to the limestone sport climbing around Mt Charleston. There is an open free campground without amenities near the end, but plenty of pulloffs along the way, many are far from level however.</p>
                    </Card.Text>
                    {/* <Card.Subtitle>Champion Rd @ Lee Canyon</Card.Subtitle>
                    <Card.Text>
                        <a href="https://goo.gl/maps/YZQNF5puDaivLR3a8" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Champion Rd</a><br />
                        <p>Great high elevation option across the road from Mack's Canyon Rd. Tons of spots. Many not level.</p>
                    </Card.Text> */}
                    <Card.Subtitle>Other Options</Card.Subtitle>
                    <Card.Text>
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
                    <a href="https://goo.gl/maps/fu1zaPsdpwXy8c3M6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Red Rock Climbing Center</a><br />
                    <Card.Text>$5 showers. One stall each in Men's and Women's Restrooms. Bring your own towel and soap. Convieniently located in the same shopping center as Desert Rock Sports so if you have a big group, just hangout in the shop, mooch the WIFI, and talk/research the routes you want to do while your group all takes their turns.</Card.Text>
                    <Card.Subtitle>Desert Breeze Aquatic Center</Card.Subtitle>
                    <Card.Text>
                        <a href="https://goo.gl/maps/zYqfaJt6xtLDEF2t6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Desert Breeze Aquatic Center</a><br />
                        <p>$3 Showers, tell them you are there only for a shower</p>
                    </Card.Text>
                    <Card.Subtitle>Aloha Aquatic Center</Card.Subtitle>
                    <Card.Text>
                        <a href="https://goo.gl/maps/gGS2DVcG23KsoW3f8" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Aloha Aquatic Center</a><br />
                        <p>$3 Showers, tell them you are there only for a shower</p>
                    </Card.Text>
                    {/* <Card.Subtitle>Other???</Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                        <p></p>
                    </Card.Text>
                    <Card.Subtitle>Truck stop?</Card.Subtitle>
                    <Card.Text></Card.Text> */}
                </>
            )
        },
        {
            subSectionTitle: 'Where to do Laundry?',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Rainbow Laundromat</Card.Subtitle>
                    <Card.Text>
                        <a href="https://goo.gl/maps/vfxyEZeCor9Wgck6A" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Rainbow Laundromat</a><br />
                    </Card.Text>
                    <Card.Subtitle>Spin City Laundromat</Card.Subtitle>
                    <Card.Text>
                        <a href="https://goo.gl/maps/AKDDsGxCjZuycBWV6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Spin City Laundromat</a><br />
                    </Card.Text>
                </>
            )
        },
    ]
};

