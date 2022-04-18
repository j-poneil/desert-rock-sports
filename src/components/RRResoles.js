import React from 'react';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';

// Images
// import Lynx from '../img/RRR/Lynx_450x450.jpg';
// import Ganda from '../img/RRR/Gandas_450x450.jpg';
import LynxGandas_568x284 from '../img/RRR/LynxGandas_568x284-min.jpg';
import LynxGandas_854x427 from '../img/RRR/LynxGandas_854x427-min.jpg';
import LynxGandas_900x450 from '../img/RRR/LynxGandas_900x450-min.jpg';

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
        <Container fluid="md" className="mt-3">
            {/* <Row xl={2} lg={1} md={1} sm={1} xs={1}> */}
            <Card style={ rrResolesStyles }>
                <Card.Body>
                    <Card.Title className='text-center' as='h1'>Red Rock Resoles</Card.Title>
                    {/* <Card.Subtitle className='text-center' as='h4'>Steve Krall</Card.Subtitle> */}
                    <h2 className='text-center'>Get some fresh rubber on those shoes!</h2>
                    <Card.Text><strong>Steve Krall</strong> is now your Vegas local resoler. Excellent reviews, industry standard prices, and reasonable turn around time (4-5wks). You don't even need to ship them out!</Card.Text>
                    <h3 className='text-center'>How it works:</h3>
                    <Card.Text>Drop them off at the convient box in Desert Rock Sports. Text Steve the make/model and size of each pair that you drop off, take a picture too if you would like. Thats it!</Card.Text>
                    <Card.Text>Just wait to hear back from him about what he thinks the shoes need and the cost, then you pay him with cash, check, or venmo (@resoleSteve), and he drops them back off at Desert Rock Sports when they are finished. (He can ship too if needed).</Card.Text>
                </Card.Body>
            </Card>
            <Card style={ previousWorkStyles }>
                <Card.Img
                    src={ LynxGandas_568x284 }
                    srcSet={
                        `${LynxGandas_568x284} 568w,
                        ${LynxGandas_854x427} 854w,
                        ${LynxGandas_900x450} 900w`
                    }
                    // sizes="100vw"
                    // at <1200px vw, 1 col = img width = 100vw - padding/margins
                    // at larger sizes: 2 cols = img width = 50vw - padding/margins
                    sizes="(min-width: 1200px) 50vw - 32, 100vw - 32"
                    alt="Freshly resoled pairs of climbing and approach shoes, looking sharp"
                />
            </Card>
            <Card style= { pricesStyles }>
                <Card.Body>
                    <Card.Title>Prices:</Card.Title>
                    <ul>
                        <li>Half Sole: $40 / Pair</li>
                        <li>Rand Repair: $10 / Each Shoe</li>
                        <li>Approach Shoes / Other: Discuss with him</li>
                        <li>Rush Charge: $20 / Pair (approval required)</li>
                    </ul>
                    <Card.Text>He uses Unparallel Rubber (Stealth C4 equivalent)</Card.Text>
                    <Card.Text>Current turn around time ~5 weeks</Card.Text>
                </Card.Body>
            </Card>
            <Card style={ steveContactStyles }>
                <Card.Body>
                    <Card.Title>Contact Info:</Card.Title>
                    <ul>
                        <li>Steve Krall</li>
                        <li>Call / Text: <a href="tel:1-702-277-1957" target="_blank" rel="noopener noreferrer">702-277-1957</a></li>
                        <li>IG: <a href="https://www.instagram.com/redrockresoles/" target="_blank" rel="noopener noreferrer">@redrockresoles</a></li>
                        <li>Email: <a href="mailto:steve@redrockresoles.com" target="_blank" rel="noopener noreferrer">steve@redrockresoles.com</a></li>
                    </ul>
                    <hr />
                    <Card.Text className='text-muted small'>Red Rock Resoles is not a part of Desert Rock Sports or Red Rock Climbing Center (though he does route set for them). We just appreciate the work he does, so we do a little to promote his work, such as providing a convient location for him to have dropoff/pickup bins as well as some free advertising, like on this website.</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default RRResoles;
