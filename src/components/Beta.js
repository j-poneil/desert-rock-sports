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
import TemplatePropsTest from './beta/TemplatePropsTest';

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
    //! testing
    const templatePropsTestSections = [
        {
            subSectionTitle: '1st subSection Title',
            subSectionContent: 'subSection content'
        },
        {
            subSectionTitle: '2nd subSection Title',
            subSectionContent: 'subSection content'
        },
        {
            subSectionTitle: '3rd subSection Title',
            subSectionContent: 'subSection content'
        }
    ];
    // That works...
    // In practice I'd need to parse HTML... but I'd need to switch away from Card components in the content then? Hmm
    // I wish I could do...
    // import generalInfoContent from './whatev/thing';
    // then use it in the functional stateless component... passed in as props to 'subSectionArrayOfObjects'
    //? any other options?
    // I was kinda thinking the content as a string that is parsed as HTML...
    // could I just do it as straight JSX imported from another file?
    const subSection1Content = (<Card></Card>);
    // I should be able to.
    // That way I can avoid needing to parse HTML as well as maintaining the ability to use react-bootstrap components... without getting too messy.
    //? How should I structure it?
    // js file with multiple subSections declared as contstants, then export them all at the bottom?
        // no... file would get massive
    // js file for each subSection?
        // thinking yes. Small individual files so less scrolling around to find stuff.
    // in beta.js
        // import all the subSections
        // hand write out the major section titles, accordionBaseIds, eventKeyBase, etc... in return statement
        // in Beta function statement make a const, array of objects with 2 keys, subSectionTitle and subSectionContent
        // fill out the subSectionTitles manually
        // paste in { whateverConstJSXstoredIn } for subSectionContent
        // ... would that work???
    //? Does trying to implement similar JSX usage in other places like news and guideTiers make any sense... think about it.
    //! Actually I think this wont work... as I'm passing an array of objects into this as props... I don't think I can put straight JSX in an object and pass it w/o having to parse HTML to get it back...
    //% maybe I could pass the JSX separate from the array of objects?
    // testing is in order...



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

            {/* 
                //! - style={{'height': '100%'}}
                //! - Can I use it to get things to look better?
                //! - Should I use it?
                //? - Should I maybe just have 1 column... or rather no column?
                    //? - then inside of each major section component have row/col set up to break stuff up?
                    //... thinking no... but not thinking too hard about it either right now
            */}
            <Row xxl={3} xl={3} lg={3} md={2} sm={2} xs={1}>
                <Col>
                    <GeneralInfo />
                    <LodgingLogistics />
                    <Food />
                    {/* <OtherOutdoor /> */}
                    {/* <RouteRecommendations /> */}
                    {/* <Gyms /> */}




                    {/* //! ^ Working on filling out / hooking up */}
                    {/* //! TESTING BELOW */}
                    <Template />
                    <Template />
                    <TemplatePropsTest
                        title='Test Title'
                        accordionIdBase='testAccordion'
                        eventKeyBase='testEventKey'
                        subSectionArrayOfObjects={ templatePropsTestSections }
                    />
                    {/* //! TESTING ABOVE */}

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