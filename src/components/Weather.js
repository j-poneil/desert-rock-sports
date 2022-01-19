import React from 'react';

import { FaInstagram, FaYoutube, FaHome, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';


const Weather = () => {
    return (
        <Container fluid className="mt-3">
            <Jumbotron className="text-center mb-3">
                <h1>Weather</h1>
                <p>Vegas is known for an average of over 300 sunny days per year. Even still, it can, and does rain. Further complication is that Red Rock Canyon, at a higher elevation, tends to get hit harder than Las Vegas itself. As well, there are no weather stations out in/on the rocks (yet?) so our best look at rainfall measurements are from just a few weather stations in the general area which often have recorded nothing when its plainly obvious for anyone to see that the canyons are getting dumped on.</p>
                {/* <p></p> */}
            </Jumbotron>

            <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1}>
                <Col className="mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Title>The Science of Wet Sandstone</Card.Title>
                            <Card.Text>
                                <p></p>
                                <p></p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{'height': '100%'}}>
                        {/* <Card.Img src={ Cat_medium } alt="Stuffed animal hanging out in a sandstone nook" /> */}
                    </Card>
                </Col>
                {/* <Col className="mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                lorem ipsum et dolor something yada ydad dydyafdsa
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> */}
                {/* <Col className="mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                lorem ipsum et dolor something yada ydad dydyafdsa
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> */}
            </Row>
            
        </Container>
    )
}

export default Weather;
