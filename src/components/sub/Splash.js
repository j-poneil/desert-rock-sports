import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaExternalLinkAlt } from 'react-icons/fa';


// Image(s)
import Vellinga5 from '../../img/Splash/Vellinga5_1619x1080.jpg';
import Vellinga6 from '../../img/Splash/vellinga6_crop_1713x1080.jpg';
import Vellinga6_2 from '../../img/Splash/vellinga6_crop2_1709x1080.jpg';

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
    // paddingLeft: '10px',
    // paddingRight: '10px',
    borderRadius: '10px',
    color: 'white'
    // color: 'black',
    // stroke/outline attempts... stroke is not official so shouldn't use it on live sites...
    // webkitTextFillColor: 'white',
    // webkitTextStrokeWidth: '2px',
    // webkitTextStrokeColor: 'black'
};
// original for ref
// fontSize: 'calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))'
const splashTitleStyles = {
    // 2em works well for smallest screen
    // fontSize: 'calc(1rem + 3vw)' --- works well
    // fontSize: 'calc(1rem + 3vw)'
    fontSize: 'calc(24px + (64 - 24) * ((100vw - 300px) / (1600 - 300)))',
};
const splashSubTitleStyles = {
    // 1em works well-enough, kinda for smallest screen
    // fontSize: 'calc(1rem + 1vw)' --- works pretty well
    // fontSize: 'calc(1rem + 1vw)'
    fontSize: 'calc(12px + (50 - 12) * ((100vw - 300px) / (1600 - 300)))',
};
const splashPhotoCreditStyle = {
    position: 'absolute',
    right: '10px',
    bottom: '0',
    color: 'grey'
};
// Variation on old way, but in-file styles
export default function Splash(){
    return (
        <div style={ splashDivStyles } >
            <Image
                // fluid
                style={ splashImageStyles }
                src={ Vellinga6_2 }
                alt="Amazing photo of Red Rock Canyon by Trevor Vellinga"
            />
            <div style={ splashTextStyles } >
                {/* //% can use &nbsp; to control text-wrap on small screens */}
                <h1 style={ splashTitleStyles } >Desert&nbsp;Rock&nbsp;Sports</h1>
                {/* <p style={ splashSubTitleStyles } >- Climbing - Canyoneering - Hiking - Camping -</p> */}
                <p style={ splashSubTitleStyles } >Climbing&nbsp;-&nbsp;Canyoneering&nbsp;- Hiking&nbsp;-&nbsp;Camping</p>
                
            </div>
            <p style={ splashPhotoCreditStyle } >
                {/* https://trevor301848.wixsite.com/trevorportfolio */}
                Photo credit: <a href="https://trevor301848.wixsite.com/trevorportfolio" target="_blank" rel="noopener noreferrer">Trevor Vellinga</a> <FaExternalLinkAlt />
            </p>
        </div>
    );
}