import React from 'react';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';


import CustomHeader from './sub/CustomHeader';
// import rope_med from '../img/BackgroundImages/rope_med.jpg';
import lynx from '../img/HeaderImgs/Lynx_16_9_polished-min.jpg';

// Images
// import Lynx from '../img/RRR/Lynx_450x450.jpg';
// import Ganda from '../img/RRR/Gandas_450x450.jpg';
// import LynxGandas_568x284 from '../img/RRR/LynxGandas_568x284-min.jpg';
// import LynxGandas_854x427 from '../img/RRR/LynxGandas_854x427-min.jpg';
// import LynxGandas_900x450 from '../img/RRR/LynxGandas_900x450-min.jpg';

// ! no longer used
// src\stylesheets\layout\_layout_containers.sass
// src\stylesheets\components\_rrresoles.sass

const backgroundStyles = {
    // backgroundColor: 'white'
    // background: 'rgb(255,255,255)',
    // background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,101,35,1) 0%, rgba(139,221,255,1) 100%)',
}

// IG feed embed for him would be great too, but IG embeds are now, after FB changes, a big hassle as I have noted elsewhere

function RRResoles() {
    return (
        <Container fluid className="pr-0 pl-0" style={ backgroundStyles }>
            <CustomHeader
                text="Red Rock Resoles"
                bgImg={ lynx }
            />

            <Container fluid="md" className="onTopOfBackground">
                {/* <h5 className='text-center' as='h1'>Red Rock Resoles</h5> */}
                {/* <Card.Subtitle className='text-center' as='h4'>Steve Krall</Card.Subtitle> */}
                <h2 className='text-center'>Get some fresh rubber on those shoes!</h2>
                <p><strong>Steve Krall</strong> is now your Vegas local resoler. Excellent reviews, industry standard prices, and reasonable turn around time (4-5wks). You don't even need to ship them out!</p>
                <h3 className='text-center'>How it works:</h3>
                <p>Drop them off at the convient box in Desert Rock Sports. Text Steve the make/model and size of each pair that you drop off, take a picture too if you would like. Thats it!</p>
                <p>You can also ship shoes to him:</p>
                <address style={{'paddingLeft': '25px'}}>
                    Desert Rock Sports ATTN: Red Rock Resoles<br />
                    8221 W Charleston Blvd<br />
                    Suite #102<br />
                    Las Vegas, NV 89117
                </address>
                <p>Just wait to hear back from him about what he thinks the shoes need and the cost, then you pay him with cash, check, or venmo (@resoleSteve), and he drops them back off at Desert Rock Sports when they are finished. (He can ship too if needed).</p>

                {/* //! Need to get image working to fit this fluid="md" space... */}
                {/* <Image
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
                /> */}

                <h5>Prices:</h5>
                <ul>
                    <li>Half Sole: $40 / Pair</li>
                    <li>Rand Repair: $10 / Each Shoe</li>
                    <li>Approach Shoes / Other: Discuss with him</li>
                    <li>Rush Charge: $20 / Pair (approval required)</li>
                </ul>
                <p>He uses Unparallel Rubber (Stealth C4 equivalent)</p>
                <p>Current turn around time ~5 weeks</p>


                <h5>Contact Info:</h5>
                <ul>
                    <li>Steve Krall</li>
                    <li>Call / Text: <a href="tel:1-702-277-1957" target="_blank" rel="noopener noreferrer">702-277-1957</a></li>
                    <li>IG: <a href="https://www.instagram.com/redrockresoles/" target="_blank" rel="noopener noreferrer">@redrockresoles</a></li>
                    <li>Email: <a href="mailto:steve@redrockresoles.com" target="_blank" rel="noopener noreferrer">steve@redrockresoles.com</a></li>
                </ul>
                <hr />
                <p className='text-muted small'>Red Rock Resoles is not a part of Desert Rock Sports or Red Rock Climbing Center (though he does route set for them). We just appreciate the work he does, so we do a little to promote his work, such as providing a convient location for him to have dropoff/pickup bins as well as some free advertising, like on this website.</p>

            </Container>
        </Container>
    )
}

export default RRResoles;
