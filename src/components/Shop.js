import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';


// imgs
import BuyNow from '../img/DRS_webShop/buyNow.gif';
// import Big4 from '../img/DRS_webShop/Big4_563x750.jpg';
import Big4_320x427 from '../img/DRS_webShop/Big4_320x427-min.jpg';
import Big4_480x640 from '../img/DRS_webShop/Big4_480x640-min.jpg';
import Big4_768x1024 from '../img/DRS_webShop/Big4_768x1024-min.jpg';
import Big4_1080x1440 from '../img/DRS_webShop/Big4_1080x1440-min.jpg';

// styles here:
// src\stylesheets\pages\_shop.sass

// ! - Will probably just have a link to a separate secure site to handle ordering rather than try to bake it into this one
// % - Well... at least do that once a suitable POS system is in use... for 1 off orders of books these paypal buttons are OK, barely

export default function Shop(){
    // STYLES
    const bookCardStyles = { height: '100%' };
    const guideBooksAsideStyles = {
        width: '100%',
        height: 'auto'
    };
    const bookTitleStyles = {
        textAlign: 'center'
    };
    // const descriptionStyles = {};
    const ppButtonStyle = {
        verticalAlign: 'text-top'
    };

    return (
        <div>
            {/*
                //! In the future, not a page/component, just a link to a separate secure shopping portal.
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
                                In the future we will set up a more featured shopping site where you can order many more products. Currently you can only order 1 book at a time through this site with the buttons. If you want to order more than 1 book, please email us: <a href="mailto:redrockguides@gmail.com" target="_blank" rel="noopener noreferrer">redrockguides@gmail.com</a>. Be sure to include your name, address, and phone number. We will call you back when we have figured out an order total with shipping and take credit card payment over the phone.
                            </p>
                            <p>
                                Typically we can fit 2 books in a flat rate mailer envelope, $10 shipping.
                            </p>

                            {/* TEST ==================================================================================*/ }
                            <Container fluid>
                                {/* //! xxl=anything never works, its broken somewhere */}
                                <Row xxl={2} xl={1} lg={1} md={1} sm={1} xs={1} >
                                    <Col className='mt-3' >
                                        <Card style={ bookCardStyles }>
                                            <Card.Body>
                                                <Card.Title style={ bookTitleStyles }>Red Rocks: A Climber's Guide 2</Card.Title>
                                                <Card.Subtitle style={ bookTitleStyles }>Jerry Handren</Card.Subtitle>
                                                <hr />
                                                <Card.Subtitle>THE Book for Sport, Trad, and Multipitch on Red Rock sandstone.</Card.Subtitle>
                                                <Card.Text>In glorious color. There has been a reprinting with a new cover image and minor changes, but its still the 2nd Edition. Jerry updated and added what he could without increasing the page count.</Card.Text>
                                                {/* RR A Climbers Guide 2 order button*/}
                                                <form className='text-right' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                    <span style={{'fontWeight': 'bold'}}>$PRICE &nbsp;</span>
                                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                                    <input type="hidden" name="hosted_button_id" value="WU4XDHLKDL5P4" />
                                                    <input
                                                        style={ ppButtonStyle }
                                                        type="image" src={ BuyNow } border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                                </form>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col className='mt-3'>
                                        <Card style={ bookCardStyles }>
                                            <Card.Body>
                                                <Card.Title style={ bookTitleStyles }>Southern Nevada Bouldering 2</Card.Title>
                                                <Card.Subtitle style={ bookTitleStyles }>Tom Moulin</Card.Subtitle>
                                                <hr />
                                                <Card.Subtitle>THE Book for bouldering in the area</Card.Subtitle>
                                                <Card.Text>Covers many nearby areas, mostly sandstone, some limestone. Much easier to navigate to your obscure boulders when you have a map. This is the 2nd Edition.</Card.Text>
                                                {/* SN Bouldering 2 order button*/}
                                                <form className='text-right' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                    <span style={{'fontWeight': 'bold'}}>$PRICE &nbsp;</span>
                                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                                    <input type="hidden" name="hosted_button_id" value="LN2BBTL6XCPXN" />
                                                    <input
                                                        style={ ppButtonStyle }
                                                        type="image" src={ BuyNow } border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                                </form>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col className='mt-3'>
                                        <Card style={ bookCardStyles }>
                                            <Card.Body>
                                                <Card.Title style={ bookTitleStyles }>Mojave Limestone</Card.Title>
                                                <Card.Subtitle style={ bookTitleStyles }>Jerry Handren</Card.Subtitle>
                                                <hr />
                                                <Card.Subtitle>THE Book for limestone sport in the Vegas area</Card.Subtitle>
                                                <Card.Text>Covers many areas such as Mt Charleston, Mt Potosi, many smaller areas, as well as surrounding areas including southern Utah, Northern Arizona, and even a bonus section on Rainbow Canyon (basalt cracks!) a few hours North of Vegas.</Card.Text>
                                                <Card.Text>This new book makes the out of print Islands in the Sky guide very obsolete.</Card.Text>
                                                <Card.Text>Excellent book to have if you are looking for harder sport climbing or need alternatives when the Red Rock Sandstone is wet.</Card.Text>
                                                {/* Mojave Limestone */}
                                                <form className='text-right' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                    <span style={{'fontWeight': 'bold'}}>$PRICE &nbsp;</span>
                                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                                    <input type="hidden" name="hosted_button_id" value="" /> {/* //! add value */}
                                                    <input
                                                        style={ ppButtonStyle }
                                                        type="image" src={ BuyNow } border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                                </form>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col className='mt-3'>
                                        <Card style={ bookCardStyles }>
                                            <Card.Body>
                                                <Card.Title style={ bookTitleStyles }>Fun Climbs Red Rocks: Top Ropes and Moderates</Card.Title>
                                                <Card.Subtitle style={ bookTitleStyles }>Jason Martin</Card.Subtitle>
                                                <hr />
                                                <Card.Subtitle>Selected routes and top rope areas</Card.Subtitle>
                                                <Card.Text>Great option for those who will only have a limited time in the area or those trying to find spots to set up top ropes for partners who can't be trusted to belay them, or when they are finding areas to top rope solo at.</Card.Text>
                                                {/* Fun Climbs RR top ropes and moderates */}
                                                <form className='text-right' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                    <span style={{'fontWeight': 'bold'}}>$PRICE &nbsp;</span>
                                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                                    <input type="hidden" name="hosted_button_id" value="KRQW8B9PPX7F6" />
                                                    <input
                                                        style={ ppButtonStyle }
                                                        type="image" src={ BuyNow } border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                                </form>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col className='mt-3'>
                                        <Card style={ bookCardStyles }>
                                            <Card.Body>
                                                <Card.Title style={ bookTitleStyles }>Keyhole Canyon</Card.Title>
                                                <Card.Subtitle style={ bookTitleStyles }>Frodo</Card.Subtitle>
                                                <hr />
                                                <Card.Subtitle>JTree-like granite near Vegas</Card.Subtitle>
                                                <Card.Text>This area is an excellent option to check out if Red Rock Canyon is wet! Their annual Keyhole Classic is a party you don't want to miss!</Card.Text>
                                                {/* Keyhole Canyon */}
                                                <form className='text-right' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                    <span style={{'fontWeight': 'bold'}}>$PRICE &nbsp;</span>
                                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                                    <input type="hidden" name="hosted_button_id" value="" /> {/* //! add value */}
                                                    <input
                                                        style={ ppButtonStyle }
                                                        type="image" src={ BuyNow } border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                                </form>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    {/* <Col className='mt-3'>
                                        <Card style={ bookCardStyles }>
                                            <Card.Body>
                                                <Card.Title style={ bookTitleStyles }>Title</Card.Title>
                                                <Card.Subtitle style={ bookTitleStyles }>Author Name</Card.Subtitle>
                                                <hr />
                                                <Card.Subtitle>Sub Title</Card.Subtitle>
                                                <Card.Text>Text... What it covers, if its the 2nd edition or 2nd volume in a series, why you want to buy it</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col> */}
                                </Row>
                            </Container>
                            {/* TEST ==================================================================================*/ }
                        </Jumbotron>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img
                                src={ Big4_480x640 }
                                srcSet={
                                    `${Big4_320x427} 320w,
                                    ${Big4_480x640} 480w,
                                    ${Big4_768x1024} 768w,
                                    ${Big4_1080x1440} 1080w`
                                }
                                // at <992px vw, 1 col = img width = 100vw - padding/margins
                                // ... this is 32px of dead space total on the left + right sides
                                // at larger sizes: 2 cols = img width = 50vw - padding/margins
                                // ... this is 32px of dead space total, IN ITS COLUMN
                                sizes="(min-width: 992px) 50vw - 32px, 100vw - 32px"
                                // sizes="100vw"
                                alt="The big 4 guidebooks for the area: Red Rocks: A Climbers Guide 2nd Ed. by Jerry Handren, Southern Nevada II by Tom Moulin, Mojave Limestone by Jerry Handren, and Fun Climbs Red Rocks: Topropes and Moderates by Jason D. Martin"
                                style={ guideBooksAsideStyles }
                            />
                        </Card>
                    </Col>
                </Row>
                
            </Container>
            
            {/* Other book buy now button template */}
            {/* //! add value="" part */}
            {/* <form className='text-right' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <span style={{'font-weight': 'bold'}}>$PRICE &nbsp;</span>
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="" />
                <input
                    style={ ppButtonStyle }
                    type="image" src={ BuyNow } border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form> */}
        </div>
    );
}