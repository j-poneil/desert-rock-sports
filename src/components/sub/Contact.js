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
    let hours = (currentMonth >= 5 && currentMonth <= 8) ?
        {
            season: "June - September",
            mondayThruSaturday: "10am - 8pm",
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
            <p>{hours.season}</p>
            <p>M-Sa: {hours.mondayThruSaturday}</p>
            <p>Su: {hours.sunday}</p>
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
                                {/* email as email link is a nice touch i should do */}
                                <p>Shop: 702-254-1143</p>
                                <p>Guide Service: 702-506-6640</p>
                                <p>Shop / Guide Service email: info@climbvegas.com</p>

                                <p>Gym: 702-254-5604</p>
                                <p>Gym email: sales@redrockclimbingcenter.com</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <p>Desert Rock Sports<br /> 8221 W Charleston Blvd<br /> Suite #102<br /> Las Vegas, NV 89117</p>
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