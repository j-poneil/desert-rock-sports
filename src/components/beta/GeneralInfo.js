import React from 'react';
// import { Animated } from 'react-animated-css';
// import { FaRegCaretSquareDown, FaRegCaretSquareUp } from 'react-icons/fa';
// import { MdExpandMore, MdExpandLess } from 'react-icons/md';


import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// icons
// Standard?
// FaExternalLinkAlt AFTER links away
// FaDirections BEFORE Gmaps links away
// unused so far: FaDirections, FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt, FaMap,
import { FaExternalLinkAlt, FaPhone } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


// photo imports
// import Photo from '..something../img/beta/photo.jpg';
//@ General Info
// these SVG are now all camelCased and wrapped as JSX functional default export components, memoized too
// import Main_290x95_2 from '../../img/accordionBgs/asJSX/Main_290x95';
// import Main_690x95_2 from '../../img/accordionBgs/asJSX/Main_690x95';
// import Main_930x95_2 from '../../img/accordionBgs/asJSX/Main_930x95';
// import Main_1250x95_2 from '../../img/accordionBgs/asJSX/Main_1250x95';
import Main_290x95_2 from '../../img/accordionBgs/working/Main_290x95_2.svg';
import Main_690x95_2 from '../../img/accordionBgs/working/Main_690x95_2.svg';
import Main_930x95_2 from '../../img/accordionBgs/working/Main_930x95_2.svg';
import Main_1250x95_2 from '../../img/accordionBgs/working/Main_1250x95_2.svg';

// % What this is supposed to have based on notes in Beta.js
// General Info
        // RR General Info (hours, logistics, timed entry, site link(s))
        // Rescue
        // Local Ethics
        // Wet Rock
        // SNCC

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

