import React from 'react';
import { FaInstagram } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

//% update staff bios, imgs, etc here
import { staff } from './data/staffList';
import { Jumbotron } from 'react-bootstrap';

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
                            <Card.Title className="text-center">{ i.name } { i.ig !== "" && <a href={i.ig} target="_blank" rel="noopener noreferrer"><FaInstagram /></a> }</Card.Title>
                            <Card.Subtitle className="text-center"></Card.Subtitle>
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
        <Container fluid className="mt-3 mb-3">
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
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>History ???</Card.Title>
                            <Card.Text>
                                lorem ipsum et dolor something yada ydad dydyafdsa
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Something else???</Card.Title>
                            <Card.Text>
                                lorem ipsum et dolor something yada ydad dydyafdsa
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Jumbotron className="text-center mt-3 mb-3">
                <h1>The wonderful staff behind Desert Rock Sports</h1>
                <p>We can help you find whatever you are looking for.</p>
            </Jumbotron>

            <Container fluid className="mt-3">
                <Row xl={3} lg={3} md={2} sm={2} xs={1}>
                    { staffList }
                </Row>
            </Container>
        </Container>
    );
}