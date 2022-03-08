/*
    An array of objects, each containing src, width, height (width and height as variables/names, not strings)... width / height for knowing aspect ratio so it is maintained...
    property    type        default     desc
    src         string      undefined   duh
    srcSet      arr or str  undefined   optional
    sizes       arr or str  undefined   optional
    width       num         undefined   required, width of the gallery img, only used for calculating aspect ratio
    height      num         undefined   required, height of the gallery img, only used for calculating aspect ratio
    alt         str         undefined   alt text
    key         str         src         optional, key to be used on component

    srcSet and sizes are options:
    {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200",
        srcSet: [
        "https://source.unsplash.com/2ShvY8Lf6l0/500x375 500w",
        "https://source.unsplash.com/2ShvY8Lf6l0/800x600 800w",
        "https://source.unsplash.com/2ShvY8Lf6l0/1024x768 1024w",
        "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200 1600w"
        ],
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 4,
        height: 3
    },

    title: "Title"
        from react-images
        presents as a mouse over caption
        as well as a lower left corner description, kinda small text though
    

    Trying to dynamically calculate find img dimensions or aspect ratio to pass in using a function instead of hard coding is harder than you may expect... and its not needed anyways, react-photo-gallery calculates that already from the numbers given



*/

//? Maybe visually separate these imports into sections with the same aspect ratio

// imports not yet sorted by aspect ratio
// https://calculateaspectratio.com/ or BETTER: https://andrew.hedges.name/experiments/aspect_ratio/

//% in the array of objects the width and height don't have to be pixels, can just be the aspect ratio values

//! too_large (original size or cropped, polished... some people have 4K I guess)
// 4:3
import BigBadWolf_4_3_4608x3456 from '../../img/RRCG/GuidingGalleryImgs/too_large/BigBadWolf_4_3_4608x3456.jpg';
import BigBadWolf2_4_3_4608x3456 from '../../img/RRCG/GuidingGalleryImgs/too_large/BigBadWolf2_4_3_4608x3456.jpg';
import MansBestFriend_4_3_4608x3456 from '../../img/RRCG/GuidingGalleryImgs/too_large/MansBestFriend_4_3_4608x3456.jpg';
import Josh_4_3_4032x3024 from '../../img/RRCG/GuidingGalleryImgs/too_large/Josh_4_3_4032x3024.jpg';
import FroglandTunnel_4_3_4032x3024 from '../../img/RRCG/GuidingGalleryImgs/too_large/FroglandTunnel_4_3_4032x3024.jpg';
// 3:4
import Kiss_3_4_3024x4032 from '../../img/RRCG/GuidingGalleryImgs/too_large/Kiss_3_4_3024x4032.jpg';
import Josh2_3_4_3024x4032 from '../../img/RRCG/GuidingGalleryImgs/too_large/Josh2_3_4_3024x4032.jpg';
import EpiFun_3_4_3024x4032 from '../../img/RRCG/GuidingGalleryImgs/too_large/EpiFun_3_4_3024x4032.jpg';
import FirstCreekSlabsAwe_3_4_3024x4032 from '../../img/RRCG/GuidingGalleryImgs/too_large/FirstCreekSlabsAwe_3_4_3024x4032.jpg';
import JuniperCanyonAwe_3_4_3024x4032 from '../../img/RRCG/GuidingGalleryImgs/too_large/JuniperCanyonAwe_3_4_3024x4032.jpg';
import LimestoneStunner_3_4_3024x4032 from '../../img/RRCG/GuidingGalleryImgs/too_large/LimestoneStunner_3_4_3024x4032.jpg';
import MultpitchFun_3_4_3024x4032 from '../../img/RRCG/GuidingGalleryImgs/too_large/MultpitchFun_3_4_3024x4032.jpg';
import Plants_3_4_3024x4032 from '../../img/RRCG/GuidingGalleryImgs/too_large/Plants_3_4_3024x4032.jpg';
import RainbowWallAww_3_4_3024x4032 from '../../img/RRCG/GuidingGalleryImgs/too_large/RainbowWallAww_3_4_3024x4032.jpg';
import SolarSlabAwe_3_4_3024x4032 from '../../img/RRCG/GuidingGalleryImgs/too_large/SolarSlabAwe_3_4_3024x4032.jpg';
import TeamFun_3_4_3024x4032 from '../../img/RRCG/GuidingGalleryImgs/too_large/TeamFun_3_4_3024x4032.jpg';
import TunnelVision_3_4_3024x4032 from '../../img/RRCG/GuidingGalleryImgs/too_large/TunnelVision_3_4_3024x4032.jpg';
// 3:2
import JulieChrysler_3_2_6000x4000 from '../../img/RRCG/GuidingGalleryImgs/too_large/JulieChrysler_3_2_6000x4000.jpg';

