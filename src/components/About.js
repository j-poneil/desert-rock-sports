import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

//% update staff bios, imgs, etc here
import { staff } from './data/staffList';

// styles here:
// src\stylesheets\pages\_about.sass

export default function About(){
    // these use short circuit evaluation inline
    // like {i.bio2 !== "" && <p>{i.bio2}</p>}
    // they work because if both evaluate to true, the second thing is returned
    // if false, it is ignored
    const staffList = staff.map((i) => {
        if(i.active){
            return (
                <Col key={i.name}>
                    <Card>
                        <Card.Body>
                            <Card.Img src={i.imgSrc} alt={i.name} />
                            <Card.Title>{ i.name }</Card.Title>
                            <Card.Subtitle>{ i.ig !== "" && <a href={i.ig}>IG</a> }</Card.Subtitle>
                            <Card.Text>
                                <p>{i.bio1}</p>
                                {i.bio2 !== "" && <p>{i.bio2}</p>}
                                {i.bio3 !== "" && <p>{i.bio3}</p>}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            );
        }
    });

    const inactiveStaffList = staff.map((i) => {
        if(!i.active){
            return (
                <Col key={i.name}>
                    <Card>
                        <Card.Body>
                            <Card.Img src='https://via.placeholder.com/500x400' alt={i.name} />
                            <Card.Title>{ i.name }</Card.Title>
                            <Card.Subtitle>{ i.ig !== "" && <a href={i.ig}>IG</a> }</Card.Subtitle>
                            <Card.Text>
                                <p>{i.bio1}</p>
                                {i.bio2 !== "" && <p>{i.bio2}</p>}
                                {i.bio3 !== "" && <p>{i.bio3}</p>}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            );
        }
    });

    return (
        <Container fluid>
            <Row xl={2} lg={2} md={2} sm={2} xs={1}>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>How they met...</Card.Title>
                            <Card.Text>
                                <p>Mike Lorenzo, Steve Mallory and Travis Graves met through their love of climbing at Red Rock Climbing Center (formerly, Powerhouse Gym). Travis, who was the store manager for Desert Rock Sports, approached Mike and Steve with the idea of forming a partnership to buy the store from Mike and Tim Ward who wanted to retire. In February 2005 the partnership was born.</p>
                                <p>All three are active climbers and are members of Las Vegas Climbers' Liaison Council, an organization that is dedicated to ensuring climbing access, encouraging stewardship of the environment, and cultivating a sense of community in a world-class climbing destination.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Img src='https://via.placeholder.com/500x400' alt="The OG DRS crew" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>(... History? ...)</Col>
                <Col>( something )</Col>
                <Col>( something )</Col>
            </Row>

            <Container>
                <Row xl={4} lg={3} md={2} sm={2} xs={1}>
                    { staffList }
                </Row>
            </Container>

            <hr />

            {/* Past / Inactive staff */}
            {/* Probably don't need to show, but maybe still could, like with greyed out background? */}
            <Container>
                <Row xl={4} lg={3} md={2} sm={2} xs={1}>
                    { inactiveStaffList }
                </Row>
            </Container>
        </Container>
    );
}