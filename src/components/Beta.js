import React from 'react';

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

// styles here:
// src\stylesheets\pages\_beta.sass

// ? - Accordian? Cards? Modals? Tabs?
// ! - Icons for google maps link ? Sooo many links


// Route recommendations per style?,
// ----------------------
// Red Rock General Info
// SNCC
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

//<Card.Subtitle></Card.Subtitle>
//<Card.Text>
//    <a href="" target="_blank" rel="noopener noreferrer"></a><br />
//    <p></p>
//</Card.Text>

//<a href="" target="_blank" rel="noopener noreferrer"></a><br />
//<p></p>

export default function Beta(){
    return (
        <Container fluid>
            <Row xl={3} lg={3} md={2} sm={2} xs={1}>
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
                            <Card.Title>Red Rock General Info</Card.Title>
                            <Card.Subtitle>Scenic Loop Hours</Card.Subtitle>
                            <Card.Text>
                                <p>The Visitor Center is open daily from 9:00 AM – 4:30 pm.</p>
                                <p>The Scenic Drive is open every day of the year with hours changing slightly according to the season:</p>
                                <p>Nov – Feb – 6:00 AM to 5:00 PM</p>
                                <p>March – 6:00 AM to 7:00 PM</p>
                                <p>Apr – Sep – 6:00 AM to 8:00 PM</p>
                                <p>Oct – 6:00 AM to 7:00 PM</p>
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
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                            </Card.Text>
                            <Card.Subtitle>Emergency and Rescue</Card.Subtitle>
                            <Card.Text>
                                <p>Call 911 if you have a life-threatening emergency, for Police, Fire, or Medical assistance.</p>
                                <p>Give them clear information on where you are. Specific climbing wall or route is good. Helicopter ride to the ER is provided by the local Police Department and paid for by taxes, you wont get a bill for that. Don't worry. If its an emergency, just call. The ER visit itself will still cost you at normal ER rates.</p>
                                <p>If your loved one is lost or missing call the LV SAR hotline 24/7: <a href="tel:1-702-758-4727" target="_blank" rel="noopener noreferrer"><FaPhone /> 1-702-758-4727</a></p>
                                <p><a href="https://www.redrocksar.org/" target="_blank" rel="noopener noreferrer">Red Rock SAR <FaExternalLinkAlt /></a></p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            {/* // ! add FB and IG icons/links */}
                            {/* https://www.facebook.com/snclimberscoalition/ */}
                            {/* https://www.instagram.com/southernnevadaclimbers/?hl=en */}
                            <Card.Title>Southern Nevada Climbers Coalition (SNCC)</Card.Title>
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
                            <Card.Subtitle>Local Ethics</Card.Subtitle>
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
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Paid Camping</Card.Title>
                            <Card.Subtitle>Red Rock Canyon Campground</Card.Subtitle>
                            <Card.Text>
                                <a href="https://www.recreation.gov/camping/campgrounds/250877" target="_blank" rel="noopener noreferrer">Check availability and make reservations at Recreaction.gov <FaExternalLinkAlt /></a><br />
                                <a href="https://goo.gl/maps/rcQa5GeBqndbNNw18" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Red Rock Canyon Campground</a><br />
                                <p>Minutes from Red Rock, ~20mi from The Strip. For campground inquiries, please call: <a href="tel:1-702-515-5387" target="_blank" rel="noopener noreferrer"><FaPhone /> 1-702-515-5387</a></p>
                            </Card.Text>
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
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Free Camping and "Van Life" options</Card.Title>
                            <Card.Subtitle className="text-warning">MAKE SURE YOUR CAMPFIRE IS DEAD OUT, BETTER YET, JUST DON'T HAVE ONE. WE HAVE HAD TOO MANY FIRES. WANT THE WARMTH AND LIGHT? JUST SNUGGLE WITH YOUR FRIENDS.</Card.Subtitle>
                            <p>Backcountry camping is allowed within Red Rock Canyon National Conservation Area above 5,000 feet in the Rainbow Mountain Wilderness, and above 6,500 feet in the La Madre Mountain Wilderness. A permit is required and can be obtained by calling: 702-515-5050. (number still applicable?)</p>
                            <p>Camping is also allowed on BLM managed public land outside of the Las Vegas Valley for up to two weeks without charge. Popular primitive (no facilities) sites include Bitter Spring Back Country Byway, Gold Butte Back Country Byway, Knob Hill, Virgin Mountains, Christmas Tree Pass and Logandale Trails System.</p>
                            <Card.Subtitle>Lovell Canyon Rd</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/aug9pC7dWnG7ck1XA" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Lovell Canyon Rd</a><br />
                                <p>Lovell Canyon Rd has free dispersed camping along a great length of it as well as a designated free campground which has no amenities, its just a cluster of spots closer together. TONS of little dirt roads branch off the main road leading to many, many spots. Higher up locations should have good cell service. Lower down ones, especially after many miles after turning onto the road, will tend to have no cell service.</p>
                                <p>Avoid the tempation to try to sleep at Late Night Trailhead or off any of the dirt roads near Black Velvet Canyon, Windy Peak, etc... You will be asked to leave or be ticketed.</p>
                            </Card.Text>
                            <Card.Subtitle>Mack's Canyon Rd @ Lee Canyon</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/QpmiJYPMCKxnNK6x7" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Mack's Canyon Rd</a><br />
                                <p>Great high elevation option to avoid the summer Vegas temperatures and stay close to the limestone sport climbing around Mt Charleston. There is an open free campground without amenities near the end, but plenty of pulloffs along the way, many are far from level however.</p>
                            </Card.Text>
                            <Card.Subtitle>Free and Legal Camping Near Black Velvet Canyon</Card.Subtitle>
                            <Card.Text>
                                <a href="http://www.southernnevadaclimberscoalition.org/local-ethics/camping-reservations/#free-and-legal-climber-camping" target="_blank" rel="noopener noreferrer">SNCC Page with details <FaExternalLinkAlt /></a><br />
                                <p>High clearance is a must. Some Sprinter Vans have made it back here, otheres have decided not to.</p>
                            </Card.Text>
                            <Card.Subtitle>Various Casino Parking Lots, and other spots</Card.Subtitle>
                            <Card.Text>
                                <a href="http://ioverlander.com/" target="_blank" rel="noopener noreferrer">Link to iOverlander search tool <FaExternalLinkAlt /></a><br />
                                <p>Vegas has tons of Casinos. While none of them would want you to set up a tent in their parking lot, several will have no problem with you sleeping discreetly in a van or RV. This is really only an option in the cooler months. There are also some random streets and lots that people have been using successfully for years.</p>
                                <p>On iOverlander, browse the map, deselect all filters, then check Informal Campsite and Wild Camping, this will let you see all the spots around Vegas that others have shared. BTW the app is a great tool to download and always have ready on your phone.</p>
                            </Card.Text>
                            <Card.Subtitle>Skid Row</Card.Subtitle>
                            <Card.Text>
                                <p>Skid Row, is/was a place near the RR sign that everyone takes photos with. It is/was on the the south side of the road. If it had been only ocassionally used, as a last resort, it is very possible that it would still be open today... However, due to the predictable overuse by climbers when the next free dispersed camping options are 40min-1h away, it has been shut down. It was getting very bad. 40+ vehicles car camping every night during the peak season, people getting out of their vehicles and peeing in full view of the tourists driving by, people setting up grills, a few tents... Signs have been put up limiting hours that its legal to park there, such that you can't park there overnight anymore without getting ticketed. There is a smaller cluster that is now abused very close to where skid row was, which will probably also get shut down soon, which is unfourtunate, because its the parking for a trail system and there is no other parking nearby for people trying to access that.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Showers</Card.Title>
                            <Card.Subtitle>Red Rock Climbing Center</Card.Subtitle>
                            <a href="https://goo.gl/maps/fu1zaPsdpwXy8c3M6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Red Rock Climbing Center</a><br />
                            <Card.Text>$4 showers. One stall each in Men's and Women's Restrooms. Bring your own towel and soap. Convieniently located in the same shopping center as Desert Rock Sports so if you have a big group, just hangout in the shop, mooch the WIFI, and talk/research the routes you want to do while your group all takes their turns.</Card.Text>
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
                            <Card.Subtitle>Other???</Card.Subtitle>
                            <Card.Text>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
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
                            <Card.Subtitle>Rainbow Laundromat</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/vfxyEZeCor9Wgck6A" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Rainbow Laundromat</a><br />
                            </Card.Text>
                            <Card.Subtitle>Spin City Laundromat</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/AKDDsGxCjZuycBWV6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Spin City Laundromat</a><br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Coffee Shops</Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                            </Card.Text>
                            <Card.Subtitle>Madhouse Coffee</Card.Subtitle>
                            <Card.Text>
                                <a href="https://g.page/TheMadHouseCoffee?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Madhouse Coffee</a><br />
                                <p></p>
                            </Card.Text>
                            <Card.Subtitle>Sambalatte</Card.Subtitle>
                            <Card.Text>
                                <a href="https://g.page/sambalatte-boca-park?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Sambalatte</a><br />
                                <p></p>
                            </Card.Text>
                            <Card.Subtitle>Makers &amp; Finders</Card.Subtitle>
                            <Card.Text>
                                <a href="https://g.page/MakersLV2?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Makers &amp; Finders</a><br />
                                <p>Coffee and Latin Food</p>
                            </Card.Text>
                            <Card.Subtitle>Grouchy John's Coffee</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/SGJW6Pv6suJa1VUJ6" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Grouchy John's Coffee</a><br />
                                <p></p>
                            </Card.Text>
                            <Card.Subtitle>Desert Wind Coffee Roasters</Card.Subtitle>
                            <Card.Text>
                                <a href="https://g.page/desertwindcoffee?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Google Map to Desert Wind Coffee Roasters</a><br />
                                <p></p>
                            </Card.Text>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/kbyPUayVEjKkWRPJ7" target="_blank" rel="noopener noreferrer"><FaDirections /> Gabi Coffee &amp; Bakery</a><br />
                                <p>Nice option.</p>
                            </Card.Text>
                            <Card.Subtitle>Starbucks</Card.Subtitle>
                            <Card.Text>
                                <a href="https://www.starbucks.com/store-locator?map=36.151802,-115.279791,15z" target="_blank" rel="noopener noreferrer">Starbucks Store Finder <FaExternalLinkAlt /></a><br />
                                <p>Of course, Starbucks is everywhere</p>
                            </Card.Text>
                            <Card.Subtitle>Dutch Bros</Card.Subtitle>
                            <Card.Text>
                                <a href="https://www.dutchbros.com/locations/" target="_blank" rel="noopener noreferrer">Dutch Bros Finder <FaExternalLinkAlt /></a><br />
                                <p>Some locations have opened recently. Apparently its a thing?</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Restraunts</Card.Title>
                            <Card.Subtitle>Pizza</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/w5YjFknbdCtt8Kn28" target="_blank" rel="noopener noreferrer"><FaDirections /> Mark Rich's NY Pizza &amp; Pasta</a><br />
                                <p>Convieniently located super close to Red Rock. Huge menu.</p>
                                <a href="https://goo.gl/maps/wDgZvTsQNdpwawb58" target="_blank" rel="noopener noreferrer"><FaDirections /> Pieology Summerlin</a><br />
                                <p>Fast build your own pizza option.</p>
                                <a href="https://goo.gl/maps/XZWFimiW4ebmzttPA" target="_blank" rel="noopener noreferrer"><FaDirections /> Giordano's</a><br />
                                <p>Known for their deep dish pizzas, tons of good reviews.</p>
                                <a href="https://g.page/Napoli-Pizza-Sahara?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Napoli Pizza</a><br />
                                <p>Another good choice, tons of reviews.</p>
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p> */}
                            </Card.Text>
                            <Card.Subtitle>AYCE - All You Can Eat</Card.Subtitle>
                            <Card.Text>
                                <p>Options for AYCE Sushi, KBBQ, and Buffets</p>
                                <a href="https://goo.gl/maps/skRFqRthPRqRjJym7" target="_blank" rel="noopener noreferrer"><FaDirections /> Yama Sushi - Spring Mtn</a><br />
                                <a href="https://goo.gl/maps/mmmJPip6E9aCTq9Z8" target="_blank" rel="noopener noreferrer"><FaDirections /> Yama Sushi - East Flamingo</a><br />
                                <a href="https://goo.gl/maps/wRSGq21tkJDaq2TN6" target="_blank" rel="noopener noreferrer"><FaDirections /> Yama Sushi - The Strip</a><br />
                                <p>Yama means Mountain, so pretty appropriate for climbers. Awesome place to go with large groups and fuel back up after long days of epic multipitch climbing! Now with 3 locations.</p>
                                <a href="https://goo.gl/maps/dhnD9hzFAxjTpF259" target="_blank" rel="noopener noreferrer"><FaDirections /> Sasa Sushi</a><br />
                                <p>Climber owned???</p>
                                <a href="https://g.page/Biwon?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Biwon KBQ &amp; Sushi</a><br />
                                <p>A great mix of AYCE options! Tons of reviews!</p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                            </Card.Text>
                            <Card.Subtitle>Thai</Card.Subtitle>
                            <Card.Text>
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p> */}
                            </Card.Text>
                            <Card.Subtitle>Indian</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/VNrXpMjd1uD8wPXeA" target="_blank" rel="noopener noreferrer"><FaDirections /> Mint Indian Bistro</a><br />
                                <p>Awesome selection of Indian dishes. Usually not busy. Even has an Inferno Menu for those chili-heads. Two locations (IIRC).</p>
                                <a href="https://goo.gl/maps/tSFAcpdRhuKazw9T7" target="_blank" rel="noopener noreferrer"><FaDirections /> Mt. Everest India's Cuisine</a><br />
                                <p>Long running restraunt with great dishes and reviews.</p>
                                <a href="https://g.page/Curryleafindianfood?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Curry Leaf - Flavors of India</a><br />
                                <p>Great option.</p>
                                <a href="https://goo.gl/maps/ChT41sVZhyw3f9Rf7" target="_blank" rel="noopener noreferrer"><FaDirections /> Pure Indian Cuisine, Inc</a><br />
                                <p>Great option.</p>
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br /> */}
                                <p></p>
                            </Card.Text>
                            <Card.Subtitle>Burgers</Card.Subtitle>
                            <Card.Text>
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p> */}
                                <a href="https://g.page/fukuburger-chinatown?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Fuku Burger - Chinatown</a><br />
                                <a href="https://g.page/fukuburgerbuffalo?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Fuku Burger - Buffalo</a><br />
                                <p>Super messy and super delicious American burgers with a Japanese twist.</p>
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p> */}
                            </Card.Text>
                            <Card.Subtitle>Vegetarian, Vegan, and Healthy Options</Card.Subtitle>
                            <Card.Text>
                                <a href="https://g.page/flower-child-las-vegas?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Flower Child</a><br />
                                <p>A favorite with climbers.</p>
                                <a href="https://goo.gl/maps/MwF4Zddxm42fpeiv5" target="_blank" rel="noopener noreferrer"><FaDirections /> True Food Kitchen</a><br />
                                <p>Another great option.</p>
                                <a href="https://g.page/grabbagreenlv?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Grabbagreen Food + Juice</a><br />
                                <p>Great bowls!</p>
                                <a href="https://g.page/VeganosKitchen?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Vegano's Kitchen</a><br />
                                <p>Vegan mexican food</p>
                                <a href="https://theproteinsource.kitchen/locations/" target="_blank" rel="noopener noreferrer">theProteinSource finder <FaExternalLinkAlt /></a><br />
                                <p>A great healthy option with 2 Vegas locations.</p>
                                <a href="https://www.greensandproteins.com/locations/" target="_blank" rel="noopener noreferrer">Greens and Proteins finder <FaExternalLinkAlt /></a><br />
                                <p>Health concious options with several Vegas area locations.</p>
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p> */}
                            </Card.Text>
                            <Card.Subtitle>Ramen</Card.Subtitle>
                            <Card.Text>
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p> */}
                            </Card.Text>
                            <Card.Subtitle>24H Options</Card.Subtitle>
                            <Card.Text>
                                <a href="https://robertostacoshop.com/locations/" target="_blank" rel="noopener noreferrer">Roberto's Taco Shop Locator <FaExternalLinkAlt /></a><br />
                                <p>Tons of Vegas locations, all 24H (I think). Try the ham breakfast burrito, always great, never too greasy, re-heats well, awesome vehicle for hot sauce. (T2 is addicted to them). Great to grab on your way out to Red Rock to fuel a long day.</p>
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p> */}
                            </Card.Text>
                            <Card.Subtitle>Sweet Tooth ?</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/nuA5JanCRUmAemK66" target="_blank" rel="noopener noreferrer"><FaDirections /> Mazzoa Donuts</a><br />
                                <p>New, but already making a buzz. Two Vegas locations.</p>
                                <a href="https://goo.gl/maps/Vc8Cw1PKCftCTT4J9" target="_blank" rel="noopener noreferrer"><FaDirections /> Dunkin'</a><br />
                                <p>Located very close to Red Rock, this is a very popular stop people make on their way out of town to get their fix before their multipitch plans. Opens at 5am. Remember to use the restroom, or bring a wag bag!</p>
                                <a href="https://goo.gl/maps/qU9zgigffYxucoN18" target="_blank" rel="noopener noreferrer"><FaDirections /> Pinkbox Donuts</a><br />
                                <p>Several Vegas locations. Open 24H!</p>
                                <a href="https://goo.gl/maps/FWRzQD525GXbzig19" target="_blank" rel="noopener noreferrer"><FaDirections /> Ronald's Donuts</a><br />
                                <p>Awesome no-frills place in Chinatown.</p>
                                <a href="https://g.page/DonutBarLasVegas?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Donut Bar</a><br />
                                <p>Not a convienient location for climbers, but if you find yourself near the strip and crave donuts, this could be a good option.</p>
                                <a href="https://goo.gl/maps/FvrUgkzuuNn9zy9n6" target="_blank" rel="noopener noreferrer"><FaDirections /> Handel's Homemade Ice Cream &amp; Yogurt</a><br />
                                <p>Amazing ice cream that has been featured in top lists.</p>
                                <a href="https://g.page/Ice-cream-shop-Las-Vegas1?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Cold Stone Creamery</a><br />
                                <p>Great mixed ice cream. This location is next to a movie theater and Thai restraunt. Convient options for a rainy day!</p>
                                <a href="https://goo.gl/maps/Hq2e4yv3eAH3V9EZ6" target="_blank" rel="noopener noreferrer"><FaDirections /> CJ's Italian Ice &amp; Custard</a><br />
                                <p>Another great option.</p>
                                <a href="https://g.page/MatchaCafeMaikoLV?share" target="_blank" rel="noopener noreferrer"><FaDirections /> Matcha Cafe Maiko</a><br />
                                <p>Fantastic place for Matcha infused ice cream, shakes, and other desserts!</p>
                                <a href="https://goo.gl/maps/ih5oEb3aQbzBuhHq8" target="_blank" rel="noopener noreferrer"><FaDirections /> Is Sweet Coffee &amp; Dessert</a><br />
                                <p>Great options!</p>
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p> */}
                            </Card.Text>
                            <Card.Subtitle>Grocery Stores</Card.Subtitle>
                            <Card.Text>
                                <a href="https://goo.gl/maps/2UggTM6D53dUCuqF7" target="_blank" rel="noopener noreferrer"><FaDirections /> Albertsons</a><br />
                                <p>Many Vegas locations. This is the closest one to Red Rock, its a pretty popular spot to meetup and carpool from. If you are going to do this, please utilize the side parking if you are leaving a larger vehicle like a sprinter van to minimize our visual impact as climbers. Be sure to check out the marked down bakery items. If you need breakfast sometimes they have egg, sausage, and cheese breakfast biscuits or burritos pre-made at the already hot and ready food area.</p>
                                <a href="https://goo.gl/maps/JRfX4mLS2BdnF1t27" target="_blank" rel="noopener noreferrer"><FaDirections /> Trader Joe's</a><br />
                                <p>There are several Trader Joe's locations in Vegas now, this one is within walking distance of the Summerlin WinCo.</p>
                                <a href="https://goo.gl/maps/HBLyPAFXNDLUm7sp9" target="_blank" rel="noopener noreferrer"><FaDirections /> WinCo - Summerlin</a><br />
                                <p>WinCo is an excellent place to get closer to bulk foods. Excellent prices on many things, great variety of ready to heat meal options. Part of how they keep their prices low is by not accepting credit cards at all. They only take debit cards and cash.</p>
                                <a href="https://goo.gl/maps/mBGhrA29egwRQznj8" target="_blank" rel="noopener noreferrer"><FaDirections /> 168 Market</a><br />
                                <p>Excellent Asian grocery store. Highly recommend.</p>
                                <a href="https://goo.gl/maps/S2sPjxojaQhz749t5" target="_blank" rel="noopener noreferrer"><FaDirections /> Whole Foods</a><br />
                                <p>Yep, there is Whole Paycheck in Vegas.</p>
                                <a href="https://goo.gl/maps/JFsgC3Tu1LAWgkw96" target="_blank" rel="noopener noreferrer"><FaDirections /> Sprouts Farmers Market</a><br />
                                <p>Another good grocery store.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                            {/* <Card.Subtitle></Card.Subtitle>
                            <Card.Text>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                            </Card.Text>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Mountain Biking</Card.Title>
                            <Card.Subtitle>Soooo many options. Its insane.</Card.Subtitle>
                            <Card.Text>
                                <a href="https://www.trailforks.com/" target="_blank" rel="noopener noreferrer">Trailforks Route Database <FaExternalLinkAlt /></a><br />
                                <p>This is your best bet for finding the best trails.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                    {/* <Card>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text>
                                <a href="" target="_blank" rel="noopener noreferrer"></a><br />
                                <p></p>
                            </Card.Text>
                        </Card.Body>
                    </Card> */}
            </Row>
        </Container>
    );
}