//! large = fits in 1920x1080
// 4:3
import BigBadWolf_4_3_1440x1080 from '../../img/RRCG/GuidingGalleryImgs/large/BigBadWolf_4_3_1440x1080.jpg';
import BigBadWolf2_4_3_1440x1080 from '../../img/RRCG/GuidingGalleryImgs/large/BigBadWolf2_4_3_1440x1080.jpg';
import MansBestFriend_4_3_1440x1080 from '../../img/RRCG/GuidingGalleryImgs/large/MansBestFriend_4_3_1440x1080.jpg';
import Josh_4_3_1440x1080 from '../../img/RRCG/GuidingGalleryImgs/large/Josh_4_3_1440x1080.jpg';
import FroglandTunnel_4_3_1440x1080 from '../../img/RRCG/GuidingGalleryImgs/large/FroglandTunnel_4_3_1440x1080.jpg';
// 3:4
import Kiss_3_4_1080x1440 from '../../img/RRCG/GuidingGalleryImgs/large/Kiss_3_4_1080x1440.jpg';
import Josh2_3_4_1080x1440 from '../../img/RRCG/GuidingGalleryImgs/large/Josh2_3_4_1080x1440.jpg';
import EpiFun_3_4_1080x1440 from '../../img/RRCG/GuidingGalleryImgs/large/EpiFun_3_4_1080x1440.jpg';
import FirstCreekSlabsAwe_3_4_1080x1440 from '../../img/RRCG/GuidingGalleryImgs/large/FirstCreekSlabsAwe_3_4_1080x1440.jpg';
import JuniperCanyonAwe_3_4_1080x1440 from '../../img/RRCG/GuidingGalleryImgs/large/JuniperCanyonAwe_3_4_1080x1440.jpg';
import LimestoneStunner_3_4_1080x1440 from '../../img/RRCG/GuidingGalleryImgs/large/LimestoneStunner_3_4_1080x1440.jpg';
import MultpitchFun_3_4_1080x1440 from '../../img/RRCG/GuidingGalleryImgs/large/MultpitchFun_3_4_1080x1440.jpg';
import Plants_3_4_1080x1440 from '../../img/RRCG/GuidingGalleryImgs/large/Plants_3_4_1080x1440.jpg';
import RainbowWallAww_3_4_1080x1440 from '../../img/RRCG/GuidingGalleryImgs/large/RainbowWallAww_3_4_1080x1440.jpg';
import SolarSlabAwe_3_4_1080x1440 from '../../img/RRCG/GuidingGalleryImgs/large/SolarSlabAwe_3_4_1080x1440.jpg';
import TeamFun_3_4_1080x1440 from '../../img/RRCG/GuidingGalleryImgs/large/TeamFun_3_4_1080x1440.jpg';
import TunnelVision_3_4_1080x1440 from '../../img/RRCG/GuidingGalleryImgs/large/TunnelVision_3_4_1080x1440.jpg';
// 3:2
import JulieChrysler_3_2_1620x1080 from '../../img/RRCG/GuidingGalleryImgs/large/JulieChrysler_3_2_1620x1080.jpg';


