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
// unused so far: FaDirections, FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt, FaMap, FaPhone
import { FaExternalLinkAlt } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';


// photo imports
// import Photo from '..something../img/beta/photo.jpg';
// these SVG are now all camelCased and wrapped as JSX functional default export components, memoized too
// import OtherOutdoor_290_1 from '../../img/accordionBgs/asJSX/OtherOutdoor_290x95';
// import OtherOutdoor_690_1 from '../../img/accordionBgs/asJSX/OtherOutdoor_690x95';
// import OtherOutdoor_930_1 from '../../img/accordionBgs/asJSX/OtherOutdoor_930x95';
// import OtherOutdoor_1250_1 from '../../img/accordionBgs/asJSX/OtherOutdoor_1250x95';
import OtherOutdoor_290_1 from '../../img/accordionBgs/working/OtherOutdoor_290x95_1.svg';
import OtherOutdoor_690_1 from '../../img/accordionBgs/working/OtherOutdoor_690x95_1.svg';
import OtherOutdoor_930_1 from '../../img/accordionBgs/working/OtherOutdoor_930x95_1.svg';
import OtherOutdoor_1250_1 from '../../img/accordionBgs/working/OtherOutdoor_1250x95_1.svg';

// % What this is supposed to have based on notes in Beta.js
// Other outdoor fun
        // Hiking
        // Trail Running
        // Mtn Biking
        // Canyoneering
        // Rainy day options (hiking, hot springs, touristy stuff, etc...)

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

