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
                        <a href="https://www.trailforks.com/" target="_blank" rel="noopener noreferrer">Trailforks Route Database <FaExternalLinkAlt /></a>
                    </Card.Text>
                    <hr />


                    <Card.Subtitle>Kraft Mountain Loop - 3.2mi 600' gain</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.alltrails.com/trail/us/nevada/kraft-mountain-loop" target="_blank" rel="noopener noreferrer">See it on AllTrails <FaExternalLinkAlt /></a><br />
                        Nice shorter trail around Kraft Mountain. The elevation gain will still get you, especially if you go clockwise. Passes through Kraft Boulders so you may be many people out Bouldering.
                    </Card.Text>
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
                        Their Route Planning tool is fantastic, though there is a bit of a learning curve. Highly recommend trying it out and linking up some trails to run.
                        <br />
                        <br />
                        Those links should get you sorted, otherwise heres a few recommendations:
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
                        This is your best bet for finding the best trails. Vegas has many trail networks. So usually you will be at a trail network and link up several trails to build an outing that interests you instead of sticking on a single trail the entire time.
                        <br />
                        <a href="https://www.twowheeledwanderer.com/posts/las-vegas-mountain-biking/" target="_blank" rel="noopener noreferrer">Two Wheeled Wanderer <FaExternalLinkAlt /></a><br />
                        Great recommendations on areas and trails
                        <br />
                        <a href="https://www.lasvegascyclery.com/" target="_blank" rel="noopener noreferrer">Las Vegas Cyclery <FaExternalLinkAlt /></a><br />
                        Awesome spot to get your bike, get it serviced, or rent one.
                        <br />
                        <a href="https://escapeadventures.com/destination/nevada-bike-tours/" target="_blank" rel="noopener noreferrer">Escape Adventures <FaExternalLinkAlt /></a><br />
                        Runs bike tours, shuttles, etc...
                        {/* <br /> */}
                        {/* <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                        <br /> */}
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>Blue Diamond Loop - 9.5mi 640' gain</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.trailforks.com/route/blue-diamond-loop" target="_blank" rel="noopener noreferrer">See it at trailforks <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle>Ebbing &amp; Flowing - 12.9mi 1720' gain</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.trailforks.com/route/ebbing--flowing/" target="_blank" rel="noopener noreferrer">See it at trailforks <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle>Bear's Best Loop - 10.9mi 895' gain</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.trailforks.com/route/las-vegas-bear-s-best" target="_blank" rel="noopener noreferrer">See it at trailforks <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    {/* <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text> */}
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
                        <a href="https://inlo.blog/" target="_blank" rel="noopener noreferrer">Rick's Blog</a><br />
                        Great book for canyoneers to get familiar with what the Vegas area has to offer. Available at Desert Rock Sports and a few other retailers.
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
                        A good option to make some friends in the local community.
                    </Card.Text>
                    <hr />

                    <Card.Subtitle>Ice Cube Canyon (The Maze)</Card.Subtitle>
                    <Card.Text>
                        <a href="http://ropewiki.com/Ice_Cube_Canyon_(The_Maze)" target="_blank" rel="noopener noreferrer">The Maze</a><br />
                        Perhaps the most known canyoneering route in the Vegas area.
                    </Card.Text>
                </>
            )
        },
        {
            subSectionTitle: 'Rainy Day Options',
            subSectionContent: () => (
                <>
                    <Card.Title>Hot Springs</Card.Title>
                    <Card.Text>
                        <a href="https://goo.gl/maps/At2r4Pn4fEuoukRe9" target="_blank" rel="noopener noreferrer">Gold Strike Hot Springs Trailhead on Google Maps <FaExternalLinkAlt /></a><br />
                        <a href="https://goo.gl/maps/rU1vrTK5SBpBY2tH8" target="_blank" rel="noopener noreferrer">Arizona Hot Springs Trailhead on Google Maps <FaExternalLinkAlt /></a><br />
                        <strong>Both are closed in the summers from May 15th - September 30th.</strong><br />
                        Trust us, you don't want to go to either of them when it is that hot out anyways.<br />
                        <strong>Due to the inherint brain eating amoeba risk at natural hot springs, do not submurge your nose in the water. This pathogen gets in through the nose. While certainly rare, infection is almost always fatal. The culprit is the amoeba Naegleria Fowleri which can survive up to 115F. Hot springs that humans can tollerate are within its habitable zone.</strong><br />
                        The approach to Gold Strike Hot Springs is a bit more involved with more boulder hopping, some hand over hand on fixed ropes, etc... While the approach to Arizona Hot Springs is longer.<br />
                        <br />
                        Both are great hot spring options. Both free. Practice leave no trace. Excellent for rainy/dryout or rest days. There is a decent hike required to either and the hot water will also dehydrate you to a suprising degree, so be sure to bring enough water and snacks. If you bring beer, please, aluminum or steel cans, not glass, and of course pack it out. Be sure to have some form of GPS (ie. cell phone) as the trails out here are not exactly marked well, lots of forks to different places.<br />
                        <br />
                        Water will be scalding hot where it seeps out of the rocks and will get more tollerable the further away you get from it. For example, at Arizona Hot Springs, if you are coming in from the top (as opposed to from next to the river) you will probably want to move very quickly through the first pool as its uncomfortably hot (yes, even for women). The 2nd and third pool down are much more tollerable temperatures.
                    </Card.Text>
                    <hr />

                    <Card.Title>Non-Sandstone Climbing</Card.Title>
                    <Card.Subtitle>The Gun Club, Lone Mountain, and The La Madre Range</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.mountainproject.com/area/105887126/the-gun-club" target="_blank" rel="noopener noreferrer">See The Gun Club on Mountain Project <FaExternalLinkAlt /></a><br />
                        <a href="https://www.mountainproject.com/area/105852099/lone-mountain" target="_blank" rel="noopener noreferrer">See Lone Mountain on Mountain Project <FaExternalLinkAlt /></a><br />
                        These are the closest to Vegas go-to limestone sport options when it rains or the rock still needs time to dry out. They are practically IN Vegas. Both have very short approaches. The greater La Madre Range also has other options to check out, they are just a bit more obscure, and/or recent construction has complicated access trails. Best in the cooler months, but you can still often tollerate climbing in the summer as long as you stay in the shade (very early morning start or late after noon... or at night!).
                    </Card.Text>
                    <Card.Subtitle>Mt. Charleston</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.mountainproject.com/area/105850026/mount-charleston" target="_blank" rel="noopener noreferrer">See it on Mountain Project <FaExternalLinkAlt /></a><br />
                        Mt. Charleston is an excellent option for limestone sport close to Vegas. High elevation so usually best as a summer option. Usually a good option May thru September or October depending on weather.
                    </Card.Text>
                    <Card.Subtitle>Mt. Potosi</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.mountainproject.com/area/107690045/mount-potosi" target="_blank" rel="noopener noreferrer">See it on Mountain Project <FaExternalLinkAlt /></a><br />
                        Another great limestone sport option close to Vegas. Not as high elevation at Mt. Charleston, so it can sometimes still be a winter option.
                    </Card.Text>
                    <Card.Subtitle>Keyhole Canyon</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.mountainproject.com/area/105941578/keyhole-canyon" target="_blank" rel="noopener noreferrer">See it on Mountain Project <FaExternalLinkAlt /></a><br />
                        A close to Vegas area of granite similar to J-Tree. Old school ratings. Unlikely to see bolts. Best April-October<br />
                        The Keyhole Classic is a climbing fest that happens yearly the first weekend after Halloween here.
                    </Card.Text>
                    <Card.Subtitle>Lime Kiln Canyon</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.mountainproject.com/area/106795137/lime-kiln-canyon" target="_blank" rel="noopener noreferrer">See it on Mountain Project <FaExternalLinkAlt /></a><br />
                        Great limestone sport option nearby in Arizona. Lime Kiln is best in the fall and spring. Winter is cold and summer is hot. Human waste is a problem both near The Grail and near the camping/parking areas. Please come prepared to pack your shit out. Best June-September.
                    </Card.Text>
                    <Card.Subtitle>Virgin River Gorge</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.mountainproject.com/area/106062943/virgin-river-gorge" target="_blank" rel="noopener noreferrer">See it on Mountain Project <FaExternalLinkAlt /></a><br />
                        Hard limestone sport climbing. Grades pretty much start at 5.12. Best April-October.
                    </Card.Text>
                    <Card.Subtitle>Joshua Tree, Paradise Forks, and ... ?</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.mountainproject.com/area/105720495/joshua-tree-national-park" target="_blank" rel="noopener noreferrer">Joshua Tree NP on Mountain Project <FaExternalLinkAlt /></a><br />
                        <a href="https://www.mountainproject.com/area/105787813/paradise-forks" target="_blank" rel="noopener noreferrer">Paradise Forks on Mountain Project <FaExternalLinkAlt /></a><br />
                        <a href="https://www.mountainproject.com/area/105849658/rainbow-canyon" target="_blank" rel="noopener noreferrer">Rainbow Canyon <FaExternalLinkAlt /></a><br />
                        {/* Bishop<br /> */}
                        {/* New Jack City<br /> */}
                        {/* Arrow Canyon<br /> */}
                        {/* <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br /> */}
                        If you are at Red Rock Canyon for trad, not sport, and we get too much rain, such that you know you wont be able to climb for several days, consider changing your trip entirely. JTree dries out fast and the rain wont hurt it. Paradise Forks and Rainbow Canyon will often get hit by the same storms that hit Red Rock, so double check weather and historical weather, but rain wont hurt these rock types either and they are great options for trad.
                    </Card.Text>
                    <br />
                    There are MANY less traveled, but still documented non-sandstone options near Vegas. I have only touched on the more popular ones here. Get on Mountain Project and go nuts.<br />
                    People often think St. George sandstone will be dry when Red Rock gets rain, the unfortunate reality is that typically storms will hit both. You can always get in a St. George climbing group and ask though. Maybe you will get lucky.
                    <hr />

                    <Card.Title>Indoor Climbing</Card.Title>
                    {/* <Card.Subtitle></Card.Subtitle> */}
                    <Card.Text>
                        {/* <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br /> */}
                        Its not the beautiful Red Rock sandstone you want, but its convienient, affordable, and fun. Check out the Gyms section for a full list.
                    </Card.Text>
                    <hr />

                    <Card.Title>Touristy Things</Card.Title>
                    <Card.Subtitle>See a show</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.vegas.com/shows/" target="_blank" rel="noopener noreferrer">Find out whats going on here <FaExternalLinkAlt /></a><br />
                        Vegas is world reknown for its shows. Acrobatics, stunts, burlesque, magic, comedy, etc... There are great options for everyone in town.
                    </Card.Text>
                    <Card.Subtitle>See a movie</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.google.com/maps/search/movie+theater/@36.1526004,-115.2868795,11z" target="_blank" rel="noopener noreferrer">Google map of local theatres <FaExternalLinkAlt /></a><br />
                        Many theatres in town. While not something unique to Vegas, still an excellent rainy day activity option.
                    </Card.Text>
                    <Card.Subtitle>Ice Skating</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.lasvegasice.com/" target="_blank" rel="noopener noreferrer">Las Vegas Ice <FaExternalLinkAlt /></a><br />
                        Several ice rinks are in town to choose from. As well there are often seasonal outdoor rinks when it is cold enough:
                        <br />
                        <a href="https://summerlin.com/event/rock-rink/" target="_blank" rel="noopener noreferrer">The Rock Rink @ Summerlin <FaExternalLinkAlt /></a><br />
                        November 12, 2021 - January 17, 2022, Presented by Live Nation
                    </Card.Text>
                    <Card.Subtitle>Bowling</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.redrockresort.com/see-and-do/red-rock-lanes/" target="_blank" rel="noopener noreferrer">Red Rock Lanes @ Red Rock Resort &amp; Casino <FaExternalLinkAlt /></a><br />
                        One of the many options in Vegas.
                    </Card.Text>
                    <Card.Subtitle>Mini Golf</Card.Subtitle>
                    <Card.Text>
                        <a href="https://syfyminigolf.com/" target="_blank" rel="noopener noreferrer">Twilight Zone Blacklight Mini Golf <FaExternalLinkAlt /></a><br />
                        Of the many fun options.
                    </Card.Text>
                    <Card.Subtitle>Take a class</Card.Subtitle>
                    <Card.Text>
                        <a href="https://www.lasvegascircuscenter.com/classes" target="_blank" rel="noopener noreferrer">Las Vegas Circus Center Class List <FaExternalLinkAlt /></a><br />
                        Sooo many classes available, such as: Aerial Silks, Aerial Hoop/Lyra, Aerial Pole, Aerial Dance Trapeze, Dance, Ninja Warrior, Parkour, Tricking, Unicycle, Juggling, Chinese Pole, Capoeira, etc...
                        <br />
                        <a href="https://www.polefitnessstudio.com/" target="_blank" rel="noopener noreferrer">Pole Fitness Studio <FaExternalLinkAlt /></a><br />
                        <a href="https://trufusion.com/summerlin/" target="_blank" rel="noopener noreferrer">TruFusion Summerlin <FaExternalLinkAlt /></a><br />
                        One of the nicest fitness studios in Vegas. Yoga, Barre, Cycle, Boxing, Bootcamp, Battle Ropes, HIIT, Kettlebell, Pilates, and more. First Class Free!
                        <br />
                        <a href="https://www.cozymeal.com/las-vegas/cooking-classes" target="_blank" rel="noopener noreferrer"> Cozymeal - Cooking classes from expert chefs<FaExternalLinkAlt /></a><br />
                        <a href="https://www.viator.com/tours/Las-Vegas/Adventure-in-Glassblowing-by-Torch/d684-147752P1" target="_blank" rel="noopener noreferrer">Adventures in Glassblowing by Torch <FaExternalLinkAlt /></a><br />
                        <a href="https://www.eventbrite.com/e/introductory-blacksmith-class-tickets-162744141107" target="_blank" rel="noopener noreferrer">Introductory Blacksmitch Class <FaExternalLinkAlt /></a><br />
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle>Tea/Coffee shops</Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle>Speakeasy / Bar</Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle>Brewery</Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle>Foooooooood</Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle>Area 15 / Omega Mart / etc...</Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle>Art Galleries, Museums</Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle>Hoover Dam</Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle>Ethel M Chocolate factory</Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle>Springs Preserve</Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle>Massage / Yoga / Spa recovery day</Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    {/* <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text> */}
                    <hr />

                    <Card.Title></Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>

                    <Card.Title></Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>
                        <a href="" target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a><br />
                    </Card.Text>
                    <hr />
                </>
            )
        },
    ]
};

