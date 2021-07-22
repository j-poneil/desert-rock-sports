import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


// determines the season and adjusts the displayed hours automatically
// Really, this Hours component should be its own component..
// though maybe it doesn't matter since its always going to be used with the other contact info...
// Could have the Contact.js file just point to the individual componets in Contact/Hours.js and Contact/Contact.js
// ALSO, need to specify that the shop and guide number hours are the same
// AND that they gym is a separate entity with different hours
function Hours(){
    const date = new Date();
    // 0-11, 0 = January
    let currentMonth = date.getMonth();
    // 4 = May, 5 = June, 8 = September, 9 = October
    // checks what month it is, and displays hours only for that season
    let hours = (currentMonth >= 5 && currentMonth <= 8) ?
        {
            season: "June - September",
            mondayThruSaturday: "10am - 7pm",
            sunday: "10am - 6pm"
        }
        : {
            season: "October - May",
            mondayThruSaturday: "9am - 8pm",
            sunday: "10am - 6pm"
        };
    // to manually set hours, comment out the "let hours = (logic) ?  {object} : {object} above
    // and uncomment and edit below
    // const hours = {
    //     season: "",
    //     mondayThruSaturday: "",
    //     sunday: ""
    // }

    return (
        <div>
            <p>
                { hours.season }<br />
                M-Sa: { hours.mondayThruSaturday }<br />
                Su: { hours.sunday }
            </p>
        </div>
    );
}


// phone, email, address, hours
// ! styles not used anymore
// src/stylesheets/layout/_contact.sass
export default function Contact(){
    return (
        <Container fluid>
            <Row xl={3} lg={3} md={3} sm={3} xs={1}>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <address>
                                    <p>
                                        Shop: <a href="tel:702-254-1143" target="_blank" rel="noopener noreferrer">702-254-1143</a><br />
                                        Guide Service: <a href="tel:702-506-6640" target="_blank" rel="noopener noreferrer">702-506-6640</a><br />
                                        Shop / Guide Service email: <a href="mailto:info@climbvegas.com" target="_blank" rel="noopener noreferrer">info@climbvegas.com</a>
                                    </p>

                                    <p>
                                        Gym: <a href="tel:702-254-5604" target="_blank" rel="noopener noreferrer">702-254-5604</a><br />
                                        Gym email: <a href="mailto:sales@redrockclimbingcenter.com" target="_blank" rel="noopener noreferrer">sales@redrockclimbingcenter.com</a>
                                    </p>
                                </address>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <address>
                                    Desert Rock Sports<br />
                                    8221 W Charleston Blvd<br />
                                    Suite #102<br />
                                    Las Vegas, NV 89117
                                </address>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <Hours />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}