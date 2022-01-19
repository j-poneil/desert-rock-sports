import React from 'react';

import { Player } from 'video-react';

import "../../node_modules/video-react/dist/video-react.css";

import Rock_Wet_Inside_Preview from '../vid/rock_wet_inside_preview_732x792.jpg';
import Rock_Wet_Inside from '../vid/rock_wet_inside.mp4';



import {
    FaInstagram,
    FaYoutube,
    FaHome,
    FaGithub,
    FaDownload,
    FaFileDownload,
    FaFileVideo,
    FaRegFileVideo,
    FaExternalLinkAlt
} from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';


const Weather = () => {
    return (
        <Container fluid className="mt-3">
            <Jumbotron className="text-center mb-3">
                <h1>Weather</h1>
                <p>Vegas is known for an average of over 300 sunny days per year. Even still, it can, and does rain. Further complication is that Red Rock Canyon, at a higher elevation, tends to get hit harder than Las Vegas itself. As well, there are no weather stations out in/on the rocks (yet?) so our best look at rainfall measurements are from just a few weather stations in the general area which often have recorded nothing when its plainly obvious for anyone to see that the canyons are getting dumped on.</p>
                <p>The Spring Mountains act as a barrier to storms coming from the Pacific and very often these storms will dump on these mountains and Las Vegas itself will see very little if any rain. Unfourtunately Red Rock Canyon is between the two and often gets some of the precipitation. Higher elevation areas tend to get hit harder than lower ones. Sometimes the Calico Hills don't get hit, or get light precip while the canyons are soaked. Sometimes everything gets soaked. If Las Vegas itself is visibly wet, it is almost assured that Red Rock Canyon was hit as well.</p>

                <a href="https://www.blm.gov/sites/blm.gov/files/documents/files/Nevada_Red_Rock_Canyon_Weather_Brochure.pdf" target="_blank" rel="noopener noreferrer">BLM Red Rock Canyon Weather Brochure (pdf)</a>
                {/* <p></p> */}
            </Jumbotron>

            <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1}>
                <Col className="mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Title>The Science of Wet Sandstone</Card.Title>
                            <Card.Text>
                                <h5>There are many types of sandstone. Different strengths. Different resistances to water.</h5>
                                <p>The sandstone here at Red Rock Canyon is not as weak as the sandstone at the Fisher Towers in Moab (mud). It is also not as strong as the sandstone found in places such as the Red River Gorge or Horseshoe Canyon Ranch. Also much weaker than the sandstone at Eldorado Canyon in CO, which has been changed by heat and pressure, fusing it to a larger degree to something closer to granite, while technically still a stone made of sand.</p>
                                <p>Our Red Rock Canyon NCA sandstone is fairly porus and loses a significant amount of strength when wet. Unfortunately, because it is porus, the surface can look and feel dry to the touch, but it can still have a lot of water inside. This makes it tricky to know when it is safe enough to climb.</p>
                                <p></p>

                                <h5>Damage and Dangers of climbing on wet sandstone</h5>
                                <p>Holds can break with much less force, permanently altering climbs and resulting in dangerous unexpected falls, especially on low angle terrain. Bolt holes can be enlarged when the metal flexes and errodes the now weaker rock leading routes to require more frequent bolt replacement and in some cases has even caused unexpected early bolt failure (pullout as well as rock failure). Trad protection is more likely to fail by breaking the rock... Remember, a trick of the trade in stuck gear removal is to pour a little bit of water on it, to weaken the rock that the cam or nut is contacting so that a bit of flexing can errode the rock enough to loosen the placement and allow removal.</p>

                                <h5>How to climb and protect DRY sandstone</h5>
                                <h6>Pull down, not out</h6>
                                <p>When climbing obviously hollow and flake features be mindful to pull down or in the direction that the flake can be pulled on with the least chance of prying it off the wall. Try to not lie-back the feature as this puts excessive force on it, unless it is an obviously large and unquestionably solid flake.</p>

                                <h6>Don't put cams behind flakes or against flakes inside of cracks</h6>
                                <p>Cams work by camming, or said another way, leverage and multiplying force. Hanging or falling on one will put several times higher force than your body sees pushing out on both sides. Passive wedge gear like nuts and hexes is less likely to pry the flake off. Ideally seek non-flake features whenever possible. Unless its a huge and unquestionably solid feature, look at any cams behind flakes as psychological protection or to keep a rope from getting sucked into a crack only and extremely likely to fail if falled on, permanently altering the route and sending rock down on anyone below.</p>

                                <h6>Be mindful of the bolt you are clipping</h6>
                                <p>Bolts are typically very solid, but they have failed here before. As its very dry here many are plated steel, not stainless. Some areas see more moisture than others producing rusty monstrosities. Ideally they would all be stainless 5-6" glue-ins, but the bolting and re-bolting restrictions in place make re-bolting all of Red Rock an extremely tall order. SNCC is focusing rebolting and maintenance efforts on the most popular routes first, or when dangerously rusty or loose hardwear is called out on Mountain Project in the <a href="https://www.mountainproject.com/forum/topic/108676719/bad-bolts-in-las-vegas" target="_blank" rel="noopener noreferrer">Bad Bolts Thread <sup><FaExternalLinkAlt /></sup></a>.</p>
                                <p>Well traveled sport routes are typically very solid. However, classic trad routes out in the canyons can often take a long time to get updated due to the increased time commitment of hiking and hauling the gear out there, and then hand drilling holes and removing the old hardwear. Its a TON of work and a huge time commitment. Even popular routes can take a long time to get re-equipped, like Inti Watana, which was only just rebolted in October 2019. When these old routes are updated, often the rebolter will leave a few of the old bolts on the route, only as a historical relic to admire, don't clip them as pro! <a href="http://www.southernnevadaclimberscoalition.org/" target="_blank" rel="noopener noreferrer">Join or Donate to the SNCC here <sup><FaExternalLinkAlt /></sup></a></p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{'height': '100%'}}>
                        {/* <Card.Img src={ Cat_medium } alt="Stuffed animal hanging out in a sandstone nook" /> */}
                        <Player
                            playsInline
                            poster={ Rock_Wet_Inside_Preview }
                            src={ Rock_Wet_Inside }
                        />
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Title>When is it dry enough?</Card.Title>
                            <Card.Text>
                                <p>Hard to be sure! Depends on how much rain the desired objective's area got hit with, ambient day and night temperatures, humidity, its sun exposure, wind, etc... Areas that get a ton of sun and wind will dry faster. Areas that stay in shade will take much longer.</p>
                                <p>... Since its hard to know exactly how much rain hit any given area unless you were actually out there the entire time it was happening, its hard to know how wet it is. The rain gauges are not close enough or numerous enough to be much help (yet). Word of mouth from people who were actually there at the time is the best info you can get. Not simply at Red Rock, but at the particular canyon in Red Rock that you are interested in climbing at. Often it rains overnight and no one was out there to know how bad it was until they hike out there to look.</p>

                                <h6>In the Summer</h6>
                                <p>Very sunny aspects are typically OK to climb in 24h if they only got a light sprinkle, 48-72h for heavier rains.</p>
                                <p>Very shady aspects are typically OK to climb in 48-72h if they only got a light sprinkle, 96h+ for heavier rains.</p>

                                <h6>In the Winter</h6>
                                <p>Very sunny aspects are typically OK to climb in 48h if they only got a light sprinkle, 72-96h+ for heavier rains.</p>
                                <p>Very shady aspects are typically OK to climb a week later.</p>

                                <h6>The Horde Effect</h6>
                                <p>Red Rock routes when they are brand new typically have tons of loose rock, weak flake holds, weak edges on holds, etc... As more people climb these routes, wet or not, these weaker parts break off. Classic and mega-classic routes with high hundreds to thousands of noted ascents on Mountain Project are typically much cleaner with very little loose rock left, unless the loose and dangerously weak holds are very obvious and everyone avoids them.</p>
                                <p>If you are trying to avoid the crowds and seeking out obscure routes, beware to give the rock extra time to dry and/or be extra mindful as you climb of what you are using for holds and where you are placing pro.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Title>Links</Card.Title>
                            <Card.Text>
                                <a href="https://wetrockpolice.com/redrock" target="_blank" rel="noopener noreferrer">Wet Rock Police - Red Rock <sup><FaExternalLinkAlt /></sup></a>
                                <p>Excellent site for looking at real-time and historical rain fall. It uses the weather station at the Red Rock Canyon NCA Visitor Center. It is known that sometimes (often) the visitor center doesn't get any rain while the canyons get soaked, so it is not a go / no go indicator. It is simply data from one rain gauge, a few miles away, updated hourly.</p>

                                
                                <a href="https://www.facebook.com/groups/ClimbVegas" target="_blank" rel="noopener noreferrer">ClimbVegas Facebook Group <sup><FaExternalLinkAlt /></sup></a>
                                <p>This is a good place to ask about weather and if it rained at Red Rock and how long until your area of interest is probably dry enough. Chances are that there is already discussion if there has been recent rain.</p>

                                <a href="https://www.mountainproject.com/forum/104554750/nevada" target="_blank" rel="noopener noreferrer">Mountain Project Nevada Forum <sup><FaExternalLinkAlt /></sup></a>
                                <p>Nevada specific forum section on Mountain Project. Another good option to look for threads about recent weather or ask.</p>
                                

                                <a href="https://www.instagram.com/p/Bufa9MonFfw/" target="_blank" rel="noopener noreferrer">One example of what wet rock can look like inside (Instagram) <sup><FaExternalLinkAlt /></sup></a>
                                <br />
                                <a href="../vid/rock_wet_inside.mp4" target="_blank" rel="noopener noreferrer">download .mp4 to send to your friends (1.9 MB) <sup><FaDownload /></sup></a>


                                <a href="" target="_blank" rel="noopener noreferrer"></a>
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a> */}
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a> */}
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a> */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* <Col className="mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Title>Links</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> */}
                {/* <Col className="mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                lorem ipsum et dolor something yada ydad dydyafdsa
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> */}
            </Row>
            
        </Container>
    )
}

export default Weather;