//! medium = fits in 1366x768
// 4:3
import BigBadWolf_4_3_1024x768 from '../../img/RRCG/GuidingGalleryImgs/medium/BigBadWolf_4_3_1024x768.jpg';
import BigBadWolf2_4_3_1024x768 from '../../img/RRCG/GuidingGalleryImgs/medium/BigBadWolf2_4_3_1024x768.jpg';
import MansBestFriend_4_3_1024x768 from '../../img/RRCG/GuidingGalleryImgs/medium/MansBestFriend_4_3_1024x768.jpg';
import Josh_4_3_1024x768 from '../../img/RRCG/GuidingGalleryImgs/medium/Josh_4_3_1024x768.jpg';
import FroglandTunnel_4_3_1024x768 from '../../img/RRCG/GuidingGalleryImgs/medium/FroglandTunnel_4_3_1024x768.jpg';
// 3:4
import Kiss_3_4_768x1024 from '../../img/RRCG/GuidingGalleryImgs/medium/Kiss_3_4_768x1024.jpg';
import Josh2_3_4_768x1024 from '../../img/RRCG/GuidingGalleryImgs/medium/Josh2_3_4_768x1024.jpg';
import EpiFun_3_4_768x1024 from '../../img/RRCG/GuidingGalleryImgs/medium/EpiFun_3_4_768x1024.jpg';
import FirstCreekSlabsAwe_3_4_768x1024 from '../../img/RRCG/GuidingGalleryImgs/medium/FirstCreekSlabsAwe_3_4_768x1024.jpg';
import JuniperCanyonAwe_3_4_768x1024 from '../../img/RRCG/GuidingGalleryImgs/medium/JuniperCanyonAwe_3_4_768x1024.jpg';
import LimestoneStunner_3_4_768x1024 from '../../img/RRCG/GuidingGalleryImgs/medium/LimestoneStunner_3_4_768x1024.jpg';
import MultpitchFun_3_4_768x1024 from '../../img/RRCG/GuidingGalleryImgs/medium/MultpitchFun_3_4_768x1024.jpg';
import Plants_3_4_768x1024 from '../../img/RRCG/GuidingGalleryImgs/medium/Plants_3_4_768x1024.jpg';
import RainbowWallAww_3_4_768x1024 from '../../img/RRCG/GuidingGalleryImgs/medium/RainbowWallAww_3_4_768x1024.jpg';
import SolarSlabAwe_3_4_768x1024 from '../../img/RRCG/GuidingGalleryImgs/medium/SolarSlabAwe_3_4_768x1024.jpg';
import TeamFun_3_4_768x1024 from '../../img/RRCG/GuidingGalleryImgs/medium/TeamFun_3_4_768x1024.jpg';
import TunnelVision_3_4_768x1024 from '../../img/RRCG/GuidingGalleryImgs/medium/TunnelVision_3_4_768x1024.jpg';
// 3:2
import JulieChrysler_3_2_1152x768 from '../../img/RRCG/GuidingGalleryImgs/medium/JulieChrysler_3_2_1152x768.jpg';


