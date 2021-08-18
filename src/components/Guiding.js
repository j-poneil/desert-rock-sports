import React from 'react';
// % it should be fine to use it like this. Where user is not doing any input. Remember, this doesn't do any sanitizing of HTML, its just a clean alternative to dangerouslySetInnerHTML.
import parse from 'html-react-parser';

import { FaInstagram, FaYoutube, FaHome, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// % change photos, descriptions, blurbs, prices, etc here
import { tiers } from './data/guideTiers';
import { guides } from './data/guides';

import TierCard from './sub/TierCard';
import Jumbotron from 'react-bootstrap/Jumbotron';

import GuideInquiryForm from './sub/GuideInquiryForm';

// Liability waiver(s)
// combined waiver... better than 4 separate links!
import RRCGCombinedWaiver8_20 from '../files/liability/RRCG Combined Waiver 8_20.pdf';



// 'https://via.placeholder.com/500x400'


// styles currently empty
// styles here:
// src\stylesheets\pages\_guiding.sass

export default function Guiding(){
    const tierList = tiers.map((i) => {
        return (
            <Col>
                <TierCard
                    key={ i.key }
                    img={ i.img }
                    imgSm={ i.imgSm }
                    imgAltText={ i.imgAltText }
                    imgCredit={ i.imgCredit }
                    tierName={ i.tierName }
                    tierDuration={ i.tierDuration }
                    tierDescription={ <>{ parse(i.tierDescription) }</> }
                    costTable={ i.costTable }
                    tierNotes={ <>{ parse(i.tierNotes) }</> }
                />
            </Col>
        );
    });

    

    // these use short circuit evaluation inline
    // like {i.bio2 !== "" && <p>{i.bio2}</p>}
    // they work because if both evaluate to true, the second thing is returned
    // if false, it is ignored
    const guideList = guides.map((i) => {
        if(i.active){
            return (
                <Col key={ i.name } className="mt-3 mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Img
                                src={ i.pic }
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
                            <Card.Text>
                                { i.exp !== "" && <p>{ i.exp }</p> }
                                <>{ parse(i.bio) }</>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            );
        }
    });

    return (
        <Container fluid className="mt-3 mb-3">
            <Container fluid>
                <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1}>
                    <Col>
                        <Card style={{'height': '100%'}}>
                            <Card.Body>
                                <Card.Title as='h1' className="text-center">Red Rock Climbing Guides</Card.Title>
                                <Card.Text>
                                    <hr style={{width: '30%'}} />
                                    <Card.Subtitle className="text-center">How it works:</Card.Subtitle>
                                    <ol className="text-left">
                                        <li>Check out our options below</li>
                                        <li>call us at <a href="tel:1-702-506-6640" target="_blank" rel="noopener noreferrer">1-702-506-6640</a> or email: <a href="email:redrockguides@gmail.com" target="_blank" rel="noopener noreferrer">redrockguides@gmail.com</a> for more information</li>
                                        <li>We take credit card payment in full over the phone to reserve your spot on our calendar</li>
                                        <li>We find a guide. They contact you directly to talk about what you are looking to get out of the day and fine-tune meetup time and location</li>
                                        <li>You have a blast!</li>
                                    </ol>
                                    <Card.Subtitle>However...</Card.Subtitle>
                                    <p>Our guides have their own lives, schedules, other careers, and personal climbing trips. They are not just sitting around waiting to get a call. Please give us as much advanced notice as possible, 2-3wks during the peak season is great (Oct - Apr) or 1-2wks during the summer. We will always try to get a guide for any booking, even if it is last minute next day, it just gets much more likely that they are all already busy or wont get back to us in time. For large groups, like 12+ please give us extra time, on our end it is no longer finding 1 guide, it is finding 3+ guides who are all going to be available.</p>
                                    <p>Most of the time the clients and guide carpool together out from Desert Rock Sports to Red Rock Canyon. Picking up clients and dropping them off if they are on the way is often possible. We greatly prefer to not need to pickup and dropoff at the strip as it is completely in the opposite direction from where we are trying to go to and from.</p>
                                    <p>We do full refund if you (or we) need to cancel for any reason, we just ask for ~24h advanced notice so we can notify the guide so they can make other plans. We can also keep credit on file for a future date indefinately. The sandstone is more dangerous to climb after a rain, it loses a lot of its strength, so if that happens we can go climb limestone or refund / keep credit on file if you prefer.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{'height': '100%'}}>
                            <Card.Body>
                                <Card.Title className='text-center'>About our guiding services!</Card.Title>
                                {/* <Card.Title className='text-center'>Our philosophy</Card.Title> */}
                                <hr style={{width: '30%'}} />
                                <Card.Text>
                                    <p>The entire staff of the Red Rock Climbing Guides (RRCG) believes our responsibility to the climbing community does not begin and end at our front door. We recognize it extends across the globe, anywhere our climbers are climbing.</p>
                                    <p>We are committed to providing a fun outdoor rock climbing experience regardless of your ability. Our goal is to help you develop your rock-craft skills while becoming a knowledgeable, efficient, environmentally-aware climber focused on managing risks inherent in climbing and leave-no-trace ethics.</p>
                                    <p>All of our activities are designed to help you develop self-reliance, teamwork and self-confidence on the rock. After completing any of our activities, you will be a better, more competent climber.</p>
                                    <p>Red Rock Climbing Guides operate in the Red Rock Canyon National Conservation Area by permission of the Las Vegas District of the Bureau of Land Management. We are Las Vegas' only locally-owned guide service. Our guides are great at managing the risks inherent in climbing and giving you a fun and affordable experience you won't soon forget!</p>
                                    <p>We provide all your technical equipment! You only need to bring food, water, a decent pair of shoes for hiking in, and clothing appropriate for the season and activity. Call us if you need assistance.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
            {/* //! Can't decide between xl={4} and xl={2}.... 2 is more readable. 3 would be great, but we have 4, not 6 tiers, so the other would hang free and look weird... I think we should just make 2 more tiers... like 'Tier 4 - Adventure Hike' and 'Tier 5 - bigwall'... For now I have made them and commented them out in 'guideTiers.js'. If we implement them, switch to xl={3} */}
            <Container fluid className="mt-3">
                <Row xxl={4} xl={4} lg={2} md={1} sm={1} xs={1}>
                    { tierList }
                </Row>
            </Container>

            <Jumbotron className="text-center mt-3 mb-3">
                <h1>
                    Check out some of our amazing guides below!
                </h1>
            </Jumbotron>

            <Container fluid>
                <Row xxl={4} xl={3} lg={2} md={2} sm={1} xs={1}>
                    { guideList }
                </Row>
            </Container>

            {/* //! insert gallery here, mt-5 here or maybe mt-3 mb-3... probably not in a Jumbotron. 1 col regardless of screen size */}
            <Jumbotron fluid className="text-center mt-5">
                <h1>( insert gallery here )</h1>
            </Jumbotron>

            {/* We can accomodate other things, just ask! */}
            <Jumbotron fluid className="text-center mt-5">
                <h3>We can accomodate all sorts of outings. Feel free to contact us even if what you are looking for doesn't fit neatly into one of our standard tiers above. Filming a commercial or movie? Large corporate event? Small event with a professional climber and climbing photographer? Proposing to your S/O? We can accomodate many situations, just let us know!</h3>
            </Jumbotron>

            {/* //! Needs validation, captcha, etc... So maybe put this off til later... or use a dedicated form service */}
            {/* Contact us form... to prompt on some of the info we need to help */}
            <Container fluid className="mt-5">
                <Row xxl={2} xl={2} lg={2} md={2} sm={1} xs={1}>
                    <Col>
                        <GuideInquiryForm />
                    </Col>

                    <Col>
                        <Card style={{'height': '100%'}}>
                            <Card.Body>
                                <Card.Title>Liability Waivers</Card.Title>
                                <Card.Text>
                                    <p>We typically just fill out liability waivers in person when we meet up. You can print and fill this one out ahead of time if you prefer. Sorry, its long. Emailing us is not sufficient since the guide needs to be able to look over your waiver, especially medical, to be made aware of any important info like severe allergic reactions, if one is diabetic, chronic injuries (may need to avoid a particular type of climbing move to not aggravate it), etc... Many of our guides don't have access to our email and sometimes the meetup location is not in cell service. The guide needs to have all pertinant medical and emergency info.</p>
                                    <p>
                                        <a href={ RRCGCombinedWaiver8_20 } target="_blank" rel="noopener noreferrer">RRCG Combined Waiver 8/20</a>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </Container>
    );
}