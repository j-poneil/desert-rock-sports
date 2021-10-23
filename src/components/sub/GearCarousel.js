import React from 'react';
import { Carousel } from 'react-responsive-carousel';

// ! - for the carousel to work well and not shift the layout around / mess with responsive design... all the images need to be exactly the same height and width... or rather the same aspect ratio. The editing to make that happen is annoying, yes, but its by far the best way to make it look good and just work on any screen size. A bunch of custom CSS and media queries / breakpoints will not work, identical aspect ratio is the only way. Seems like a limitation, but once its done it will look great, so just do it.
// ! - make xlarge, large, medium, 2x medium, small, 2x small, ... or is that too much?
// ! - need to standardize image aspect ratio, probably 4:3 or something... hopefully something that works for every screen size
    // * to prevent need to scroll down on laptop, may need to be like 16:7 or something
    // ? Is there an easy way to just resize things so that the whole carousel + thumbnails below fits fully within the view width / height - nav bar? There should be

// ! - temp images, real ones will be nicer and all the same aspect ratio
// import Backpacks from '../../img/DRS_store/Backpacks.jpg';
// import Backpacks from '../../img/DRS_store/Backpacks.jpg';
import Backpacks from '../../img/DRS_store/Backpacks_2p4_1_crop.jpg';
// testing different image heights to eliminate need to scroll down on laptop
import BlackDiamondCams from '../../img/DRS_store/BlackDiamondCams.jpg';
import BlackTotem from '../../img/DRS_store/BlackTotem.jpg';
import Bookshelf from '../../img/DRS_store/Bookshelf.jpg';
import CampingSupplies from '../../img/DRS_store/CampingSupplies.jpg';
import CarabinersAndBelayDevices from '../../img/DRS_store/CarabinersAndBelayDevices.jpg';
import ChalkBags from '../../img/DRS_store/ChalkBags.jpg';
import ConsignmentDoor from '../../img/DRS_store/ConsignmentDoor.jpg';
import CrashPadsBlurry from '../../img/DRS_store/CrashPadsBlurry.jpg';
import GlovesHeadlampsCrackGloves from '../../img/DRS_store/GlovesHeadlampsCrackGloves.jpg';
import Harnesses from '../../img/DRS_store/Harnesses.jpg';
import LocalBooksOLD from '../../img/DRS_store/LocalBooksOLD.jpg';
import PoopBags from '../../img/DRS_store/PoopBags.jpg';
import RentalFleet from '../../img/DRS_store/RentalFleet.jpg';
import RentalFleet2 from '../../img/DRS_store/RentalFleet2.jpg';
import Ropes from '../../img/DRS_store/Ropes.jpg';
import SailriteLSZ1 from '../../img/DRS_store/SailriteLSZ-1.jpg';
import Shoes from '../../img/DRS_store/Shoes.jpg';
import Slings from '../../img/DRS_store/Slings.jpg';
import UsedShoes from '../../img/DRS_store/UsedShoes.jpg';

