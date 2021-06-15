import React from 'react';
import GearCarousel from '../components/sub/GearCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Styled from 'styled-components';

// generic responsive media query template from: https://angrytools.com/css/mediaquery/

export default function Gear(){

    const CarouselContainer = Styled.div`
        // ! - may not need all these media queries if all the images are the same aspect ratio
        // ! - better yet if I also do the different file sizes for different screen sizes AND pixel densities
        // every device
        margin: 0 auto;

        //desktops - higher resolution
        @media (min-width: 1281px) {}

        /*laptops, desktops*/
        @media (min-width: 1025px) and (max-width: 1280px) {}

        /*tablets, ipads (portrait)*/
        @media (min-width: 768px) and (max-width: 1024px) {}

        /*tablets, ipads (landscape)*/
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}

        /*low resolution tablets, mobiles (landscape)*/
        @media (min-width: 481px) and (max-width: 767px) {}

        /*smartphones mobiles (portrait)*/
        @media (min-width: 320px) and (max-width: 480px) {}
    `;

    return (
        <div>
            {/* The carousel of gear photos */}
            <CarouselContainer>
                <GearCarousel />
            </CarouselContainer>


            {/* Probably a .twoflex-container */}
            {/* Climbing / Canyoneering */}


            {/* Probably a .twoflex-container */}
            {/* Hiking, Backpacking, and Camping --- ? */}


            {/*  */}
        </div>
    );
}