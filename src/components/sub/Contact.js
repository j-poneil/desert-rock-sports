import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

import { FaExternalLinkAlt } from 'react-icons/fa';

import hoursDataDRS from '../data/hoursConfigDRS.json';
import hoursDataR2C2 from '../data/hoursConfigR2C2.json';

let hoursDRS;
if(hoursDataDRS['useSeasonalPresets']){
    // useSeasonalPresets setting is true, hours will be those found in:
    // data/hoursConfig.json > "manuallySetHours"
    hoursDRS = {
        monday: hoursDataDRS['manuallySetHours']['monday'],
        tuesday: hoursDataDRS['manuallySetHours']['tuesday'],
        wednesday: hoursDataDRS['manuallySetHours']['wednesday'],
        thursday: hoursDataDRS['manuallySetHours']['thursday'],
        friday: hoursDataDRS['manuallySetHours']['friday'],
        saturday: hoursDataDRS['manuallySetHours']['saturday'],
        sunday: hoursDataDRS['manuallySetHours']['sunday']
    };
} else {
    const date = new Date();
    // 0-11, 0 = January
    let currentMonth = date.getMonth();
    // 4 = May, 5 = June, 8 = September, 9 = October
    // checks what month it is, and displays hours only for that season
    let presetKey = (currentMonth >= 5 && currentMonth <=8) ? 'presetJuneSeptHours' : 'presetOctMayHours';
    // These hour presets can be adjusted here:
    // data/hoursConfig.json > "presetJuneSeptHours" and "presetOctMayHours"

    hoursDRS = {
        monday: hoursDataDRS[presetKey]['monday'],
        tuesday: hoursDataDRS[presetKey]['tuesday'],
        wednesday: hoursDataDRS[presetKey]['wednesday'],
        thursday: hoursDataDRS[presetKey]['thursday'],
        friday: hoursDataDRS[presetKey]['friday'],
        saturday: hoursDataDRS[presetKey]['saturday'],
        sunday: hoursDataDRS[presetKey]['sunday']
    };
}

// determines the season and adjusts the displayed hours automatically
// Really, this Hours component should be its own component..
// though maybe it doesn't matter since its always going to be used with the other contact info...
// Could have the Contact.js file just point to the individual componets in Contact/Hours.js and Contact/Contact.js
// ALSO, need to specify that the shop and guide number hours are the same
// AND that they gym is a separate entity with different hours
function Hours(){
//! Changes to hours MUST be made in data/hoursConfig.json
//! OR via Login admin panel if I go that route eventually

    return (
        <>
            <tbody>
                <tr>
                    <td>Monday</td>
                    <td>{ hoursDRS.monday }</td>  
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>{ hoursDRS.tuesday }</td>  
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>{ hoursDRS.wednesday }</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>{ hoursDRS.thursday }</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>{ hoursDRS.friday }</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>{ hoursDRS.saturday }</td>  
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>{ hoursDRS.sunday }</td>  
                </tr>
            </tbody>
        </>
    );
}


// phone, email, address, hours
// ! styles not used anymore
// src/stylesheets/layout/_contact.sass

// const drsContactStyles = {};
// const r2c2ContactStyles = {};


