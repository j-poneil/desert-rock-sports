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




// 4:3

// 3:4

// 3:2




export const photos = [
    {
        src: BlackDiamondCams,
        alt: "",
        width: 4608,
        height: 3456,
        title: "BD Cams"
    },
    {
        src: BlackTotem,
        alt: "",
        width: 3456,
        height: 3456,
        title: ""
    },
    {
        src: Bookshelf,
        alt: "",
        width: 3456,
        height: 3456,
        title: ""
    },
    {
        src: CarabinersAndBelayDevices,
        alt: "",
        width: 4608,
        height: 3456,
        title: ""
    },
    {
        src: ChalkBags,
        alt: "",
        width: 4608,
        height: 3456,
        title: ""
    },
    {
        src: Harnesses,
        alt: "",
        width: 4608,
        height: 3456,
        title: ""
    },
    {
        src: LocalBooksOLD,
        alt: "",
        width: 3456,
        height: 3456,
        title: ""
    },
    {
        src: Shoes,
        alt: "",
        width: 3456,
        height: 3456,
        title: ""
    },
    {
        src: Ropes,
        alt: "",
        width: 3456,
        height: 3456,
        title: ""
    },
    // {
    //     src: ,
    //     alt: "",
    //     width: ,
    //     height: ,
    //     title: ""
    // },
];
