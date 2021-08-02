import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

// ! no longer used
// src\stylesheets\layout\_layout_containers.sass
// src\stylesheets\components\_rrresoles.sass

// I think it would be good to have 2-4 boxes
// options
// * Text description of what it is, how it works
// * Cost tables, turn around time
// * Img or gallery/carousel
// * Contact info ???

// IG feed embed for him would be great too, but IG embeds are now, after FB changes, a big hassle as I have noted elsewhere

function RRResoles() {
    return (
        <Container fluid>
            <Row xl={2} lg={2} md={1} sm={1} xs={1}>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Red Rock Resoles</Card.Title>
                            <Card.Subtitle>Steve Krall</Card.Subtitle>
                            <Card.Text>
                                <h1>Get some fresh rubber on those shoes!</h1>
                                <p>Steve Krall is now your source for a Vegas local resoler. Excellent reviews, industry standard prices, and reasonable turn around time. You don't even need to ship them out!</p>
                                <h3>How it works:</h3>
                                <p>Drop them off at the convient box in Desert Rock Sports (other locations exist too!). Text Steve the make/model and size of each pair that you drop off, take a picture too if you would like. Thats it!</p>
                                <p>Just wait to hear back from him about what he thinks the shoes need and the cost, then you pay him with cash, check, or venmo (@resoleSteve), and he drops them back off at Desert Rock Sports when they are finished. (He can ship too if needed).</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img src="" alt="" />
                        <Card.Body>
                            <Card.Title>Previous Work:</Card.Title>
                            <Card.Text>( a gallery or carousel of before/after images )</Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Prices:</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Half Sole: $40 / Pair</li>
                                    <li>Rand Repair: $10 / Each Shoe</li>
                                    <li>Approach Shoes / Other: Discuss with him</li>
                                    <li>Rush Charge: $20 / Pair</li>
                                </ul>
                                <p>He uses Unparallel Rubber (Stealth C4 equivalent)</p>
                                <p>Current turn around time ~4 weeks</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Info:</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Steve Krall</li>
                                    <li>Call / Text: <a href="tel:1-702-277-1957" target="_blank" rel="noopener noreferrer">702-277-1957</a></li>
                                    <li>IG: @redrockresoles<a href="https://www.instagram.com/redrockresoles/" target="_blank" rel="noopener noreferrer">@redrockresoles</a></li>
                                    <li>Email: <a href="mailto:steve@redrockresoles.com" target="_blank" rel="noopener noreferrer">steve@redrockresoles.com</a></li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default RRResoles;
