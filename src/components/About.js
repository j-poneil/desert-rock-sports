import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

// styles here:
// src\stylesheets\pages\_about.sass

export default function About(){
    const staff = [
        {
            name: "Travis Graves",
            bio1: "continues to be the store buyer and manager. He is the person you will most likely see or talk to on the phone. He is a wealth of information about outdoor gear and the local climbing routes. The store is small, but Travis makes sure the store is well stocked in gear, shoes and clothing for camping, backpacking and canyoneering, as well as for climbing.",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        },
        {
            name: "Mike Lorenzo",
            bio1: "who came to Las Vegas from New York about ten years ago, enjoys hiking, skiing, snowboarding and climbing. Mike is also a student of Yoga. Mike says that Yoga has given him the flexibility and strength he needs for climbing.",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        },
        {
            name: "Steve Mallory",
            bio1: "has a background in finance and helps with the bookkeeping. He has been climbing since 1979 and has lived in Las Vegas for 22 years. Steve recently developed a passion for canyoneering and has added Imlay Canyon Gear, static rope and the La Sportiva Exum River Shoe, to the store's inventory.",
            bio2: "Canyoneering in Zion is a great way to beat the heat in Las Vegas during the summer months!",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        },
        {
            name: "Dan Young",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        },
        {
            name: "Josh Janes",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        },
        {
            name: "Lisa Buchina",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: false
        },
        {
            name: "Lisa Aquino",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: false
        },
        {
            name: "Travis O'Neil (aka T2)",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        },
        {
            name: "Adam Happensack",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        }
    ];

    // these use short circuit evaluation inline
    // like {i.bio2 !== "" && <p>i.bio2</p>}
    // they work because if both evaluate to true, the second thing is returned
    // if false, it is ignored
    const staffList = staff.map((i) => {
        if(i.active){
            return (
                <Col key={i.name}>
                    <Card>
                        <Card.Body>
                            <Card.Img src='https://via.placeholder.com/500x400' alt={i.name} />
                            <Card.Title>{ i.name }</Card.Title>
                            <Card.Subtitle>{ i.ig !== "" && <a href={i.ig}>IG</a> }</Card.Subtitle>
                            <Card.Text>
                                <p>{i.bio1}</p>
                                {i.bio2 !== "" && <p>{i.bio2}</p>}
                                {i.bio3 !== "" && <p>{i.bio3}</p>}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            );
        }
    });

    const inactiveStaffList = staff.map((i) => {
        if(!i.active){
            return (
                <Col key={i.name}>
                    <Card>
                        <Card.Body>
                            <Card.Img src='https://via.placeholder.com/500x400' alt={i.name} />
                            <Card.Title>{ i.name }</Card.Title>
                            <Card.Subtitle>{ i.ig !== "" && <a href={i.ig}>IG</a> }</Card.Subtitle>
                            <Card.Text>
                                <p>{i.bio1}</p>
                                {i.bio2 !== "" && <p>{i.bio2}</p>}
                                {i.bio3 !== "" && <p>{i.bio3}</p>}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            );
        }
    });

    return (
        <Container fluid>
            <Row xl={2} lg={2} md={2} sm={2} xs={1}>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>How they met...</Card.Title>
                            <Card.Text>
                                <p>Mike Lorenzo, Steve Mallory and Travis Graves met through their love of climbing at Red Rock Climbing Center (formerly, Powerhouse Gym). Travis, who was the store manager for Desert Rock Sports, approached Mike and Steve with the idea of forming a partnership to buy the store from Mike and Tim Ward who wanted to retire. In February 2005 the partnership was born.</p>
                                <p>All three are active climbers and are members of Las Vegas Climbers' Liaison Council, an organization that is dedicated to ensuring climbing access, encouraging stewardship of the environment, and cultivating a sense of community in a world-class climbing destination.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Img src='https://via.placeholder.com/500x400' alt="The OG DRS crew" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>(... History? ...)</Col>
                <Col>( something )</Col>
                <Col>( something )</Col>
            </Row>

            <Container>
                <Row xl={4} lg={3} md={2} sm={2} xs={1}>
                    { staffList }
                </Row>
            </Container>

            <hr />

            {/* Past / Inactive staff */}
            {/* Probably don't need to show, but maybe still could, like with greyed out background? */}
            <Container>
                <Row xl={4} lg={3} md={2} sm={2} xs={1}>
                    { inactiveStaffList }
                </Row>
            </Container>
        </Container>
    );
}