import React from 'react';

// for whatever reason images are only working when I import them like this, not when I try to place this path as the src of the image... but it works with placehold image links... weird.
// TEMPORARY IMAGE for mocking up
import splashImgCanyon from '../../img/temp/canyon_hd.jpg';

// Splash image / title / catchy line
// src/stylesheets/components/_splash.sass
export default function Splash(){
    return (
        <div className="splash-container">
            {/* <img className="splash-img" src='https://via.placeholder.com/500x400' alt="placeholder"/> */}
            <img className="splash-img" src={ splashImgCanyon } alt="splash-img_canyon"/>
            <div className="splash-text">
                <h1 className="splash-h1">Desert Rock Sports</h1>
                <p className="splash-p">- Climbing - Canyoneering - Hiking - Camping -</p>
                {/* <p className="splash-p"></p> */}

                {/* Need an indicator to scroll down, there is more to see. */}
            </div>
        </div>
    );
}