//! small = fits in 854x480
// 4:3
import BigBadWolf_4_3_640x480 from '../../img/RRCG/GuidingGalleryImgs/small/BigBadWolf_4_3_640x480.jpg';
import BigBadWolf2_4_3_640x480 from '../../img/RRCG/GuidingGalleryImgs/small/BigBadWolf2_4_3_640x480.jpg';
import MansBestFriend_4_3_640x480 from '../../img/RRCG/GuidingGalleryImgs/small/MansBestFriend_4_3_640x480.jpg';
import Josh_4_3_640x480 from '../../img/RRCG/GuidingGalleryImgs/small/Josh_4_3_640x480.jpg';
import FroglandTunnel_4_3_640x480 from '../../img/RRCG/GuidingGalleryImgs/small/FroglandTunnel_4_3_640x480.jpg';
// 3:4
import Kiss_3_4_480x640 from '../../img/RRCG/GuidingGalleryImgs/small/Kiss_3_4_480x640.jpg';
import Josh2_3_4_480x640 from '../../img/RRCG/GuidingGalleryImgs/small/Josh2_3_4_480x640.jpg';
import EpiFun_3_4_480x640 from '../../img/RRCG/GuidingGalleryImgs/small/EpiFun_3_4_480x640.jpg';
import FirstCreekSlabsAwe_3_4_480x640 from '../../img/RRCG/GuidingGalleryImgs/small/FirstCreekSlabsAwe_3_4_480x640.jpg';
import JuniperCanyonAwe_3_4_480x640 from '../../img/RRCG/GuidingGalleryImgs/small/JuniperCanyonAwe_3_4_480x640.jpg';
import LimestoneStunner_3_4_480x640 from '../../img/RRCG/GuidingGalleryImgs/small/LimestoneStunner_3_4_480x640.jpg';
import MultpitchFun_3_4_480x640 from '../../img/RRCG/GuidingGalleryImgs/small/MultpitchFun_3_4_480x640.jpg';
import Plants_3_4_480x640 from '../../img/RRCG/GuidingGalleryImgs/small/Plants_3_4_480x640.jpg';
import RainbowWallAww_3_4_480x640 from '../../img/RRCG/GuidingGalleryImgs/small/RainbowWallAww_3_4_480x640.jpg';
import SolarSlabAwe_3_4_480x640 from '../../img/RRCG/GuidingGalleryImgs/small/SolarSlabAwe_3_4_480x640.jpg';
import TeamFun_3_4_480x640 from '../../img/RRCG/GuidingGalleryImgs/small/TeamFun_3_4_480x640.jpg';
import TunnelVision_3_4_480x640 from '../../img/RRCG/GuidingGalleryImgs/small/TunnelVision_3_4_480x640.jpg';
// 3:2
import JulieChrysler_3_2_720x480 from '../../img/RRCG/GuidingGalleryImgs/small/JulieChrysler_3_2_720x480.jpg';


