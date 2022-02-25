import React from 'react';

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';


// determines the season and adjusts the displayed hours automatically
// Really, this Hours component should be its own component..
// though maybe it doesn't matter since its always going to be used with the other contact info...
// Could have the Contact.js file just point to the individual componets in Contact/Hours.js and Contact/Contact.js
// ALSO, need to specify that the shop and guide number hours are the same
// AND that they gym is a separate entity with different hours
function Hours(){
    //! juneSeptHours and octMayHours are to be used when you have predefined times and want to automatically switch hours when the seasons change
    //! ONLY MODIFY THESE IF YOU WANT TO CHANGE HOURS SEASON WIDE
    //! If you want to change hours to something else, temporarily, scroll down to the return statement and read the comments there

    // M-Sat 10-7, Sun 10-6
    const juneSeptHours = (
        <tbody>
            <tr>
                <td>Monday</td>
                <td>10am - 7pm</td>  
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>10am - 7pm</td>  
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>10am - 7pm</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>10am - 7pm</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>10am - 7pm</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>10am - 7pm</td>  
            </tr>
            <tr>
                <td>Sunday</td>
                <td>10am - 6pm</td>  
            </tr>
        </tbody>
    );
    
    // M-Sat 9-8, Sun 10-6
    const octMayHours = (
        <tbody>
            <tr>
                <td>Monday</td>
                <td>9am - 8pm</td>  
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>9am - 8pm</td>  
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>9am - 8pm</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>9am - 8pm</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>9am - 8pm</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>9am - 8pm</td>  
            </tr>
            <tr>
                <td>Sunday</td>
                <td>9am - 6pm</td>  
            </tr>
        </tbody>
    );

    const date = new Date();
    // 0-11, 0 = January
    let currentMonth = date.getMonth();
    // 4 = May, 5 = June, 8 = September, 9 = October
    // checks what month it is, and displays hours only for that season
    let hours = (currentMonth >= 5 && currentMonth <= 8) ?
        juneSeptHours
        : octMayHours;

    return (
        <>
            { hours }
            {/*//! To manually set hours, comment out { hours } above, then un-comment the below chunk of code and edit the hours, do the opposite to switch back to automatic */}
            {/* <tbody>
                <tr>
                    <td>Monday</td>
                    <td>10am - 7pm</td>  
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>10am - 7pm</td>  
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>10am - 7pm</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>10am - 7pm</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>10am - 7pm</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>10am - 6pm</td>  
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>10am - 6pm</td>  
                </tr>
            </tbody> */}
        </>
    );
}


// phone, email, address, hours
// ! styles not used anymore
// src/stylesheets/layout/_contact.sass

const drsContactStyles = { height: '100%' };
const r2c2ContactStyles = { height: '100%' };


export default function Contact(){
    return (
        <>
            <Row xl={2} lg={2} md={2} sm={1} xs={1}>
                <Col>
                    <Card style={ drsContactStyles }>
                        <Card.Body>
                            <Card.Title>Desert Rock Sports</Card.Title>
                            <Card.Text>
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
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* I think it would be cool if I had some big image here that ended up being about as tall as the tallest section, for DRS or R2C2... something like a square cut diagonally, with photo of gear in top-left, photo of gym in bottom-right... thus on a large screen if I set 3 col per row it sits nicely in the middle, but on smaller screens it still works as a transition between DRS and R2C2 with single column vertical scroll down */}
                {/* <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                
                            </Card.Text>

                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> */}

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
                            <Card.Text>
                                <address>
                                    Gym: <a href="tel:702-254-5604" target="_blank" rel="noopener noreferrer">702-254-5604</a><br />
                                    Gym email: <a href="mailto:sales@redrockclimbingcenter.com" target="_blank" rel="noopener noreferrer">sales@redrockclimbingcenter.com</a>
                                </address>
                                <address>
                                    Red Rock Climbing Center<br />
                                    8201 W Charleston Blvd<br />
                                    #150<br />
                                    Las Vegas, NV 89117
                                </address>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}