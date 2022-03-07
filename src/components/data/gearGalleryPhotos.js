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



//! Real images, cropped and polished to look good, NOT great file sizes yet, and still BIG
// 4:3
import Barnacle_4_3_3024x2268 from '../../img/DRS_store/good/Barnacle_4-3_3024x2268.jpg';
import BDPacks2_4_3_3790x2842 from '../../img/DRS_store/good/BDPacks2_4-3_3790x2842.jpg';
import BigBros_4_3_4032x3024 from '../../img/DRS_store/good/BigBros_4-3_4032x3024.jpg';
import Brass_4_3_3024x2268 from '../../img/DRS_store/good/Brass_4-3_3024x2268.jpg';
import BrassSwage_4_3_3024x2268 from '../../img/DRS_store/good/BrassSwage_4-3_3024x2268.jpg';
import Bug_4_3_3777x2833 from '../../img/DRS_store/good/Bug_4-3_3777x2833.jpg';
import C4Red_4_3_2556x1917 from '../../img/DRS_store/good/C4Red_4-3_2556x1917.jpg';
import Dyon_4_3_3280x2460 from '../../img/DRS_store/good/Dyon_4-3_3280x2460.jpg';
import Headlamp_4_3_2881x2161 from '../../img/DRS_store/good/Headlamp_4-3_2881x2161.jpg';
import Isobutane_4_3_4032x2419 from '../../img/DRS_store/good/Isobutane_4-3_4032x2419.jpg';
import Pads_4_3_3641x2731 from '../../img/DRS_store/good/Pads_4-3_3641x2731.jpg';
import Pads2_4_3_3279x2459 from '../../img/DRS_store/good/Pads2_4-3_3279x2459.jpg';
import Platy_4_3_3667x2750 from '../../img/DRS_store/good/Platy_4-3_3667x2750.jpg';
import Sheep_4_3_3251x2438 from '../../img/DRS_store/good/Sheep_4-3_3251x2438.jpg';
import TotemBlue_4_3_2441x1831 from '../../img/DRS_store/good/TotemBlue_4-3_2441x1831.jpg';

// 3:4
import Approach_3_4_2905x3874 from '../../img/DRS_store/good/Approach_3-4_2905x3874.jpg';
import G7_3_4_2552x3403 from '../../img/DRS_store/good/G7_3-4_2552x3403.jpg';
import Postcards_3_4_2695x3594 from '../../img/DRS_store/good/Postcards_3-4_2695x3594.jpg';
import Ropes_3_4_2744x3659 from '../../img/DRS_store/good/Ropes_3-4_2744x3659.jpg';

// 1:1
import BDPacks_1_1_2850x2850 from '../../img/DRS_store/good/BDPacks_1-1_2850x2850.jpg';
import BigBros2_1_1_2765x2765 from '../../img/DRS_store/good/BigBros2_1-1_2765x2765.jpg';
import BoulderingIsDumb_1_1_2764x2764 from '../../img/DRS_store/good/BoulderingIsDumb_1-1_2764x2764.jpg';
import Brushes_1_1_2977x2977 from '../../img/DRS_store/good/Brushes_1-1_2977x2977.jpg';
import Cords_1_1_2605x2605 from '../../img/DRS_store/good/Cords_1-1_2605x2605.jpg';
import DRSVintage_1_1_2798x2798 from '../../img/DRS_store/good/DRSVintage_1-1_2798x2798.jpg';
import DRSVintage2_1_1_2571x2571 from '../../img/DRS_store/good/DRSVintage2_1-1_2571x2571.jpg';
import Endo_1_1_2170x2170 from '../../img/DRS_store/good/Endo_1-1_2170x2170.jpg';
import HandledAscenders_1_1_2549x2549 from '../../img/DRS_store/good/HandledAscenders_1-1_2549x2549.jpg';
import Houdini_1_1_3024x3024 from '../../img/DRS_store/good/Houdini_1-1_3024x3024.jpg';
import MicroTraxion_1_1_2153x2153 from '../../img/DRS_store/good/MicroTraxion_1-1_2153x2153.jpg';
import MSRFuel_1_1_3024x3024 from '../../img/DRS_store/good/MSRFuel_1-1_3024x3024.jpg';
import Nimbus_1_1_2748x2748 from '../../img/DRS_store/good/Nimbus_1-1_2748x2748.jpg';
import Patagonia_1_1_3024x3024 from '../../img/DRS_store/good/Patagonia_1-1_3024x3024.jpg';
import Pivot_1_1_2502x2502 from '../../img/DRS_store/good/Pivot_1-1_2502x2502.jpg';
import Reverso_1_1_2463x2463 from '../../img/DRS_store/good/Reverso_1-1_2463x2463.jpg';
import Shoes_1_1_3024x3024 from '../../img/DRS_store/good/Shoes_1-1_3024x3024.jpg';
import Spoc_1_1_2833x2833 from '../../img/DRS_store/good/Spoc_1-1_2833x2833.jpg';
import WLB_1_1_1930x1930 from '../../img/DRS_store/good/WLB_1-1_1930x1930.jpg';
import Yeti_1_1_3024x3024 from '../../img/DRS_store/good/Yeti_1-1_3024x3024.jpg';


