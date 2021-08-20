import React from 'react';
import { Animated } from 'react-animated-css';
import { FaRegCaretSquareDown, FaRegCaretSquareUp } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';


import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// icons
// Standard?
// FaExternalLinkAlt AFTER links away
// FaDirections BEFORE Gmaps links away
import { FaExternalLinkAlt, FaDirections, FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt, FaMap, FaPhone } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


// photo imports
// import Photo from '..something../img/beta/photo.jpg';

// % What this is supposed to have based on notes in Beta.js
// General Info
        // RR General Info (hours, logistics, timed entry, site link(s))
        // Rescue
        // Local Ethics
        // Wet Rock
        // SNCC

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

export const generalInfo = {
    title: 'General Info',
    accordionIdBase: 'generalInfoAccordion',
    eventKeyBase: 'generalInfoEKey',
    data: [
        {
            subSectionTitle: 'Red Rock Canyon General Info',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Scenic Loop Hours</Card.Subtitle>
                    <Card.Text>
                        <p>The Visitor Center is open daily from 9:00 AM – 4:30 pm. The Scenic Drive is open every day of the year with hours changing slightly according to the season:</p>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Time of year</th>
                                    <th>Open hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>November – February</td>
                                    <td>6:00 AM to 5:00 PM</td>  
                                </tr>
                                <tr>
                                    <td>March</td>
                                    <td>6:00 AM to 7:00 PM</td>
                                </tr>
                                <tr>
                                    <td>April – September</td>
                                    <td>6:00 AM to 8:00 PM</td>
                                </tr>
                                <tr>
                                    <td>October</td>
                                    <td>6:00 AM to 7:00 PM</td>
                                </tr>
                            </tbody>
                        </Table>
                    <Card.Subtitle>Logistics</Card.Subtitle>
                        <p>The Scenic Drive is 13mi and ONE WAY ONLY. Cell service is poor to non-existant in many parts of Red Rock Canyon (a new cell tower has been proposed). Thus try to coordinate meetups, carpooling, and pickup times from outside of Red Rock. Don't count on being able to call an Uber/Lyft to pick you up from within the Scenic Drive or in Calico Basin.</p>
                        <p>Every major parking area along the loop road has a primitive pit toilet, however, once you have hiked in, there are no more options. Water is only available at the RR Visitor Center and once you have passed the entrance for that, you will not be able to return to fill up. Bring more water than you think you will need.</p>
                    </Card.Text>
                    <Card.Subtitle>Timed Entry Reservations</Card.Subtitle>
                    <Card.Text>
                        <p>This is a new measure the BLM has taken to try to limit the dangerous backups of cars in both directions on the highway trying to get into the Red Rock Scenic Drive which historically happens during the peak season (Oct-Apr), though they say it was to meet guidance related to COVID-19, it is probably here to stay.</p>
                        <ul>
                            <li>Reservations are NOT REQUIRED June 1 - September 30th</li>
                            <li>When Reservation are in effect, they are only available for 8am-5pm. Before and after that window you DO NOT NEED a reservation, only the regular day entry fee. The gate opens every day at 6am, so that is a 2h window every morning that you can get in without needing a reservation.</li>
                            <li>Fees are non-refundable.</li>
                            <li>You can only purchase 1 reservation per vehicle per day, meaning you can't enter at 9:30am, then leave, then come back and enter at 3pm. However, if you entered early without a reservation you could enter later with one, etc...</li>
                            <li>Calico Basin and other areas where you didn't need to pay a fee or show a national parks pass, etc... are not subject to reservations. It has been hinted that in the future Calico Basin will also be a fee area and almost certainly subject to reservations too.</li>
                            <li>Money collected by the reservation fee does not go to BLM, NPS, etc... It goes to Booz-Allen, the military contractor who built and maintains Recreation.gov, so if you don't want to support them financially, wake up early and enter the loop before the reservation window starts or hike in from an area that is not subject to an entrance fee.</li>
                        </ul>
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Emergency & Rescue',
            subSectionContent: () => (
                <>
                    <Card.Text>
                        <p>Call 911 if you have a life-threatening emergency, for Police, Fire, or Medical assistance.</p>
                        <p>Give them clear information on where you are. Specific climbing wall or route is good. Helicopter ride to the ER is provided by the local Police Department and paid for by taxes, you wont get a bill for that. Don't worry. If its an emergency, just call. The ER visit itself will still cost you at normal ER rates.</p>
                        <p>
                            If your loved one is lost or missing call the LV SAR hotline 24/7:<br />
                            <a href="tel:1-702-758-4727" target="_blank" rel="noopener noreferrer"><FaPhone /> 1-702-758-4727</a><br />
                            <a href="https://www.redrocksar.org/" target="_blank" rel="noopener noreferrer">Red Rock SAR <FaExternalLinkAlt /></a>
                        </p>
                        <p></p>
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Local Ethics',
            subSectionContent: () => (
                <>
                    <Card.Text>
                        <p>Southern Nevada attracts thousands of climbers each year. With the amount of people entering the area, we must all be mindful of our impact on the environment and strive to be responsible stewards of Southern Nevada. There are really important factors to take into consideration while climbing in the area</p>
                    </Card.Text>
                    <Card.Subtitle>Stay on Established Trails</Card.Subtitle>
                        <p>Do not create new trails or take short-cuts to existing trails. These “social trails” disturb the surrounding habitat and causes erosion. Look for existing access trails to boulders and be aware of crash pad placement.  Do not crush or trample vegetation found along the edges of trails, boulders, or at the base of walls.</p>
                    <Card.Subtitle>Do Not Litter</Card.Subtitle>
                    <Card.Text>
                        <p>Remember to pack out your trash and dispose of it properly. Garbage should never be left at the base of climbs, along trails, or at parking areas. Do your part and pick up trash that others may have left behind.</p>
                    </Card.Text>
                    <Card.Subtitle>Wag Bag Program</Card.Subtitle>
                    <Card.Text>
                        <p>Use facilities when they are available. If they’re not, make sure you are at a location at least 200 feet from water sources and away from the base of climbing walls. Bury your waste in a cathole a minimum of 6 inches deep. Pack out your paper! The SNCC restocks human waste disposal bags in and around Red Rock Conservation area. This is a large undertaking, and many dedicated volunteers have spent their time keeping these dispensers full and clear of trash. Also, if you bring dogs to a climbing area, make sure to pick up after them and do not leave it on the trails!</p>
                    </Card.Text>
                    <Card.Subtitle>Be Respectful of the Area</Card.Subtitle>
                    <Card.Text>
                        <p>Be respectful of all wildlife and give them space. Keep your pets on leashes or in a controlled area. Be respectful of others in the climbing areas as well.</p>
                    </Card.Text>
                    <Card.Subtitle>Take Action!</Card.Subtitle>
                    <Card.Text>
                        <p>If you see others not following these principles, kindly inform them that their actions are harmful to the environment and may impact everyone’s access to the area. Find out more information at the <a href="http://www.accessfund.org/site/c.tmL5KhNWLrH/b.5000925/k.E6B4/Education.htm" target="_blank" rel="noopener noreferrer">Access Fund’s Education page. <FaExternalLinkAlt /></a></p>
                    </Card.Text>
                    <Card.Subtitle>Late Exit Information</Card.Subtitle>
                    <Card.Text>
                        <p>Need to stay late in Red Rock? Be sure to get a late exit permit or face a potential hefty citation when you return to your car. If you need access to the 13-Mile Scenic Drive to stay late, get a late exit pass at <a href="https://www.recreation.gov/activitypass/f4d17453-0cba-11eb-b57c-4a047fce61ec" target="_blank" rel="noopener noreferrer">Recreation.gov. <FaExternalLinkAlt /></a> A two hour late pass can be issued, depending on the climbing route.  Overnight passes can be given for grade V routes. This pass allows you overnight parking along the scenic drive for the given number of days. If you leave your vehicle parked along the scenic drive without a permit, your vehicle will be cited and possibly towed at owners expense.</p>
                    </Card.Text>
                    <Card.Subtitle>Backcountry Camping Permit? May no longer exist...</Card.Subtitle>
                    <Card.Subtitle>Bolting Ban</Card.Subtitle>
                    <Card.Text>
                        <p>There is currently no bolting allowed in designated wilderness areas.</p>
                        <p>In wilderness areas there is only 1 for 1 replacement of existing bolts allowed, and by hand drill only.</p>
                    </Card.Text>
                    {/* https://www.southernnevadaclimberscoalition.org/local-ethics/fixed-draws-in-red-rock/ */}
                    <Card.Subtitle>Fixed draws in Red Rock / Charleston / Potosi</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.southernnevadaclimberscoalition.org/local-ethics/fixed-draws-in-red-rock/" target="_blank" rel="noopener noreferrer">Read about the SNCC's view on them here. <FaExternalLinkAlt /></a><br />
                        <p>Fixed ropes are MUCH less common and are not usually left up for very long, often they are there due to some in-process rebolting effort. If in doubt, ask on Mountain Project in the Nevada area forum or Facebook Vegas Climbers group.</p>
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Southern Nevada Climbers Coalition (SNCC)',
            subSectionContent: () => (
                <>
                    {/* // ! add these other FB and IG icons/links */}
                    {/* https://www.facebook.com/snclimberscoalition/ */}
                    {/* https://www.instagram.com/southernnevadaclimbers/?hl=en */}
                    <a href="http://www.southernnevadaclimberscoalition.org/" target="_blank" rel="noopener noreferrer">SNCC Website <FaExternalLinkAlt /></a><br />
                    <p>The SNCC is the local organization that does the most the secure and maintain climbing access, replace old dangerous bolts and hardware, and does a large amount to maintain the stocks of wag bags / poop bags in dispensers in various areas such as Desert Rock Sports, Kraft Boulders, Black Velvet Canyon, The First Pullout (near the Panty Wall), and The Second Pullout (at the entrance of the Black Corridor).</p>
                    <Card.Subtitle>Join or make direct donations</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.southernnevadaclimberscoalition.org/join-now/" target="_blank"  rel="noopener noreferrer">Join Now! <FaExternalLinkAlt /></a><br />
                        <p>On this page you can find instructions on how to join or make a direct credit card / paypal donation. Another option is to make a cash donation in person at Desert Rock Sports. We encourage $2 / wag bag or whatever you feel is good for bolt replacement.</p>
                    </Card.Text>
                    <Card.Subtitle>Report Bad or Loose Bolts and Hardware</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.mountainproject.com/forum/topic/108676719/bad-bolts-in-las-vegas" target="_blank" rel="noopener noreferrer">Mountain Project RR Bad Bolts Thread <FaExternalLinkAlt /></a><br />
                        <p>Please report bad hardware or other issues that we can help with here. If you don't have a MP account, just fill out the contact form <a href="https://www.southernnevadaclimberscoalition.org/about-us/contact-us/" target="_blank" rel="noopener noreferrer">Contact SNCC <FaExternalLinkAlt /></a> and we will get it added to the thread.</p>
                        <a href="email:snclimberscoalition@gmail.com" target="_blank" rel="noopener noreferrer"><HiOutlineMail /> Want to help replace bolts and hardware? Email us.</a><br />
                        <p>The SNCC Rebolting Mentor Project is a great way to give back directly to the climbing community by putting in work to replace bolts and hardware. Bolt replacement is usually a pretty thankless dirty, sweaty, tiring ordeal and we are always looking for help, even if it is just helping us hike some heavy bags of hardware around.</p>
                        <p></p>
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Wet Rock',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Wet Rock Issues</Card.Subtitle>
                    <Card.Text>Wet Rock here is a big part of the local ethics, however, its such a large part that it deserves its own section. (more to be added, a lot more)</Card.Text>
                </>
            )
        }
    ]
};