export default () => (
    <Carousel
        autoPlay
        // centerMode={true}
        // centerSlidePercentage={100}
        dynamicHeight={true} // default true ?
        infiniteLoop={true}
        interval={2500} // default 3000 = 3 seconds
        stopOnHover={false} // default is true, but it is currently such a large carousel... mouse is almost always hovered
        width={'100%'} // default is '100%' accepts number or string
    >
        {/* The initial simple way I did it for the demo / temp images... no provision for loading larger or smaller image files for different view port sizes or screen densities */}
        {/* <div>
            <img src={} alt="" />
            <p className="legend"></p>
        </div> */}

        {/* one way to do it with different image sizes... */}
        {/* <div>
            <picture>
                <source srcset="extralarge.jpg" media="(min-width: 1000px)" />
                <source srcset="large.jpg" media="(min-width: 800px)" />
                <img srcset="medium.jpg" alt="alt text" />
            </picture>
            <p className="legend"></p>
        </div> */}

        {/* another way to do it with different images sizes... for like retina displays, etc... */}
        {/* <div>
            <picture>
                <source srcset="large.jpg, extralarge.jpg 2x" media="(min-width: 800px)" />
                <img srcset="small.jpg, medium.jpg 2x" alt="…" />
            </picture>
            <p className="legend"></p>
        </div> */}

        <div>
            <img src={Backpacks} alt="Multiple Backpacks available for climbing, canyoneering, and hiking" />
            <p className="legend">Numerous pack options for Climbing, Canyoneering, and Hiking</p>
        </div>
        <div>
            <img src={BlackDiamondCams} alt="Black Diamond, Metolius, DMM, and Totem Cams Available" />
            <p className="legend">Black Diamond, Metolius, DMM, and Totem Cams Available</p>
        </div>
        <div>
            <img src={BlackTotem} alt="Yes, we even have the highly sought after Black Totem Cam" />
            <p className="legend">Yes, we even have the highly sought after Black Totem Cam</p>
        </div>
        <div>
            <img src={Bookshelf} alt="A variety of Climbing Guide Books Available" />
            <p className="legend">A variety of Climbing Guide Books Available</p>
        </div>
        <div>
            <img src={CampingSupplies} alt="Camping Supplies: Tents, sleeping bags, pads, stoves, fuel, water filters, gear repair supplies, etc..." />
            <p className="legend">We have a variety of camping supplies: Tents, sleeping bags, pads, stoves, fuel, water filters, gear repair supplies, etc...</p>
        </div>
        <div>
            <img src={CarabinersAndBelayDevices} alt="A wide selection of carabiners, quick draws, belay devices, ascenders" />
            <p className="legend">A wide selection of carabiners, quick draws, belay devices, ascenders</p>
        </div>
        <div>
            <img src={ChalkBags} alt="Many options for chalk bags and chalk" />
            <p className="legend">Many options for chalk bags and chalk</p>
        </div>
        <div>
            <img src={ConsignmentDoor} alt="We have a used gear section, gear that is on consignment" />
            <p className="legend">We have used gear - consignment!</p>
        </div>
        <div>
            <img src={CrashPadsBlurry} alt="We sell crash pads, typically Asana brand" />
            <p className="legend">We sell crash pads, typically Asana brand</p>
        </div>
        <div>
            <img src={GlovesHeadlampsCrackGloves} alt="We have crack gloves, gloves for rappelling, headlamps, etc..." />
            <p className="legend">We have crack gloves, gloves for rappelling, headlamps, etc...</p>
        </div>
        <div>
            <img src={Harnesses} alt="We have a variety of harnesses available, usually: Black Diamond, Petzl, Edelrid, and Misty Mountain" />
            <p className="legend">We have a variety of harnesses available, usually: Black Diamond, Petzl, Edelrid, and Misty Mountain</p>
        </div>
        <div>
            <img src={LocalBooksOLD} alt="We sell the best local guidebooks for the area: Red Rocks a Climbers Guide #2 by Jerry Handren, Mojave Limestone by Jerry Handren, Southern Nevada Bouldering #2 by Tom Moulin, and others" />
            <p className="legend">We sell the best local guidebooks for the area: Red Rocks a Climbers Guide #2 by Jerry Handren, Mojave Limestone by Jerry Handren, Southern Nevada Bouldering #2 by Tom Moulin, and others</p>
        </div>
        <div>
            <img src={PoopBags} alt="We have wag bags aka poop bags available for a small cash donation" />
            <p className="legend">We have wag bags aka poop bags available for a small cash donation</p>
        </div>
        <div>
            <img src={RentalFleet} alt="We have a large rental fleet of regular and extra large sized Asana Crash Pads" />
            <p className="legend">We have a large rental fleet of regular and extra large sized Asana Crash Pads</p>
        </div>
        <div>
            <img src={RentalFleet2} alt="We have a large rental fleet of regular and extra large sized Asana Crash Pads" />
            <p className="legend">We have a large rental fleet of regular and extra large sized Asana Crash Pads</p>
        </div>
        <div>
            <img src={Ropes} alt="We have a good selection of ropes: halfs/twins, singles in 60, 70, and 80m, taglines, rap lines, and canyoneering specific rope, as well as webbing and cordage cut by the foot for friction hitches, anchors, shoe laces, whatever" />
            <p className="legend">We have a good selection of ropes: halfs/twins, singles in 60, 70, and 80m, taglines, rap lines, and canyoneering specific rope, as well as webbing and cordage cut by the foot for friction hitches, anchors, shoe laces, whatever</p>
        </div>
        <div>
            <img src={SailriteLSZ1} alt="One of our employees does some gear repair on the side with his mini industrial sewing machine" />
            <p className="legend">One of our employees does some gear repair on the side with his mini industrial sewing machine</p>
        </div>
        <div>
            <img src={Shoes} alt="We have an excellent selection of climbing and approach shoes" />
            <p className="legend">We have an excellent selection of climbing and approach shoes</p>
        </div>
        <div>
            <img src={Slings} alt="We have a good variety of nylon and dyneema slings in all the usual lengths as well as several different personal anchor systems" />
            <p className="legend">We have a good variety of nylon and dyneema slings in all the usual lengths as well as several different personal anchor systems</p>
        </div>
        <div>
            <img src={UsedShoes} alt="We have a large always shifting selection of gently used shoes in our consignment room" />
            <p className="legend">We have a large always shifting selection of gently used shoes in our consignment room</p>
        </div>
    </Carousel>


    /*
    Available properties to modify
    ==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==

    axis	'horizontal', 'vertical'
        Define the direction of the slider, defaults to 'horizontal'.

    autoFocus	boolean
        Force focus on the carousel when it renders.

    autoPlay	boolean
        Change the slide automatically based on interval prop.

    centerMode	boolean
        Center the current item and set the slide width based on centerSlidePercentage.

    centerSlidePercentage	number
        Define the width percentage relative to the carousel width when centerMode is true.

    dynamicHeight	boolean
        The height of the items will not be fixed.

    emulateTouch	boolean
        Enable swipe on non-touch screens when swipeable is true.

    infiniteLoop	boolean
        Going after the last item will move back to the first slide.

    interval	number
        Interval in milliseconds to automatically go to the next item when autoPlay is true, defaults to 3000.

    labels	object
        Apply aria-label on carousel with an object with the properties leftArrow, rightArrow and item. The default is {leftArrow: 'previous slide / item', rightArrow: 'next slide / item', item: 'slide item'}.

    onClickItem	function
        Callback to handle a click event on a slide, receives the current index and item as arguments.

    onClickThumb	function
        Callback to handle a click event on a thumb, receives the current index and item as arguments.

    onChange	function
        Callback to handle every time the selected item changes, receives the current index and item as arguments.

    onSwipeStart	function
        Callback to handle when the swipe starts, receives a touch event as argument.

    onSwipeEnd	function
        Callback to handle when the swipe ends, receives a touch event as argument.

    onSwipeMove	function
        Callback triggered on every movement while swiping, receives a touch event as argument.

    preventMovementUntilSwipeScrollTolerance	boolean
        Don't let the carousel scroll until the user swipe to the value specified on swipeScrollTolerance.

    renderArrowPrev	function
        Render custom previous arrow. Receives a click handler, a boolean that shows if there's a previous item, and the accessibility label as arguments.

    renderArrowNext	function
        Render custom previous arrow. Receives a click handler, a boolean that shows if there's a next item, and the accessibility label as arguments.

    renderIndicator	function
        Render custom indicator. Receives a click handler, a boolean that shows if the item is selected, the item index, and the accessibility label as arguments.

    renderItem	function
        Render a custom item. Receives an item of the carousel, and an object with the isSelected property as arguments.

    renderThumbs	function
        Render prop to show the thumbs, receives the carousel items as argument. Get the img tag of each item of the slider, and render it by default.

    selectedItem	number
        Set the selected item, defaults to 0.

    showArrows	boolean
        Enable previous and next arrow, defaults to true.

    showStatus	boolean
        Enable status of the current item to the total, defaults to true.

    showIndicators	boolean
        Enable indicators to select items, defaults to true.

    showThumbs	boolean
        Enable thumbs, defaults to true.

    statusFormatter	function
        Formatter that returns the status as a string, receives the current item and the total count as arguments. Defaults to {currentItem} of {total} format.

    stopOnHover	boolean
        The slide will not change by autoPlay on hover, defaults to true.

    swipeable	boolean
        Enable the user to swipe the carousel, defaults to true.

    swipeScrollTolerance	number
        How many pixels it's needed to change the slide when swiping, defaults to 5.

    thumbWidth	number
        Width of the thumb, defaults to 80.

    transitionTime	number
        Duration of the animation of changing slides.

    useKeyboardArrows	boolean
        Enable the arrows to move the slider when focused.

    verticalSwipe	'natural', 'standard'
        Set the mode of swipe when the axis is 'vertical'. The default is 'standard'.

    width	number or string
        The width of the carousel, defaults to 100%.

    */
);