// 9:16
import Aid_9_16_1934x3438 from '../../img/DRS_store/good/Aid_9-16_1934x3438.jpg';
import BulletproofHMS_9_16_2029x3607 from '../../img/DRS_store/good/BulletproofHMS_9-16_2029x3607.jpg';
import BulletproofScrew_9_16_1618x2877 from '../../img/DRS_store/good/BulletproofScrew_9-16_1618x2877.jpg';
import DualConnectVario_9_16_2045x3636 from '../../img/DRS_store/good/DualConnectVario_9-16_2045x3636.jpg';
import Gridlock_9_16_2268x4032 from '../../img/DRS_store/good/Gridlock_9-16_2268x4032.jpg';
import Nuts_9_16_1918x3409 from '../../img/DRS_store/good/Nuts_9-16_1918x3409.jpg';
import Puffy_9_16_2268x4032 from '../../img/DRS_store/good/Puffy_9-16_2268x4032.jpg';
import Top100_9_16_1883x3347 from '../../img/DRS_store/good/Top100_9-16_1883x3347.jpg';

// 16:9
import BigCams_16_9_3724x2095 from '../../img/DRS_store/good/BigCams_16-9_3724x2095.jpg';
import Bowls_16_9_3892x2189 from '../../img/DRS_store/good/Bowls_16-9_3892x2189.jpg';
import C4cams_16_9_3896x2192 from '../../img/DRS_store/good/C4cams_16-9_3896x2192.jpg';
import C4GreenPurple_16_9_4032x2268 from '../../img/DRS_store/good/C4GreenPurple_16-9_4032x2268.jpg';
import Cords2_16_9_3285x1848 from '../../img/DRS_store/good/Cords2_16-9_3285x1848.jpg';
import CrackGloves_16_9_3677x2069 from '../../img/DRS_store/good/CrackGloves_16-9_3677x2069.jpg';
import Dragonflys_16_9_4032x2268 from '../../img/DRS_store/good/Dragonflys_16-9_4032x2268.jpg';
import Dromedary_16_9_3806x2141 from '../../img/DRS_store/good/Dromedary_16-9_3806x2141.jpg';
import GriGri_16_9_4032x2268 from '../../img/DRS_store/good/GriGri_16-9_4032x2268.jpg';
import Harnesses_16_9_4032x2268 from '../../img/DRS_store/good/Harnesses_16-9_4032x2268.jpg';
import Pants_16_9_3518x1980 from '../../img/DRS_store/good/Pants_16-9_3518x1980.jpg';
import Skyhook_16_9_3356x1888 from '../../img/DRS_store/good/Skyhook_16-9_3356x1888.jpg';
import Slings2_16_9_3179x1788 from '../../img/DRS_store/good/Slings2_16-9_3179x1788.jpg';
import SmallLockers_16_9_3161x1778 from '../../img/DRS_store/good/SmallLockers_16-9_3161x1778.jpg';


