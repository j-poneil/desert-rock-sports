import React from 'react';
// no longer using parse, just having a func in the obj return JSX directly...
// it should be fine to use it like this. Where user is not doing any input. Remember, this doesn't do any sanitizing of HTML, its just a clean alternative to dangerouslySetInnerHTML.
// import parse from 'html-react-parser';

import { FaInstagram, FaYoutube, FaHome, FaGithub, FaRegFilePdf } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// % change photos, descriptions, blurbs, prices, etc here
import { tiers } from './data/guideTiers';
// import { guides } from './data/guides';
import { staff } from './data/staffList';

import TierCard from './sub/TierCard';
import Jumbotron from 'react-bootstrap/Jumbotron';

import GuideInquiryForm from './sub/GuideInquiryForm';
// import GuidingGalleryOld from './sub/GuidingGalleryOld';
// import GuidingGallery from './sub/GuidingGallery';
import ReusableGallery from './sub/ReusableGallery';
import { photos } from './data/guidingGalleryPhotos';

// Liability waiver(s)
// combined waiver... better than 4 separate links!
import RRCGCombinedWaiver8_20 from '../files/liability/RRCG Combined Waiver 8_20.pdf';

import CustomHeader from './sub/CustomHeader';
// import rope_med from '../img/BackgroundImages/rope_med.jpg';
import WRL_2 from '../img/HeaderImgs/WRL_2_16_9_polished-min.jpg';
import barnacle from '../img/HeaderImgs/Barnacle_16_9_polished-min.jpg';
import dead_wood from '../img/HeaderImgs/DeadWood_16_9_polished-min.jpg';
import barnacle_goggles from '../img/HeaderImgs/BarnacleGoggles_16_9_polished-min.jpg';
// import sunset_3 from '../img/HeaderImgs/Sunset_3_16_9_polished-min.jpg';
import pink_flowers from '../img/HeaderImgs/PinkFlowers_16_9_polished-min.jpg';



// 'https://via.placeholder.com/500x400'


// styles currently empty
// styles here:
// src\stylesheets\pages\_guiding.sass

const backgroundStyles = {
    // backgroundColor: 'white'
    // background: 'rgb(255,255,255)',
    // background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,101,35,1) 0%, rgba(139,221,255,1) 100%)',
}

