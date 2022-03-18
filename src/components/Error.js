import React from 'react';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// Images
// import Rope_404 from '../img/404_Rope_Cropped_1366x670.jpg';
import Rope_404_1920x941 from '../img/404/404_Rope_Cropped_1920x941.jpg';
import Rope_404_1366x670 from '../img/404/404_Rope_Cropped_1366x670.jpg';
import Rope_404_854x419 from '../img/404/404_Rope_Cropped_854x419.jpg';
import Rope_404_568x278 from '../img/404/404_Rope_Cropped_568x278.jpg';

// styles here:
// src\stylesheets\pages\_error.sass

export default function Error(){
    return (
        <div id="error-container">
            <span className="sr-only">Screen Reader note: 404 Error. File Not Found.</span>
            
            {/*
            If a url that doesn't exist is attempted to navigate to, you will get this displayed.
            It will show the header, navbar, this error page inside the main body, then the footer.

            I want it to be a clever climbing related 404 image with text overlayed that is centerd horizontally and vertically.

            ie. good image of someone going to clip a quickdraw into a bolt, but there is no bolt hanger and they have a blank and alarmed expression on their face.

            Should be zero scrolling regardless of screen size.
            */}

            {/* style={{'margin': '0 auto'}} */}
            {/* Voodoo from stackoverflow in Image: className="d-block mx-auto img-fluid w-70" */}
            {/* Container fluid is an option */}
            <Container>
                <Col className="m-auto">
                <Image
                    src={ Rope_404_568x278 }
                    srcSet={
                        `${Rope_404_568x278} 568w,
                        ${Rope_404_854x419} 854w,
                        ${Rope_404_1366x670} 1366w,
                        ${Rope_404_1920x941} 1920w`
                    }
                    // seems good enough!
                    sizes="70vw"
                    alt="404 - File Not Found"
                    // style={{'margin': '0 auto'}}
                    className="d-block mx-auto img-fluid w-70"
                    rounded
                    style={{'border': '5px solid black'}}
                />
                {/* <div id="error">
                    404<br/>
                    File Not Found
                </div> */}  
                </Col>
            </Container>
        </div>
    );
}