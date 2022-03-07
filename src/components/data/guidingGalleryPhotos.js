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

// 4:3
import BigBadWolf from '../../img/RRCG/GuidingGalleryImgs/BigBadWolf.jpg';
import BigBadWolf2 from '../../img/RRCG/GuidingGalleryImgs/BigBadWolf2.jpg';
import MansBestFriend from '../../img/RRCG/GuidingGalleryImgs/MansBestFriend.jpg';
import Josh from '../../img/RRCG/GuidingGalleryImgs/Josh.jpg';
import FroglandTunnel from '../../img/RRCG/GuidingGalleryImgs/FroglandTunnel.jpg';
// 3:4
import Kiss from '../../img/RRCG/GuidingGalleryImgs/Kiss.jpg';
import Josh2 from '../../img/RRCG/GuidingGalleryImgs/Josh2.jpg';
import EpiFun from '../../img/RRCG/GuidingGalleryImgs/EpiFun.jpg';
import FirstCreekSlabsAwe from '../../img/RRCG/GuidingGalleryImgs/FirstCreekSlabsAwe.jpg';
import JuniperCanyonAwe from '../../img/RRCG/GuidingGalleryImgs/JuniperCanyonAwe.jpg';
import LimestoneStunner from '../../img/RRCG/GuidingGalleryImgs/LimestoneStunner.jpg';
import MultipitchFun from '../../img/RRCG/GuidingGalleryImgs/MultpitchFun.jpg';
import Plants from '../../img/RRCG/GuidingGalleryImgs/Plants.jpg';
import RainbowWallAww from '../../img/RRCG/GuidingGalleryImgs/RainbowWallAww.jpg';
import SolarSlabAwe from '../../img/RRCG/GuidingGalleryImgs/SolarSlabAwe.jpg';
import TeamFun from '../../img/RRCG/GuidingGalleryImgs/TeamFun.jpg';
import TunnelVision from '../../img/RRCG/GuidingGalleryImgs/TunnelVision.jpg';
// 3:2
import JulieChrysler from '../../img/RRCG/GuidingGalleryImgs/JulieChrysler.jpeg';



export const photos = [
    {
        src: FirstCreekSlabsAwe,
        alt: "Climbing up an easy route on the First Creek Slabs with the epic Labrynth Wall looming above",
        width: 3024,
        height: 4032,
        title: "Climbing up an easy route on the First Creek Slabs with the epic Labrynth Wall looming above"
    },
    {
        src: BigBadWolf,
        alt: "Checking out the exposure on Big Bad Wolf",
        width: 4608,
        height: 3456,
        title: "Checking out the exposure on Big Bad Wolf"
    },
    {
        src: BigBadWolf2,
        alt: "Looking at all the small boulderers over at Kraft",
        width: 4608,
        height: 3456,
        title: "Looking at all the small boulderers over at Kraft"
    },
    {
        src: Josh2,
        alt: "Pure fun. A climber making their way up on a route with fun and easy movement",
        width: 3024,
        height: 4032,
        title: "Pure fun"
    },
    {
        src: MansBestFriend,
        alt: "Adventure with friends. Two buddies coming up a multipitch route together.",
        width: 4608,
        height: 3456,
        title: "Adventure with friends"
    },
    {
        src: Plants,
        alt: "The higher elevation areas at Red Rock Canyon NCA tend to get more precip and runoff so you can find some really cool plants that are rare lower down, like these lush lichen with mushroom-like flowers",
        width: 3024,
        height: 4032,
        title: "The higher elevation areas at Red Rock Canyon NCA tend to get more precip and runoff so you can find some really cool plants that are rare lower down."
    },
    {
        src: JulieChrysler,
        alt: "Julie climbing the amazing Chrysler Crack, an off-width crack. Too big for hand or fist jams, too small to chimney up until near the top, too strenuous to lie-back. We can help you learn to climb the wide.",
        width: 6000,
        height: 4000,
        title: "Julie climbing the amazing Chrysler Crack. We can help you learn to climb the wide."
    },
    {
        src: Josh,
        alt: "Climbing up the awesome varnished rock on Dark Shadows. Smooth, dark, and hard rock, almost as if it has been glazed.",
        width: 4032,
        height: 3024,
        title: "Climbing up the awesome varnished rock on Dark Shadows"
    },
    {
        src: Kiss,
        alt: "Romance on the rock. Two partners kissing.",
        width: 3024,
        height: 4032,
        title: "Romance on the rock"
    },
    {
        src: LimestoneStunner,
        alt: "Limestone is a great, albeit sharp, alternative you can climb whenever the sandstone is wet and weak. Here a climber is making some fun moves on great holds.",
        width: 3024,
        height: 4032,
        title: "Limestone is a great, albeit sharp, alternative you can climb whenever the sandstone is wet and weak."
    },
    {
        src: FroglandTunnel,
        alt: "About to climb through the vertical tunnel on Frogland, kind of a right angle triangular opening, almost dead verical with  hand crack to help you get through. A mixture of crack, chimney, and face climbing is needed to make it through.",
        width: 4032,
        height: 3024,
        title: "About to climb through the vertical tunnel on Frogland."
    },
    {
        src: TeamFun,
        alt: "Two friends enjoy a great day out climbing some sweet multipitch.",
        width: 3024,
        height: 4032,
        title: "Two friends enjoy a great day out climbing some sweet multipitch."
    },
    {
        src: EpiFun,
        alt: "Enjoying the amazing chimney pitches and elevator shaft exposure of the mega classic, Epinephrine.",
        width: 3024,
        height: 4032,
        title: "Enjoying the amazing chimney pitches and elevator shaft exposure of the mega classic, Epinephrine."
    },
    {
        src: JuniperCanyonAwe,
        alt: "Hiking out after a great day of multipitch climbing admiring the sun set over Juniper Canyon.",
        width: 3024,
        height: 4032,
        title: "Hiking out after a great day of multipitch climbing admiring the sun set over Juniper Canyon."
    },
    {
        src: MultipitchFun,
        alt: "Multipitch brings great fun and epic views. Here a climber savors the last few fun moves before a belay station on a route on the upper Solar Slab wall.",
        width: 3024,
        height: 4032,
        title: "Multipitch brings great fun and epic views."
    },
    {
        src: RainbowWallAww,
        alt: "Multipitch adventures with your partner will create timeless memories. Here two partners hug while the epic beauty of the Rainbow Wall and Juniper Canyon creates a memorable backdrop.",
        width: 3024,
        height: 4032,
        title: "Multipitch adventures with your partner will create timeless memories."
    },
    {
        src: SolarSlabAwe,
        alt: "Looking up towards Solar Slab and all the climbing yet to come.",
        width: 3024,
        height: 4032,
        title: "Looking up towards Solar Slab and all the climbing yet to come."
    },
    {
        src: TunnelVision,
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
