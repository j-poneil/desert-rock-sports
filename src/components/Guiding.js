import React from 'react';
import { FaInstagram } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import CardDeck from 'react-bootstrap/CardDeck';

// % change photos, descriptions, blurbs, prices, etc here
import { tiers } from './data/guideTiers';
import { guides } from './data/guides';

import TierCard from './sub/TierCard';
import { Jumbotron } from 'react-bootstrap';

// 'https://via.placeholder.com/500x400'


// styles currently empty
// styles here:
// src\stylesheets\pages\_guiding.sass

export default function Guiding(){
    const tierList = tiers.map((i) => {
        return (
            <Col>
                <TierCard
                    key={i.key}
                    img={i.img}
                    imgSm={i.imgSm}
                    imgAltText={i.imgAltText}
                    imgCredit={i.imgCredit}
                    tierName={i.tierName}
                    tierDuration={i.tierDuration}
                    tierDescription={i.tierDescription}
                    costTable={i.costTable}
                    tierNotes={i.tierNotes}
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
                <Col key={i.name}>
                    <Card>
                        <Card.Body>
                            <Card.Img src={i.pic} alt={i.name} />
                            <Card.Title className="text-center">{ i.name } {i.ig !== "" && <a href={i.ig} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted text-center">{ i.certs !== "" && i.certs }</Card.Subtitle>
                            <Card.Text>
                                {i.exp !== "" && <p>{i.exp}</p>}
                                <p>{i.bio1}</p>
                                {i.bio2 !== "" && <p>{i.bio2}</p>}
                                {i.bio3 !== "" && <p>{i.bio3}</p>}
                                {i.site !== "" && <><br/><a href={i.site}>personal site</a></>}
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
                        <h1 className="">
                            Red Rock Climbing Guides
                        </h1>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title></Card.Title>
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
            
            <Container fluid>
                <Row xl={4} lg={2} md={2} sm={2} xs={1}>
                    { tierList }
                </Row>

            </Container>

            {/* //! WORK HERE */}
            <Container fluid>
                <Row xl={4} lg={3} md={2} sm={2} xs={1}>
                    { guideList }
                </Row>
            </Container>
            
            {/* //! WORK HERE */}
            <Container fluid>
                <Card>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            ( Contact info, if you have more questions, for corporate or other special cases, etc... )
                        </Card.Text>
                        <Card.Text>
                            ( Guide waivers ??? )
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            
        </Container>
    );
}