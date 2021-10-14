import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';


// imgs
import BuyNow from '../img/DRS_webShop/buyNow.gif';
import Big4 from '../img/DRS_webShop/Big4_563x750.jpg';

// styles here:
// src\stylesheets\pages\_shop.sass

// ! - Will probably just have a link to a separate secure site to handle ordering rather than try to bake it into this one
// % - Well... at least do that once a suitable POS system is in use... for 1 off orders of books these paypal buttons are OK, barely

export default function Shop(){
    const bookCardStyles = { height: '100%' };
    const guideBooksAsideStyles = {
        width: '100%',
        height: 'auto'
    };

    return (
        <div>
            {/*
            Maybe not a component page at all.

            Maybe just a link to a separate secure shopping portal.
            */}
            <Container fluid className="mt-3 mb-3">
                <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} >
                    <Col>
                        <Jumbotron style={{'height': '100%'}}>
                            <h3>We have the best local guidebooks available for online purchase</h3>
                            <p>
                                We pretty much always have stock of Red Rock: A Climbers Guide 2 by Jerry Handren, Southern Nevada Bouldering 2 by Tom Moulin, and Mojave Limestone by Jerry Handren... and if we run out we can get more fast since the authors are local. Please call us ahead of time to check on our stock of the other books listed below.
                            </p>
                            <p>
                                In the future we will set up a more featured shopping site where you can order many more products.
                            </p>

                            {/* TEST ==================================================================================*/ }
                            <Container fluid>
                                {/* //! xxl=anything never works, its broken somewhere */}
                                <Row xxl={2} xl={1} lg={1} md={1} sm={1} xs={1} >
                                    <Col className='mt-3' >
                                        <Card style={ bookCardStyles }>
                                            <Card.Body>
                                                <Card.Title>Red Rocks: A Climber's Guide 2 - by Jerry Handren</Card.Title>
                                                <Card.Subtitle>THE Book for Sport, Trad, and Multipitch on Red Rock sandstone.</Card.Subtitle>
                                                <Card.Text>
                                                    <p></p>
                                                    <p>
                                                        {/* RR A Climbers Guide 2 order button*/}
                                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                            <input type="hidden" name="cmd" value="_s-xclick" />
                                                            <input type="hidden" name="hosted_button_id" value="WU4XDHLKDL5P4" />
                                                            <input type="image" src={ BuyNow } border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                                        </form>
                                                    </p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col className='mt-3'>
                                        <Card style={ bookCardStyles }>
                                            <Card.Body>
                                                <Card.Title>Southern Nevada Bouldering 2 - by Tom Moulin</Card.Title>
                                                <Card.Subtitle>THE Book for bouldering in the area</Card.Subtitle>
                                                <Card.Text>
                                                    <p></p>
                                                    <p>
                                                        {/* SN Bouldering 2 order button*/}
                                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                            <input type="hidden" name="cmd" value="_s-xclick" />
                                                            <input type="hidden" name="hosted_button_id" value="LN2BBTL6XCPXN" />
                                                            <input type="image" src={ BuyNow } border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                                        </form>
                                                    </p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col className='mt-3'>
                                        <Card style={ bookCardStyles }>
                                            <Card.Body>
                                                <Card.Title>Mojave Limestone - by Jerry Handren</Card.Title>
                                                <Card.Subtitle>THE Book for limestone sport in the Vegas area, Mt Charleston, Mt Potosi, as well as surrounding areas including southern Utah, Northern Arizona, and even a bonus section on Rainbow Canyon (basalt cracks!). This new book makes the out of print Islands in the Sky guide very obsolete.</Card.Subtitle>
                                                <Card.Text>
                                                    <p></p>
                                                    <p>
                                                        {/* Mojave Limestone */}
                                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                            <input type="hidden" name="cmd" value="_s-xclick" />
                                                            <input type="hidden" name="hosted_button_id" value="" /> {/* //! add value */}
                                                            <input type="image" src={ BuyNow } border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                                        </form>
                                                    </p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col className='mt-3'>
                                        <Card style={ bookCardStyles }>
                                            <Card.Body>
                                                <Card.Title>Fun Climbs Red Rocks: Top Ropes and Moderates - by Jason Martin</Card.Title>
                                                <Card.Subtitle>Small book with some highlights</Card.Subtitle>
                                                <Card.Text>
                                                    <p></p>
                                                    <p>
                                                        {/* Fun Climbs RR top ropes and moderates */}
                                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                            <input type="hidden" name="cmd" value="_s-xclick" />
                                                            <input type="hidden" name="hosted_button_id" value="KRQW8B9PPX7F6" />
                                                            <input type="image" src={ BuyNow } border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                                        </form>
                                                    </p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col className='mt-3'>
                                        <Card style={ bookCardStyles }>
                                            <Card.Body>
                                                <Card.Title>Keyhole Canyon - by Frodo</Card.Title>
                                                <Card.Subtitle>Excellent option for JTree-like granite, especially when the sandstone is wet!</Card.Subtitle>
                                                <Card.Text>
                                                    <p></p>
                                                    <p>
                                                        {/* Keyhole Canyon */}
                                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                            <input type="hidden" name="cmd" value="_s-xclick" />
                                                            <input type="hidden" name="hosted_button_id" value="" /> {/* //! add value */}
                                                            <input type="image" src={ BuyNow } border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                                        </form>
                                                    </p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    {/* <Col className='mt-3'>
                                        <Card style={ bookCardStyles }>
                                            <Card.Body>
                                                <Card.Title>Title</Card.Title>
                                                <Card.Subtitle>Sub Title</Card.Subtitle>
                                                <Card.Text>Text</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col> */}
                                </Row>
                            </Container>
                            {/* TEST ==================================================================================*/ }
                        </Jumbotron>
                    </Col>

                    <Col>
                        <Image src={ Big4 } alt="The big 4 guidebooks for the area: Red Rocks: A Climbers Guide 2nd Ed. by Jerry Handren, Southern Nevada II by Tom Moulin, Mojave Limestone by Jerry Handren, and Fun Climbs Red Rocks: Topropes and Moderates by Jason D. Martin" fluid style={ guideBooksAsideStyles } />
                    </Col>
                </Row>
                
            </Container>
            
            {/* Other book buy now button template */}
            {/* //! add value="" part */}
            {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="" />
                <input type="image" src={ BuyNow } border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form> */}
        </div>
    );
}