import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

// styles here:
// src\stylesheets\pages\_beta.sass

// ? - Accordian? Cards? Modals? Tabs?


// Route recommendations per style?,
// ----------------------
// Red Rock General Info
// other
// Paid Camping
// Free Camping
// Showers
// Laundry
// Coffee Shops
// Restraunts
// Hiking
// Trail Running
// Mountain biking
// Canyoneering
// Shady options
// Sunny options
// Raindy day / rock needs to dry options
// Crack options
// Offwidth options

// <Card.Subtitle></Card.Subtitle>
// <Card.Text></Card.Text>

export default function Beta(){
    return (
        <Container fluid>
            <Row xl={3} lg={3} md={2} sm={2} xs={1}>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Red Rock General Info</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>other?</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Paid Camping</Card.Title>
                            <Card.Subtitle>Red Rock Canyon Campground</Card.Subtitle>
                            <Card.Text>
                                <a href="https://www.recreation.gov/camping/campgrounds/250877" target="_blank">Check availability and make reservations at Recreaction.gov</a><br />
                                <p>Minutes from Red Rock, ~20mi from The Strip</p>
                                <p>3293 Moenkopi Rd., Las Vegas, NV 89161</p>
                                <p>For campground inquiries, please call: 702-515-5387</p>
                            </Card.Text>
                            <Card.Subtitle>Mahogany Grove @ Mt Charleston</Card.Subtitle>
                            <Card.Text>
                                <a href="https://www.recreation.gov/camping/campgrounds/232167" target="_blank">Check availability and make reservations at Recreation.gov</a><br />
                                <p>Higher elevation option for summer</p>
                            </Card.Text>
                            <Card.Subtitle>Hilltop @ Mt Charleston</Card.Subtitle>
                            <Card.Text>
                                <a href="https://www.recreation.gov/camping/campgrounds/232276" target="_blank">Check availability and make reservations at Recreation.gov</a><br />
                                <p>Higher elevation option for summer</p>
                            </Card.Text>
                            <Card.Subtitle>McWilliams @ Mt Charleston</Card.Subtitle>
                            <Card.Text>
                                <a href="https://www.recreation.gov/camping/campgrounds/232168" target="_blank">Check availability and make reservations at Recreation.gov</a><br />
                                <p>Higher elevation option for summer</p>
                            </Card.Text>
                            <Card.Subtitle>Fletcher View @ Mt Charleston</Card.Subtitle>
                            <Card.Text>
                                <a href="https://www.recreation.gov/camping/campgrounds/234005" target="_blank">Check availability and make reservations at Recreaction.gov</a><br />
                                <p>Higher elevation option for summer</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Free Camping and "Van Life" options</Card.Title>
                            <Card.Subtitle className="text-warning">MAKE SURE YOUR CAMPFIRE IS DEAD OUT, BETTER YET, JUST DON'T HAVE ONE. WE HAVE HAD TOO MANY FIRES. WANT THE WARMTH AND LIGHT? JUST SNUGGLE WITH YOUR FRIENDS.</Card.Subtitle>
                            <Card.Subtitle>Lovell Canyon Rd</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/aug9pC7dWnG7ck1XA" target="_blank">Google Map to Lovell Canyon Rd</a><br />
                                <p>Lovell Canyon Rd has free dispersed camping along a great length of it as well as a designated free campground which has no amenities, its just a cluster of spots closer together. TONS of little dirt roads branch off the main road leading to many, many spots. Higher up locations should have good cell service. Lower down ones, especially after many miles after turning onto the road, will tend to have no cell service.</p>
                                <p>Avoid the tempation to try to sleep at Late Night Trailhead or off any of the dirt roads near Black Velvet Canyon, Windy Peak, etc... You will be asked to leave or be ticketed.</p>
                            </Card.Text>
                            <Card.Subtitle>Mack's Canyon Rd @ Lee Canyon</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/QpmiJYPMCKxnNK6x7" target="_blank">Google Map to Mack's Canyon Rd</a><br />
                                <p>Great high elevation option to avoid the summer Vegas temperatures and stay close to the limestone sport climbing around Mt Charleston. There is an open free campground without amenities near the end, but plenty of pulloffs along the way, many are far from level however.</p>
                            </Card.Text>
                            <Card.Subtitle>Free and Legal Camping Near Black Velvet Canyon</Card.Subtitle>
                            <Card.Text>
                                <a href="http://www.southernnevadaclimberscoalition.org/local-ethics/camping-reservations/#free-and-legal-climber-camping" target="_blank">SNCC Page with details</a><br />
                                <p>High clearance is a must. Some Sprinter Vans have made it back here, otheres have decided not to.</p>
                            </Card.Text>
                            <Card.Subtitle>Various Casino Parking Lots, and other spots</Card.Subtitle>
                            <Card.Text>
                                <a href="http://ioverlander.com/" target="_blank">Link to iOverlander search tool</a><br />
                                <p>Vegas has tons of Casinos. While none of them would want you to set up a tent in their parking lot, several will have no problem with you sleeping discreetly in a van or RV. This is really only an option in the cooler months. There are also some random streets and lots that people have been using successfully for years.</p>
                                <p>On iOverlander, browse the map, deselect all filters, then check Informal Campsite and Wild Camping, this will let you see all the spots around Vegas that others have shared. BTW the app is a great tool to download and always have ready on your phone.</p>
                            </Card.Text>
                            <Card.Subtitle>Skid Row</Card.Subtitle>
                            <Card.Text>
                                <a href="" target="_blank">Link?</a><br />
                                <p>Skid Row, is/was a place near the RR sign that everyone takes photos with. It is/was on the the south side of the road. If it had been only ocassionally used, as a last resort, it is very possible that it would still be open today... However, due to the predictable overuse by climbers when the next free dispersed camping options are 40min-1h away, it has been shut down. It was getting very bad. 40+ vehicles car camping every night during the peak season, people getting out of their vehicles and peeing in full view of the tourists driving by, people setting up grills, a few tents... Signs have been put up limiting hours that its legal to park there, such that you can't park there overnight anymore without getting ticketed. There is a smaller cluster that is now abused very close to where skid row was, which will probably also get shut down soon, which is unfourtunate, because its the parking for a trail system and there is no other parking nearby for people trying to access that.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Showers</Card.Title>
                            <Card.Subtitle>Red Rock Climbing Center</Card.Subtitle>
                            <a href="" target="_blank">Google Map to Red Rock Climbing Center</a><br />
                            <Card.Text>$4 showers. One stall each in Men's and Women's Restrooms. Bring your own towel and soap. Convieniently located in the same shopping center as Desert Rock Sports so if you have a big group, just hangout in the shop, mooch the WIFI, and talk/research the routes you want to do while your group all takes their turns.</Card.Text>
                            <Card.Subtitle>Desert Breeze Aquatic Center</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/zYqfaJt6xtLDEF2t6" target="_blank">Google Map to Desert Breeze Aquatic Center</a><br />
                                <p>$3 Showers, tell them you are there only for a shower</p>
                            </Card.Text>
                            <Card.Subtitle>Aloha Aquatic Center</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/gGS2DVcG23KsoW3f8" target="_blank">Google Map to Aloha Aquatic Center</a><br />
                                <p>$3 Showers, tell them you are there only for a shower</p>
                            </Card.Text>
                            <Card.Subtitle>Other???</Card.Subtitle>
                            <Card.Text>
                                <a href="" target="_blank">Google Map to  Aquatic Center</a><br />
                                <p></p>
                            </Card.Text>
                            <Card.Subtitle>Truck stop?</Card.Subtitle>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Laundry</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Coffee Shops</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Restraunts</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Hiking</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Trail Running</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Mountain Biking</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Canyoneering</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Shady Options</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Sunny Options</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Rainy day / dryout day options</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Crack Options</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Offwidth Options</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                    {/* <Card>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card> */}
            </Row>
        </Container>
    );
}