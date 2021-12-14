import React from 'react';

// import light gallery
// https://www.lightgalleryjs.com/docs/react/
import LightGallery from 'lightgallery/react';

// import styles for light gallery
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins for light gallery (not sure if I'll use both)
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// import images
// import Test from '../../img/RRCG/GuidingGalleryImgs/';
import BigBadWolf from '../../img/RRCG/GuidingGalleryImgs/BigBadWolf.jpg';
import MansBestFriend from '../../img/RRCG/GuidingGalleryImgs/MansBestFriend.jpg';
import Josh from '../../img/RRCG/GuidingGalleryImgs/Josh.jpg';
import Kiss from '../../img/RRCG/GuidingGalleryImgs/Kiss.jpg';
import Josh2 from '../../img/RRCG/GuidingGalleryImgs/Josh2.jpg';
import JulieChrysler from '../../img/RRCG/GuidingGalleryImgs/JulieChrysler.jpeg';
import BigBadWolf2 from '../../img/RRCG/GuidingGalleryImgs/BigBadWolf2.jpg';

// import thumbnails
// import Test from '../../img/RRCG/GuidingGalleryImgs/Thumbnails/';
import BigBadWolf_Thumb from '../../img/RRCG/GuidingGalleryImgs/Thumbnails/BigBadWolf (Phone).jpg';
import MansBestFriend_Thumb from '../../img/RRCG/GuidingGalleryImgs/Thumbnails/MansBestFriend (Phone).jpg';
import Josh_Thumb from '../../img/RRCG/GuidingGalleryImgs/Thumbnails/Josh (Phone).jpg';
import Kiss_Thumb from '../../img/RRCG/GuidingGalleryImgs/Thumbnails/Kiss (Phone).jpg';
import Josh2_Thumb from '../../img/RRCG/GuidingGalleryImgs/Thumbnails/Josh2 (Phone).jpg';
import JulieChrysler_Thumb from '../../img/RRCG/GuidingGalleryImgs/Thumbnails/JulieChrysler (Phone).jpeg';
import BigBadWolf2_Thumb from '../../img/RRCG/GuidingGalleryImgs/Thumbnails/BigBadWolf2 (Phone).jpg';


// @ How to...
/*
    parent is a link to the full size image, which is handled by the opener/viewer
    child is a separate thumbnail file of the image
    thumbnail size?
        right click on image file, resize pictures
        phone (fits in 320 x 568 px)
*/



function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {/* <a href={}>
                    <img alt="" src={} />
                </a> */}
                <a href={BigBadWolf}>
                    <img alt="The Route 'Big Bad Wolf' 5.9 3p sport" src={BigBadWolf_Thumb} />
                </a>
                <a href={MansBestFriend}>
                    <img alt="The Route 'Mans Best Friend' 5.7 2p sport" src={MansBestFriend_Thumb} />
                </a>
                <a href={Josh}>
                    <img alt="Awesome face climbing on great desert varnish" src={Josh_Thumb} />
                </a>
                <a href={Kiss}>
                    <img alt="Unforgettable moments!" src={Kiss_Thumb} />
                </a>
                <a href={Josh2}>
                    <img alt="David enjoying the awesome movement and exposure" src={Josh2_Thumb} />
                </a>
                <a href={JulieChrysler}>
                    <img alt="Julie styling the classic Chrysler Crack. We can help you learn techniques for all sorts of climbing, including the seriously misunderstood offwidth." src={JulieChrysler_Thumb} />
                </a>
                <a href={BigBadWolf2}>
                    <img alt="Checking out how small the boulderers look way over at Kraft Boulders, from the top of Big Bad Wolf 5.9 3p" src={BigBadWolf2_Thumb} />
                </a>
                {/* <a href={}>
                    <img alt="" src={} />
                </a> */}
                {/* <a href={}>
                    <img alt="" src={} />
                </a> */}
                {/* <a href={}>
                    <img alt="" src={} />
                </a> */}
                {/* <a href={}>
                    <img alt="" src={} />
                </a> */}
                {/* <a href={}>
                    <img alt="" src={} />
                </a> */}
                {/* <a href={}>
                    <img alt="" src={} />
                </a> */}
                {/* <a href={}>
                    <img alt="" src={} />
                </a> */}
                {/* <a href={}>
                    <img alt="" src={} />
                </a> */}
                {/* <a href={}>
                    <img alt="" src={} />
                </a> */}
                {/* <a href={}>
                    <img alt="" src={} />
                </a> */}

            </LightGallery>
        </div>
    );
}

const GuidingGallery = () => {
    return (
        <Gallery />
    )
}

export default GuidingGallery;
