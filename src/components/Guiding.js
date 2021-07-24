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
                    <Card>
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
                <Row xl={2} lg={2} md={2} sm={1} xs={1}>
                    <Col>
                        <Card>
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
                        <Card>
                            <Card.Body>
                                {/* <Card.Title></Card.Title> */}
                                <Card.Text>The entire staff of the Red Rock Climbing Guides (RRCG) believes our responsibility to the climbing community does not begin and end at our front door. We recognize it extends across the globe, anywhere our climbers are climbing.</Card.Text>
                                <Card.Text>We are committed to providing a safe outdoor rock climbing experience regardless of your ability. Our goal is to help you develop your rock-craft skills while becoming a knowledgeable, efficient, environmentally-aware climber focused on safety and leave-no-trace ethics.</Card.Text>
                                <Card.Text>All of our activities are designed to help you develop self-reliance, teamwork and self-confidence on the rock. After completing any of our activities, you will be a better, more competent climber.</Card.Text>
                                <Card.Text>Red Rock Climbing Guides operate in the Red Rock Canyon National Conservation Area by permission of the Las Vegas District of the Bureau of Land Management. We are Las Vegas' only locally-owned guide service and are prepared to make your outdoor experience Fun, Affordable, and Safe!</Card.Text>
                                <Card.Text>We provide all your technical equipment! You only need to bring food, water, a decent pair of shoes for hiking in, and clothing appropriate for the season and activity. Call us if you need assistance.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
            <Container fluid className="mt-3">
                <Row xl={4} lg={2} md={2} sm={2} xs={1}>
                    { tierList }
                </Row>
            </Container>

            <Jumbotron className="text-center mt-3 mb-3">
                <h1>
                    Check out some of our amazing guides below!
                </h1>
            </Jumbotron>

            <Container fluid>
                <Row xl={4} lg={3} md={2} sm={2} xs={1}>
                    { guideList }
                </Row>
            </Container>

            {/* //! insert gallery here, mt-5 here or maybe mt-3 mb-3 */}
            <Jumbotron fluid className="text-center mt-5">
                <h1>( insert gallery here )</h1>
            </Jumbotron>
            
        </Container>
    );
}