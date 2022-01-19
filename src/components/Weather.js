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
                <p>The Spring Mountains act as a barrier to storms coming from the Pacific and very often these storms will dump on these mountains and Las Vegas itself will see very little if any rain. Unfourtunately Red Rock Canyon is between the two and often gets some of the precipitation. Higher elevation areas tend to get hit harder than lower ones. Sometimes the Calico Hills don't get hit, or get light precip while the canyons are soaked. Sometimes everything gets soaked. If Las Vegas itself is visibly wet, it is almost assured that Red Rock Canyon was hit as well.</p>

                <a href="https://www.blm.gov/sites/blm.gov/files/documents/files/Nevada_Red_Rock_Canyon_Weather_Brochure.pdf" target="_blank" rel="noopener noreferrer">BLM Red Rock Canyon Weather Brochure (pdf)</a>
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
                <Col className="mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Title>Links</Card.Title>
                            <Card.Text>
                                <a href="https://wetrockpolice.com/redrock" target="_blank" rel="noopener noreferrer">Wet Rock Police - Red Rock</a>
                                <p>Excellent site for looking at real-time and historical rain fall. It uses the weather station at the Red Rock Canyon NCA Visitor Center. It is known that sometimes (often) the visitor center doesn't get any rain while the canyons get soaked, so it is not a go / no go indicator. It is simply data from one rain gauge, a few miles away, updated hourly.</p>

                                
                                <a href="https://www.facebook.com/groups/ClimbVegas" target="_blank" rel="noopener noreferrer">ClimbVegas Facebook Group</a>
                                <p>This is a good place to ask about weather and if it rained at Red Rock and how long until your area of interest is probably dry enough. Chances are that there is already discussion if there has been recent rain.</p>
                                

                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a> */}
                                {/* <a href="" target="_blank" rel="noopener noreferrer"></a> */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* <Col className="mb-3">
                    <Card style={{'height': '100%'}}>
                        <Card.Body>
                            <Card.Title>Links</Card.Title>
                            <Card.Text>
                                
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