export default function Contact(){
    return (
        <>
            <Container className="onTopOfBackground">
                <Row xl={1} lg={1} md={1} sm={1} xs={1}>
                    <Col>
                        <h3>Desert Rock Sports</h3>
                        {/* Can't use 'Card.Text' as it is just a 'p', can't put 'table' in 'p' */}
                        <Row xs={2} sm={2} md={2} lg={2} xl={2} >
                            <Col>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th colSpan='2'>Desert Rock Sports &amp; Guide Service Phone Hours</th>
                                        </tr>
                                    </thead>
                                    <Hours />
                                </Table>
                            </Col>
                            <Col>
                                <p>Holiday Hours:<br/>
                                { hoursDataDRS['holidayHours'] }</p>
                                <address>
                                    Shop: <a href="tel:702-254-1143" target="_blank" rel="noopener noreferrer">702-254-1143</a><br />
                                    Guide Service: <a href="tel:702-506-6640" target="_blank" rel="noopener noreferrer">702-506-6640</a><br />
                                    Shop / Guide Service email: <a href="mailto:info@climbvegas.com" target="_blank" rel="noopener noreferrer">info@climbvegas.com</a>
                                </address>
                                <address>
                                    Desert Rock Sports<br />
                                    8221 W Charleston Blvd<br />
                                    Suite #102<br />
                                    Las Vegas, NV 89117
                                </address>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <h3>Red Rock Climbing Center</h3>
                        <Row xs={2} sm={2} md={2} lg={2} xl={2} >
                            <Col>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th colSpan='2'>Red Rock Climbing Center Hours</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Monday</td>
                                            <td>{ hoursDataR2C2['manuallySetHours']['monday'] }</td>  
                                        </tr>
                                        <tr>
                                            <td>Tuesday</td>
                                            <td>{ hoursDataR2C2['manuallySetHours']['tuesday'] }</td>  
                                        </tr>
                                        <tr>
                                            <td>Wednesday</td>
                                            <td>{ hoursDataR2C2['manuallySetHours']['wednesday'] }</td>
                                        </tr>
                                        <tr>
                                            <td>Thursday</td>
                                            <td>{ hoursDataR2C2['manuallySetHours']['thursday'] }</td>
                                        </tr>
                                        <tr>
                                            <td>Friday</td>
                                            <td>{ hoursDataR2C2['manuallySetHours']['friday'] }</td>
                                        </tr>
                                        <tr>
                                            <td>Saturday</td>
                                            <td>{ hoursDataR2C2['manuallySetHours']['saturday'] }</td>  
                                        </tr>
                                        <tr>
                                            <td>Sunday</td>
                                            <td>{ hoursDataR2C2['manuallySetHours']['sunday'] }</td>  
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <p>Holiday Hours:<br/>
                                { hoursDataR2C2['holidayHours'] }</p>
                                <div>
                                    <address>
                                        Gym: <a href="tel:702-254-5604" target="_blank" rel="noopener noreferrer">702-254-5604</a>
                                        <br />
                                        Gym email: <a href="mailto:sales@redrockclimbingcenter.com" target="_blank" rel="noopener noreferrer">sales@redrockclimbingcenter.com</a>
                                        <br />
                                        <a href="https://www.redrockclimbingcenter.com/" target="_blank" rel="noopener noreferrer">Red Rock Climbing Center <sup><FaExternalLinkAlt /></sup></a>
                                    </address>
                                    <address>
                                        Red Rock Climbing Center<br />
                                        8201 W Charleston Blvd<br />
                                        #150<br />
                                        Las Vegas, NV 89117
                                    </address>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/* <Row xl={2} lg={2} md={2} sm={1} xs={1}>
                <Col>
                    <Card style={ drsContactStyles }>
                        <Card.Body>
                            <Card.Title>Desert Rock Sports</Card.Title>
                            <div>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th colSpan='2'>Desert Rock Sports &amp; Guide Service Phone Hours</th>
                                        </tr>
                                    </thead>
                                    <Hours />
                                </Table>
                                <p>Holiday Hours: </p>
                                <address>
                                    Shop: <a href="tel:702-254-1143" target="_blank" rel="noopener noreferrer">702-254-1143</a><br />
                                    Guide Service: <a href="tel:702-506-6640" target="_blank" rel="noopener noreferrer">702-506-6640</a><br />
                                    Shop / Guide Service email: <a href="mailto:info@climbvegas.com" target="_blank" rel="noopener noreferrer">info@climbvegas.com</a>
                                </address>
                                <address>
                                    Desert Rock Sports<br />
                                    8221 W Charleston Blvd<br />
                                    Suite #102<br />
                                    Las Vegas, NV 89117
                                </address>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={ r2c2ContactStyles }>
                        <Card.Body>
                            <Card.Title>Red Rock Climbing Center</Card.Title>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th colSpan='2'>Red Rock Climbing Center Hours</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td>9am - 11pm</td>  
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>6am - 11pm</td>  
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>6am - 11pm</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>6am - 11pm</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>9am - 11pm</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>9am - 9pm</td>  
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>9am - 9pm</td>  
                                    </tr>
                                </tbody>
                            </Table>
                            <p>Holiday Hours: 12/24 Close at 5pm, 12/25 Closed, 12/31 Close at 9pm, 1/1 Close at 9pm</p>
                            <div>
                                <address>
                                    Gym: <a href="tel:702-254-5604" target="_blank" rel="noopener noreferrer">702-254-5604</a>
                                    <br />
                                    Gym email: <a href="mailto:sales@redrockclimbingcenter.com" target="_blank" rel="noopener noreferrer">sales@redrockclimbingcenter.com</a>
                                    <br />
                                    <a href="https://www.redrockclimbingcenter.com/" target="_blank" rel="noopener noreferrer">Red Rock Climbing Center <sup><FaExternalLinkAlt /></sup></a>
                                </address>
                                <address>
                                    Red Rock Climbing Center<br />
                                    8201 W Charleston Blvd<br />
                                    #150<br />
                                    Las Vegas, NV 89117
                                </address>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}
        </>
    );
}