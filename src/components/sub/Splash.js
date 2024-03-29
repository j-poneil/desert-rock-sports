import React from 'react';
// import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { FaExternalLinkAlt } from 'react-icons/fa';


// Image(s)
// import Vellinga5 from '../../img/Splash/Vellinga5_1619x1080.jpg';
// import Vellinga6 from '../../img/Splash/vellinga6_crop_1713x1080.jpg';
// import Vellinga6_2 from '../../img/Splash/vellinga6_crop2_1709x1080.jpg';
import Vellinga6c2_506x320 from '../../img/Splash/vellinga6c2_506x320-min.jpg';
import Vellinga6c2_760x480 from '../../img/Splash/vellinga6c2_760x480-min.jpg';
import Vellinga6c2_1215x768 from '../../img/Splash/vellinga6c2_1215x768-min.jpg';
import Vellinga6c2_1709x1080 from '../../img/Splash/vellinga6c2_1709x1080-min.jpg';

// TEMPORARY IMAGE for mocking up
// import splashImgCanyon from '../../img/temp/canyon_hd.jpg';

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
    // display: 'block',
    //! This approach works... but no srcSet / sizes
    // background: `no-repeat fixed center cover url(${Vellinga6c2_760x480})`,
    // width: '100%',
    // 56px is navbar height
    // height: '100vh - 56px'

};
const splashImageStyles = {
    // width: '100%' and height: 'auto' --- not the best approach since the navbar is above still
    width: '100%',
    height: '85vh',
    objectFit: 'cover',
    //
};
const splashTextStyles = {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //
    color: 'white',
    background: 'rgb(255,255,255)',
    // eslint-disable-next-line
    background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.35) 50%, rgba(255,255,255,0) 100%)',
    // width 100% correctly sets width of this gradient area, but height 100% messes up position of text
    width: '100%',
    paddingTop: '25vh',
    paddingBottom: '25vh',
};
// original for ref
// fontSize: 'calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))'
const splashTitleStyles = {
    // 2em works well for smallest screen
    // fontSize: 'calc(1rem + 3vw)' --- works well
    // fontSize: 'calc(1rem + 3vw)'
    fontSize: 'calc(24px + (64 - 24) * ((100vw - 300px) / (1600 - 300)))',
};
// const splashSubTitleStyles = {
//     // 1em works well-enough, kinda for smallest screen
//     // fontSize: 'calc(1rem + 1vw)' --- works pretty well
//     // fontSize: 'calc(1rem + 1vw)'
//     fontSize: 'calc(12px + (50 - 12) * ((100vw - 300px) / (1600 - 300)))',
// };
const splashPhotoCreditStyle = {
    position: 'absolute',
    right: '10px',
    bottom: '0',
    color: 'grey',
    background: 'rgba(0,0,0,0.35)',
    // background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.35) 50%, rgba(255,255,255,0) 100%)',
    paddingLeft: '5px',
    paddingRight: '5px'
};
// Variation on old way, but in-file styles
export default function Splash(){
    return (
        <div style={ splashDivStyles }>
            <Image
                // approach NOT using background img
                style={ splashImageStyles }
                src={ Vellinga6c2_1215x768 }
                srcSet={
                    `${Vellinga6c2_506x320} 506w,
                    ${Vellinga6c2_760x480} 760w,
                    ${Vellinga6c2_1215x768} 1215w,
                    ${Vellinga6c2_1709x1080} 1709w`
                }
                sizes="100vw"
                alt="Amazing photo of Red Rock Canyon by Trevor Vellinga"
            />
            <div style={ splashTextStyles } >
                {/* //% can use &nbsp; to control text-wrap on small screens */}
                <h1 style={ splashTitleStyles } >Desert&nbsp;Rock&nbsp;Sports</h1>
                {/* <p style={ splashSubTitleStyles }></p> */}
                
            </div>
            <p style={ splashPhotoCreditStyle } >
                {/* https://trevor301848.wixsite.com/trevorportfolio */}
                Photo credit: <a href="https://trevor301848.wixsite.com/trevorportfolio" target="_blank" rel="noopener noreferrer">Trevor Vellinga</a> <FaExternalLinkAlt />
            </p>
        </div>
    );
}