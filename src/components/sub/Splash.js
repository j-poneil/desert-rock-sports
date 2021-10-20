import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Image(s)

// TEMPORARY IMAGE for mocking up
import splashImgCanyon from '../../img/temp/canyon_hd.jpg';

// Splash image / title / catchy line
// src/stylesheets/components/_splash.sass



// Old way that works, but stretches the background badly between different screen sizes
// export default function Splash(){
//     return (
//         <div className="splash-container" style={{'position': 'relative'}}>
//             <img className="splash-img" src={ splashImgCanyon } alt="splash-img_canyon" />
//             <div className="splash-text">
//                 <h1 className="splash-h1">Desert Rock Sports</h1>
//                 <p className="splash-p">- Climbing - Canyoneering - Hiking - Camping -</p>

//                 {/* Need an indicator to scroll down, there is more to see. */}
//             </div>
//         </div>
//     );
// }



const splashDivStyles = {
    // the important bit that allows the absolutely positioned children to work correctly
    position: 'relative',
    // for fluid text
    // fontSize: 'calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))'
};
const splashImageStyles = {
    // instead of fluid... which doesn't scale image up to very large sizes
    width: '100%',
    height: 'auto'
};
const splashTextStyles = {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backdropFilter: 'blur(5px) invert(1)',
    paddingLeft: '30px',
    paddingRight: '30px',
    borderRadius: '20px',
    color: 'black',
    // stroke/outline attempts
    webkitTextFillColor: 'white',
    webkitTextStrokeWidth: '1px',
    webkitTextStrokeColor: 'black'
};
const splashTitleStyles = {
    // 2em works well for smallest screen
    // fontSize: 'calc(1rem + 3vw)' --- works well
    // fontSize: 'calc(1rem + 3vw)'
    fontSize: 'calc(14px + (48 - 18) * ((100vw - 300px) / (1600 - 300)))'
};
const splashSubTitleStyles = {
    // 1em works well-enough, kinda for smallest screen
    // fontSize: 'calc(1rem + 1vw)' --- works pretty well
    // fontSize: 'calc(1rem + 1vw)'
    fontSize: 'calc(14px + (34 - 14) * ((100vw - 300px) / (1600 - 300)))'
};

// Variation on old way, but in-file styles
export default function Splash(){
    return (
        <div style={ splashDivStyles } >
            <Image
                // fluid
                style={ splashImageStyles }
                src={ splashImgCanyon }
                alt="splash-img_canyon"
            />
            <div style={ splashTextStyles } >
                {/* //% can use &nbsp; to control text-wrap on small screens */}
                <h1 style={ splashTitleStyles } >Desert&nbsp;Rock&nbsp;Sports</h1>
                {/* <p style={ splashSubTitleStyles } >- Climbing - Canyoneering - Hiking - Camping -</p> */}
                <p style={ splashSubTitleStyles } >Climbing&nbsp;-&nbsp;Canyoneering&nbsp;-&nbsp;Hiking&nbsp;-&nbsp;Camping</p>
            </div>
        </div>
    );
}