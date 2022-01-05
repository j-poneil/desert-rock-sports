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



// 4:3
import BigBadWolf from '../../img/RRCG/GuidingGalleryImgs/BigBadWolf.jpg';
import BigBadWolf2 from '../../img/RRCG/GuidingGalleryImgs/BigBadWolf2.jpg';
import MansBestFriend from '../../img/RRCG/GuidingGalleryImgs/MansBestFriend.jpg';
import Josh from '../../img/RRCG/GuidingGalleryImgs/Josh.jpg';
// 3:4
import Kiss from '../../img/RRCG/GuidingGalleryImgs/Kiss.jpg';
import Josh2 from '../../img/RRCG/GuidingGalleryImgs/Josh2.jpg';
// 3:2
import JulieChrysler from '../../img/RRCG/GuidingGalleryImgs/JulieChrysler.jpeg';



export const photos = [
    {
        src: BigBadWolf,
        alt: "",
        width: 4608,
        height: 3456,
        title: "test title / caption"
    },
    {
        src: MansBestFriend,
        alt: "",
        width: 4608,
        height: 3456
    },
    {
        src: Josh,
        alt: "",
        width: 4032,
        height: 3024
    },
    {
        src: Kiss,
        alt: "",
        width: 3024,
        height: 4032
    },
    {
        src: Josh2,
        alt: "",
        width: 3024,
        height: 4032
    },
    {
        src: JulieChrysler,
        alt: "",
        width: 6000,
        height: 4000
    },
    {
        src: BigBadWolf2,
        alt: "",
        width: 4608,
        height: 3456
    },
    // {
    //     src: ,
    //     alt: "",
    //     width: ,
    //     height: 
    // },
    // {
    //     src: ,
    //     alt: "",
    //     width: ,
    //     height: 
    // },
    // {
    //     src: ,
    //     alt: "",
    //     width: ,
    //     height: 
    // },
    // {
    //     src: ,
    //     alt: "",
    //     width: ,
    //     height: 
    // },
    // {
    //     src: ,
    //     alt: "",
    //     width: ,
    //     height: 
    // },
    // {
    //     src: ,
    //     alt: "",
    //     width: ,
    //     height: 
    // },
    // {
    //     src: ,
    //     alt: "",
    //     width: ,
    //     height: 
    // },
    // {
    //     src: ,
    //     alt: "",
    //     width: ,
    //     height: 
    // },
];