export default function Guiding(){
    const tierList = tiers.map((i, index) => {
        return (
            <Col
                key={ index }
            >
                <TierCard
                    img={ i.img }
                    imgSm={ i.imgSm }
                    imgAltText={ i.imgAltText }
                    imgCredit={ i.imgCredit }
                    tierName={ i.tierName }
                    tierDuration={ i.tierDuration }
                    tierDescription={ i.tierDescription() }
                    costTable={ i.costTable }
                    tierNotes={ i.tierNotes() }
                />
            </Col>
        );
    });

    

    // these use short circuit evaluation inline
    // like {i.bio2 !== "" && <p>{i.bio2}</p>}
    // they work because if both evaluate to true, the second thing is returned
    // if false, it is ignored
    const guideList = staff.map((i, index) => {
        if(i.active && i.isGuide){
            return (
                <Col key={ index } className="mt-3 mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Img
                                src={ i.imgSrc }
                                alt={ i.name }
                            />
                            <Card.Title
                                className="text-center mt-3">
                                    { i.name }
                                    {/* 'thing' in i ... is checking to see if the key is present in the object, couples nicely with a ternary */}
                                    {/* Below, it looks like the empty tags are unnecessary, because it appears to be 1 root element... BUT they are necessary because there is actually two elements, a " " and the link */}
                                    {
                                        'ig' in i ?
                                            i.ig !== "" && <> <a href={ i.ig } target="_blank" rel="noopener noreferrer"><FaInstagram /></a></>
                                            : null
                                    }
                                    { 
                                        'github' in i ?
                                            i.github !== "" && <> <a href={ i.github } target="_blank" rel="noopener noreferrer"><FaGithub /></a></>
                                            : null
                                    }
                                    {
                                        'youtube' in i ?
                                            i.youtube !== "" && <> <a href={ i.youtube } target="_blank" rel="noopener noreferrer"><FaYoutube /></a></>
                                            : null
                                    }
                                    {
                                        'site' in i ?
                                            i.site !== "" && <> <a href={ i.site } target="_blank" rel="noopener noreferrer"><FaHome /></a></>
                                            : null
                                    }
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted text-center">{ i.certs !== "" && i.certs }</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted text-center">{ i.exp !== "" && i.exp }</Card.Subtitle>
                            <div>
                                <>{ i.bio() }</>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            );
        }
        else {
            return null;
        }
    });

    return (
        <Container fluid className="pr-0 pl-0" style={ backgroundStyles }>
            <CustomHeader
                text="Guide Service"
                bgImg={ WRL_2 }
            />


            <Container fluid="md" className="onTopOfBackground">
                <h1 className="text-center">Red Rock Climbing Guides</h1>
                <hr style={{width: '30%'}} />
                <h5 className="text-center">How it works:</h5>
                <ol className="text-left">
                    <li>Check out our options below</li>
                    <li>Call us at <a href="tel:1-702-506-6640" target="_blank" rel="noopener noreferrer">1-702-506-6640</a> or email: <a href="email:redrockguides@gmail.com" target="_blank" rel="noopener noreferrer">redrockguides@gmail.com</a> for more information.<br />
                    Calling us during our shop business hours is best. We can most likely answer all your questions in just a few minutes, where-as with email there often needs to be more back and forth so we can be sure our answers are relevant to your situation.</li>
                    <li>Call when you are ready to book with us. We make sure we have all the important contact info, goals, and logistical details noted down. Then we take credit card payment in full over the phone to reserve your spot on our calendar. We don't find and reserve you a guide until after you have paid. Thus, all bookings must be paid in advance of the date, the sooner the better to be sure you get a guide. After you are paid up, we email you a receipt as well as helpful guidelines on what to expect regarding where to meet, what to bring, etc...</li>
                    <li>We find a guide. They contact you directly to talk about what you are looking to get out of the day and fine-tune meetup time and location. They typically reach out 24-72h in advance of the date. We understand sometimes our clients will be out of cell service the day before, such as when visiting nearby destinations like Zion or the Grand Canyon. If this is going to be the case make sure to tell us so we can put notes in the booking so the guide knows to reach out sooner.</li>
                    <li>You have a blast!</li>
                    <li>( we may be experimenting with holding a few pre-scheduled skills classes & camps, deets below )</li>
                </ol>
                <h5>Give us as much heads up as you can</h5>
                <p>Our guides have their own lives, schedules, other careers, and personal climbing trips. They are not just sitting around waiting to get a call. Many of our guides are only here during the peak season. Please give us as much advanced notice as possible, and get paid up early, 2-3wks during the peak season is great (Oct - Apr) or 1-2wks during the summer. We will always try to get a guide for any booking, even if it is last minute, same or next day, it just gets much more likely that they are all already busy or wont get back to us in time. For large groups, like 12+ please give us extra time, on our end it is no longer finding 1 guide, it is finding 3+ guides who are all going to be available.</p>
                <h5>Transportation</h5>
                <p>We do not pickup/drop off from the strip. If you can get to our shop with your own transportation (or Uber / Lyft), then you can carpool in the guide's vehicle from our shop out to Red Rock and back to our shop. Note that some of our guides only have 1 free seat in their vehicle so guide selection can vary and for larger groups you very well may need your own transportation. There is no company shuttle. Picking up clients and dropping them off if their hotel is on the way out (minimal detour) to Red Rock is often possible, especially if the clients already have all their own personal climbing gear. The Strip is in the completely opposite direction and would easily add almost 2 hours to the guides day between pickup and drop off, which is why we don't.</p>
                <h5>Weather</h5>
                <p>Vegas is blessed, or cursed, with on average 300 days of sun a year... but rain does happen. Red Rock is higher elevation than Vegas and the canyons where the multipitch is get more precip than most people would think, storms often coming from the west coast, hitting them, then dissapating before really hitting Vegas itself. Its not anywhere near as bad the "every day" afternoon thunderstorms like mountainous areas of Colorado get. Unlike the Colorado granite however, our sandstone is more dangerous to climb after a rain, it loses a lot of its strength, so if that happens we can go climb limestone, refund, or keep keep credit on file for a future date if you prefer.</p>
                <p>Note that while the cooler months are by far the best temps to climb at Red Rock, when there is precip and it is cold, like near freezing, it takes longer for the rock to dry out. If we get multiple days in a row of heavy precip, it can take multiple days to dry out... Sometimes it can be a good idea to just bail to Joshua Tree or elsewhere to climb. This past 2022/2023 fall/winter was brutal with the amount of precip. You will probably remember all the reports of record or near record snowfall all over the west, so Red Rock was not an isolated anamoly. Weather related cancellations do occur, and especially in peak season due to the necessary drying out time sometimes being prolonged due to the lower temps. An unfortunate reality.</p>
                <h5>Group sizes, multiple guides</h5>
                <p>We can accomodate large groups, but due to BLM regulations and terms of our commercial usage permit, we may have to split large groups into multiple smaller groups going to different areas.</p>
                <p>On our Tier 1 and 2 outings for 5 or more climbers we will typically add a second guide to make sure everyone gets enough time on the rock, the prices already reflect this. We can also add a second guide (or more) on request for smaller groups... For example, a group of 4 climbers Tier 1 half day, 2 adults and 2 kids. The parents may want to climb harder routes on the same wall with one guide, while a second guide watches and belays the kids. We would generally treat this as 2 separate half days with 2ppl each, so $350 + $350 = $700, only slightly more expensive than 4ppl half day with a single guide for $600.</p>
                

            </Container>

            <CustomHeader
                text="All about our guiding services!"
                bgImg={ barnacle }
            />

            <Container fluid="md" className="onTopOfBackground">
                {/* <h5 className='text-center'>About our guiding services!</h5> */}
                {/* <hr style={{width: '30%'}} /> */}
                <p>The entire staff of the Red Rock Climbing Guides (RRCG) believes our responsibility to the climbing community does not begin and end at our front door. We recognize it extends across the globe, anywhere our climbers are climbing.</p>
                <p>We are committed to providing a fun outdoor rock climbing experience regardless of your ability. Our goal is to help you develop your rock-craft skills while becoming a knowledgeable, efficient, environmentally-aware climber focused on managing risks inherent in climbing and leave-no-trace ethics.</p>
                <p>All of our activities are designed to help you develop self-reliance, teamwork and self-confidence on the rock. After completing any of our activities, you will be a better, more competent climber.</p>
                <p>Red Rock Climbing Guides operate in the Red Rock Canyon National Conservation Area by permission of the Las Vegas District of the Bureau of Land Management. We are Las Vegas' only locally-owned guide service. Our guides are great at managing the risks inherent in climbing and giving you a fun and affordable experience you won't soon forget!</p>
                <p>We provide all your technical equipment! You only need to bring food, water, a decent pair of shoes for hiking in, and clothing appropriate for the season and activity. Call us if you need assistance.</p>
            </Container>
            
            {/* //! Can't decide between xl={4} and xl={2}.... 2 is more readable. 3 would be great, but we have 4, not 6 tiers, so the other would hang free and look weird... I think we should just make 2 more tiers... like 'Tier 4 - Adventure Hike' and 'Tier 5 - bigwall'... For now I have made them and commented them out in 'guideTiers.js'. If we implement them, switch to xl={3} */}
            <Container fluid className="mt-3">
                <Row xxl={4} xl={4} lg={2} md={1} sm={1} xs={1}>
                    { tierList }
                </Row>
            </Container>


            <Container fluid="md" className="onTopOfBackground">
                {/* <h5>Cancellation policy:</h5>
                <p>
                    Please note that our cancellation policy allows you to cancel for any reason 72+ hours in advance of your reservation for a credit towards a future outing or for a full refund. If you cancel within the period of 24-72 hours before the date of your reservation we will not process a refund rather we will create a credit for you for the full dollar amount of the reservation to use for up to 12 months from the date of your reservation. The only exception is if the outing is cancelled by us and this can happen due to weather, guide sickness, or other unforeseen factors and then you will have the option to receive either a credit or a full refund even if it is within 72 hours of the date of your outing. If you are visiting Vegas and issues arise outside or even within 72 hours on either of our ends we will try to help you rebook if possible, depending on our guide availability, for a different day if you still desire to climb and have flexibility during your trip. If you cancel within 24 hours of your outing we will not issue a credit or refund unless you are able to make arrangements to rebook directly with your same guide so they do not lose out on a workday (they may not be able to be assigned other work last minute). However if within 24 hours the cancellation is weather related or an issue on our end you can choose a credit or full refund.
                </p> */}
                <h5>Cancellation Policy:</h5>
                <p>
                    &gt;72 hours notice:
                    <ul>
                        <li>Full refund or full credit to a future outing.</li>
                    </ul>
                </p>
                <p>
                    72-24 hours notice:
                    <ul>
                        <li>No refund, but full credit to use for up to 12 months on your next trip.</li>
                    </ul>
                </p>
                <p>
                    &lt;24 hours notice, or "no shows":
                    <ul>
                        <li>No refund, no credit, unless you can arrange to rebook with your same guide so they do not lose out on a workday.<br/>
                        They may not be able to be assigned other work at the last minute.</li>
                    </ul>
                </p>
                <p>
                    Cancellation due to weather, guide sickness, other unforeseen issue on our end:
                    <ul>
                        <li>Full refund or credit to a future outing. Even if its &lt;72 hours, or even &lt;24 hours.</li>
                    </ul>
                </p>
                <p>
                    If you are visiting Vegas and issues arise outside or even within 72 hours on either of our ends we will try to help you rebook if possible, depending on our guide availability, for a different day if you still desire to climb and have flexibility during your trip.
                </p>
            </Container>


            <CustomHeader
                text="Pictures from some of our outings"
                bgImg={ dead_wood }
            />

            {/* <Jumbotron className="text-center mt-3">
                <h1>
                    Check out some of the things you could experience going out with us!
                </h1>
            </Jumbotron> */}

            {/* //! insert gallery here, mt-5 here or maybe mt-3 mb-3... probably not in a Jumbotron. 1 col regardless of screen size */}
            <Jumbotron className="text-center">
                <ReusableGallery photos={ photos } />
            </Jumbotron>

            <CustomHeader
                text="Some of our amazing guides"
                bgImg={ barnacle_goggles }
            />

            {/* <Jumbotron className="text-center mt-3 mb-3">
                <h1>
                    Check out some of our amazing guides below!
                </h1>
            </Jumbotron> */}

            <Container fluid>
                {/* //! xxl={4} never applies, its broken */}
                <Row xxl={4} xl={3} lg={2} md={2} sm={1} xs={1}>
                    { guideList }
                </Row>
            </Container>

            {/* //@ If going to have pre-scheduled classes that people can sign up for in advance, and hopefully pay online, I'd put that section here */}

            
            <CustomHeader
                text="We can accomodate many different situations, just contact us!"
                bgImg={ pink_flowers }
            />
            {/* We can accomodate other things, just ask! */}
            {/* <Jumbotron className="text-center mt-5">
                <h3>We can accomodate all sorts of outings. Feel free to contact us even if what you are looking for doesn't fit neatly into one of our standard tiers above. Filming a commercial or movie? Large corporate event? Small event with a professional climber and climbing photographer? Proposing to your S/O? We can accomodate many situations, just let us know!</h3>
            </Jumbotron> */}

            {/* Contact us form... to prompt on some of the info we need to help */}
            <Container fluid="md" >
                {/* Using formsubmit.co to simplify / eliminate dealing with backend */}
                <GuideInquiryForm />
                <br />

                <div className="mt-3 mb-3 onTopOfBackground">
                    <h5>Liability Waivers</h5>
                    <p>We typically just fill out liability waivers in person when we meet up. You can print and fill this one out ahead of time if you prefer. Sorry, its long. Emailing us is not sufficient since the guide needs to be able to look over your waiver, especially medical, to be made aware of any important info like severe allergic reactions, if one is diabetic, chronic injuries (may need to avoid a particular type of climbing move to not aggravate it), etc... Many of our guides don't have access to our email and sometimes the meetup location is not in cell service. The guide needs to have all pertinant medical and emergency info.</p>
                    <p>
                        <strong><a
                            href={ RRCGCombinedWaiver8_20 }
                            target="_blank" rel="noopener noreferrer"
                        >
                            RRCG Combined Waiver 8/20 <FaRegFilePdf />
                        </a></strong>
                    </p>
                </div>
                <br />
            </Container>
            
        </Container>
    );
}