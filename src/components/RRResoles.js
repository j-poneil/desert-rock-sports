import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';

// Images
// import Lynx from '../img/RRR/Lynx_450x450.jpg';
// import Ganda from '../img/RRR/Gandas_450x450.jpg';
import LynxGandas from '../img/RRR/LynxGandas_900x450.jpg';

// ! no longer used
// src\stylesheets\layout\_layout_containers.sass
// src\stylesheets\components\_rrresoles.sass

const rrResolesStyles = { height: '100%' };
const previousWorkStyles = { height: '100%' };
const steveContactStyles = { height: '100%' };
const pricesStyles = { height: '100%' };



// IG feed embed for him would be great too, but IG embeds are now, after FB changes, a big hassle as I have noted elsewhere

function RRResoles() {
    return (
        <Container fluid className="mt-3">
            <Row xl={2} lg={1} md={1} sm={1} xs={1}>
                <Col className="mb-3">
                    <Card style={ rrResolesStyles }>
                        <Card.Body>
                            <Card.Title className='text-center' as='h1'>Red Rock Resoles</Card.Title>
                            {/* <Card.Subtitle className='text-center' as='h4'>Steve Krall</Card.Subtitle> */}
                            <Card.Text>
                                <h2 className='text-center'>Get some fresh rubber on those shoes!</h2>
                                <p><strong>Steve Krall</strong> is now your Vegas local resoler. Excellent reviews, industry standard prices, and reasonable turn around time (4-5wks). You don't even need to ship them out!</p>
                                <h3 className='text-center'>How it works:</h3>
                                <p>Drop them off at the convient box in Desert Rock Sports. Text Steve the make/model and size of each pair that you drop off, take a picture too if you would like. Thats it!</p>
                                <p>Just wait to hear back from him about what he thinks the shoes need and the cost, then you pay him with cash, check, or venmo (@resoleSteve), and he drops them back off at Desert Rock Sports when they are finished. (He can ship too if needed).</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={ previousWorkStyles }>
                        <Card.Img src={ LynxGandas } alt="Freshly resoled pairs of climbing and approach shoes, looking sharp" fluid />
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style= { pricesStyles }>
                        <Card.Body>
                            <Card.Title>Prices:</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Half Sole: $40 / Pair</li>
                                    <li>Rand Repair: $10 / Each Shoe</li>
                                    <li>Approach Shoes / Other: Discuss with him</li>
                                    <li>Rush Charge: $20 / Pair (approval required)</li>
                                </ul>
                                <p>He uses Unparallel Rubber (Stealth C4 equivalent)</p>
                                <p>Current turn around time ~5 weeks</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={ steveContactStyles }>
                        <Card.Body>
                            <Card.Title>Contact Info:</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Steve Krall</li>
                                    <li>Call / Text: <a href="tel:1-702-277-1957" target="_blank" rel="noopener noreferrer">702-277-1957</a></li>
                                    <li>IG: <a href="https://www.instagram.com/redrockresoles/" target="_blank" rel="noopener noreferrer">@redrockresoles</a></li>
                                    <li>Email: <a href="mailto:steve@redrockresoles.com" target="_blank" rel="noopener noreferrer">steve@redrockresoles.com</a></li>
                                </ul>
                                <hr />
                                <p className='text-muted small'>Red Rock Resoles is not a part of Desert Rock Sports or Red Rock Climbing Center (though he does route set for them). We just appreciate the work he does, so we do a little to promote his work, such as providing a convient location for him to have dropoff/pickup bins as well as some free advertising, like on this website.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default RRResoles;
