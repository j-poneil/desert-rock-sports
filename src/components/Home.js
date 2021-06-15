import React from 'react';

// sub components
import Map from './sub/Map';
import Splash from './sub/Splash';
import News from './sub/News';
import Contact from './sub/Contact';

// TEMP IMAGES for mocking up only
import Pickles from '../img/temp/Pickles.jpg';
import Simba from '../img/temp/IMG_20190320_215434_122.jpg';
import Bouldering from '../img/temp/IMG_20190111_121054970_HDR.jpg';


export default function Home(){
    return (
        <div id="home">
            {/* Large awesome main image and some text */}
            {/* A carousel would be cool, thinking about it still */}
            <Splash />

            {/* Intro */}
            {/* A cool image? */}
            <div className="twoflex-container">
                <div>
                    <p><strong>Welcome to Desert Rock Sports</strong></p>
                    <p> the Las Vegas area's best store for climbing and wilderness adventure.
Desert Rock Sports is owned and operated by climbers for backpackers, climbers, canyoneers, cavers and other outdoor sports enthusiasts.</p>
                    <p>We carry top of the line technical gear and outdoor clothing not likely to be found anywhere else in the area.</p>
                    <p>Our staff is friendly and helpful. Come in and ask us about routes, conditions, permits, camping, or where to get a good beer. Use our wireless connection! We're here to help make your visit to Red Rock country a memorable one.</p>
                </div>
                <div>
                    {/* <img className="temp" src='https://via.placeholder.com/500x400' alt="placeholder"/> */}
                    <img className="temp" src={ Pickles } alt="pickles-placeholder" width="200px" />
                </div>
            </div>

            {/* Local news / happenings / sales / events */}
            {/* A cool image? */}
            <div className="twoflex-container">
                <div>
                    {/* <img className="temp" src='https://via.placeholder.com/500x400' alt="placeholder"/> */}
                    <img className="temp" src={ Simba } alt="simba-placeholder" width="400px" />
                </div>
                <News />
            </div>

            {/* Yes, we rent bouldering pads */}
            {/* A cool image? */}
            <div className="twoflex-container">
                <div>
                    <p><strong>Yes! We rent Bouldering Pads!</strong></p>
                    <p>Regular size $15/day, XL $25/day</p>
                    <p>We don't do reservations anymore, but our fleet is now so large that we almost never run out.</p>
                </div>
                <div>
                    {/* <img className="temp" src='https://via.placeholder.com/500x400' alt="placeholder"/> */}
                    <img className="temp" src={ Bouldering } alt="bouldering-placeholder" width="300px" />
                </div>
            </div>

            {/* A few popular products you can order from us */}
            {/* Maybe as a carousel */}

            {/* Check us out on IG? Subscribe to our mailing list? */}

            {/* Contact Us / where you at info */}
            <Contact />

            {/* Embedded Google Map, somewhat responsive */}
            <Map />
        </div>
    );
}