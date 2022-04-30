import React from 'react';

import { Player } from 'video-react';

import "../../node_modules/video-react/dist/video-react.css";

import Rock_Wet_Inside_Preview from '../vid/rock_wet_inside_preview_732x792.jpg';
import Rock_Wet_Inside from '../vid/rock_wet_inside.mp4';



import {
    // FaInstagram,
    // FaYoutube,
    // FaHome,
    // FaGithub,
    // FaDownload,
    // FaFileDownload,
    // FaFileVideo,
    // FaRegFileVideo,
    FaExternalLinkAlt
} from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';


import CustomHeader from './sub/CustomHeader';
import rope_med from '../img/BackgroundImages/rope_med.jpg';

const backgroundStyles = {
    // backgroundColor: 'white'
    background: 'rgb(255,255,255)',
    background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,101,35,1) 0%, rgba(139,221,255,1) 100%)',
}

const Weather = () => {
    return (
        <Container fluid className="pr-0 pl-0" style={ backgroundStyles } >

            <CustomHeader
                text="Weather"
                bgImg={ rope_med }
            />

        
            <Container fluid="md" className="mt-3">
                <Jumbotron className="text-center mb-3">
                    ( placeholder for realtime weather data )
                </Jumbotron>

                <div className="text-center mb-3">
                    <h1>Weather</h1>
                    <p>Vegas is known for an average of over 300 sunny days per year. Even still, it can, and does rain. Further complication is that Red Rock Canyon, at a higher elevation, tends to get hit harder than Las Vegas itself. As well, there are no weather stations out in/on the rocks (yet?) so our best look at rainfall measurements are from just a few weather stations in the general area which often have recorded nothing when its plainly obvious for many on the west side of Vegas to see that the canyons are getting dumped on.</p>
                    <p>The Spring Mountains act as a barrier to storms coming from the Pacific and very often these storms will dump on these mountains and Las Vegas itself will see very little if any rain. Unfourtunately Red Rock Canyon is between the two and often gets some of the precipitation. Higher elevation areas tend to get hit harder than lower ones. Sometimes the Calico Hills don't get hit, or get light precip while the canyons are soaked. Sometimes everything gets soaked. If Las Vegas itself is visibly wet, it is almost assured that Red Rock Canyon was hit as well.</p>

                    <a href="https://www.blm.gov/sites/blm.gov/files/documents/files/Nevada_Red_Rock_Canyon_Weather_Brochure.pdf" target="_blank" rel="noopener noreferrer">BLM Red Rock Canyon Weather Brochure (pdf)</a>
                </div>
            </Container>

            <CustomHeader
                text="The Science of Wet Sandstone"
                bgImg={ rope_med }
            />

            <Container fluid="md">
                <h5>There are many types of sandstone. Different strengths. Different resistances to water.</h5>
                <p>
                    The sandstone here at Red Rock Canyon is not as weak as the sandstone at the Fisher Towers in Moab (mud). It is also not as strong as the sandstone found in places such as the Red River Gorge or Horseshoe Canyon Ranch. Also much weaker than the sandstone at Eldorado Canyon in CO, which has been changed by heat and pressure, fusing it to a larger degree to something closer to granite, while technically still a stone made of sand.
                </p>
                <p>
                    Our Red Rock Canyon NCA sandstone is fairly porus and loses a significant amount of strength when wet. Unfortunately, because it is porus, the surface can look and feel dry to the touch, but it can still have a lot of water inside. This makes it tricky to know when it is safe enough to climb.
                </p>
                <p>
                    In stark contrast, the sandstone someplace like the Red River Gorge can be climbed even if wet and soaking, though it may be a miserable experience. Eldorado Canyon, as soon as the surface of the rock is dry, its good to go.
                </p>
                <blockquote className='customBlockquote'>
                    <div className='customBlockquoteQuote'>
                        It has to do with the quartz content of the cementing material. Sandstone is a sedimentary rock composed of mostly quartz sand particles (sometimes other components like other minerals and pebbles etc.) that are held together by a cementing material that is typically either quartz or calcite.<br/><br/>
                        The sandstone in Tennessee has a significantly higher quartz content of the cementing material, making it much much harder and is not effected by rain or moisture. Same as the sandstone at the New - bomb proof!<br/><br/>
                        That's why it's compared to granite, because granite is also quartz - but formed in a different way.
                    </div>
                    <div className='customBlockquoteCite'>
                        Ryan Fletcher <cite title='of ARCADIS Canada Inc.'> of ARCADIS Canada Inc.</cite>
                    </div>
                </blockquote>
                    

                <h6>The Process</h6>
                <ol>
                    <li>Water soaks in, breaking and weakening bonds between grains of sand</li>
                    <li>The surface dries, some water is still trapped inside</li>
                    <li>Time passes, heat and wind help the trapped moisture slowly escape</li>
                    <li>
                        The chemical bonds reform, heat helps immensely
                        <blockquote className='blockquote-footer'>
                            a 10&deg;C rise in temperature roughly doubles the rate of any given chemical reaction
                        </blockquote>
                    </li>
                </ol>



                <h5>Damage and Dangers of climbing on wet sandstone</h5>
                <p>Holds can break with much less force, permanently altering climbs and resulting in dangerous unexpected falls, especially on low angle terrain. Bolt holes can be enlarged when the metal flexes and errodes the now weaker rock leading routes to require more frequent bolt replacement and in some cases has even caused unexpected early bolt failure (pullout as well as rock failure). Trad protection is more likely to fail by breaking the rock... Remember, a trick of the trade in stuck gear removal is to pour a little bit of water on it, to weaken the rock that the cam or nut is contacting so that a bit of flexing can errode the rock enough to loosen the placement and allow removal.</p>

                <h5>How to climb and protect DRY sandstone</h5>
                <h6>Pull down, not out</h6>
                <p>When climbing obviously hollow and flake features be mindful to pull down or in the direction that the flake can be pulled on with the least chance of prying it off the wall. Try to not lie-back the feature as this puts excessive force on it, unless it is an obviously large and unquestionably solid flake.</p>

                <h6>Don't put cams behind flakes or against flakes inside of cracks</h6>
                <p>Cams work by camming, or said another way, leverage and multiplying force. Hanging or falling on one will put several times higher force than your body sees pushing out on both sides. Passive wedge gear like nuts and hexes is less likely to pry the flake off. Ideally seek non-flake features whenever possible. Unless its a huge and unquestionably solid feature, look at any cams behind flakes as psychological protection or to keep a rope from getting sucked into a crack only and extremely likely to fail if falled on, permanently altering the route and sending rock down on anyone below.</p>

                <h6>Be mindful of the bolt you are clipping</h6>
                <p>Bolts are typically very solid, but they have failed here before. As its very dry here many are plated steel, not stainless. Some areas see more moisture than others producing rusty monstrosities. Ideally they would all be stainless 5-6" glue-ins, but the bolting and re-bolting restrictions in place contribute to making re-bolting all of Red Rock an extremely tall order. SNCC is focusing rebolting and maintenance efforts on the most popular routes first, or when dangerously rusty or loose hardwear is called out on Mountain Project in the <a href="https://www.mountainproject.com/forum/topic/108676719/bad-bolts-in-las-vegas" target="_blank" rel="noopener noreferrer">Bad Bolts Thread <sup><FaExternalLinkAlt /></sup></a>.</p>
                <p>Well traveled sport routes are typically very solid. However, classic trad routes out in the canyons can often take a long time to get updated due to the increased time commitment of hiking and hauling the gear out there, and then hand drilling holes and removing the old hardwear. Ideally bolt holes would be re-used, but removing mechanical bolts in order to re-use the holes is not a gauranteed success and can be very time intensive, requiring more tools. Power tools are not allowed in the wilderness area... and several bolt extraction techniques require them. Its a TON of work and a huge time commitment. Even popular routes can take a long time to get re-equipped, like Inti Watana, which was only just rebolted in October 2019. When these old routes are updated, often the rebolter will leave a few of the old bolts on the route, only as a historical relic to admire, don't clip them as pro! <a href="http://www.southernnevadaclimberscoalition.org/" target="_blank" rel="noopener noreferrer">Join or Donate to the SNCC here <sup><FaExternalLinkAlt /></sup></a> to support bolt replacement and anchor maintenance.</p>
            </Container>

            <CustomHeader
                text="Real examples of wet rock"
                bgImg={ rope_med }
            />

            <Container fluid="md">
                <h5>An example of dry surface and wet interior</h5>
                {/*
                    https://video-react.js.org/components/player/
                    Player is the root component, all others should be inside it.
                    Attributes for the Player component that may be worth playing with:
                        fluid bool default is true in fluid mode its 100% wide all the time, height will be calc by the vids ratio
                        width
                        height
                        preload enum none/metadata/auto
                        aspectRatio string auto is default others are 16:9, 4:3, etc...
                        autoPlay bool false is default
                        loop ... actually a state attribute, and not mentioned that you can use it like this. BUT IT WORKS!
                        muted ... state attribute, but it works!
                */}
                <Player
                    loop
                    muted
                    playsInline
                    poster={ Rock_Wet_Inside_Preview }
                    src={ Rock_Wet_Inside }
                />
                <blockquote className='blockquote-footer'>
                    A thin rock was found on the ground in a usually shaded area at The Hamlet that looked dry on the outside but was obvious from the approach that it was very likely to still be wet inside. It was placed on the ground over another rock and stood on to break in half to show the darker area of the rock inside which is still wet. Like a medium-rare cooked burger patty. Since the rock wall itself gets a lot more sun and wind exposure than this area of the ground, AND the routes are popular and well traveled to clean them of MOST of the suspect rock, it was determined that it was barely OK to climb here on this day, with the caveat that any flake features should be avoided like the plague... Which is hard to do at Red Rock! They are everywhere!
                    <br />
                    <br />
                    This was a few days after significant rain. Had this been a less traveled, less sunny, and/or colder temps situation we would have given it another day minimum. Possibly several more days.
                    <br />
                    <br />
                    You can right click and save this video (7 seconds, 1.9 MB) to share it with your friends.
                </blockquote>
            </Container>

            <CustomHeader
                text="When is it dry enough?"
                bgImg={ rope_med }
            />

            <Container fluid="md">
                <p>Hard to be sure! Depends on how much rain the desired objective's area got hit with, ambient day and night temperatures, humidity, its sun exposure, wind, etc... Areas that get a ton of sun and wind will dry faster. Areas that stay in shade will take much longer.</p>
                <p>... Since its hard to know exactly how much rain hit any given area unless you were actually out there the entire time it was happening, its hard to know how wet it is. The rain gauges are not close enough or numerous enough to be much help (yet). Often the nearby rain gauges don't actually get hit with rain at all. Word of mouth from people who were actually there at the time is the best info you can get. Not simply at Red Rock, but at the particular canyon in Red Rock that you are interested in climbing at. Often it rains overnight and no one was out there to know how bad it was until they hike out there to look.</p>

                <h6>In the Summer</h6>
                <p>Very sunny aspects are typically OK to climb in 24h if they only got a light sprinkle, 48-72h for heavier rains.</p>
                <p>Very shady aspects are typically OK to climb in 48-72h if they only got a light sprinkle, 96h+ for heavier rains.</p>

                <h6>In the Winter</h6>
                <p>Very sunny aspects are typically OK to climb in 48h if they only got a light sprinkle, 72-96h+ for heavier rains.</p>
                <p>Very shady aspects are typically OK to climb a week later.</p>

                <h6>The Horde Effect</h6>
                <p>Red Rock routes when they are brand new typically have tons of loose rock, weak flake holds, weak edges on holds, etc... As more people climb these routes, wet or not, these weaker parts break off. Classic and mega-classic routes with high hundreds to thousands of noted ascents on Mountain Project are typically much cleaner with very little loose rock left, unless the loose and dangerously weak holds are very obvious and everyone avoids them.</p>
                <p>If you are trying to avoid the crowds and seeking out obscure routes, beware to give the rock extra time to dry and/or be extra mindful as you climb of what you are using for holds and where you are placing pro.</p>
            </Container>

            <CustomHeader
                text="Links to further resources"
                bgImg={ rope_med }
            />

            <Container fluid="md">
                <a href="https://wetrockpolice.com/redrock" target="_blank" rel="noopener noreferrer">Wet Rock Police - Red Rock <sup><FaExternalLinkAlt /></sup></a>
                <p>Excellent site for looking at real-time and historical rain fall. It uses the weather station at the Red Rock Canyon NCA Visitor Center. It is known that sometimes (often) the visitor center doesn't get any rain while the canyons get soaked, so it is not a go / no go indicator. It is simply data from one rain gauge, a few miles away, updated hourly.</p>

                
                <a href="https://www.facebook.com/groups/ClimbVegas" target="_blank" rel="noopener noreferrer">ClimbVegas Facebook Group <sup><FaExternalLinkAlt /></sup></a>
                <p>This is a good place to ask about weather and if it rained at Red Rock and how long until your area of interest is probably dry enough. Chances are that there is already discussion if there has been recent rain.</p>

                <a href="https://www.mountainproject.com/forum/104554750/nevada" target="_blank" rel="noopener noreferrer">Mountain Project Nevada Forum <sup><FaExternalLinkAlt /></sup></a>
                <p>Nevada specific forum section on Mountain Project. Another good option to look for threads about recent weather or ask.</p>
                

                {/* <a href="https://www.instagram.com/p/Bufa9MonFfw/" target="_blank" rel="noopener noreferrer">One example of what wet rock can look like inside (Instagram) <sup><FaExternalLinkAlt /></sup></a>
                <br /> */}
                {/* <a href="../vid/rock_wet_inside.mp4" target="_blank" rel="noopener noreferrer">download .mp4 to send to your friends (1.9 MB) <sup><FaDownload /></sup></a> */}


                {/* <a href="" target="_blank" rel="noopener noreferrer"></a> */}
                {/* <a href="" target="_blank" rel="noopener noreferrer"></a> */}
                {/* <a href="" target="_blank" rel="noopener noreferrer"></a> */}
                {/* <a href="" target="_blank" rel="noopener noreferrer"></a> */}
            </Container>

            <CustomHeader
                text="How to help the wet rock situation"
                bgImg={ rope_med }
            />

            <Container fluid="md">
                <h5>Add internet connected weather stations!</h5>
                <p>Stations that record rainfall data and automatically upload/share it with weather services such as Weather Underground. Areas that need it most: Calico Basin, Spring Mountain Ranch, Bonnie Springs, Blue Diamond, Mountain Springs. The more places with data we can look at the better. Currently there is a station at the Scenic Loop Visitor Center, Mountain Springs Fire Department, and maybe Spring Mountain Ranch (I think maybe it isn't hooked up to the internet).</p>
                <p>
                    High quality stations for your backyard that do this are getting more affordable all the time.
                    <br />
                    Ex: $330 <a href="https://shop.weatherflow.com/products/tempest" target="_blank" rel="noopener noreferrer">WeatherFlow Tempest <sup><FaExternalLinkAlt /></sup></a>
                    <br />
                    ... but, chances are that some folks living in Blue Diamond and Calico Basin already have weather stations capable of uploading their data to a service like Weather Underground, they just may have never set that feature up.
                </p>

                
                <h5>Provide eyes on the ground observations!</h5>
                <p>Hike or trail run into areas after rains and share observations, pictures, videos of how wet things look. You can share these observations to the Vegas Climbers Facebook Group or in the Mountain Project Nevada Forum. This is immensely helpful. The vast majority of the people who climb at Red Rock Canyon are just passing through and largely have no idea the weather the day before, let alone several days. As well no clue about the wet rock issues and ethics. As there isn't any sort of offical BLM effort to provide signage as people drive out towards Red Rock Canyon, this is the best we can do to get the word out.</p>

                <h5>Social Media</h5>
                <p>If its too wet to climb safely, and you spend way too much time on Instagram, share that in a post and story along with what you will be doing instead. There are so many great alternatives to do here, wether that be climbing limestone or granite, trail running, hiking, visiting a hot spring, skiing (in winter, at Lee Canyon or SW Utah) or visiting one of the numerous other day-trip-able areas around.</p>
                
                <h5>DON'T CLIMB WET ROCK</h5>
                <p>If you see climbers climbing, but the ground is obviously still too wet, don't think that its OK because they are doing it. They are doing it because they don't know any better. Know better. Be better.</p>
                <p>Some local route developers have gone so far as putting up a sign or removing the first bolt hanger on routes they developed to try to disuade people from climbing them when they are too wet. Big Bad Wolf 5.9, the most popular multipitch route in Nevada, and many peoples first multipitch ever, has a crux where you have to use some small flake holds. If/when these break it will drastically change the difficulty and permanently ruin it for future beginner climbers. There are very few sport multipitch routes in Red Rock Canyon, by necessity of what the rock provides and the ban of bolting in the canyons, which are a wilderness area. Lets try not to ruin it for others, OK?</p>

                <h5>Inform climbers you see (gently)</h5>
                <p>Inform any climbers ignoring or oblivious to the situation. Please be gentle and explain. As noted, most of those climbing at Red Rocks on any given day are passing through or just flew in a day or two before. They are used to other rock types that don't lose strength when wet, the rock surface will probably appear dry, and they probably didn't check the historical weather... but even if they did, as noted before, the closest rain gauge often doesn't register what actually happens out in the calico pullouts and especially not the deeper canyons.</p>
                <p>We know that it is super frustrating to have your trip ruined by rain... but how bad will your trip be when you break a hold and take a bad fall and break a bone? Or permanently damage a route ruining it for future climbers? It doesn't make it OK and acceptable to climb and damage routes just because you have spent time and money to come here.</p>

                <h5>Ask experienced locals when you are unsure</h5>
                <p>Please ask others in the Vegas Climbers Facebook Group or Mountain Project Nevada Forum if they think its OK to climb tomorrow at the area and wall(s) you are wanting to go to. <strong>As a last resort,</strong> you can call us, however we typically have not had time to get out and see ourselves, we are typically only going off what we have read in those above mentioned places or what it looks like down the road from us. As you can imagine, after any given rain, the next day, we are bombarded by calls asking if it is dry enough or when we think it will be dry... but we probably have not been out there yet, so we are not the best source of information!</p>
            </Container>
        </Container>
    )
}

export default Weather;