export const generalInfo = {
    title: 'General Info',
    accordionIdBase: 'generalInfoAccordion',
    eventKeyBase: 'generalInfoEKey',
    img290: Main_290x95_2,
    img690: Main_690x95_2,
    img930: Main_930x95_2,
    img1250: Main_1250x95_2,
    data: [
        {
            subSectionTitle: 'Red Rock Canyon General Info',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Scenic Loop Hours</Card.Subtitle>
                    <div>
                        <Card.Text className="pl-3">The Visitor Center is open daily from 9:00 AM - 4:30 pm. The Scenic Drive is open every day of the year with hours changing slightly according to the season:</Card.Text>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Time of year</th>
                                    <th>Open hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>November - February</td>
                                    <td>6:00 AM to 5:00 PM</td>  
                                </tr>
                                <tr>
                                    <td>March</td>
                                    <td>6:00 AM to 7:00 PM</td>
                                </tr>
                                <tr>
                                    <td>April - September</td>
                                    <td>6:00 AM to 8:00 PM</td>
                                </tr>
                                <tr>
                                    <td>October</td>
                                    <td>6:00 AM to 7:00 PM</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Card.Subtitle>Logistics</Card.Subtitle>
                        <Card.Text className="pl-3">The Scenic Drive is 13mi and ONE WAY ONLY. Cell service is poor to non-existant in many parts of Red Rock Canyon (a new cell tower has been proposed). Thus try to coordinate meetups, carpooling, and pickup times from outside of Red Rock. Don't count on being able to call an Uber/Lyft to pick you up from within the Scenic Drive or in Calico Basin.</Card.Text>
                        <Card.Text className="pl-3">Every major parking area along the loop road has a primitive pit toilet, however, once you have hiked in, there are no more options. Bring a wag bag / poop bag or two and hike them out. Water is only available at the RR Visitor Center and once you have passed the entrance for that, you will not be able to return to fill up. Bring more water than you think you will need.</Card.Text>
                    </div>
                    <br />
                    <Card.Subtitle>Timed Entry Reservations</Card.Subtitle>
                    <div>
                        <Card.Text className="pl-3">This is a new measure the BLM has taken to try to limit the dangerous backups of cars in both directions on the highway trying to get into the Red Rock Scenic Drive which historically happens during the peak season (Oct-Apr), though they say it was to meet guidance related to COVID-19, it is probably here to stay.</Card.Text>
                        <ul>
                            <li>Reservations are NOT REQUIRED June 1 - September 30th</li>
                            <li>When Reservations are in effect, they are only available for 8am-5pm. Before and after that window you DO NOT NEED a reservation, only the regular day entry fee or a national parks pass. The gate opens every day at 6am, so that is a 2h window every morning that you can get in without needing a reservation.</li>
                            <li>Fees are non-refundable.</li>
                            <li>You can only purchase 1 reservation per vehicle per day, meaning you can't enter at 9:30am, then leave, then come back and enter at 3pm. However, if you entered early without a reservation you could enter later with one, etc...</li>
                            <li>Calico Basin and other areas where you didn't need to pay a fee or show a national parks pass, etc... are not subject to reservations. It has been hinted that in the future Calico Basin will also be a fee area and almost certainly subject to reservations too.</li>
                            <li>Money collected by the reservation fee does not go to BLM, NPS, etc... It goes to Booz-Allen, the military contractor who built and maintains Recreation.gov, so if you don't want to support them financially, wake up early and enter the loop before the reservation window starts or hike in from an area that is not subject to an entrance fee.</li>
                            <li>
                                You need to make a free account on Recreation.gov to make a Timed Entry Reservation. There is also a phone app you can use. Just remember, cell service near Red Rock is limited, so don't count on being able to make one when you are out there and get turned away at the gate without having to drive back to the edge of Vegas to get cell service again.
                                <br />
                                <a href="https://www.recreation.gov/timed-entry/10075177" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Recreation.gov - Red Rock Canyon National Conservation Area Scenic Drive Timed Entry</a>
                            </li>
                            <li>Having a reservation to enter is no gaurantee that you will find a parking spot! 2nd Pullout, Sandstone Quarry, and Icebox Canyon are the worst in this regard since they are very small lots and popular areas. Pine Creek Canyon has been getting steadily worse as its the most popular lot for multipitch climbers and quite popular with tourists/hikers too. BLM has been strict about having a lot attendant present and actually closing lots, so you can't just keep circling through until someone leaves. If you are trying to park at 2nd pullout, but didn't get in early and it seems like a busy day, to be on the safe side you may want to park at the 1st pullout and just walk the extra distance. If 2nd and Sandstone are full you are out of luck!</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            subSectionTitle: 'Emergency & Rescue',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Life-threatening emergency</Card.Subtitle>
                    <div>
                        <Card.Text className="pl-3">Call 911 if you have a life-threatening emergency, for Police, Fire, or Medical assistance.</Card.Text>
                        <Card.Text className="pl-3">Give them clear information on where you are. Specific climbing wall or route is good. GPS coordinates are great too. Pretty much everyones cell phone has GPS now and many peoples smart watches do as well.</Card.Text>
                    </div>
                    <br />
                    <Card.Subtitle>Rescue costs</Card.Subtitle>
                    <div>
                        <Card.Text className="pl-3">Helicopter rescue is provided by the local Police Department and paid for by taxes. If its an emergency, just call. If they fly or drive you to the ER, that visit itself will still cost you at normal ER rates. The Search &amp; Rescue team climbers are all volunteers and they just want everyone to get home safe.</Card.Text>
                    </div>
                    <br />
                    <Card.Subtitle>Lost or Missing People</Card.Subtitle>
                    <div>
                        <Card.Text className="pl-3">
                            If your loved one is lost or missing call the LV SAR hotline 24/7:<br />
                            <a href="tel:1-702-758-4727" target="_blank" rel="noopener noreferrer"><FaPhone /> 1-702-758-4727</a><br />
                            <a href="https://www.redrocksar.org/" target="_blank" rel="noopener noreferrer">Red Rock SAR <FaExternalLinkAlt /></a>
                        </Card.Text>
                        {/* <Card.Text className="pl-3"></Card.Text> */}
                    </div>
                </>
            )
        },
        {
            subSectionTitle: 'Local Ethics',
            subSectionContent: () => (
                <>
                    <Card.Text className="pl-3">
                        Southern Nevada attracts thousands of climbers each year. With the amount of people entering the area, we must all be mindful of our impact on the environment and strive to be responsible stewards of Southern Nevada. There are really important factors to take into consideration while climbing in the area.
                    </Card.Text>
                    <Card.Subtitle>Stay on Established Trails</Card.Subtitle>
                    <Card.Text className="pl-3">
                        Do not create new trails or take short-cuts to existing trails. These “social trails” disturb the surrounding habitat and causes erosion. The trail you think looks like a shortcut will most likely turn into bush wacking and the more experienced group that was hiking in right behind you will take the real trail and get to the wall first. Don't make this mistake. Look for existing access trails to boulders and be aware of crash pad placement.  Do not crush or trample vegetation found along the edges of trails, boulders, or at the base of walls. If a trail has a clear stacking of rocks or branches blocking it off, it is for good reason, don't use it. (Ex the huge trail to Kraft Boulders that crosses private property lines). If a trail or area needs some tender loving care, notify the SNCC and we will get a team out there to fix it up.
                    </Card.Text>
                    <Card.Subtitle>Do Not Litter</Card.Subtitle>
                    <Card.Text className="pl-3">
                        Remember to pack out your trash and dispose of it properly. Garbage should never be left at the base of climbs, along trails, or at parking areas. Do your part and pick up trash that others may have left behind.
                    </Card.Text>
                    <Card.Subtitle>Wag Bag Program</Card.Subtitle>
                    <Card.Text className="pl-3">
                        Use facilities when they are available. The SNCC restocks human waste disposal bags in and around Red Rock Conservation area. This is a large undertaking, and many dedicated volunteers have spent their time keeping these dispensers full and clear of trash. The wag bags seal up extremely well. Pack them out and throw them in a dumpster.
                        <br />
                        If its an emergency and you don't have a wag bag or any other plastic bag to use... make sure you are at a location at least 200 feet from water sources, away from the base of climbing walls, and not on a trail. Bury your waste in a cathole a minimum of 6 inches deep. Pack out your paper! Re-fill your hole and tamp it down well. This is a poor practice because our desert environment is so dry that human waste does not break down rapidly. More likely someones dog will find it and dig it up and you will make that dogs owners very, very mad.
                        <br />
                        We also have wag bags for a small cash donation to the SNCC at our shop. Consider it an essential part of your rack. You have grand plans to get up earlier than you body is used to, coffee up, race to Red Rock, and hike in quick to be the first party on the wall? Did you forget about going #2? It won't forget about you. Don't be like that dude who caused the poop-acolypse on Epinephrine back in Jan 2021.7722
                        <br />
                        Also, if you bring dogs to a climbing area, make sure to pick up after them and do not leave it on the trails!
                    </Card.Text>
                    <Card.Subtitle>Be Respectful of the Area</Card.Subtitle>
                    <Card.Text className="pl-3">
                        Be respectful of all wildlife and give them space. Keep your pets on leashes or in a controlled area. Be respectful of others in the climbing areas as well. 
                        <ul>
                            <li>If you see a Desert Tortoise, consider yourself very lucky. DO NOT TOUCH IT. Picking one up or otherwise scaring it will often cause it to pee itself, dehydrating itself, and very likely killing it shortly as water is so scarce here. As well the oils on our skins attract the attention of curious predators who have been habituated to associate human smells with free food. It is a threatened species.</li>
                            <li>Big Horn Sheep are a rare sight. Don't approach them. Their horns are not just for show.</li>
                        </ul>
                    </Card.Text>
                    <Card.Subtitle>Take Action!</Card.Subtitle>
                    <Card.Text className="pl-3">
                        If you see others not following these principles, kindly inform them that their actions are harmful to the environment and may impact everyone's access to the area. Find out more information at the <a href="http://www.accessfund.org/site/c.tmL5KhNWLrH/b.5000925/k.E6B4/Education.htm" target="_blank" rel="noopener noreferrer">Access Fund's Education page. <FaExternalLinkAlt /></a>
                    </Card.Text>
                    <Card.Subtitle>Late Exit Information</Card.Subtitle>
                    <Card.Text className="pl-3">
                        Need to stay late in Red Rock? Be sure to get a late exit permit or face a potential hefty citation when you return to your car. If you need access to the 13-Mile Scenic Drive to stay late, get a late exit pass at <a href="https://www.recreation.gov/activitypass/f4d17453-0cba-11eb-b57c-4a047fce61ec" target="_blank" rel="noopener noreferrer">Recreation.gov. <FaExternalLinkAlt /></a> A two hour late pass can be issued, depending on the climbing route.  Overnight passes can be given for grade V routes. This pass allows you overnight parking along the scenic drive for the given number of days. If you leave your vehicle parked along the scenic drive without a permit, your vehicle will be cited and possibly towed at owners expense.
                    </Card.Text>

                    {/* <br/> */}
                    {/* //! Does it exist or ? */}
                    {/* <Card.Subtitle>Backcountry Camping Permit? May no longer exist...</Card.Subtitle> */}
                    {/* <br /> */}

                    <Card.Subtitle>Bolting Ban</Card.Subtitle>
                    <Card.Text className="pl-3">
                        There is currently no new route bolting allowed in designated wilderness areas... there is only 1 for 1 replacement of existing old bolts allowed, and by hand drill only.
                    </Card.Text>
                    <Card.Subtitle>Fixed draws in Red Rock / Charleston / Potosi</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://www.southernnevadaclimberscoalition.org/local-ethics/fixed-draws-in-red-rock/" target="_blank" rel="noopener noreferrer">Read about the SNCC's view on them here. <FaExternalLinkAlt /></a><br />
                        Fixed ropes are MUCH less common and are not usually left up for very long, often they are there due to some in-process rebolting effort. If in doubt, ask us about them at our shop. Or on Mountain Project in the Nevada area forum or Facebook Vegas Climbers group.
                    </Card.Text>
                    <Card.Subtitle>Lost and Found</Card.Subtitle>
                    <Card.Text className="pl-3">
                        For climbing gear, the <a href="https://www.mountainproject.com/forum/103989415/lost-and-found" target="_blank" rel="noopener noreferrer">Mountain Project Lost and Found Forum <FaExternalLinkAlt /></a> is the standard place to post. The campground does not have a suitable billboard. For arranging dropping off gear and having someone pick it up, you can do so at our shop. That tends to be a lot easier than trying to coordinate meetups at the campground, remember, bad cell service. The scenic loop itself also has a lost and found, but that is more for general items, not really climbing gear. Its possible your stuff may find its way there if it was found by a non-climber though. It could be worth also checking Mountain Project's Nevada Forum as well as the Vegas Climbers Facebook page.
                    </Card.Text>
                    <Card.Subtitle className='text-center'>
                        ...take only photos, leave only footprints, and no corpses!
                    </Card.Subtitle>
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
                    <Card.Text className="pl-3">The SNCC is the local organization that does the most to secure and maintain climbing access, replace old dangerous bolts and hardware, and does a large amount to maintain the stocks of wag bags / poop bags in dispensers in various areas such as Desert Rock Sports, Kraft Boulders, Black Velvet Canyon, The First Pullout (near the Panty Wall), and The Second Pullout (at the entrance of the Black Corridor).</Card.Text>
                    <Card.Subtitle>Join or make direct donations</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://www.southernnevadaclimberscoalition.org/join-now/" target="_blank"  rel="noopener noreferrer">Join Now! <FaExternalLinkAlt /></a><br />
                        On this page you can find instructions on how to join or make a direct credit card / paypal donation. Another option is to make a cash donation in person at Desert Rock Sports. We encourage $2 / wag bag. If you want to make a donation specifically to rebolting efforts you can just tell us and we will put the cash in an envelope labelled for bolt replacement.
                    </Card.Text>
                    <Card.Subtitle>Report Bad or Loose Bolts and Hardware</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="https://www.mountainproject.com/forum/topic/108676719/bad-bolts-in-las-vegas" target="_blank" rel="noopener noreferrer">Mountain Project RR Bad Bolts Thread <FaExternalLinkAlt /></a><br />
                        Please report bad hardware or other issues that we can help with here. If you don't have a MP account, just fill out the contact form <a href="https://www.southernnevadaclimberscoalition.org/about-us/contact-us/" target="_blank" rel="noopener noreferrer">Contact SNCC <FaExternalLinkAlt /></a> and we will get it added to the thread. I suppose you could also contact us on Instagram instead.
                    </Card.Text>
                    <Card.Subtitle>Want to help replace bolts and hardware?</Card.Subtitle>
                    <Card.Text className="pl-3">
                        <a href="email:snclimberscoalition@gmail.com" target="_blank" rel="noopener noreferrer"><HiOutlineMail /> Email us</a><br />
                        The SNCC Rebolting Mentor Project is a great way to give back directly to the climbing community by putting in work to replace bolts and hardware. Bolt replacement is usually a pretty thankless dirty, sweaty, tiring ordeal and we are always looking for help, even if it is just helping us hike some heavy bags of hardware around.
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Wet Rock',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>Wet Rock Issues</Card.Subtitle>
                    <Card.Text className="pl-3"><a href="https://www.southernnevadaclimberscoalition.org/local-ethics/climbing-after-rain/" target="_blank" rel="noopener noreferrer">Climbing After Rain <FaExternalLinkAlt /></a> - The SNCC handles this topic very well. Its a huge issue in Red Rock. Read up!</Card.Text>
                </>
            )
        }
    ]
};