// 3:2
import CanyoneeringBags_3_2_4032x2688 from '../../img/DRS_store/good/CanyoneeringBags_3-2_4032x2688.jpg';
import Draws_3_2_3108x2072 from '../../img/DRS_store/good/Draws_3-2_3108x2072.jpg';
import Filters_3_2_3802x2535 from '../../img/DRS_store/good/Filters_3-2_3802x2535.jpg';
import FrictionLabs_3_2_3548x2365 from '../../img/DRS_store/good/FrictionLabs_3-2_3548x2365.jpg';
import Miniwire_3_2_3000x2000 from '../../img/DRS_store/good/Miniwire_3-2_3000x2000.jpg';
import Slings_3_2_4032x2688 from '../../img/DRS_store/good/Slings_3-2_4032x2688.jpg';
import SmD_3_2_3225x2150 from '../../img/DRS_store/good/SmD_3-2_3225x2150.jpg';
import VaporVCS_3_2_3157x2105 from '../../img/DRS_store/good/VaporVCS_3-2_3157x2105.jpg';


// 2:3


// 5:3
import Approach2_5_3_4032x2419 from '../../img/DRS_store/good/Approach2_5-3_4032x2419.jpg';
import Draws2_5_3_3600x2159 from '../../img/DRS_store/good/Draws2_5-3_3600x2159.jpg';
import Harnesses2_5_3_4032x2419 from '../../img/DRS_store/good/Harnesses2_5-3_4032x2419.jpg';
import HMS_5_3_3671x2202 from '../../img/DRS_store/good/HMS_5-3_3671x2202.jpg';
import Katanas_5_3_3685x2211 from '../../img/DRS_store/good/Katanas_5-3_3685x2211.jpg';
import Rhino_5_3_3580x2148 from '../../img/DRS_store/good/Rhino_5-3_3580x2148.jpg';
import Solution_5_3_3480x2087 from '../../img/DRS_store/good/Solution_5-3_3480x2087.jpg';
import SolutionComp_5_3_3565x2139 from '../../img/DRS_store/good/SolutionComp_5-3_3565x2139.jpg';
import TenayaRa_5_3_3497x2098 from '../../img/DRS_store/good/TenayaRa_5-3_3497x2098.jpg';
import Yeti2_5_3_4032x2419 from '../../img/DRS_store/good/Yeti2_5-3_4032x2419.jpg';

// 3:5





