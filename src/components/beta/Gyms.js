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
                        <a href="https://goo.gl/maps/eJtf2ZcR8DKuMio2A" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Red Rock Climbing Center</a><br />
                        Located in the same shopping center as our shop! Bouldering, Lead, Top Rope, and Auto Belays!
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>The Refuge Climbing &amp; Fitness</Card.Subtitle>
                    <Card.Text>
                        <a href="http://climbrefuge.com/" target="_blank" rel="noopener noreferrer">The Refuge <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/8Hbc31i8PNqaJkVt7" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to The Refuge</a><br />
                        Just west of McCarran International Airport. Primarily Bouldering, with a few Auto Belays.
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>Nevada Climbing Center</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.nvclimbingcenter.com/" target="_blank" rel="noopener noreferrer">Nevada Climbing Center <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/LiY1EHZRYDGTJXay8" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Nevada Climbing Center</a><br />
                        Just east of McCarran International Airport. Bouldering, Lead, Top Rope, and Auto Belays!
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>The Pad Henderson (used to be Origin)</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.thepadclimbing.org/" target="_blank" rel="noopener noreferrer">The Pad <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/1GkbKu3ULz3mzSGq6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to The Pad</a><br />
                        Located in Southwest Vegas / Henderson. Bouldering, Lead, Top Rope, and Auto Belays!
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>Lifetime Fitness</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.lifetime.life/life-time-locations/nv-las-vegas-summerlin.html" target="_blank" rel="noopener noreferrer">Lifetime Fitness - Summerlin <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/857D9QcztBJqJu11A" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Lifetime Fitness</a><br />
                        Located off Charleston in W Vegas / Summerlin, this location has a climbing wall. If you are already a Lifetime Fitness member, it may be worthwhile.
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>UNLV</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.unlv.edu/campusrec/outdoor-adventures/climbing-facilities" target="_blank" rel="noopener noreferrer">UNLV - Climbing Facilities <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/6QyRK14HhqKm89ZC9" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to UNLV Student Recreaction and Wellness Center</a><br />
                        For UNLV students, they have a bouldering wall, treadwall, run outdoor trips, as well as have some rental equipment available (tents, sleeping pads and bags, stoves, etc...)
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'regular boring gyms',
            subSectionContent: () => (
                <>
                    {/* <p>(probably not enough reason to have this section)</p>
                    <p>Vegas has many options for traditional gyms. Planet Fitness is near our shop and very reasonably priced for a 24h access gym.</p> */}
                    <Card.Subtitle>Planet Fitness</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.planetfitness.com/gyms/las-vegas-w-charleston-blvd-nv" target="_blank" rel="noopener noreferrer">Planet Fitness - Charleston <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/h7HQSd3yaTscyPTh7" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Planet Fitness - Charleston</a><br />
                        Open 24h. 4min from our shop. Great option. Very affordable.
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>TruFusion</Card.Subtitle>
                    <Card.Text>
                        <a href="https://trufusion.com/summerlin/" target="_blank" rel="noopener noreferrer">TruFusion - Summerlin <FaExternalLinkAlt /></a><br />
                        <a href="https://g.page/TruFusionSummerlin?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to TruFusion - Summerlin</a><br />
                        Probably one of the best places in Vegas for Yoga, Hot Yoga, Barre, Pilates, Cycle, Boxing, Kettlebell, HIIT, and other classes.
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>EOS</Card.Subtitle>
                    <Card.Text>
                        <a href="https://eosfitness.com/location/sahara/" target="_blank" rel="noopener noreferrer">EOS - Sahara / Cimarron <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/g9TgEaZGDYp5ovts6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to EOS - Sahara / Cimarron</a><br />
                        Another great 24h option.
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>Lifetime Fitness</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.lifetime.life/life-time-locations/nv-las-vegas-summerlin.html" target="_blank" rel="noopener noreferrer">Lifetime Fitness - Summerlin <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/pEeemcbEpAkcQiht7" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Lifetime Fitness - Summerlin</a><br />
                        A huge gym option. Also has a climbing wall (limited hours). Good option for families.
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>Smash Iron Fitness</Card.Subtitle>
                    <Card.Text>
                        <a href="https://smashironfitness.com/" target="_blank" rel="noopener noreferrer">Smash Iron Fitness <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/8KmsZ91vNMWqnasd6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Smash Iron Fitness</a><br />
                        24h. One of the few more weight lifting focused gyms. This is its central location. Its Summerlin location (south of 215) also has RoninJitsu (Jiu-Jitsu, Boxing, MMA).
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>LVAC</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.lvac.com/locations/northwest/" target="_blank" rel="noopener noreferrer">LVAC - NW <FaExternalLinkAlt /></a><br />
                        <a href="https://g.page/LVAC_Northwest?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to LVAC - NW</a><br />
                        Las Vegas Athletic Clubs is a local chain of mega gyms. Many locations. All 24h. Tons of amenities.
                    </Card.Text>
                </>
            )
        },
    ]
};

