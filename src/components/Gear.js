import React from 'react';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import Jumbotron from 'react-bootstrap/Jumbotron';

// takes 'text' and 'bgImg' as props
import CustomHeader from './sub/CustomHeader';
// import rope_med from '../img/BackgroundImages/rope_med.jpg';
import rope from '../img/HeaderImgs/Rope_16_9_polished-min.jpg';
import barnacle_goggles from '../img/HeaderImgs/BarnacleGoggles_16_9_polished-min.jpg';
import barnacle from '../img/HeaderImgs/Barnacle_16_9_polished-min.jpg';


// import GearCarousel from '../components/sub/GearCarousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

import ReusableGallery from './sub/ReusableGallery';
import { photos } from './data/gearGalleryPhotos';

// import Styled from 'styled-components';


// styles here:
// src\stylesheets\pages\_gear.sass

const galleryStyles = {
    backgroundColor: 'black'
};
const backgroundStyles = {
    // backgroundColor: 'white'
    background: 'rgb(255,255,255)',
    background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,101,35,1) 0%, rgba(139,221,255,1) 100%)',
}


// generic responsive media query template from: https://angrytools.com/css/mediaquery/
export default function Gear(){

    return (
        <Container fluid className='pl-0 pr-0' style={ backgroundStyles }>

            <CustomHeader
                text="We specialize in all things climbing"
                bgImg={ rope }
            />

            {/* //% I want a photo sphere of the shop... */}
            {/* <Container fluid="md" >
                <h1>We specialize in climbing</h1>
                <p>We keep a good selection of gear for sport, trad, and bouldering. We also carry some canyoneering gear. We also try to keep a bit of a stock of general camping supplies.</p>
            </Container> */}
            


            <CustomHeader
                text="We take and sell used gear on consignment"
                bgImg={ barnacle_goggles }
            />
            <Container fluid="md">
                {/* <h2>Consignment</h2> */}
                <p>You can bring us used items you don't want any more. You can price them or we can price them. After they sell you get 75% of whatever they sold for as store credit or 60% as a check (notify us and give us a few days to get it written by a manager). Our system does not automatically drop prices over time and there is no notification when things sell. People just check back from time to time when they are in the area or call us periodically. Credit on file has no expiration.</p>
                <p>We reserve the right to change prices. Both to increase prices on high quality items so you and we both make more off them, as well as dropping prices on lower quality or low demand items to get them to sell to make more space for other items. We can also take items out of consignment and notify you to pick them up or have us donate them... Mostly this happens to low quality things we should have never accepted in the first place that just sit in consignment for years with no interest.</p>
                <p>It shouldn't need to be said, but... Do not double list your items trying to have them on consignment with us but also listed online elsewhere. Aside from this being against the use agreements on these online sites, its just plain rude to others. They will think they have purchased and paid for an item, you will come by to take it out of consignment, find its already sold, then need to apologize, and refund the person. If they needed the item for a recent trip they will need to scramble to buy it elsewhere. It reflects very poorly on you. If you want something to sell quickly, do the leg work, advertise and sell it yourself. You will make more and sell it quicker. Consignment is for those of us who are lazy.</p>
                <h3>Examples of things we take:</h3>
                <ul>
                    <li>Gently used climbing shoes, approach shoes, mountaineering boots, hiking boots, trail runners. We REALLY don't want blown out shoes. No one wants blown out shoes. No one wants to buy a shoe that they need to immediately send in for resole and wait several weeks to be able to even use.</li>
                    <li>Gently used clothing. We are looking mostly for known great outdoor brands: Patagonia, Prana, TNF, Arcteryx, Outdoor Research, Rab, etc...</li>
                    <li>Climbing hard goods: cams, stoppers, hexes, pitons, carabiners, sport draws, belay and rappel devices, progress capture devices, pulleys, nut tools, etc...</li>
                    <li>Industrial rope access hard goods: helmets, fall arrestors, ascenders, positioners, double pulleys, larger steel carabiners, etc...</li>
                    <li>Gently used climbing helmets.</li>
                    <li>Crash Pads, Hangboards</li>
                    <li>Climbing and hiking backpacks, rope tarps, chalk bags, bouldering buckets, good travel luggage, portaledges, haul bags, etc...</li>
                    <li>Tents, Sleeping Bags, Pads, stoves, trekking poles, etc...</li>
                    <li>Misc: Portable power banks, solar panels, headlamps, etc...</li>
                    <li>Misc: Snow pickets, microspikes, crampons, ice tools, ice axes, etc...</li>
                    <li>Guidebooks and other general outdoorsy interest books for the subjects our store is tailored to.</li>
                </ul>

                <h3>Examples of things we DON'T take:</h3>
                <ul>
                    <li>Climbing soft goods: ropes, harnesses, slings, PAS, etc... If you bring us a used harness we won't re-sell it. We will cut it up and Travis will salvage the metal buckle hardware for personal sewing projects. If you bring us a used rope we will cut it up or give it away for general non-life-safety use, like to make rope rugs or dog leashes. You have been warned!</li>
                    <li>Bikes, Skis, Snowboards, Kayaks... We don't usually have the space for bulky items like these. The new consignment store in town, Pedals and Peaks, is much more suited to these items.</li>
                    <li>Anything relating to football, soccer, basketball, hockey, tennis, golf, billiards, etc... Not our market.</li>
                </ul>

                <h3>Sometimes...</h3>
                <ul>
                    <li>Sometimes we will take climbing soft goods such as harnesses, ropes, taglines, etc... but ONLY when its from known and trusted local climbers and in very good, barely used condition. This is very rare.</li>
                    <li>Sometimes we will take aid ladders, since these are normally used for progression, not protection. As long as they are not too physically worn out. Similarly we take gear slings, since they are used for gear organization, and almost never as protection themselves.</li>
                    <li>Sometimes we will take Stand Up Paddleboards. If we have space and think it will sell.</li>
                    <li>Sometimes we will take items which don't really fit with our normal items if we feel they will still sell.</li>
                </ul>

                <h3>Blown out shoes...</h3>
                <ul>
                    <li>We get it. We know a lot of you have tons of blown out shoes at home that you don't find worth resoling and keeping. Please don't bring them to us. They usually just sit in consignment taking up space for a few years, then we have to get them back to you or trash them. So we usually don't take them at all.</li>
                    <li>Yes, even just dropping them off here for anyone to take for free, most people are not interested, and we have to just trash them.</li>
                    <li>We know, there are cases to be made for taking them. Sometimes you have a friend who just wants to try climbing, but no clue if they will ever use the shoes again, so no sense spending much. Or you flew into town and forgot shoes, but don't want to pay for a new pair... In these situations we just recommend renting shoes for outdoor use at the climbing gym. Yeah, they do that.</li>
                    <li>If you want to get rid of your blown out shoes, but feel good about it, donate them to Steve, the local shoe resoler. He will decide if its worth his time to resole, then he will try to sell them directly or on consignment under his name to make a little bit of side profit, or just trash them. If he ever gets an employee to help out, they can be for training use.</li>
                </ul>
            </Container>


            <CustomHeader
                text="This is the kind of shiny new climbing gear and clothing you can find here"
                bgImg={ barnacle }
            />
            <Container fluid className="pl-0 pr-0" style={ galleryStyles }>
                <ReusableGallery photos={ photos } />
            </Container>

        </Container>
    );
}