export const photos = [
    {
        src: FirstCreekSlabsAwe_3_4_3024x4032,
        alt: "Climbing up an easy route on the First Creek Slabs with the epic Labrynth Wall looming above",
        width: 3024,
        height: 4032,
        title: "Climbing up an easy route on the First Creek Slabs with the epic Labrynth Wall looming above"
    },
    {
        src: BigBadWolf_4_3_4608x3456,
        alt: "Checking out the exposure on Big Bad Wolf",
        width: 4608,
        height: 3456,
        title: "Checking out the exposure on Big Bad Wolf"
    },
    {
        src: BigBadWolf2_4_3_4608x3456,
        alt: "Looking at all the small boulderers over at Kraft",
        width: 4608,
        height: 3456,
        title: "Looking at all the small boulderers over at Kraft"
    },
    {
        src: Josh2_3_4_3024x4032,
        alt: "Pure fun. A climber making their way up on a route with fun and easy movement",
        width: 3024,
        height: 4032,
        title: "Pure fun"
    },
    {
        src: MansBestFriend_4_3_4608x3456,
        alt: "Adventure with friends. Two buddies coming up a multipitch route together.",
        width: 4608,
        height: 3456,
        title: "Adventure with friends"
    },
    {
        src: Plants_3_4_3024x4032,
        alt: "The higher elevation areas at Red Rock Canyon NCA tend to get more precip and runoff so you can find some really cool plants that are rare lower down, like these lush lichen with mushroom-like flowers",
        width: 3024,
        height: 4032,
        title: "The higher elevation areas at Red Rock Canyon NCA tend to get more precip and runoff so you can find some really cool plants that are rare lower down."
    },
    {
        src: JulieChrysler_3_2_6000x4000,
        alt: "Julie climbing the amazing Chrysler Crack, an off-width crack. Too big for hand or fist jams, too small to chimney up until near the top, too strenuous to lie-back. We can help you learn to climb the wide.",
        width: 6000,
        height: 4000,
        title: "Julie climbing the amazing Chrysler Crack. We can help you learn to climb the wide."
    },
    {
        src: Josh_4_3_4032x3024,
        alt: "Climbing up the awesome varnished rock on Dark Shadows. Smooth, dark, and hard rock, almost as if it has been glazed.",
        width: 4032,
        height: 3024,
        title: "Climbing up the awesome varnished rock on Dark Shadows"
    },
    {
        src: Kiss_3_4_3024x4032,
        alt: "Romance on the rock. Two partners kissing.",
        width: 3024,
        height: 4032,
        title: "Romance on the rock"
    },
    {
        src: LimestoneStunner_3_4_3024x4032,
        alt: "Limestone is a great, albeit sharp, alternative you can climb whenever the sandstone is wet and weak. Here a climber is making some fun moves on great holds.",
        width: 3024,
        height: 4032,
        title: "Limestone is a great, albeit sharp, alternative you can climb whenever the sandstone is wet and weak."
    },
    {
        src: FroglandTunnel_4_3_4032x3024,
        alt: "About to climb through the vertical tunnel on Frogland, kind of a right angle triangular opening, almost dead verical with  hand crack to help you get through. A mixture of crack, chimney, and face climbing is needed to make it through.",
        width: 4032,
        height: 3024,
        title: "About to climb through the vertical tunnel on Frogland."
    },
    {
        src: TeamFun_3_4_3024x4032,
        alt: "Two friends enjoy a great day out climbing some sweet multipitch.",
        width: 3024,
        height: 4032,
        title: "Two friends enjoy a great day out climbing some sweet multipitch."
    },
    {
        src: EpiFun_3_4_3024x4032,
        alt: "Enjoying the amazing chimney pitches and elevator shaft exposure of the mega classic, Epinephrine.",
        width: 3024,
        height: 4032,
        title: "Enjoying the amazing chimney pitches and elevator shaft exposure of the mega classic, Epinephrine."
    },
    {
        src: JuniperCanyonAwe_3_4_3024x4032,
        alt: "Hiking out after a great day of multipitch climbing admiring the sun set over Juniper Canyon.",
        width: 3024,
        height: 4032,
        title: "Hiking out after a great day of multipitch climbing admiring the sun set over Juniper Canyon."
    },
    {
        src: MultpitchFun_3_4_3024x4032,
        alt: "Multipitch brings great fun and epic views. Here a climber savors the last few fun moves before a belay station on a route on the upper Solar Slab wall.",
        width: 3024,
        height: 4032,
        title: "Multipitch brings great fun and epic views."
    },
    {
        src: RainbowWallAww_3_4_3024x4032,
        alt: "Multipitch adventures with your partner will create timeless memories. Here two partners hug while the epic beauty of the Rainbow Wall and Juniper Canyon creates a memorable backdrop.",
        width: 3024,
        height: 4032,
        title: "Multipitch adventures with your partner will create timeless memories."
    },
    {
        src: SolarSlabAwe_3_4_3024x4032,
        alt: "Looking up towards Solar Slab and all the climbing yet to come.",
        width: 3024,
        height: 4032,
        title: "Looking up towards Solar Slab and all the climbing yet to come."
    },
    {
        src: TunnelVision_3_4_3024x4032,
        alt: "Soon to journey up and through the wild namesake pitch of Tunnel Vision, we stand happy and ready for the fun and awe to come.",
        width: 3024,
        height: 4032,
        title: "Soon to journey up and through the wild namesake pitch of Tunnel Vision."
    },
    // {
    //     src: ,
    //     alt: "",
    //     width: ,
    //     height: ,
    //     title: ""
    // },
];
