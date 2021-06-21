import React from 'react';

// src\stylesheets\layout\_layout_containers.sass
// src\stylesheets\components\_rrresoles.sass

// I think it would be good to have 2-4 boxes
// options
// * Text description of what it is, how it works
// * Cost tables, turn around time
// * Img or gallery/carousel
// * Contact info ???

// IG feed embed for him would be great too, but IG embeds are now, after FB changes, a big hassle as I have noted elsewhere

function RRResoles() {
    return (
        <div className="twogrid-container">
            <div className="rrresoles-text">
                <h1>Get some fresh rubber on those shoes!</h1>
                <p>Steve Krall is now your source for a Vegas local resoler. Excellent reviews, industry standard prices, and reasonable turn around time. You don't even need to ship them out!</p>
                <h3>How it works:</h3>
                <p>Drop them off at the convient box in Desert Rock Sports (other locations exist too!). Text Steve the make/model and size of each pair that you drop off, take a picture too if you would like. Thats it!</p>
                <p>Just wait to hear back from him about what he thinks the shoes need and the cost, then you pay him with cash, check, or venmo (@resoleSteve), and he drops them back off at Desert Rock Sports when they are finished. (He can ship too if needed).</p>
            </div>
            <div className="rrresoles-gallery">
                ( a gallery or carousel of before/after images )
            </div>
            <div className="rrresoles-cost">
                <h1>Prices:</h1>
                <ul>
                    <li>Half Sole: $40 / Pair</li>
                    <li>Rand Repair: $10 / Each Shoe</li>
                    <li>Approach Shoes / Other: Discuss with him</li>
                    <li>Rush Charge: $20 / Pair</li>
                </ul>
                <p>He uses Unparallel Rubber (Stealth C4 equivalent)</p>
            </div>
            <div className="rrresoles-contact">
                <h1>Contact Info:</h1>
                <ul>
                    <li>Steve Krall</li>
                    <li>Call / Text: 702-277-1957</li>
                    <li>IG: @redrockresoles</li>
                    <li>Email: steve@redrockresoles.com</li>
                </ul>
            </div>
        </div>
    )
}

export default RRResoles;