export const photos = [
    {
        src: Draws_3_2_3108x2072,
        alt: "",
        width: 3108,
        height: 2072,
        title: ""
    },
    {
        src: BigCams_16_9_3724x2095,
        alt: "",
        width: 3724,
        height: 2095,
        title: ""
    },
    {
        src: Nuts_9_16_1918x3409,
        alt: "",
        width: 1918,
        height: 3409,
        title: ""
    },
    {
        src: Slings_3_2_4032x2688,
        alt: "",
        width: 4032,
        height: 2688,
        title: ""
    },
    {
        src: Shoes_1_1_3024x3024,
        alt: "",
        width: 3024,
        height: 3024,
        title: ""
    },
    {
        src: Pads_4_3_3641x2731,
        alt: "",
        width: 3641,
        height: 2731,
        title: ""
    },
    {
        src: C4cams_16_9_3896x2192,
        alt: "",
        width: 3896,
        height: 2192,
        title: ""
    },
    {
        src: DRSVintage2_1_1_2571x2571,
        alt: "",
        width: 2571,
        height: 2571,
        title: ""
    },
    {
        src: Ropes_3_4_2744x3659,
        alt: "",
        width: 2744,
        height: 3659,
        title: ""
    },
    {
        src: FrictionLabs_3_2_3548x2365,
        alt: "",
        width: 3548,
        height: 2365,
        title: ""
    },
    {
        src: CrackGloves_16_9_3677x2069,
        alt: "",
        width: 3677,
        height: 2069,
        title: ""
    },
    {
        src: Aid_9_16_1934x3438,
        alt: "",
        width: 1934,
        height: 3438,
        title: ""
    },
    {
        src: G7_3_4_2552x3403,
        alt: "",
        width: 2552,
        height: 3403,
        title: ""
    },
    {
        src: GriGri_16_9_4032x2268,
        alt: "",
        width: 4032,
        height: 2268,
        title: ""
    },
    {
        src: Harnesses_16_9_4032x2268,
        alt: "",
        width: 4032,
        height: 2268,
        title: ""
    },
    {
        src: BrassSwage_4_3_3024x2268,
        alt: "",
        width: 3024,
        height: 2268,
        title: ""
    },
    {
        src: Dyon_4_3_3280x2460,
        alt: "",
        width: 3280,
        height: 2460,
        title: ""
    },
    {
        src: Draws2_5_3_3600x2159,
        alt: "",
        width: 3600,
        height: 2159,
        title: ""
    },
    {
        src: Rhino_5_3_3580x2148,
        alt: "",
        width: 3580,
        height: 2148,
        title: ""
    },
    {
        src: BDPacks_1_1_2850x2850,
        alt: "",
        width: 2850,
        height: 2850,
        title: ""
    },
    {
        src: Headlamp_4_3_2881x2161,
        alt: "",
        width: 2881,
        height: 2161,
        title: ""
    },
    {
        src: BoulderingIsDumb_1_1_2764x2764,
        alt: "",
        width: 2764,
        height: 2764,
        title: ""
    },
    {
        src: Isobutane_4_3_4032x2419,
        alt: "",
        width: 4032,
        height: 2419,
        title: ""
    },
    {
        src: Filters_3_2_3802x2535,
        alt: "",
        width: 3802,
        height: 2535,
        title: ""
    },
    {
        src: Platy_4_3_3667x2750,
        alt: "",
        width: 3667,
        height: 2750,
        title: ""
    },
    {
        src: SmD_3_2_3225x2150,
        alt: "",
        width: 3225,
        height: 2150,
        title: ""
    },
    {
        src: Endo_1_1_2170x2170,
        alt: "",
        width: 2170,
        height: 2170,
        title: ""
    },
    {
        src: BDPacks2_4_3_3790x2842,
        alt: "",
        width: 3790,
        height: 2842,
        title: ""
    },
    {
        src: Pads2_4_3_3279x2459,
        alt: "",
        width: 3279,
        height: 2459,
        title: ""
    },
    {
        src: Sheep_4_3_3251x2438,
        alt: "",
        width: 3251,
        height: 2438,
        title: ""
    },
    {
        src: Yeti2_5_3_4032x2419,
        alt: "",
        width: 4032,
        height: 2419,
        title: ""
    },
    {
        src: MSRFuel_1_1_3024x3024,
        alt: "",
        width: 3024,
        height: 3024,
        title: ""
    },
    {
        src: DualConnectVario_9_16_2045x3636,
        alt: "",
        width: 2045,
        height: 3636,
        title: ""
    },
    {
        src: Katanas_5_3_3685x2211,
        alt: "",
        width: 3685,
        height: 2211,
        title: ""
    },
    {
        src: CanyoneeringBags_3_2_4032x2688,
        alt: "",
        width: 4032,
        height: 2688,
        title: ""
    },
    {
        src: Cords_1_1_2605x2605,
        alt: "",
        width: 2605,
        height: 2605,
        title: ""
    },
    {
        src: Cords2_16_9_3285x1848,
        alt: "",
        width: 3285,
        height: 1848,
        title: ""
    },
    {
        src: HandledAscenders_1_1_2549x2549,
        alt: "",
        width: 2549,
        height: 2549,
        title: ""
    },
    {
        src: Approach_3_4_2905x3874,
        alt: "",
        width: 2905,
        height: 3874,
        title: ""
    },
    {
        src: HMS_5_3_3671x2202,
        alt: "",
        width: 3671,
        height: 2202,
        title: ""
    },
    {
        src: VaporVCS_3_2_3157x2105,
        alt: "",
        width: 3157,
        height: 2105,
        title: ""
    },
    {
        src: Harnesses2_5_3_4032x2419,
        alt: "",
        width: 4032,
        height: 2419,
        title: ""
    },
    {
        src: C4Red_4_3_2556x1917,
        alt: "",
        width: 2556,
        height: 1917,
        title: ""
    },
    {
        src: Skyhook_16_9_3356x1888,
        alt: "",
        width: 3356,
        height: 1888,
        title: ""
    },
    {
        src: Pants_16_9_3518x1980,
        alt: "",
        width: 3518,
        height: 1980,
        title: ""
    },
    {
        src: Slings2_16_9_3179x1788,
        alt: "",
        width: 3179,
        height: 1788,
        title: ""
    },
    {
        src: Brass_4_3_3024x2268,
        alt: "",
        width: 3024,
        height: 2268,
        title: ""
    },
    {
        src: Bug_4_3_3777x2833,
        alt: "",
        width: 3777,
        height: 2833,
        title: ""
    },
    {
        src: MicroTraxion_1_1_2153x2153,
        alt: "",
        width: 2153,
        height: 2153,
        title: ""
    },
    {
        src: Nimbus_1_1_2748x2748,
        alt: "",
        width: 2748,
        height: 2748,
        title: ""
    },
    {
        src: Reverso_1_1_2463x2463,
        alt: "",
        width: 2463,
        height: 2463,
        title: ""
    },
    {
        src: Miniwire_3_2_3000x2000,
        alt: "",
        width: 3000,
        height: 2000,
        title: ""
    },
    {
        src: Solution_5_3_3480x2087,
        alt: "",
        width: 3480,
        height: 2087,
        title: ""
    },
    {
        src: SolutionComp_5_3_3565x2139,
        alt: "",
        width: 3565,
        height: 2139,
        title: ""
    },
    {
        src: Dragonflys_16_9_4032x2268,
        alt: "",
        width: 4032,
        height: 2268,
        title: ""
    },
    {
        src: Spoc_1_1_2833x2833,
        alt: "",
        width: 2833,
        height: 2833,
        title: ""
    },
    {
        src: Pivot_1_1_2502x2502,
        alt: "",
        width: 2502,
        height: 2502,
        title: ""
    },
    {
        src: BigBros_4_3_4032x3024,
        alt: "",
        width: 4032,
        height: 3024,
        title: ""
    },
    {
        src: TenayaRa_5_3_3497x2098,
        alt: "",
        width: 3497,
        height: 2098,
        title: ""
    },
    {
        src: C4GreenPurple_16_9_4032x2268,
        alt: "",
        width: 4032,
        height: 2268,
        title: ""
    },
    {
        src: Brushes_1_1_2977x2977,
        alt: "",
        width: 2977,
        height: 2977,
        title: ""
    },
    {
        src: Gridlock_9_16_2268x4032,
        alt: "",
        width: 2268,
        height: 4032,
        title: ""
    },
    {
        src: BigBros2_1_1_2765x2765,
        alt: "",
        width: 2765,
        height: 2765,
        title: ""
    },
    {
        src: TotemBlue_4_3_2441x1831,
        alt: "",
        width: 2441,
        height: 1831,
        title: ""
    },
    {
        src: BulletproofHMS_9_16_2029x3607,
        alt: "",
        width: 2029,
        height: 3607,
        title: ""
    },
    {
        src: BulletproofScrew_9_16_1618x2877,
        alt: "",
        width: 1618,
        height: 2877,
        title: ""
    },
    {
        src: Approach2_5_3_4032x2419,
        alt: "",
        width: 4032,
        height: 2419,
        title: ""
    },
    {
        src: SmallLockers_16_9_3161x1778,
        alt: "",
        width: 3161,
        height: 1778,
        title: ""
    },
    {
        src: Postcards_3_4_2695x3594,
        alt: "",
        width: 2695,
        height: 3594,
        title: ""
    },
    {
        src: Barnacle_4_3_3024x2268,
        alt: "",
        width: 3024,
        height: 2268,
        title: ""
    },
    {
        src: Houdini_1_1_3024x3024,
        alt: "",
        width: 3024,
        height: 3024,
        title: ""
    },
    {
        src: Puffy_9_16_2268x4032,
        alt: "",
        width: 2268,
        height: 4032,
        title: ""
    },
    {
        src: Yeti_1_1_3024x3024,
        alt: "",
        width: 3024,
        height: 3024,
        title: ""
    },
    {
        src: Dromedary_16_9_3806x2141,
        alt: "",
        width: 3806,
        height: 2141,
        title: ""
    },
    {
        src: Patagonia_1_1_3024x3024,
        alt: "",
        width: 3024,
        height: 3024,
        title: ""
    },
    {
        src: Top100_9_16_1883x3347,
        alt: "",
        width: 1883,
        height: 3347,
        title: ""
    },
    {
        src: WLB_1_1_1930x1930,
        alt: "",
        width: 1930,
        height: 1930,
        title: ""
    },
    {
        src: Bowls_16_9_3892x2189,
        alt: "",
        width: 3892,
        height: 2189,
        title: ""
    },
    {
        src: DRSVintage_1_1_2798x2798,
        alt: "",
        width: 2798,
        height: 2798,
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
