import React from 'react';

// no longer using parse, just returning JSX directly from funcs in the objs...
// fine to use here, because it is not on user input. REMEMBER, html-react-parser doesn't do any sanitizing of input!
// import parse from 'html-react-parser';

import { FaInstagram, FaYoutube, FaHome, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';

//% update staff bios, imgs, etc here
import { staff } from './data/staffList';
// import { Jumbotron } from 'react-bootstrap';

// side img, etc
// import Cat_medium from '../img/About/Cat_medium.jpg';
// import Cat_480x320 from '../img/About/cat_480x320.jpg';
// import Cat_720x480 from '../img/About/cat_720x480.jpg';
// import Cat_1152x768 from '../img/About/cat_1152x768.jpg';
// import Cat_1620x1080 from '../img/About/cat_1620x1080.jpg';

import CustomHeader from './sub/CustomHeader';
// import rope_med from '../img/BackgroundImages/rope_med.jpg';
// import spiky from '../img/HeaderImgs/Spiky_16_9_polished-min.jpg';
import fossil from '../img/HeaderImgs/Fossil_16_9_polished-min.jpg';
// import barnacleGoggles from '../img/HeaderImgs/BarnacleGoggles_16_9_polished-min.jpg';
import whiteYellowFlowers from '../img/HeaderImgs/WhiteYellowFlowers_16_9_polished-min.jpg';

// styles here:
// src\stylesheets\pages\_about.sass

const backgroundStyles = {
    // backgroundColor: 'white'
    // background: 'rgb(255,255,255)',
    // background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,101,35,1) 0%, rgba(139,221,255,1) 100%)',
}

export default function About(){
    const staffList = staff.map((i) => {
        if(i.active && i.isRetail){
            return (
                <Col key={i.name} className="mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Img
                                src={i.imgSrc}
                                alt={i.name}
                            />
                            <Card.Title className="text-center mt-3">
                                { i.name }
                                {/* 'thing' in i ... is checking to see if the key is present in the object, couples nicely with a ternary */}
                                {/* Below, it looks like the empty tags are unnecessary, because it appears to be 1 root element... BUT they are necessary because there is actually two elements, a " " and the link */}
                                {
                                    'ig' in i ?
                                        i.ig !== "" && <> <a href={i.ig} target="_blank" rel="noopener noreferrer"><FaInstagram /></a></>
                                        : null
                                }
                                { 
                                    'github' in i ?
                                        i.github !== "" && <> <a href={i.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a></>
                                        : null
                                }
                                {
                                    'youtube' in i ?
                                        i.youtube !== "" && <> <a href={i.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a></>
                                        : null
                                }
                                {
                                    'site' in i ?
                                        i.site !== "" && <> <a href={i.site} target="_blank" rel="noopener noreferrer"><FaHome /></a></>
                                        : null
                                }
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted text-center">{ i.position !== "" && i.position }</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted text-center">{ i.certs !== "" && i.certs }</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted text-center">{ i.exp !== "" && i.exp }</Card.Subtitle>
                            {/* Card.Text renders as a <p></p>, not supposed to have paragraphs within paragraphs! */}
                            {/* <Card.Text>
                                <>{ i.bio() }</>
                            </Card.Text> */}
                            <>{ i.bio() }</>
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
                text="How it all started"
                bgImg={ fossil }
            />

            <Container fluid="md" className="onTopOfBackground">
                {/* <h3>How they met...</h3> */}
                <p>Mike Lorenzo, Steve Mallory and Travis Graves met through their love of climbing at Red Rock Climbing Center (formerly, Powerhouse Gym). Travis, who was the store manager for Desert Rock Sports, approached Mike and Steve with the idea of forming a partnership to buy the store from Mike and Tim Ward who wanted to retire. In February 2005 the partnership was born.</p>
                <p>All three are active climbers and are members of Las Vegas Climbers' Liaison Council, an organization that is dedicated to ensuring climbing access, encouraging stewardship of the environment, and cultivating a sense of community in a world-class climbing destination.</p>
                {/* <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1}> */}
                    {/* <Col className="mb-3">
                        <Card style={{'height': '100%'}}>
                            <Card.Body>
                                <Card.Title>How they met...</Card.Title>
                                <Card.Text>
                                    Mike Lorenzo, Steve Mallory and Travis Graves met through their love of climbing at Red Rock Climbing Center (formerly, Powerhouse Gym). Travis, who was the store manager for Desert Rock Sports, approached Mike and Steve with the idea of forming a partnership to buy the store from Mike and Tim Ward who wanted to retire. In February 2005 the partnership was born.
                                </Card.Text>
                                <Card.Text>
                                    All three are active climbers and are members of Las Vegas Climbers' Liaison Council, an organization that is dedicated to ensuring climbing access, encouraging stewardship of the environment, and cultivating a sense of community in a world-class climbing destination.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                    {/* <Col className="mb-3">
                        <Card style={{'height': '100%'}}>
                            <Card.Img
                                src={ Cat_480x320 }
                                srcSet={
                                    `${Cat_480x320} 480w,
                                    ${Cat_720x480} 720w,
                                    ${Cat_1152x768} 1152w,
                                    ${Cat_1620x1080} 1620w`
                                }
                                // sizes="100vw"
                                // at <992px vs, 1 col = img width = 100vw - padding/margins
                                // at larger sizes: 2 cols = img width = 50vw - padding/margins
                                sizes="(min-width: 992px) 50vw - 32px, 100vw - 32px"
                                alt="Stuffed animal hanging out in a sandstone nook"
                            />
                        </Card>
                    </Col> */}
                    {/* <Col className="mb-3">
                        <Card style={{'height': '100%'}}>
                            <Card.Body>
                                <Card.Title>History ???</Card.Title>
                                <Card.Text>
                                    lorem ipsum et dolor something yada ydad dydyafdsa
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                    {/* <Col className="mb-3">
                        <Card style={{'height': '100%'}}>
                            <Card.Body>
                                <Card.Title>Something else???</Card.Title>
                                <Card.Text>
                                    lorem ipsum et dolor something yada ydad dydyafdsa
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                {/* </Row> */}
            </Container>

            <CustomHeader
                text="Our wonderful staff"
                bgImg={ whiteYellowFlowers }
            />

            <Container fluid="md">
                {/* <Jumbotron className="text-center mb-3">
                    <h1>The wonderful staff behind Desert Rock Sports</h1>
                    <p>We can help you find whatever you are looking for.</p>
                </Jumbotron> */}

                <Container fluid className="mt-3">
                    {/* <Row xxl={3} xl={3} lg={2} md={2} sm={1} xs={1}> */}
                    <Row xxl={2} xl={2} lg={1} md={1} sm={1} xs={1}>
                        { staffList }
                    </Row>
                </Container>
            </Container>
        </Container>
    );
}