export const otherOutdoor = {
    title: 'Other Outdoor Options',
    accordionIdBase: 'otherOutdoorAccordion',
    eventKeyBase: 'otherOutdoorEKey',
    img290: OtherOutdoor_290_1,
    img690: OtherOutdoor_690_1,
    img930: OtherOutdoor_930_1,
    img1250: OtherOutdoor_1250_1,
    data: [
        {
            subSectionTitle: 'Hiking',
            subSectionContent: () => (
                <>
                    <Card.Subtitle>General Resources</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.alltrails.com" target="_blank" rel="noopener noreferrer">AllTrails <FaExternalLinkAlt /></a><br />
                        <a href="https://www.birdandhike.com" target="_blank" rel="noopener noreferrer">Bird and Hike <FaExternalLinkAlt /></a><br />
                        <a href="https://www.hikinglasvegas.com/" target="_blank" rel="noopener noreferrer">Hiking Las Vegas <FaExternalLinkAlt /></a><br />
                        <a href="https://www.52peakclub.com/" target="_blank" rel="noopener noreferrer">52 Peaks Club <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>White Rock Loop + La Madre Spring - 7.5mi 1500' gain</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.alltrails.com/explore/trail/us/nevada/white-rock-la-madre-springs-loop-trail" target="_blank" rel="noopener noreferrer">See it on AllTrails <FaExternalLinkAlt /></a><br />
                        T2's favorite for hiking and trail running. T2 prefers to start at Willow Springs and go clockwise around White Rock. In the summer it can still be a good option if you time it so that you are starting later in the day and aiming to finish around the time the scenic loop closes. This way you start in the sun for maybe 30min, then the cast shadows cover you up and you are in shadow the rest of the loop.
                    </Card.Text>
                    <Card.Subtitle>Bridge Mountain - 14.2mi 4700' gain</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.alltrails.com/explore/trail/us/nevada/bridge-mountain-trail" target="_blank" rel="noopener noreferrer">See it on AllTrails <FaExternalLinkAlt /></a><br />
                        <a href="https://www.birdandhike.com/Hike/Red_Rocks/BridgeMtnTr/_BridgeMtn.htm" target="_blank" rel="noopener noreferrer">See it part 1 on Bird and Hike <FaExternalLinkAlt /></a><br />
                        <a href="https://www.birdandhike.com/Hike/Red_Rocks/BridgeMtnRt/_BridgeMtnRt.htm" target="_blank" rel="noopener noreferrer">See it part 2 on Bird and Hike <FaExternalLinkAlt /></a><br />
                        Bridge Mountain is a huge hike with scrambling near the end for a huge day. It takes you to very remote areas of Red Rock. Take it seriously. You will want ample water and snacks, approach shoes, emergency supplies, and ample time.
                    </Card.Text>
                    <Card.Subtitle>The Grand Circle - 11.5mi 1500' gain</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.alltrails.com/explore/trail/us/nevada/grand-circle-adventure-trail" target="_blank" rel="noopener noreferrer">See it on AllTrails <FaExternalLinkAlt /></a><br />
                        The Grand Circle is huge loop trail. Perhaps on the sunny side, but great training for trail running. You can add Turtle Head Peak and/or White Rock Loop if you are a glutton for punishment. Get an early start.
                    </Card.Text>
                    <Card.Subtitle>Mt Wilson via First Creek - 10mi 3400' gain</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.alltrails.com/explore/trail/us/nevada/mount-wilson-via-first-creek-trail" target="_blank" rel="noopener noreferrer">See it on AllTrails <FaExternalLinkAlt /></a><br />
                        This could be a great option for climbers who are looking to do any of the big multipitch routes on Mt Wilson and plan to walk down. You can scope out your descent ahead of time!
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>Bristlecone Loop @ Charleston 5.7mi 930'</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.alltrails.com/explore/trail/us/nevada/upper-and-lower-bristlecone-loop" target="_blank" rel="noopener noreferrer">See it at AllTrails <FaExternalLinkAlt /></a><br />
                        Great loop up at higher elevation to hike or trail run in the summer. Most people tend to go counter clockwise from the lower trailhead. You can also use it to access the Bonanza trail if you are looking for more of an all day hike.
                    </Card.Text>
                    <Card.Subtitle>Mary Jane Falls @ Charleston - 2.5mi 930' gain</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.alltrails.com/explore/trail/us/nevada/mary-jane-falls-trail" target="_blank" rel="noopener noreferrer">See it at AllTrails <FaExternalLinkAlt /></a><br />
                        A good short option at elevation. Still a bit of a climb. Nice shortly after a rain as the falls may actually be running then, OR when there is still snow melt above.
                    </Card.Text>
                    <Card.Subtitle>Griffith Peak @ Charleston - 10.2mi 3500' gain</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.alltrails.com/explore/trail/us/nevada/griffith-peak-via-south-loop" target="_blank" rel="noopener noreferrer">See it on AllTrails <FaExternalLinkAlt /></a><br />
                        This is an excellent option to get a lot of elevation gain in quickly for training and/or altitude acclimation. Nice views all around and not quite as committing as Charleston Peak.
                    </Card.Text>
                    <Card.Subtitle>Charleston Peak - 14-21.5+ mi ~5000' gain</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.alltrails.com/explore/trail/us/nevada/charleston-peak-south-trail" target="_blank" rel="noopener noreferrer">South Loop Trail - 16.6mi 4900' gain <FaExternalLinkAlt /></a><br />
                        <a href="https://www.alltrails.com/explore/trail/us/nevada/mount-charleston-north-to-south-via-trail-canyon" target="_blank" rel="noopener noreferrer">N to S via Trail Canyon - 18.2mi 4900' gain <FaExternalLinkAlt /></a><br />
                        <a href="https://www.alltrails.com/explore/trail/us/nevada/charleston-peak-north-trail--2" target="_blank" rel="noopener noreferrer">North Loop Trail - 21.5mi 5650' gain <FaExternalLinkAlt /></a><br />
                        <a href="https://www.alltrails.com/explore/trail/us/nevada/mt-charleston-via-deer-creek-trail" target="_blank" rel="noopener noreferrer">Via Deer Creek Trail - 14.7mi 5500'gain <FaExternalLinkAlt /></a><br />
                        Many options. All with a ton of elevation gain. This is a long day, but a great summit. You need to know full well what you are getting into.
                    </Card.Text>
                    <Card.Subtitle>Raintree Trail  @ Charleston - 5.3mi 1800' gain</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.alltrails.com/explore/trail/us/nevada/raintree-trail" target="_blank" rel="noopener noreferrer">See it at AllTrails <FaExternalLinkAlt /></a><br />
                        Great hike to a huge old growth Bristlecone Pine. If you want a longer day, you can branch out and go do <a href="https://www.alltrails.com/explore/trail/us/nevada/mummy-mountain-via-mummy-spring-trail" target="_blank" rel="noopener noreferrer">Mummy Peak (11.1mi 3750' gain) <FaExternalLinkAlt /></a> too, though it is not much of an established trail and will easily double the time needed for the hiking, atleast.
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Trail Running',
            subSectionContent: () => (
                <>
                    <Card.Title>Trail Running</Card.Title>
                    <Card.Subtitle>General Resources</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.trailrunproject.com/" target="_blank" rel="noopener noreferrer">Trail Run Project <FaExternalLinkAlt /></a><br />
                        <a href="https://www.alltrails.com" target="_blank" rel="noopener noreferrer">AllTrails <FaExternalLinkAlt /></a><br />
                        <a href="https://www.trailforks.com/" target="_blank" rel="noopener noreferrer">Trailforks Route Database <FaExternalLinkAlt /></a><br />
                        These links should get you started! Or heres a select few below!
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>Grand Circle Loop</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.trailrunproject.com/trail/7049089/grand-circle-loop" target="_blank" rel="noopener noreferrer">Grand Circle Loop on Trail Run Project <FaExternalLinkAlt /></a><br />
                        11.8mi of excellent views of Red Rock Canyon. Great when its cool out.
                    </Card.Text>
                    <Card.Subtitle>Upper + Lower Bristlecone</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.alltrails.com/trail/us/nevada/upper-and-lower-bristlecone-loop" target="_blank" rel="noopener noreferrer">Upper + Lower at AllTrails<FaExternalLinkAlt /></a><br />
                        Up at Charleston, this loop trail is great for when its hot out. Bunch of elevation gain/loss though.
                    </Card.Text>
                    <Card.Subtitle>Historic Railroad Tunnels, Hoover Dam Bridge</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.trailrunproject.com/trail/7010999/historic-rr-tunnels-hoover-dam-bridge" target="_blank" rel="noopener noreferrer">Historic RR Tunnels @ Hoover Dam on Trail Run Project <FaExternalLinkAlt /></a><br />
                        8.9mi of historic trail passing through railroad tunnels and getting views of the Hoover Dam. Good for cooler weather and if you don't mind not getting as much greenery. Not much elevation gain/loss.
                    </Card.Text>
                    {/* <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                    </Card.Text> */}
                </>
            )
        },
        {
            subSectionTitle: 'Mountain Biking',
            subSectionContent: () => (
                <>
                    <Card.Title>Mountain Biking</Card.Title>
                    <Card.Subtitle>Soooo many options. Its insane.</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.trailforks.com/" target="_blank" rel="noopener noreferrer">Trailforks Route Database <FaExternalLinkAlt /></a><br />
                        This is your best bet for finding the best trails.
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Canyoneering',
            subSectionContent: () => (
                <>
                    <Card.Title>Canyoneering</Card.Title>
                    <Card.Subtitle>Las Vegas Slots by Rick Ianniello</Card.Subtitle>
                    <Card.Text>
                        {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br /> */}
                        [ LINK TO BOOK NEEDS TO BE ADDED ]<br />
                        Great book for canyoneers to get familiar with what the Vegas area has to offer. Available at Desert Rock Sports.
                    </Card.Text>
                    <Card.Subtitle>BluuGnome</Card.Subtitle>
                    <Card.Text>
                        <a href="http://www.bluugnome.com/cyn_route/red-rock_nv/canyon-routes__red-rock_nv.aspx" target="_blank" rel="noopener noreferrer">Red Rock Canyoneering Routes <FaExternalLinkAlt /></a><br />
                        <a href="http://www.bluugnome.com/cyn_route/charleston_nv/canyon-routes__charleston_nv.aspx" target="_blank" rel="noopener noreferrer">Mt Charleston Canyoneering Routes <FaExternalLinkAlt /></a><br />
                        <a href="http://www.bluugnome.com/cyn_route/lake-mead/canyon-routes__lake-mead.aspx" target="_blank" rel="noopener noreferrer">Lake Mead Area Canyoneering Routes <FaExternalLinkAlt /></a><br />
                        <a href="http://www.bluugnome.com/cyn_route/stateline-hills_nv/canyon-routes__stateline-hills_nv.aspx" target="_blank" rel="noopener noreferrer">Stateline Hills Canyoneering Routes <FaExternalLinkAlt /></a><br />
                        <a href="http://www.bluugnome.com/cyn_route/valley-of-fire/canyon-routes__valley-of-fire.aspx" target="_blank" rel="noopener noreferrer">Valley of Fire Canyoneering Routes <FaExternalLinkAlt /></a>
                    </Card.Text>
                    <Card.Subtitle>Adventure Hikes and Canyoneering in the Southwest</Card.Subtitle>
                    <Card.Text>
                        <a href="http://www.dankat.com/swhikes/content.htm" target="_blank" rel="noopener noreferrer">Adventure Hikes and Canyoneering in the Southwest <FaExternalLinkAlt /></a><br />
                        Great resource
                    </Card.Text>
                    <Card.Subtitle>Las Vegas Canyoneering Meetup Group</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.meetup.com/Las-Vegas-Canyoneering-Meetup-Group/" target="_blank" rel="noopener noreferrer">Meetup Group <FaExternalLinkAlt /></a><br />
                        Some comment
                    </Card.Text>
                    {/* <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                    </Card.Text> */}
                </>
            )
        },
        {
            subSectionTitle: 'Rainy Day Options',
            subSectionContent: () => (
                <>
                </>
            )
        },
    ]
};

