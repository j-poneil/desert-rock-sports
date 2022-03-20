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

//! too_large, cropped and polished to look good, large dimensions AFTER batchcompress.com (75% file size reduction, in total!)
// 4:3
// import Barnacle_4_3_3024x2268 from '../../img/DRS_store/too_large/Barnacle_4_3_3024x2268.jpg';
// import BDPacks2_4_3_3790x2842 from '../../img/DRS_store/too_large/BDPacks2_4_3_3790x2842.jpg';
// import BigBros_4_3_4032x3024 from '../../img/DRS_store/too_large/BigBros_4_3_4032x3024.jpg';
// import Brass_4_3_3024x2268 from '../../img/DRS_store/too_large/Brass_4_3_3024x2268.jpg';
// import BrassSwage_4_3_3024x2268 from '../../img/DRS_store/too_large/BrassSwage_4_3_3024x2268.jpg';
// import Bug_4_3_3777x2833 from '../../img/DRS_store/too_large/Bug_4_3_3777x2833.jpg';
// import C4Red_4_3_2556x1917 from '../../img/DRS_store/too_large/C4Red_4_3_2556x1917.jpg';
// import Dyon_4_3_3280x2460 from '../../img/DRS_store/too_large/Dyon_4_3_3280x2460.jpg';
// import Headlamp_4_3_2881x2161 from '../../img/DRS_store/too_large/Headlamp_4_3_2881x2161.jpg';
// import Isobutane_4_3_4032x2419 from '../../img/DRS_store/too_large/Isobutane_4_3_4032x2419.jpg';
// import Pads_4_3_3641x2731 from '../../img/DRS_store/too_large/Pads_4_3_3641x2731.jpg';
// import Pads2_4_3_3279x2459 from '../../img/DRS_store/too_large/Pads2_4_3_3279x2459.jpg';
// import Platy_4_3_3667x2750 from '../../img/DRS_store/too_large/Platy_4_3_3667x2750.jpg';
// import Sheep_4_3_3251x2438 from '../../img/DRS_store/too_large/Sheep_4_3_3251x2438.jpg';
// import TotemBlue_4_3_2441x1831 from '../../img/DRS_store/too_large/TotemBlue_4_3_2441x1831.jpg';
// 3:4
// import Approach_3_4_2905x3874 from '../../img/DRS_store/too_large/Approach_3_4_2905x3874.jpg';
// import G7_3_4_2552x3403 from '../../img/DRS_store/too_large/G7_3_4_2552x3403.jpg';
// import Postcards_3_4_2695x3594 from '../../img/DRS_store/too_large/Postcards_3_4_2695x3594.jpg';
// import Ropes_3_4_2744x3659 from '../../img/DRS_store/too_large/Ropes_3_4_2744x3659.jpg';
// 1:1
// import BDPacks_1_1_2850x2850 from '../../img/DRS_store/too_large/BDPacks_1_1_2850x2850.jpg';
// import BigBros2_1_1_2765x2765 from '../../img/DRS_store/too_large/BigBros2_1_1_2765x2765.jpg';
// import BoulderingIsDumb_1_1_2764x2764 from '../../img/DRS_store/too_large/BoulderingIsDumb_1_1_2764x2764.jpg';
// import Brushes_1_1_2977x2977 from '../../img/DRS_store/too_large/Brushes_1_1_2977x2977.jpg';
// import Cords_1_1_2605x2605 from '../../img/DRS_store/too_large/Cords_1_1_2605x2605.jpg';
// import DRSVintage_1_1_2798x2798 from '../../img/DRS_store/too_large/DRSVintage_1_1_2798x2798.jpg';
// import DRSVintage2_1_1_2571x2571 from '../../img/DRS_store/too_large/DRSVintage2_1_1_2571x2571.jpg';
// import Endo_1_1_2170x2170 from '../../img/DRS_store/too_large/Endo_1_1_2170x2170.jpg';
// import HandledAscenders_1_1_2549x2549 from '../../img/DRS_store/too_large/HandledAscenders_1_1_2549x2549.jpg';
// import Houdini_1_1_3024x3024 from '../../img/DRS_store/too_large/Houdini_1_1_3024x3024.jpg';
// import MicroTraxion_1_1_2153x2153 from '../../img/DRS_store/too_large/MicroTraxion_1_1_2153x2153.jpg';
// import MSRFuel_1_1_3024x3024 from '../../img/DRS_store/too_large/MSRFuel_1_1_3024x3024.jpg';
// import Nimbus_1_1_2748x2748 from '../../img/DRS_store/too_large/Nimbus_1_1_2748x2748.jpg';
// import Patagonia_1_1_3024x3024 from '../../img/DRS_store/too_large/Patagonia_1_1_3024x3024.jpg';
// import Pivot_1_1_2502x2502 from '../../img/DRS_store/too_large/Pivot_1_1_2502x2502.jpg';
// import Reverso_1_1_2463x2463 from '../../img/DRS_store/too_large/Reverso_1_1_2463x2463.jpg';
// import Shoes_1_1_3024x3024 from '../../img/DRS_store/too_large/Shoes_1_1_3024x3024.jpg';
// import Spoc_1_1_2833x2833 from '../../img/DRS_store/too_large/Spoc_1_1_2833x2833.jpg';
// import WLB_1_1_1930x1930 from '../../img/DRS_store/too_large/WLB_1_1_1930x1930.jpg';
// import Yeti_1_1_3024x3024 from '../../img/DRS_store/too_large/Yeti_1_1_3024x3024.jpg';
// 9:16
// import Aid_9_16_1934x3438 from '../../img/DRS_store/too_large/Aid_9_16_1934x3438.jpg';
// import BulletproofHMS_9_16_2029x3607 from '../../img/DRS_store/too_large/BulletproofHMS_9_16_2029x3607.jpg';
// import BulletproofScrew_9_16_1618x2877 from '../../img/DRS_store/too_large/BulletproofScrew_9_16_1618x2877.jpg';
// import DualConnectVario_9_16_2045x3636 from '../../img/DRS_store/too_large/DualConnectVario_9_16_2045x3636.jpg';
// import Gridlock_9_16_2268x4032 from '../../img/DRS_store/too_large/Gridlock_9_16_2268x4032.jpg';
// import Nuts_9_16_1918x3409 from '../../img/DRS_store/too_large/Nuts_9_16_1918x3409.jpg';
// import Puffy_9_16_2268x4032 from '../../img/DRS_store/too_large/Puffy_9_16_2268x4032.jpg';
// import Top100_9_16_1883x3347 from '../../img/DRS_store/too_large/Top100_9_16_1883x3347.jpg';
// 16:9
// import BigCams_16_9_3724x2095 from '../../img/DRS_store/too_large/BigCams_16_9_3724x2095.jpg';
// import Bowls_16_9_3892x2189 from '../../img/DRS_store/too_large/Bowls_16_9_3892x2189.jpg';
// import C4cams_16_9_3896x2192 from '../../img/DRS_store/too_large/C4cams_16_9_3896x2192.jpg';
// import C4GreenPurple_16_9_4032x2268 from '../../img/DRS_store/too_large/C4GreenPurple_16_9_4032x2268.jpg';
// import Cords2_16_9_3285x1848 from '../../img/DRS_store/too_large/Cords2_16_9_3285x1848.jpg';
// import CrackGloves_16_9_3677x2069 from '../../img/DRS_store/too_large/CrackGloves_16_9_3677x2069.jpg';
// import Dragonflys_16_9_4032x2268 from '../../img/DRS_store/too_large/Dragonflys_16_9_4032x2268.jpg';
// import Dromedary_16_9_3806x2141 from '../../img/DRS_store/too_large/Dromedary_16_9_3806x2141.jpg';
// import GriGri_16_9_4032x2268 from '../../img/DRS_store/too_large/GriGri_16_9_4032x2268.jpg';
// import Harnesses_16_9_4032x2268 from '../../img/DRS_store/too_large/Harnesses_16_9_4032x2268.jpg';
// import Pants_16_9_3518x1980 from '../../img/DRS_store/too_large/Pants_16_9_3518x1980.jpg';
// import Skyhook_16_9_3356x1888 from '../../img/DRS_store/too_large/Skyhook_16_9_3356x1888.jpg';
// import Slings2_16_9_3179x1788 from '../../img/DRS_store/too_large/Slings2_16_9_3179x1788.jpg';
// import SmallLockers_16_9_3161x1778 from '../../img/DRS_store/too_large/SmallLockers_16_9_3161x1778.jpg';
// 3:2
// import CanyoneeringBags_3_2_4032x2688 from '../../img/DRS_store/too_large/CanyoneeringBags_3_2_4032x2688.jpg';
// import Draws_3_2_3108x2072 from '../../img/DRS_store/too_large/Draws_3_2_3108x2072.jpg';
// import Filters_3_2_3802x2535 from '../../img/DRS_store/too_large/Filters_3_2_3802x2535.jpg';
// import FrictionLabs_3_2_3548x2365 from '../../img/DRS_store/too_large/FrictionLabs_3_2_3548x2365.jpg';
// import Miniwire_3_2_3000x2000 from '../../img/DRS_store/too_large/Miniwire_3_2_3000x2000.jpg';
// import Slings_3_2_4032x2688 from '../../img/DRS_store/too_large/Slings_3_2_4032x2688.jpg';
// import SmD_3_2_3225x2150 from '../../img/DRS_store/too_large/SmD_3_2_3225x2150.jpg';
// import VaporVCS_3_2_3157x2105 from '../../img/DRS_store/too_large/VaporVCS_3_2_3157x2105.jpg';
// 2:3
// 5:3
// import Approach2_5_3_4032x2419 from '../../img/DRS_store/too_large/Approach2_5_3_4032x2419.jpg';
// import Draws2_5_3_3600x2159 from '../../img/DRS_store/too_large/Draws2_5_3_3600x2159.jpg';
// import Harnesses2_5_3_4032x2419 from '../../img/DRS_store/too_large/Harnesses2_5_3_4032x2419.jpg';
// import HMS_5_3_3671x2202 from '../../img/DRS_store/too_large/HMS_5_3_3671x2202.jpg';
// import Katanas_5_3_3685x2211 from '../../img/DRS_store/too_large/Katanas_5_3_3685x2211.jpg';
// import Rhino_5_3_3580x2148 from '../../img/DRS_store/too_large/Rhino_5_3_3580x2148.jpg';
// import Solution_5_3_3480x2087 from '../../img/DRS_store/too_large/Solution_5_3_3480x2087.jpg';
// import SolutionComp_5_3_3565x2139 from '../../img/DRS_store/too_large/SolutionComp_5_3_3565x2139.jpg';
// import TenayaRa_5_3_3497x2098 from '../../img/DRS_store/too_large/TenayaRa_5_3_3497x2098.jpg';
// import Yeti2_5_3_4032x2419 from '../../img/DRS_store/too_large/Yeti2_5_3_4032x2419.jpg';
// 3:5







//! large = fits in 1920x1080
// 4:3
import Barnacle_4_3_1440x1080 from '../../img/DRS_store/large/Barnacle_4_3_1440x1080.jpg';
import BDPacks2_4_3_1440x1080 from '../../img/DRS_store/large/BDPacks2_4_3_1440x1080.jpg';
import BigBros_4_3_1440x1080 from '../../img/DRS_store/large/BigBros_4_3_1440x1080.jpg';
import Brass_4_3_1440x1080 from '../../img/DRS_store/large/Brass_4_3_1440x1080.jpg';
import BrassSwage_4_3_1440x1080 from '../../img/DRS_store/large/BrassSwage_4_3_1440x1080.jpg';
import Bug_4_3_1440x1080 from '../../img/DRS_store/large/Bug_4_3_1440x1080.jpg';
import C4Red_4_3_1440x1080 from '../../img/DRS_store/large/C4Red_4_3_1440x1080.jpg';
import Dyon_4_3_1440x1080 from '../../img/DRS_store/large/Dyon_4_3_1440x1080.jpg';
import Headlamp_4_3_1440x1080 from '../../img/DRS_store/large/Headlamp_4_3_1440x1080.jpg';
import Isobutane_4_3_1800x1080 from '../../img/DRS_store/large/Isobutane_4_3_1800x1080.jpg';
import Pads_4_3_1440x1080 from '../../img/DRS_store/large/Pads_4_3_1440x1080.jpg';
import Pads2_4_3_1440x1080 from '../../img/DRS_store/large/Pads2_4_3_1440x1080.jpg';
import Platy_4_3_1440x1080 from '../../img/DRS_store/large/Platy_4_3_1440x1080.jpg';
import Sheep_4_3_1440x1080 from '../../img/DRS_store/large/Sheep_4_3_1440x1080.jpg';
import TotemBlue_4_3_1440x1080 from '../../img/DRS_store/large/TotemBlue_4_3_1440x1080.jpg';
// 3:4
import Approach_3_4_1080x1440 from '../../img/DRS_store/large/Approach_3_4_1080x1440.jpg';
import G7_3_4_1080x1440 from '../../img/DRS_store/large/G7_3_4_1080x1440.jpg';
import Postcards_3_4_1080x1440 from '../../img/DRS_store/large/Postcards_3_4_1080x1440.jpg';
import Ropes_3_4_1080x1440 from '../../img/DRS_store/large/Ropes_3_4_1080x1440.jpg';
// 1:1
import BDPacks_1_1_1080x1080 from '../../img/DRS_store/large/BDPacks_1_1_1080x1080.jpg';
import BigBros2_1_1_1080x1080 from '../../img/DRS_store/large/BigBros2_1_1_1080x1080.jpg';
import BoulderingIsDumb_1_1_1080x1080 from '../../img/DRS_store/large/BoulderingIsDumb_1_1_1080x1080.jpg';
import Brushes_1_1_1080x1080 from '../../img/DRS_store/large/Brushes_1_1_1080x1080.jpg';
import Cords_1_1_1080x1080 from '../../img/DRS_store/large/Cords_1_1_1080x1080.jpg';
import DRSVintage_1_1_1080x1080 from '../../img/DRS_store/large/DRSVintage_1_1_1080x1080.jpg';
import DRSVintage2_1_1_1080x1080 from '../../img/DRS_store/large/DRSVintage2_1_1_1080x1080.jpg';
import Endo_1_1_1080x1080 from '../../img/DRS_store/large/Endo_1_1_1080x1080.jpg';
import HandledAscenders_1_1_1080x1080 from '../../img/DRS_store/large/HandledAscenders_1_1_1080x1080.jpg';
import Houdini_1_1_1080x1080 from '../../img/DRS_store/large/Houdini_1_1_1080x1080.jpg';
import MicroTraxion_1_1_1080x1080 from '../../img/DRS_store/large/MicroTraxion_1_1_1080x1080.jpg';
import MSRFuel_1_1_1080x1080 from '../../img/DRS_store/large/MSRFuel_1_1_1080x1080.jpg';
import Nimbus_1_1_1080x1080 from '../../img/DRS_store/large/Nimbus_1_1_1080x1080.jpg';
import Patagonia_1_1_1080x1080 from '../../img/DRS_store/large/Patagonia_1_1_1080x1080.jpg';
import Pivot_1_1_1080x1080 from '../../img/DRS_store/large/Pivot_1_1_1080x1080.jpg';
import Reverso_1_1_1080x1080 from '../../img/DRS_store/large/Reverso_1_1_1080x1080.jpg';
import Shoes_1_1_1080x1080 from '../../img/DRS_store/large/Shoes_1_1_1080x1080.jpg';
import Spoc_1_1_1080x1080 from '../../img/DRS_store/large/Spoc_1_1_1080x1080.jpg';
import WLB_1_1_1080x1080 from '../../img/DRS_store/large/WLB_1_1_1080x1080.jpg';
import Yeti_1_1_1080x1080 from '../../img/DRS_store/large/Yeti_1_1_1080x1080.jpg';
// 9:16
import Aid_9_16_1080x1920 from '../../img/DRS_store/large/Aid_9_16_1080x1920.jpg';
import BulletproofHMS_9_16_1080x1920 from '../../img/DRS_store/large/BulletproofHMS_9_16_1080x1920.jpg';
import BulletproofScrew_9_16_1080x1920 from '../../img/DRS_store/large/BulletproofScrew_9_16_1080x1920.jpg';
import DualConnectVario_9_16_1080x1920 from '../../img/DRS_store/large/DualConnectVario_9_16_1080x1920.jpg';
import Gridlock_9_16_1080x1920 from '../../img/DRS_store/large/Gridlock_9_16_1080x1920.jpg';
import Nuts_9_16_1080x1920 from '../../img/DRS_store/large/Nuts_9_16_1080x1920.jpg';
import Puffy_9_16_1080x1920 from '../../img/DRS_store/large/Puffy_9_16_1080x1920.jpg';
import Top100_9_16_1080x1920 from '../../img/DRS_store/large/Top100_9_16_1080x1920.jpg';
// 16:9
import BigCams_16_9_1920x1080 from '../../img/DRS_store/large/BigCams_16_9_1920x1080.jpg';
import Bowls_16_9_1920x1080 from '../../img/DRS_store/large/Bowls_16_9_1920x1080.jpg';
import C4cams_16_9_1920x1080 from '../../img/DRS_store/large/C4cams_16_9_1920x1080.jpg';
import C4GreenPurple_16_9_1920x1080 from '../../img/DRS_store/large/C4GreenPurple_16_9_1920x1080.jpg';
import Cords2_16_9_1920x1080 from '../../img/DRS_store/large/Cords2_16_9_1920x1080.jpg';
import CrackGloves_16_9_1919x1080 from '../../img/DRS_store/large/CrackGloves_16_9_1919x1080.jpg';
import Dragonflys_16_9_1920x1080 from '../../img/DRS_store/large/Dragonflys_16_9_1920x1080.jpg';
import Dromedary_16_9_1920x1080 from '../../img/DRS_store/large/Dromedary_16_9_1920x1080.jpg';
import GriGri_16_9_1920x1080 from '../../img/DRS_store/large/GriGri_16_9_1920x1080.jpg';
import Harnesses_16_9_1920x1080 from '../../img/DRS_store/large/Harnesses_16_9_1920x1080.jpg';
import Pants_16_9_1919x1080 from '../../img/DRS_store/large/Pants_16_9_1919x1080.jpg';
import Skyhook_16_9_1920x1080 from '../../img/DRS_store/large/Skyhook_16_9_1920x1080.jpg';
import Slings2_16_9_1920x1080 from '../../img/DRS_store/large/Slings2_16_9_1920x1080.jpg';
import SmallLockers_16_9_1920x1080 from '../../img/DRS_store/large/SmallLockers_16_9_1920x1080.jpg';
// 3:2
import CanyoneeringBags_3_2_1620x1080 from '../../img/DRS_store/large/CanyoneeringBags_3_2_1620x1080.jpg';
import Draws_3_2_1620x1080 from '../../img/DRS_store/large/Draws_3_2_1620x1080.jpg';
import Filters_3_2_1620x1080 from '../../img/DRS_store/large/Filters_3_2_1620x1080.jpg';
import FrictionLabs_3_2_1620x1080 from '../../img/DRS_store/large/FrictionLabs_3_2_1620x1080.jpg';
import Miniwire_3_2_1620x1080 from '../../img/DRS_store/large/Miniwire_3_2_1620x1080.jpg';
import Slings_3_2_1620x1080 from '../../img/DRS_store/large/Slings_3_2_1620x1080.jpg';
import SmD_3_2_1620x1080 from '../../img/DRS_store/large/SmD_3_2_1620x1080.jpg';
import VaporVCS_3_2_1620x1080 from '../../img/DRS_store/large/VaporVCS_3_2_1620x1080.jpg';
// 2:3
// 5:3
import Approach2_5_3_1800x1080 from '../../img/DRS_store/large/Approach2_5_3_1800x1080.jpg';
import Draws2_5_3_1801x1080 from '../../img/DRS_store/large/Draws2_5_3_1801x1080.jpg';
import Harnesses2_5_3_1800x1080 from '../../img/DRS_store/large/Harnesses2_5_3_1800x1080.jpg';
import HMS_5_3_1800x1080 from '../../img/DRS_store/large/HMS_5_3_1800x1080.jpg';
import Katanas_5_3_1800x1080 from '../../img/DRS_store/large/Katanas_5_3_1800x1080.jpg';
import Rhino_5_3_1800x1080 from '../../img/DRS_store/large/Rhino_5_3_1800x1080.jpg';
import Solution_5_3_1801x1080 from '../../img/DRS_store/large/Solution_5_3_1801x1080.jpg';
import SolutionComp_5_3_1800x1080 from '../../img/DRS_store/large/SolutionComp_5_3_1800x1080.jpg';
import TenayaRa_5_3_1800x1080 from '../../img/DRS_store/large/TenayaRa_5_3_1800x1080.jpg';
import Yeti2_5_3_1800x1080 from '../../img/DRS_store/large/Yeti2_5_3_1800x1080.jpg';
// 3:5





//! medium = fits in 1366x768
// 4:3
import Barnacle_4_3_1024x768 from '../../img/DRS_store/medium/Barnacle_4_3_1024x768.jpg';
import BDPacks2_4_3_1024x768 from '../../img/DRS_store/medium/BDPacks2_4_3_1024x768.jpg';
import BigBros_4_3_1024x768 from '../../img/DRS_store/medium/BigBros_4_3_1024x768.jpg';
import Brass_4_3_1024x768 from '../../img/DRS_store/medium/Brass_4_3_1024x768.jpg';
import BrassSwage_4_3_1024x768 from '../../img/DRS_store/medium/BrassSwage_4_3_1024x768.jpg';
import Bug_4_3_1024x768 from '../../img/DRS_store/medium/Bug_4_3_1024x768.jpg';
import C4Red_4_3_1024x768 from '../../img/DRS_store/medium/C4Red_4_3_1024x768.jpg';
import Dyon_4_3_1024x768 from '../../img/DRS_store/medium/Dyon_4_3_1024x768.jpg';
import Headlamp_4_3_1024x768 from '../../img/DRS_store/medium/Headlamp_4_3_1024x768.jpg';
import Isobutane_4_3_1280x768 from '../../img/DRS_store/medium/Isobutane_4_3_1280x768.jpg';
import Pads_4_3_1024x768 from '../../img/DRS_store/medium/Pads_4_3_1024x768.jpg';
import Pads2_4_3_1024x768 from '../../img/DRS_store/medium/Pads2_4_3_1024x768.jpg';
import Platy_4_3_1024x768 from '../../img/DRS_store/medium/Platy_4_3_1024x768.jpg';
import Sheep_4_3_1024x768 from '../../img/DRS_store/medium/Sheep_4_3_1024x768.jpg';
import TotemBlue_4_3_1024x768 from '../../img/DRS_store/medium/TotemBlue_4_3_1024x768.jpg';
// 3:4
import Approach_3_4_768x1024 from '../../img/DRS_store/medium/Approach_3_4_768x1024.jpg';
import G7_3_4_768x1024 from '../../img/DRS_store/medium/G7_3_4_768x1024.jpg';
import Postcards_3_4_768x1024 from '../../img/DRS_store/medium/Postcards_3_4_768x1024.jpg';
import Ropes_3_4_768x1024 from '../../img/DRS_store/medium/Ropes_3_4_768x1024.jpg';
// 1:1
import BDPacks_1_1_768x768 from '../../img/DRS_store/medium/BDPacks_1_1_768x768.jpg';
import BigBros2_1_1_768x768 from '../../img/DRS_store/medium/BigBros2_1_1_768x768.jpg';
import BoulderingIsDumb_1_1_768x768 from '../../img/DRS_store/medium/BoulderingIsDumb_1_1_768x768.jpg';
import Brushes_1_1_768x768 from '../../img/DRS_store/medium/Brushes_1_1_768x768.jpg';
import Cords_1_1_768x768 from '../../img/DRS_store/medium/Cords_1_1_768x768.jpg';
import DRSVintage_1_1_768x768 from '../../img/DRS_store/medium/DRSVintage_1_1_768x768.jpg';
import DRSVintage2_1_1_768x768 from '../../img/DRS_store/medium/DRSVintage2_1_1_768x768.jpg';
import Endo_1_1_768x768 from '../../img/DRS_store/medium/Endo_1_1_768x768.jpg';
import HandledAscenders_1_1_768x768 from '../../img/DRS_store/medium/HandledAscenders_1_1_768x768.jpg';
import Houdini_1_1_768x768 from '../../img/DRS_store/medium/Houdini_1_1_768x768.jpg';
import MicroTraxion_1_1_768x768 from '../../img/DRS_store/medium/MicroTraxion_1_1_768x768.jpg';
import MSRFuel_1_1_768x768 from '../../img/DRS_store/medium/MSRFuel_1_1_768x768.jpg';
import Nimbus_1_1_768x768 from '../../img/DRS_store/medium/Nimbus_1_1_768x768.jpg';
import Patagonia_1_1_768x768 from '../../img/DRS_store/medium/Patagonia_1_1_768x768.jpg';
import Pivot_1_1_768x768 from '../../img/DRS_store/medium/Pivot_1_1_768x768.jpg';
import Reverso_1_1_768x768 from '../../img/DRS_store/medium/Reverso_1_1_768x768.jpg';
import Shoes_1_1_768x768 from '../../img/DRS_store/medium/Shoes_1_1_768x768.jpg';
import Spoc_1_1_768x768 from '../../img/DRS_store/medium/Spoc_1_1_768x768.jpg';
import WLB_1_1_768x768 from '../../img/DRS_store/medium/WLB_1_1_768x768.jpg';
import Yeti_1_1_768x768 from '../../img/DRS_store/medium/Yeti_1_1_768x768.jpg';
// 9:16
import Aid_9_16_768x1365 from '../../img/DRS_store/medium/Aid_9_16_768x1365.jpg';
import BulletproofHMS_9_16_768x1365 from '../../img/DRS_store/medium/BulletproofHMS_9_16_768x1365.jpg';
import BulletproofScrew_9_16_768x1366 from '../../img/DRS_store/medium/BulletproofScrew_9_16_768x1366.jpg';
import DualConnectVario_9_16_768x1366 from '../../img/DRS_store/medium/DualConnectVario_9_16_768x1366.jpg';
import Gridlock_9_16_768x1365 from '../../img/DRS_store/medium/Gridlock_9_16_768x1365.jpg';
import Nuts_9_16_768x1365 from '../../img/DRS_store/medium/Nuts_9_16_768x1365.jpg';
import Puffy_9_16_768x1365 from '../../img/DRS_store/medium/Puffy_9_16_768x1365.jpg';
import Top100_9_16_768x1365 from '../../img/DRS_store/medium/Top100_9_16_768x1365.jpg';
// 16:9
import BigCams_16_9_1365x768 from '../../img/DRS_store/medium/BigCams_16_9_1365x768.jpg';
import Bowls_16_9_1365x768 from '../../img/DRS_store/medium/Bowls_16_9_1365x768.jpg';
import C4cams_16_9_1365x768 from '../../img/DRS_store/medium/C4cams_16_9_1365x768.jpg';
import C4GreenPurple_16_9_1365x768 from '../../img/DRS_store/medium/C4GreenPurple_16_9_1365x768.jpg';
import Cords2_16_9_1365x768 from '../../img/DRS_store/medium/Cords2_16_9_1365x768.jpg';
import CrackGloves_16_9_1365x768 from '../../img/DRS_store/medium/CrackGloves_16_9_1365x768.jpg';
import Dragonflys_16_9_1365x768 from '../../img/DRS_store/medium/Dragonflys_16_9_1365x768.jpg';
import Dromedary_16_9_1365x768 from '../../img/DRS_store/medium/Dromedary_16_9_1365x768.jpg';
import GriGri_16_9_1365x768 from '../../img/DRS_store/medium/GriGri_16_9_1365x768.jpg';
import Harnesses_16_9_1365x768 from '../../img/DRS_store/medium/Harnesses_16_9_1365x768.jpg';
import Pants_16_9_1365x768 from '../../img/DRS_store/medium/Pants_16_9_1365x768.jpg';
import Skyhook_16_9_1365x768 from '../../img/DRS_store/medium/Skyhook_16_9_1365x768.jpg';
import Slings2_16_9_1365x768 from '../../img/DRS_store/medium/Slings2_16_9_1365x768.jpg';
import SmallLockers_16_9_1365x768 from '../../img/DRS_store/medium/SmallLockers_16_9_1365x768.jpg';
// 3:2
import CanyoneeringBags_3_2_1152x768 from '../../img/DRS_store/medium/CanyoneeringBags_3_2_1152x768.jpg';
import Draws_3_2_1152x768 from '../../img/DRS_store/medium/Draws_3_2_1152x768.jpg';
import Filters_3_2_1152x768 from '../../img/DRS_store/medium/Filters_3_2_1152x768.jpg';
import FrictionLabs_3_2_1152x768 from '../../img/DRS_store/medium/FrictionLabs_3_2_1152x768.jpg';
import Miniwire_3_2_1152x768 from '../../img/DRS_store/medium/Miniwire_3_2_1152x768.jpg';
import Slings_3_2_1152x768 from '../../img/DRS_store/medium/Slings_3_2_1152x768.jpg';
import SmD_3_2_1152x768 from '../../img/DRS_store/medium/SmD_3_2_1152x768.jpg';
import VaporVCS_3_2_1152x768 from '../../img/DRS_store/medium/VaporVCS_3_2_1152x768.jpg';
// 2:3
// 5:3
import Approach2_5_3_1280x768 from '../../img/DRS_store/medium/Approach2_5_3_1280x768.jpg';
import Draws2_5_3_1281x768 from '../../img/DRS_store/medium/Draws2_5_3_1281x768.jpg';
import Harnesses2_5_3_1280x768 from '../../img/DRS_store/medium/Harnesses2_5_3_1280x768.jpg';
import HMS_5_3_1280x768 from '../../img/DRS_store/medium/HMS_5_3_1280x768.jpg';
import Katanas_5_3_1280x768 from '../../img/DRS_store/medium/Katanas_5_3_1280x768.jpg';
import Rhino_5_3_1280x768 from '../../img/DRS_store/medium/Rhino_5_3_1280x768.jpg';
import Solution_5_3_1281x768 from '../../img/DRS_store/medium/Solution_5_3_1281x768.jpg';
import SolutionComp_5_3_1280x768 from '../../img/DRS_store/medium/SolutionComp_5_3_1280x768.jpg';
import TenayaRa_5_3_1280x768 from '../../img/DRS_store/medium/TenayaRa_5_3_1280x768.jpg';
import Yeti2_5_3_1280x768 from '../../img/DRS_store/medium/Yeti2_5_3_1280x768.jpg';
// 3:5






//! small = fits in 854x480
// 4:3
import Barnacle_4_3_640x480 from '../../img/DRS_store/small/Barnacle_4_3_640x480.jpg';
import BDPacks2_4_3_640x480 from '../../img/DRS_store/small/BDPacks2_4_3_640x480.jpg';
import BigBros_4_3_640x480 from '../../img/DRS_store/small/BigBros_4_3_640x480.jpg';
import Brass_4_3_640x480 from '../../img/DRS_store/small/Brass_4_3_640x480.jpg';
import BrassSwage_4_3_640x480 from '../../img/DRS_store/small/BrassSwage_4_3_640x480.jpg';
import Bug_4_3_640x480 from '../../img/DRS_store/small/Bug_4_3_640x480.jpg';
import C4Red_4_3_640x480 from '../../img/DRS_store/small/C4Red_4_3_640x480.jpg';
import Dyon_4_3_640x480 from '../../img/DRS_store/small/Dyon_4_3_640x480.jpg';
import Headlamp_4_3_640x480 from '../../img/DRS_store/small/Headlamp_4_3_640x480.jpg';
import Isobutane_4_3_800x480 from '../../img/DRS_store/small/Isobutane_4_3_800x480.jpg';
import Pads_4_3_640x480 from '../../img/DRS_store/small/Pads_4_3_640x480.jpg';
import Pads2_4_3_640x480 from '../../img/DRS_store/small/Pads2_4_3_640x480.jpg';
import Platy_4_3_640x480 from '../../img/DRS_store/small/Platy_4_3_640x480.jpg';
import Sheep_4_3_640x480 from '../../img/DRS_store/small/Sheep_4_3_640x480.jpg';
import TotemBlue_4_3_640x480 from '../../img/DRS_store/small/TotemBlue_4_3_640x480.jpg';
// 3:4
import Approach_3_4_480x640 from '../../img/DRS_store/small/Approach_3_4_480x640.jpg';
import G7_3_4_480x640 from '../../img/DRS_store/small/G7_3_4_480x640.jpg';
import Postcards_3_4_480x640 from '../../img/DRS_store/small/Postcards_3_4_480x640.jpg';
import Ropes_3_4_480x640 from '../../img/DRS_store/small/Ropes_3_4_480x640.jpg';
// 1:1
import BDPacks_1_1_480x480 from '../../img/DRS_store/small/BDPacks_1_1_480x480.jpg';
import BigBros2_1_1_480x480 from '../../img/DRS_store/small/BigBros2_1_1_480x480.jpg';
import BoulderingIsDumb_1_1_480x480 from '../../img/DRS_store/small/BoulderingIsDumb_1_1_480x480.jpg';
import Brushes_1_1_480x480 from '../../img/DRS_store/small/Brushes_1_1_480x480.jpg';
import Cords_1_1_480x480 from '../../img/DRS_store/small/Cords_1_1_480x480.jpg';
import DRSVintage_1_1_480x480 from '../../img/DRS_store/small/DRSVintage_1_1_480x480.jpg';
import DRSVintage2_1_1_480x480 from '../../img/DRS_store/small/DRSVintage2_1_1_480x480.jpg';
import Endo_1_1_480x480 from '../../img/DRS_store/small/Endo_1_1_480x480.jpg';
import HandledAscenders_1_1_480x480 from '../../img/DRS_store/small/HandledAscenders_1_1_480x480.jpg';
import Houdini_1_1_480x480 from '../../img/DRS_store/small/Houdini_1_1_480x480.jpg';
import MicroTraxion_1_1_480x480 from '../../img/DRS_store/small/MicroTraxion_1_1_480x480.jpg';
import MSRFuel_1_1_480x480 from '../../img/DRS_store/small/MSRFuel_1_1_480x480.jpg';
import Nimbus_1_1_480x480 from '../../img/DRS_store/small/Nimbus_1_1_480x480.jpg';
import Patagonia_1_1_480x480 from '../../img/DRS_store/small/Patagonia_1_1_480x480.jpg';
import Pivot_1_1_480x480 from '../../img/DRS_store/small/Pivot_1_1_480x480.jpg';
import Reverso_1_1_480x480 from '../../img/DRS_store/small/Reverso_1_1_480x480.jpg';
import Shoes_1_1_480x480 from '../../img/DRS_store/small/Shoes_1_1_480x480.jpg';
import Spoc_1_1_480x480 from '../../img/DRS_store/small/Spoc_1_1_480x480.jpg';
import WLB_1_1_480x480 from '../../img/DRS_store/small/WLB_1_1_480x480.jpg';
import Yeti_1_1_480x480 from '../../img/DRS_store/small/Yeti_1_1_480x480.jpg';
// 9:16
import Aid_9_16_480x853 from '../../img/DRS_store/small/Aid_9_16_480x853.jpg';
import BulletproofHMS_9_16_480x853 from '../../img/DRS_store/small/BulletproofHMS_9_16_480x853.jpg';
import BulletproofScrew_9_16_480x853 from '../../img/DRS_store/small/BulletproofScrew_9_16_480x853.jpg';
import DualConnectVario_9_16_480x853 from '../../img/DRS_store/small/DualConnectVario_9_16_480x853.jpg';
import Gridlock_9_16_480x853 from '../../img/DRS_store/small/Gridlock_9_16_480x853.jpg';
import Nuts_9_16_480x853 from '../../img/DRS_store/small/Nuts_9_16_480x853.jpg';
import Puffy_9_16_480x853 from '../../img/DRS_store/small/Puffy_9_16_480x853.jpg';
import Top100_9_16_480x853 from '../../img/DRS_store/small/Top100_9_16_480x853.jpg';
// 16:9
import BigCams_16_9_853x480 from '../../img/DRS_store/small/BigCams_16_9_853x480.jpg';
import Bowls_16_9_853x480 from '../../img/DRS_store/small/Bowls_16_9_853x480.jpg';
import C4cams_16_9_853x480 from '../../img/DRS_store/small/C4cams_16_9_853x480.jpg';
import C4GreenPurple_16_9_853x480 from '../../img/DRS_store/small/C4GreenPurple_16_9_853x480.jpg';
import Cords2_16_9_853x480 from '../../img/DRS_store/small/Cords2_16_9_853x480.jpg';
import CrackGloves_16_9_853x480 from '../../img/DRS_store/small/CrackGloves_16_9_853x480.jpg';
import Dragonflys_16_9_853x480 from '../../img/DRS_store/small/Dragonflys_16_9_853x480.jpg';
import Dromedary_16_9_853x480 from '../../img/DRS_store/small/Dromedary_16_9_853x480.jpg';
import GriGri_16_9_853x480 from '../../img/DRS_store/small/GriGri_16_9_853x480.jpg';
import Harnesses_16_9_853x480 from '../../img/DRS_store/small/Harnesses_16_9_853x480.jpg';
import Pants_16_9_853x480 from '../../img/DRS_store/small/Pants_16_9_853x480.jpg';
import Skyhook_16_9_853x480 from '../../img/DRS_store/small/Skyhook_16_9_853x480.jpg';
import Slings2_16_9_853x480 from '../../img/DRS_store/small/Slings2_16_9_853x480.jpg';
import SmallLockers_16_9_853x480 from '../../img/DRS_store/small/SmallLockers_16_9_853x480.jpg';
// 3:2
import CanyoneeringBags_3_2_720x480 from '../../img/DRS_store/small/CanyoneeringBags_3_2_720x480.jpg';
import Draws_3_2_720x480 from '../../img/DRS_store/small/Draws_3_2_720x480.jpg';
import Filters_3_2_720x480 from '../../img/DRS_store/small/Filters_3_2_720x480.jpg';
import FrictionLabs_3_2_720x480 from '../../img/DRS_store/small/FrictionLabs_3_2_720x480.jpg';
import Miniwire_3_2_720x480 from '../../img/DRS_store/small/Miniwire_3_2_720x480.jpg';
import Slings_3_2_720x480 from '../../img/DRS_store/small/Slings_3_2_720x480.jpg';
import SmD_3_2_720x480 from '../../img/DRS_store/small/SmD_3_2_720x480.jpg';
import VaporVCS_3_2_720x480 from '../../img/DRS_store/small/VaporVCS_3_2_720x480.jpg';
// 2:3
// 5:3
import Approach2_5_3_800x480 from '../../img/DRS_store/small/Approach2_5_3_800x480.jpg';
import Draws2_5_3_800x480 from '../../img/DRS_store/small/Draws2_5_3_800x480.jpg';
import Harnesses2_5_3_800x480 from '../../img/DRS_store/small/Harnesses2_5_3_800x480.jpg';
import HMS_5_3_800x480 from '../../img/DRS_store/small/HMS_5_3_800x480.jpg';
import Katanas_5_3_800x480 from '../../img/DRS_store/small/Katanas_5_3_800x480.jpg';
import Rhino_5_3_800x480 from '../../img/DRS_store/small/Rhino_5_3_800x480.jpg';
import Solution_5_3_800x480 from '../../img/DRS_store/small/Solution_5_3_800x480.jpg';
import SolutionComp_5_3_800x480 from '../../img/DRS_store/small/SolutionComp_5_3_800x480.jpg';
import TenayaRa_5_3_800x480 from '../../img/DRS_store/small/TenayaRa_5_3_800x480.jpg';
import Yeti2_5_3_800x480 from '../../img/DRS_store/small/Yeti2_5_3_800x480.jpg';
// 3:5






//! phone = fits in 320x568
// 4:3
import Barnacle_4_3_427x320 from '../../img/DRS_store/phone/Barnacle_4_3_427x320.jpg';
import BDPacks2_4_3_427x320 from '../../img/DRS_store/phone/BDPacks2_4_3_427x320.jpg';
import BigBros_4_3_427x320 from '../../img/DRS_store/phone/BigBros_4_3_427x320.jpg';
import Brass_4_3_427x320 from '../../img/DRS_store/phone/Brass_4_3_427x320.jpg';
import BrassSwage_4_3_427x320 from '../../img/DRS_store/phone/BrassSwage_4_3_427x320.jpg';
import Bug_4_3_427x320 from '../../img/DRS_store/phone/Bug_4_3_427x320.jpg';
import C4Red_4_3_427x320 from '../../img/DRS_store/phone/C4Red_4_3_427x320.jpg';
import Dyon_4_3_427x320 from '../../img/DRS_store/phone/Dyon_4_3_427x320.jpg';
import Headlamp_4_3_427x320 from '../../img/DRS_store/phone/Headlamp_4_3_427x320.jpg';
import Isobutane_4_3_533x320 from '../../img/DRS_store/phone/Isobutane_4_3_533x320.jpg';
import Pads_4_3_427x320 from '../../img/DRS_store/phone/Pads_4_3_427x320.jpg';
import Pads2_4_3_427x320 from '../../img/DRS_store/phone/Pads2_4_3_427x320.jpg';
import Platy_4_3_427x320 from '../../img/DRS_store/phone/Platy_4_3_427x320.jpg';
import Sheep_4_3_427x320 from '../../img/DRS_store/phone/Sheep_4_3_427x320.jpg';
import TotemBlue_4_3_427x320 from '../../img/DRS_store/phone/TotemBlue_4_3_427x320.jpg';
// 3:4
import Approach_3_4_320x427 from '../../img/DRS_store/phone/Approach_3_4_320x427.jpg';
import G7_3_4_320x427 from '../../img/DRS_store/phone/G7_3_4_320x427.jpg';
import Postcards_3_4_320x427 from '../../img/DRS_store/phone/Postcards_3_4_320x427.jpg';
import Ropes_3_4_320x427 from '../../img/DRS_store/phone/Ropes_3_4_320x427.jpg';
// 1:1
import BDPacks_1_1_320x320 from '../../img/DRS_store/phone/BDPacks_1_1_320x320.jpg';
import BigBros2_1_1_320x320 from '../../img/DRS_store/phone/BigBros2_1_1_320x320.jpg';
import BoulderingIsDumb_1_1_320x320 from '../../img/DRS_store/phone/BoulderingIsDumb_1_1_320x320.jpg';
import Brushes_1_1_320x320 from '../../img/DRS_store/phone/Brushes_1_1_320x320.jpg';
import Cords_1_1_320x320 from '../../img/DRS_store/phone/Cords_1_1_320x320.jpg';
import DRSVintage_1_1_320x320 from '../../img/DRS_store/phone/DRSVintage_1_1_320x320.jpg';
import DRSVintage2_1_1_320x320 from '../../img/DRS_store/phone/DRSVintage2_1_1_320x320.jpg';
import Endo_1_1_320x320 from '../../img/DRS_store/phone/Endo_1_1_320x320.jpg';
import HandledAscenders_1_1_320x320 from '../../img/DRS_store/phone/HandledAscenders_1_1_320x320.jpg';
import Houdini_1_1_320x320 from '../../img/DRS_store/phone/Houdini_1_1_320x320.jpg';
import MicroTraxion_1_1_320x320 from '../../img/DRS_store/phone/MicroTraxion_1_1_320x320.jpg';
import MSRFuel_1_1_320x320 from '../../img/DRS_store/phone/MSRFuel_1_1_320x320.jpg';
import Nimbus_1_1_320x320 from '../../img/DRS_store/phone/Nimbus_1_1_320x320.jpg';
import Patagonia_1_1_320x320 from '../../img/DRS_store/phone/Patagonia_1_1_320x320.jpg';
import Pivot_1_1_320x320 from '../../img/DRS_store/phone/Pivot_1_1_320x320.jpg';
import Reverso_1_1_320x320 from '../../img/DRS_store/phone/Reverso_1_1_320x320.jpg';
import Shoes_1_1_320x320 from '../../img/DRS_store/phone/Shoes_1_1_320x320.jpg';
import Spoc_1_1_320x320 from '../../img/DRS_store/phone/Spoc_1_1_320x320.jpg';
import WLB_1_1_320x320 from '../../img/DRS_store/phone/WLB_1_1_320x320.jpg';
import Yeti_1_1_320x320 from '../../img/DRS_store/phone/Yeti_1_1_320x320.jpg';
// 9:16
import Aid_9_16_320x568 from '../../img/DRS_store/phone/Aid_9_16_320x568.jpg';
import BulletproofHMS_9_16_320x568 from '../../img/DRS_store/phone/BulletproofHMS_9_16_320x568.jpg';
import BulletproofScrew_9_16_319x568 from '../../img/DRS_store/phone/BulletproofScrew_9_16_319x568.jpg';
import DualConnectVario_9_16_319x568 from '../../img/DRS_store/phone/DualConnectVario_9_16_319x568.jpg';
import Gridlock_9_16_320x568 from '../../img/DRS_store/phone/Gridlock_9_16_320x568.jpg';
import Nuts_9_16_320x568 from '../../img/DRS_store/phone/Nuts_9_16_320x568.jpg';
import Puffy_9_16_320x568 from '../../img/DRS_store/phone/Puffy_9_16_320x568.jpg';
import Top100_9_16_320x568 from '../../img/DRS_store/phone/Top100_9_16_320x568.jpg';
// 16:9
import BigCams_16_9_568x320 from '../../img/DRS_store/phone/BigCams_16_9_568x320.jpg';
import Bowls_16_9_568x319 from '../../img/DRS_store/phone/Bowls_16_9_568x319.jpg';
import C4cams_16_9_568x320 from '../../img/DRS_store/phone/C4cams_16_9_568x320.jpg';
import C4GreenPurple_16_9_568x320 from '../../img/DRS_store/phone/C4GreenPurple_16_9_568x320.jpg';
import Cords2_16_9_568x320 from '../../img/DRS_store/phone/Cords2_16_9_568x320.jpg';
import CrackGloves_16_9_568x320 from '../../img/DRS_store/phone/CrackGloves_16_9_568x320.jpg';
import Dragonflys_16_9_568x320 from '../../img/DRS_store/phone/Dragonflys_16_9_568x320.jpg';
import Dromedary_16_9_568x320 from '../../img/DRS_store/phone/Dromedary_16_9_568x320.jpg';
import GriGri_16_9_568x320 from '../../img/DRS_store/phone/GriGri_16_9_568x320.jpg';
import Harnesses_16_9_568x320 from '../../img/DRS_store/phone/Harnesses_16_9_568x320.jpg';
import Pants_16_9_568x320 from '../../img/DRS_store/phone/Pants_16_9_568x320.jpg';
import Skyhook_16_9_568x320 from '../../img/DRS_store/phone/Skyhook_16_9_568x320.jpg';
import Slings2_16_9_568x319 from '../../img/DRS_store/phone/Slings2_16_9_568x319.jpg';
import SmallLockers_16_9_568x320 from '../../img/DRS_store/phone/SmallLockers_16_9_568x320.jpg';
// 3:2
import CanyoneeringBags_3_2_480x320 from '../../img/DRS_store/phone/CanyoneeringBags_3_2_480x320.jpg';
import Draws_3_2_480x320 from '../../img/DRS_store/phone/Draws_3_2_480x320.jpg';
import Filters_3_2_480x320 from '../../img/DRS_store/phone/Filters_3_2_480x320.jpg';
import FrictionLabs_3_2_480x320 from '../../img/DRS_store/phone/FrictionLabs_3_2_480x320.jpg';
import Miniwire_3_2_480x320 from '../../img/DRS_store/phone/Miniwire_3_2_480x320.jpg';
import Slings_3_2_480x320 from '../../img/DRS_store/phone/Slings_3_2_480x320.jpg';
import SmD_3_2_480x320 from '../../img/DRS_store/phone/SmD_3_2_480x320.jpg';
import VaporVCS_3_2_480x320 from '../../img/DRS_store/phone/VaporVCS_3_2_480x320.jpg';
// 2:3
// 5:3
import Approach2_5_3_533x320 from '../../img/DRS_store/phone/Approach2_5_3_533x320.jpg';
import Draws2_5_3_534x320 from '../../img/DRS_store/phone/Draws2_5_3_534x320.jpg';
import Harnesses2_5_3_533x320 from '../../img/DRS_store/phone/Harnesses2_5_3_533x320.jpg';
import HMS_5_3_533x320 from '../../img/DRS_store/phone/HMS_5_3_533x320.jpg';
import Katanas_5_3_533x320 from '../../img/DRS_store/phone/Katanas_5_3_533x320.jpg';
import Rhino_5_3_533x320 from '../../img/DRS_store/phone/Rhino_5_3_533x320.jpg';
import Solution_5_3_534x320 from '../../img/DRS_store/phone/Solution_5_3_534x320.jpg';
import SolutionComp_5_3_533x320 from '../../img/DRS_store/phone/SolutionComp_5_3_533x320.jpg';
import TenayaRa_5_3_533x320 from '../../img/DRS_store/phone/TenayaRa_5_3_533x320.jpg';
import Yeti2_5_3_533x320 from '../../img/DRS_store/phone/Yeti2_5_3_533x320.jpg';
// 3:5




//% So... sizes array... I should just make a const that covers everything and use that... then can change in just 1 place
// Though find and replace would work fine as well to update

// cell: 320w - 568w
// small: 480w - 853w
// med: 768w - 1366w
// large: 1080w - 1920w
// original: ... 1618w - 4032w

// DONT need to set size rules with 'sizes'... these images will be chosen according to what the gallery wants and that is fine!



// const srcSetSizes = ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"];
// seems max width for any image, IF the gallery chooses to use it as the only image on a line is:
// 100vw - 101px
// ... but this is only 1 piece of the puzzle. Oh well!
const srcSetSizes = "100vw - 101px";
// const srcSetSizes = "100vw";


export const photos = [
    {
        src: Draws_3_2_1620x1080,
        srcSet: [
            `${Draws_3_2_480x320} 480w,
            ${Draws_3_2_720x480} 720w,
            ${Draws_3_2_1152x768} 1152w,
            ${Draws_3_2_1620x1080} 1620w,
            `
            // ${Draws_3_2_3108x2072} 3108w
        ],
        sizes: srcSetSizes,
        alt: "We are usually stocked with quickdraws from 3-5 different brands.",
        width: 3108,
        height: 2072,
        title: "We are usually stocked with quickdraws from 3-5 different brands."
    },
    {
        src: BigCams_16_9_1920x1080,
        srcSet: [
            `${BigCams_16_9_568x320} 568w,
            ${BigCams_16_9_853x480} 853w,
            ${BigCams_16_9_1365x768} 1365w,
            ${BigCams_16_9_1920x1080} 1920w,
            `
            // ${BigCams_16_9_3724x2095} 3724w
        ],
        sizes: srcSetSizes,
        alt: "Large spring loaded camming devices from Black Diamond",
        width: 3724,
        height: 2095,
        title: "Big cams. You don't typically need them for Red Rock, but we make sure to have some available."
    },
    {
        src: Nuts_9_16_1080x1920,
        srcSet: [
            `${Nuts_9_16_320x568} 320w,
            ${Nuts_9_16_480x853} 480w,
            ${Nuts_9_16_768x1365} 768w,
            ${Nuts_9_16_1080x1920} 1080w,
            `
            // ${Nuts_9_16_1918x3409} 1918w
        ],
        sizes: srcSetSizes,
        alt: "An artistic arrangement of an assortment of DMM nuts. We try to stay stocked with the DMM Wallnuts, Offsets, and Brass Offsets. Often DMM Peenuts as well.",
        width: 1918,
        height: 3409,
        title: "Everyone loves DMM nuts, and we try to always stay stocked with them. Wallnuts, Offsets, and Brass Offsets here. We often have the Peenuts as well."
    },
    {
        src: Slings_3_2_1620x1080,
        srcSet: [
            `${Slings_3_2_480x320} 480w,
            ${Slings_3_2_720x480} 720w,
            ${Slings_3_2_1152x768} 1152w,
            ${Slings_3_2_1620x1080} 1620w,
            `
            // ${Slings_3_2_4032x2688} 4032w
        ],
        sizes: srcSetSizes,
        alt: "A large assortment of slings from Mammut, Black Diamond, Edelrid, and DMM.",
        width: 4032,
        height: 2688,
        title: "We carry a ton of slings in all sorts of lengths and materials from several brands like Mammut, Black Diamond, Edelrid, and DMM. Single, double, triple, quad... we have 'em all."
    },
    {
        src: Shoes_1_1_1080x1080,
        srcSet: [
            `${Shoes_1_1_320x320} 320w,
            ${Shoes_1_1_480x480} 480w,
            ${Shoes_1_1_768x768} 768w,
            ${Shoes_1_1_1080x1080} 1080w,
            `
            // ${Shoes_1_1_3024x3024} 3024w
        ],
        sizes: srcSetSizes,
        alt: "A wide assortment of climbing and approach shoes from La Sportiva, Scarpa, Black Diamond, Arcteryx, Tenaya, and 5.10 / Adidas. There is also a test wall to compare and really see if a model and size will work for you.",
        width: 3024,
        height: 3024,
        title: "Climbing and Approach Shoes. We typically carry La Sportiva, Scarpa, 5.10 / Adidas, Tenaya, and Black Diamond. We even have a test wall so you can feel the difference in the models and sizes."
    },
    {
        src: Pads_4_3_1440x1080,
        srcSet: [
            `${Pads_4_3_427x320} 427w,
            ${Pads_4_3_640x480} 640w,
            ${Pads_4_3_1024x768} 1024w,
            ${Pads_4_3_1440x1080} 1440w,
            `
            // ${Pads_4_3_3641x2731} 3641w
        ],
        sizes: srcSetSizes,
        alt: "Tons of Asana brand crash pads for sale for bouldering. Sometimes we have used ones from our rental fleet for sale, or used pads from others on consignment.",
        width: 3641,
        height: 2731,
        title: "We sell crash pads! Most typically we have been selling Asana. We carry their Super Hero, Sidekick, and Pro Spotter Pad. Sometimes we have used ones from our rental fleet for sale or other used ones in our consignment shop."
    },
    {
        src: C4cams_16_9_1920x1080,
        srcSet: [
            `${C4cams_16_9_568x320} 568w,
            ${C4cams_16_9_853x480} 853w,
            ${C4cams_16_9_1365x768} 1365w,
            ${C4cams_16_9_1920x1080} 1920w,
            `
            // ${C4cams_16_9_3896x2192} 3896w
        ],
        sizes: srcSetSizes,
        alt: "A selection of Black Diamond Cams.",
        width: 3896,
        height: 2192,
        title: "Get your cams here!"
    },
    {
        src: DRSVintage2_1_1_1080x1080,
        srcSet: [
            `${DRSVintage2_1_1_320x320} 320w,
            ${DRSVintage2_1_1_480x480} 480w,
            ${DRSVintage2_1_1_768x768} 768w,
            ${DRSVintage2_1_1_1080x1080} 1080w,
            `
            // ${DRSVintage2_1_1_2571x2571} 2571w
        ],
        sizes: srcSetSizes,
        alt: "A very vintage-retro sweater with our old logo on it. We are trying to get them reprinted.",
        width: 2571,
        height: 2571,
        title: "Someone found this vintage-retro sweater we sold years ago in a thrift store. We will have merch with this on it available soon (if not already)."
    },
    {
        src: Ropes_3_4_1080x1440,
        srcSet: [
            `${Ropes_3_4_320x427} 320w,
            ${Ropes_3_4_480x640} 480w,
            ${Ropes_3_4_768x1024} 768w,
            ${Ropes_3_4_1080x1440} 1080w,
            `
            // ${Ropes_3_4_2744x3659} 2744w
        ],
        sizes: srcSetSizes,
        alt: "A large assorment of dynamic climbing ropes from Edelrid, Sterling Rope, Beal, Black Diamond, Mammut, Trango, Edelweiss, etc... Single, halfs/twins, and triple rated ropes available in 60 to 80m lengths, rarely 90m. Static taglines too. We also have canyoneering rope and work static, in a different corner of the shop.",
        width: 2744,
        height: 3659,
        title: "We keep a lot of ropes in stock. Single, halfs/twins, and triple rated ropes in 60-80m lengths, rarely 90m. Static taglines too. We also have canyoneering rope and work static rope, they are kept in a different corner of the store."
    },
    {
        src: FrictionLabs_3_2_1620x1080,
        srcSet: [
            `${FrictionLabs_3_2_480x320} 480w,
            ${FrictionLabs_3_2_720x480} 720w,
            ${FrictionLabs_3_2_1152x768} 1152w,
            ${FrictionLabs_3_2_1620x1080} 1620w,
            `
            // ${FrictionLabs_3_2_3548x2365} 3548w
        ],
        sizes: srcSetSizes,
        alt: "A display of FrictionLabs Chalk",
        width: 3548,
        height: 2365,
        title: "We stock FrictionLabs. #chalkmatters"
    },
    {
        src: CrackGloves_16_9_1919x1080,
        srcSet: [
            `${CrackGloves_16_9_568x320} 568w,
            ${CrackGloves_16_9_853x480} 853w,
            ${CrackGloves_16_9_1365x768} 1365w,
            ${CrackGloves_16_9_1919x1080} 1919w,
            `
            // ${CrackGloves_16_9_3677x2069} 3677w
        ],
        sizes: srcSetSizes,
        alt: "Crack climbing gloves",
        width: 3677,
        height: 2069,
        title: "We try to keep stocked with some option for crack climbing gloves. Lately they have been very hard to get so we have been just getting whatever we can, wether that be Ocun, Black Diamond, or G7."
    },
    {
        src: Aid_9_16_1080x1920,
        srcSet: [
            `${Aid_9_16_320x568} 320w,
            ${Aid_9_16_480x853} 480w,
            ${Aid_9_16_768x1365} 768w,
            ${Aid_9_16_1080x1920} 1080w,
            `
            // ${Aid_9_16_1934x3438} 1934w
        ],
        sizes: srcSetSizes,
        alt: "Some aid climbing gear: various hooks, ball nuts, tricams, and a fifi hook.",
        width: 1934,
        height: 3438,
        title: "While Red Rock is not exactly a destination for aid climbing, we get enough people passing through to Yosemite or Zion to keep a small stock of aid climbing gear. Typically some hooks, fifis, ballnuts, and tricams. We don't typically stock any beaks, pitons, or cam hooks, but maybe we will if you can convince Travis."
    },
    {
        src: G7_3_4_1080x1440,
        srcSet: [
            `${G7_3_4_320x427} 320w,
            ${G7_3_4_480x640} 480w,
            ${G7_3_4_768x1024} 768w,
            ${G7_3_4_1080x1440} 1080w,
            `
            // ${G7_3_4_2552x3403} 2552w
        ],
        sizes: srcSetSizes,
        alt: "G7 crack gloves, a newer brand",
        width: 2552,
        height: 3403,
        title: "G7 Crack Gloves. From the makers of the inflatable portaledge in Canada."
    },
    {
        src: GriGri_16_9_1920x1080,
        srcSet: [
            `${GriGri_16_9_568x320} 568w,
            ${GriGri_16_9_853x480} 853w,
            ${GriGri_16_9_1365x768} 1365w,
            ${GriGri_16_9_1920x1080} 1920w,
            `
            // ${GriGri_16_9_4032x2268} 4032w
        ],
        sizes: srcSetSizes,
        alt: "The Petzl GriGri in several colors and models.",
        width: 4032,
        height: 2268,
        title: "We got your GriGris. We carry both the regular (ie newer version of the GriGri 2) as well as the GriGri+ which has anti-panic function, improved steel rope bearing surfaces, and a cam tension adjuster to switch between a toprope and lead mode."
    },
    {
        src: Harnesses_16_9_1920x1080,
        srcSet: [
            `${Harnesses_16_9_568x320} 568w,
            ${Harnesses_16_9_853x480} 853w,
            ${Harnesses_16_9_1365x768} 1365w,
            ${Harnesses_16_9_1920x1080} 1920w,
            `
            // ${Harnesses_16_9_4032x2268} 4032w
        ],
        sizes: srcSetSizes,
        alt: "A variety of climbing harnesses from Petzl, Black Diamond, Edelrid, and Misty Mountain. Sometimes Arcteryx.",
        width: 4032,
        height: 2268,
        title: "We keep several models of climbing harnesses on hand from a few great brands. Typically Petzl, Edelrid, Black Diamond, and Misty Mountain. Sometimes Arcteryx, when we can actually get them."
    },
    {
        src: BrassSwage_4_3_1440x1080,
        srcSet: [
            `${BrassSwage_4_3_427x320} 427w,
            ${BrassSwage_4_3_640x480} 640w,
            ${BrassSwage_4_3_1024x768} 1024w,
            ${BrassSwage_4_3_1440x1080} 1440w,
            `
            // ${BrassSwage_4_3_3024x2268} 3024w
        ],
        sizes: srcSetSizes,
        alt: "An artistic arrangement of the metal swage on some nuts.",
        width: 3024,
        height: 2268,
        title: "We carry those DMM Brass Offsets all you Yosemite aid climbers go crazy for."
    },
    {
        src: Dyon_4_3_1440x1080,
        srcSet: [
            `${Dyon_4_3_427x320} 427w,
            ${Dyon_4_3_640x480} 640w,
            ${Dyon_4_3_1024x768} 1024w,
            ${Dyon_4_3_1440x1080} 1440w,
            `
            // ${Dyon_4_3_3280x2460} 3280w
        ],
        sizes: srcSetSizes,
        alt: "The CAMP Dyon, a relatively new snag-less wiregate carabiner.",
        width: 3280,
        height: 2460,
        title: "CAMP Dyon? We got it."
    },
    {
        src: Draws2_5_3_1801x1080,
        srcSet: [
            `${Draws2_5_3_534x320} 534w,
            ${Draws2_5_3_800x480} 800w,
            ${Draws2_5_3_1281x768} 1281w,
            ${Draws2_5_3_1801x1080} 1801w,
            `
            // ${Draws2_5_3_3600x2159} 3600w
        ],
        sizes: srcSetSizes,
        alt: "Quickdraws from Petzl and Black Diamond.",
        width: 3600,
        height: 2159,
        title: "We carry the ever classic Petzl Spirit Quickdraws as well as several others."
    },
    {
        src: Rhino_5_3_1800x1080,
        srcSet: [
            `${Rhino_5_3_533x320} 533w,
            ${Rhino_5_3_800x480} 800w,
            ${Rhino_5_3_1280x768} 1280w,
            ${Rhino_5_3_1800x1080} 1800w,
            `
            // ${Rhino_5_3_3580x2148} 3580w
        ],
        sizes: srcSetSizes,
        alt: "An assortment of Rhino Skincare products.",
        width: 3580,
        height: 2148,
        title: "We try to stay well stocked with Rhino Skincare products."
    },
    {
        src: BDPacks_1_1_1080x1080,
        srcSet: [
            `${BDPacks_1_1_320x320} 320w,
            ${BDPacks_1_1_480x480} 480w,
            ${BDPacks_1_1_768x768} 768w,
            ${BDPacks_1_1_1080x1080} 1080w,
            `
            // ${BDPacks_1_1_2850x2850} 2850w
        ],
        sizes: srcSetSizes,
        alt: "Durable backpacks from Black Diamond, which stand up the the abrasive sandstone out at Red Rock.",
        width: 2850,
        height: 2850,
        title: "Black Diamond makes some of the most durable and best selling cragging backpacks for this area."
    },
    {
        src: Headlamp_4_3_1440x1080,
        srcSet: [
            `${Headlamp_4_3_427x320} 427w,
            ${Headlamp_4_3_640x480} 640w,
            ${Headlamp_4_3_1024x768} 1024w,
            ${Headlamp_4_3_1440x1080} 1440w,
            `
            // ${Headlamp_4_3_2881x2161} 2881w
        ],
        sizes: srcSetSizes,
        alt: "Headlamps. We typically carry Petzl and Black Diamond.",
        width: 2881,
        height: 2161,
        title: "Headlamps! Don't multipitch without one! We typically have options from Petzl and Black Diamond."
    },
    {
        src: BoulderingIsDumb_1_1_1080x1080,
        srcSet: [
            `${BoulderingIsDumb_1_1_320x320} 320w,
            ${BoulderingIsDumb_1_1_480x480} 480w,
            ${BoulderingIsDumb_1_1_768x768} 768w,
            ${BoulderingIsDumb_1_1_1080x1080} 1080w,
            `
            // ${BoulderingIsDumb_1_1_2764x2764} 2764w
        ],
        sizes: srcSetSizes,
        alt: "A popular shirt that says, 'Bouldering is dumb.' Sold by Sterling Rope, a company which makes no products for Bouldering.",
        width: 2764,
        height: 2764,
        title: "No comment."
    },
    {
        src: Isobutane_4_3_1800x1080,
        srcSet: [
            `${Isobutane_4_3_533x320} 533w,
            ${Isobutane_4_3_800x480} 800w,
            ${Isobutane_4_3_1280x768} 1280w,
            ${Isobutane_4_3_1800x1080} 1800w,
            `
            // ${Isobutane_4_3_4032x2419} 4032w
        ],
        sizes: srcSetSizes,
        alt: "Isobutane fuel for small gas stoves.",
        width: 4032,
        height: 2419,
        title: "We keep isobutane fuel in stock for all your small camp stoves, ie. Jetboil, MSR, etc... We don't typically carry the larger green bottles of propane, you can get those at most grocery stores or hardware stores like Lowes or Home Depot."
    },
    {
        src: Filters_3_2_1620x1080,
        srcSet: [
            `${Filters_3_2_480x320} 480w,
            ${Filters_3_2_720x480} 720w,
            ${Filters_3_2_1152x768} 1152w,
            ${Filters_3_2_1620x1080} 1620w,
            `
            // ${Filters_3_2_3802x2535} 3802w
        ],
        sizes: srcSetSizes,
        alt: "A small assortment of water filters for backpackers as well as water treatment tablets.",
        width: 3802,
        height: 2535,
        title: "We carry a few different water filters as well as water treatment tablets."
    },
    {
        src: Platy_4_3_1440x1080,
        srcSet: [
            `${Platy_4_3_427x320} 427w,
            ${Platy_4_3_640x480} 640w,
            ${Platy_4_3_1024x768} 1024w,
            ${Platy_4_3_1440x1080} 1440w,
            `
            // ${Platy_4_3_3667x2750} 3667w
        ],
        sizes: srcSetSizes,
        alt: "The ever popular Platypus 2L flexible water bottle.",
        width: 3667,
        height: 2750,
        title: "We sell the ever popular Platypus 2L flexible water bottle. Convince Travis to keep it in stock!"
    },
    {
        src: SmD_3_2_1620x1080,
        srcSet: [
            `${SmD_3_2_480x320} 480w,
            ${SmD_3_2_720x480} 720w,
            ${SmD_3_2_1152x768} 1152w,
            ${SmD_3_2_1620x1080} 1620w,
            `
            // ${SmD_3_2_3225x2150} 3225w
        ],
        sizes: srcSetSizes,
        alt: "The Petzl Sm'D, a small 'D' shaped locking carabiner which is very popular.",
        width: 3225,
        height: 2150,
        title: "We carry the Petzl Sm'D in all 3 of its very popular models: screw, twist, and triact lock."
    },
    {
        src: Endo_1_1_1080x1080,
        srcSet: [
            `${Endo_1_1_320x320} 320w,
            ${Endo_1_1_480x480} 480w,
            ${Endo_1_1_768x768} 768w,
            ${Endo_1_1_1080x1080} 1080w,
            `
            // ${Endo_1_1_2170x2170} 2170w
        ],
        sizes: srcSetSizes,
        alt: "Endo Gymnastic Chalk. An OG favorite.",
        width: 2170,
        height: 2170,
        title: "Endo Gymnastic Chalk. An OG favorite. We well single 2oz blocks as well as 8 block bulk bricks (1 lb total)."
    },
    {
        src: BDPacks2_4_3_1440x1080,
        srcSet: [
            `${BDPacks2_4_3_427x320} 427w,
            ${BDPacks2_4_3_640x480} 640w,
            ${BDPacks2_4_3_1024x768} 1024w,
            ${BDPacks2_4_3_1440x1080} 1440w,
            `
            // ${BDPacks2_4_3_3790x2842} 3790w
        ],
        sizes: srcSetSizes,
        alt: "Black Diamond climbers backpacks.",
        width: 3790,
        height: 2842,
        title: "Great packs from Black Diamond."
    },
    {
        src: Pads2_4_3_1440x1080,
        srcSet: [
            `${Pads2_4_3_427x320} 427w,
            ${Pads2_4_3_640x480} 640w,
            ${Pads2_4_3_1024x768} 1024w,
            ${Pads2_4_3_1440x1080} 1440w,
            `
            // ${Pads2_4_3_3279x2459} 3279w
        ],
        sizes: srcSetSizes,
        alt: "Asana crash pads and pad blankets.",
        width: 3279,
        height: 2459,
        title: "We sell a lot of Asana pads as well as their Pro Spotter Pad blankets."
    },
    {
        src: Sheep_4_3_1440x1080,
        srcSet: [
            `${Sheep_4_3_427x320} 427w,
            ${Sheep_4_3_640x480} 640w,
            ${Sheep_4_3_1024x768} 1024w,
            ${Sheep_4_3_1440x1080} 1440w,
            `
            // ${Sheep_4_3_3251x2438} 3251w
        ],
        sizes: srcSetSizes,
        alt: "A hand carved wood Big Horn Sheep statue.",
        width: 3251,
        height: 2438,
        title: "If you are lucky you might get to see one of these dudes out in the canyons! A rare treat!"
    },
    {
        src: Yeti2_5_3_1800x1080,
        srcSet: [
            `${Yeti2_5_3_533x320} 533w,
            ${Yeti2_5_3_800x480} 800w,
            ${Yeti2_5_3_1280x768} 1280w,
            ${Yeti2_5_3_1800x1080} 1800w,
            `
            // ${Yeti2_5_3_4032x2419} 4032w
        ],
        sizes: srcSetSizes,
        alt: "Yeti brand insulated drink products.",
        width: 4032,
        height: 2419,
        title: "Great for keeping your drink hot or cold."
    },
    {
        src: MSRFuel_1_1_1080x1080,
        srcSet: [
            `${MSRFuel_1_1_320x320} 320w,
            ${MSRFuel_1_1_480x480} 480w,
            ${MSRFuel_1_1_768x768} 768w,
            ${MSRFuel_1_1_1080x1080} 1080w,
            `
            // ${MSRFuel_1_1_3024x3024} 3024w
        ],
        sizes: srcSetSizes,
        alt: "MSR liquid fuel containers.",
        width: 3024,
        height: 3024,
        title: "MSR liquid fuel containers for all you more alpine and expedition focused folks who shy away from isobutane fuel canisters."
    },
    {
        src: DualConnectVario_9_16_1080x1920,
        srcSet: [
            `${DualConnectVario_9_16_319x568} 319w,
            ${DualConnectVario_9_16_480x853} 480w,
            ${DualConnectVario_9_16_768x1366} 768w,
            ${DualConnectVario_9_16_1080x1920} 1080w,
            `
            // ${DualConnectVario_9_16_2045x3636} 2045w
        ],
        sizes: srcSetSizes,
        alt: "The Petzl Dual Connect Vario. One of many variations of the Petzl Connect Adjust. We try to keep a few options in stock.",
        width: 2045,
        height: 3636,
        title: "The Petzl Dual Connect Vario. One of many variations of the Petzl Connect Adjust. We try to keep a few options in stock."
    },
    {
        src: Katanas_5_3_1800x1080,
        srcSet: [
            `${Katanas_5_3_533x320} 533w,
            ${Katanas_5_3_800x480} 800w,
            ${Katanas_5_3_1280x768} 1280w,
            ${Katanas_5_3_1800x1080} 1800w,
            `
            // ${Katanas_5_3_3685x2211} 3685w
        ],
        sizes: srcSetSizes,
        alt: "The LaSportiva Katana lace. A very comfortable yet aggressive climbing shoe.",
        width: 3685,
        height: 2211,
        title: "LaSportiva Katana. A very comfortable yet aggressive climbing shoe."
    },
    {
        src: CanyoneeringBags_3_2_1620x1080,
        srcSet: [
            `${CanyoneeringBags_3_2_480x320} 480w,
            ${CanyoneeringBags_3_2_720x480} 720w,
            ${CanyoneeringBags_3_2_1152x768} 1152w,
            ${CanyoneeringBags_3_2_1620x1080} 1620w,
            `
            // ${CanyoneeringBags_3_2_4032x2688} 4032w
        ],
        sizes: srcSetSizes,
        alt: "Canyoneering rope bags made of durable vinyl coated fabric with drainage holes for water and a few with foam inserts for flotation.",
        width: 4032,
        height: 2688,
        title: "We try to keep several options on hand for canyoneering rope bags of different sizes."
    },
    {
        src: Cords_1_1_1080x1080,
        srcSet: [
            `${Cords_1_1_320x320} 320w,
            ${Cords_1_1_480x480} 480w,
            ${Cords_1_1_768x768} 768w,
            ${Cords_1_1_1080x1080} 1080w,
            `
            // ${Cords_1_1_2605x2605} 2605w
        ],
        sizes: srcSetSizes,
        alt: "An artistic assortment of accessory cord, available by the foot.",
        width: 2605,
        height: 2605,
        title: "We keep a variety of accessory cord and webbing on hand for cordellettes, friction hitches, rap anchors, impromptu slacklines, and even shoe laces. Pictured here: 1.5mm, 2mm, 3mm, 4mm, 5mm, 5.9mm technora core, 6mm, 7mm, 15mm webbing, 25mm webbing."
    },
    {
        src: Cords2_16_9_1920x1080,
        srcSet: [
            `${Cords2_16_9_568x320} 568w,
            ${Cords2_16_9_853x480} 853w,
            ${Cords2_16_9_1365x768} 1365w,
            ${Cords2_16_9_1920x1080} 1920w,
            `
            // ${Cords2_16_9_3285x1848} 3285w
        ],
        sizes: srcSetSizes,
        alt: "We sell our static work ropes by the foot in 9, 10, and 11mm as well as some of our canyoneering rope in 8.5mm",
        width: 3285,
        height: 1848,
        title: "We sell our static work ropes by the foot in 9, 10, and 11mm as well as some of our canyoneering rope in 8.5mm. Pictured: 11mm, 9mm, 8.5mm. Want short lengths of dynamic by the foot for positioning lanyards? Help me convince Travis to order a spool."
    },
    {
        src: HandledAscenders_1_1_1080x1080,
        srcSet: [
            `${HandledAscenders_1_1_320x320} 320w,
            ${HandledAscenders_1_1_480x480} 480w,
            ${HandledAscenders_1_1_768x768} 768w,
            ${HandledAscenders_1_1_1080x1080} 1080w,
            `
            // ${HandledAscenders_1_1_2549x2549} 2549w
        ],
        sizes: srcSetSizes,
        alt: "Petzl handled ascenders",
        width: 2549,
        height: 2549,
        title: "We always try to keep stocked with the ever popular Petzl Ascension handled ascenders."
    },
    {
        src: Approach_3_4_1080x1440,
        srcSet: [
            `${Approach_3_4_320x427} 320w,
            ${Approach_3_4_480x640} 480w,
            ${Approach_3_4_768x1024} 768w,
            ${Approach_3_4_1080x1440} 1080w,
            `
            // ${Approach_3_4_2905x3874} 2905w
        ],
        sizes: srcSetSizes,
        alt: "Up close selection of some of the most popular approach shoe models from La Sportiva in M's and W's models. The TX2, TX3, TX4, and TX Guide",
        width: 2905,
        height: 3874,
        title: "These are the most popular La Sportiva approach shoes. We keep stocked with M's and W's models in many sizes."
    },
    {
        src: HMS_5_3_1800x1080,
        srcSet: [
            `${HMS_5_3_533x320} 533w,
            ${HMS_5_3_800x480} 800w,
            ${HMS_5_3_1280x768} 1280w,
            ${HMS_5_3_1800x1080} 1800w,
            `
            // ${HMS_5_3_3671x2202} 3671w
        ],
        sizes: srcSetSizes,
        alt: "Up close picture of several larger close to rounded stock HMS locking carabiners.",
        width: 3671,
        height: 2202,
        title: "We keep a good selection of locking carabiners in stock. Heres some Black Diamond and Trango models."
    },
    {
        src: VaporVCS_3_2_1620x1080,
        srcSet: [
            `${VaporVCS_3_2_480x320} 480w,
            ${VaporVCS_3_2_720x480} 720w,
            ${VaporVCS_3_2_1152x768} 1152w,
            ${VaporVCS_3_2_1620x1080} 1620w,
            `
            // ${VaporVCS_3_2_3157x2105} 3157w
        ],
        sizes: srcSetSizes,
        alt: "The Scarpa Vapor VCS, a popular aggressive climbing shoe.",
        width: 3157,
        height: 2105,
        title: "The Scarpa Vapor VCS, a popular aggressive climbing shoe."
    },
    {
        src: Harnesses2_5_3_1800x1080,
        srcSet: [
            `${Harnesses2_5_3_533x320} 533w,
            ${Harnesses2_5_3_800x480} 800w,
            ${Harnesses2_5_3_1280x768} 1280w,
            ${Harnesses2_5_3_1800x1080} 1800w,
            `
            // ${Harnesses2_5_3_4032x2419} 4032w
        ],
        sizes: srcSetSizes,
        alt: "More climbing harnesses, overflowing from shelves.",
        width: 4032,
        height: 2419,
        title: "For some reason not many people in the US seem to be familiar with Edelrid harnesses, a shame, they are excellent. Come try one on."
    },
    {
        src: C4Red_4_3_1440x1080,
        srcSet: [
            `${C4Red_4_3_427x320} 427w,
            ${C4Red_4_3_640x480} 640w,
            ${C4Red_4_3_1024x768} 1024w,
            ${C4Red_4_3_1440x1080} 1440w,
            `
            // ${C4Red_4_3_2556x1917} 2556w
        ],
        sizes: srcSetSizes,
        alt: "An artistic close up of Black Diamond cams",
        width: 2556,
        height: 1917,
        title: "Roses are red... and #1 's are too, get something for your Boo!"
    },
    {
        src: Skyhook_16_9_1920x1080,
        srcSet: [
            `${Skyhook_16_9_568x320} 568w,
            ${Skyhook_16_9_853x480} 853w,
            ${Skyhook_16_9_1365x768} 1365w,
            ${Skyhook_16_9_1920x1080} 1920w,
            `
            // ${Skyhook_16_9_3356x1888} 3356w
        ],
        sizes: srcSetSizes,
        alt: "The popular Super Clip, used on the end of a painter's pole to clip quickdraws from the ground is now available with a high quality extendable aluminum pole: The Skyhook.",
        width: 3356,
        height: 1888,
        title: "The popular Super Clip, used on the end of a painter's pole to clip quickdraws from the ground is now available with a high quality extendable aluminum pole: The Skyhook."
    },
    {
        src: Pants_16_9_1919x1080,
        srcSet: [
            `${Pants_16_9_568x320} 568w,
            ${Pants_16_9_853x480} 853w,
            ${Pants_16_9_1365x768} 1365w,
            ${Pants_16_9_1919x1080} 1919w,
            `
            // ${Pants_16_9_3518x1980} 3518w
        ],
        sizes: srcSetSizes,
        alt: "Artistic closeup on the pattern and fabric of some women's pants.",
        width: 3518,
        height: 1980,
        title: "We are not just gear. We sell some pretty sweet climbing clothes too, get some new threads here!"
    },
    {
        src: Slings2_16_9_1920x1080,
        srcSet: [
            `${Slings2_16_9_568x319} 568w,
            ${Slings2_16_9_853x480} 853w,
            ${Slings2_16_9_1365x768} 1365w,
            ${Slings2_16_9_1920x1080} 1920w,
            `
            // ${Slings2_16_9_3179x1788} 3179w
        ],
        sizes: srcSetSizes,
        alt: "A few quad length (240cm) dyneema slings.",
        width: 3179,
        height: 1788,
        title: "We got your quad length (240cm) dyneema slings. Excellent option to replace heavier cordellette for trad anchors."
    },
    {
        src: Brass_4_3_1440x1080,
        srcSet: [
            `${Brass_4_3_427x320} 427w,
            ${Brass_4_3_640x480} 640w,
            ${Brass_4_3_1024x768} 1024w,
            ${Brass_4_3_1440x1080} 1440w,
            `
            // ${Brass_4_3_3024x2268} 3024w
        ],
        sizes: srcSetSizes,
        alt: "Close up picture of DMM Brass Offset nuts.",
        width: 3024,
        height: 2268,
        title: "We got your DMM Brass Offsets."
    },
    {
        src: Bug_4_3_1440x1080,
        srcSet: [
            `${Bug_4_3_427x320} 427w,
            ${Bug_4_3_640x480} 640w,
            ${Bug_4_3_1024x768} 1024w,
            ${Bug_4_3_1440x1080} 1440w,
            `
            // ${Bug_4_3_3777x2833} 3777w
        ],
        sizes: srcSetSizes,
        alt: "The Petzl Bug, a great multipitch follower pack option.",
        width: 3777,
        height: 2833,
        title: "The Petzl Bug, a great multipitch follower pack option. (Left and right pack are the same dimensions, its just foreground / background distortion making the one on the left look bigger.)"
    },
    {
        src: MicroTraxion_1_1_1080x1080,
        srcSet: [
            `${MicroTraxion_1_1_320x320} 320w,
            ${MicroTraxion_1_1_480x480} 480w,
            ${MicroTraxion_1_1_768x768} 768w,
            ${MicroTraxion_1_1_1080x1080} 1080w,
            `
            // ${MicroTraxion_1_1_2153x2153} 2153w
        ],
        sizes: srcSetSizes,
        alt: "Closeup of the Petzl Microtraxion. A popular progress capture pulley.",
        width: 2153,
        height: 2153,
        title: "Petzl Microtraxion. We got 'em."
    },
    {
        src: Nimbus_1_1_1080x1080,
        srcSet: [
            `${Nimbus_1_1_320x320} 320w,
            ${Nimbus_1_1_480x480} 480w,
            ${Nimbus_1_1_768x768} 768w,
            ${Nimbus_1_1_1080x1080} 1080w,
            `
            // ${Nimbus_1_1_2748x2748} 2748w
        ],
        sizes: srcSetSizes,
        alt: "The CAMP Nimbus. A great feeling HMS screwgate carabiner.",
        width: 2748,
        height: 2748,
        title: "Looking for a new compact HMS carabiner? Check out the CAMP Nimbus."
    },
    {
        src: Reverso_1_1_1080x1080,
        srcSet: [
            `${Reverso_1_1_320x320} 320w,
            ${Reverso_1_1_480x480} 480w,
            ${Reverso_1_1_768x768} 768w,
            ${Reverso_1_1_1080x1080} 1080w,
            `
            // ${Reverso_1_1_2463x2463} 2463w
        ],
        sizes: srcSetSizes,
        alt: "The Petzl Reverso, a popular climbing belay / rappel device, with a top-belay guide mode.",
        width: 2463,
        height: 2463,
        title: "A classic."
    },
    {
        src: Miniwire_3_2_1620x1080,
        srcSet: [
            `${Miniwire_3_2_480x320} 480w,
            ${Miniwire_3_2_720x480} 720w,
            ${Miniwire_3_2_1152x768} 1152w,
            ${Miniwire_3_2_1620x1080} 1620w,
            `
            // ${Miniwire_3_2_3000x2000} 3000w
        ],
        sizes: srcSetSizes,
        alt: "A wide assortment of available colors in the in the Black Diamond Miniwire, a small wire gate carabiner.",
        width: 3000,
        height: 2000,
        title: "Looking for that ONE special carabiner for your keys or shoes? We have a good selection of colors available."
    },
    {
        src: Solution_5_3_1801x1080,
        srcSet: [
            `${Solution_5_3_534x320} 534w,
            ${Solution_5_3_800x480} 800w,
            ${Solution_5_3_1281x768} 1281w,
            ${Solution_5_3_1801x1080} 1801w,
            `
            // ${Solution_5_3_3480x2087} 3480w
        ],
        sizes: srcSetSizes,
        alt: "The LaSportiva Solution in M's and W's models. A super classic aggressive shoe.",
        width: 3480,
        height: 2087,
        title: "We keep the classic in stock."
    },
    {
        src: SolutionComp_5_3_1800x1080,
        srcSet: [
            `${SolutionComp_5_3_533x320} 533w,
            ${SolutionComp_5_3_800x480} 800w,
            ${SolutionComp_5_3_1280x768} 1280w,
            ${SolutionComp_5_3_1800x1080} 1800w,
            `
            // ${SolutionComp_5_3_3565x2139} 3565w
        ],
        sizes: srcSetSizes,
        alt: "The LaSportiva Solution Comp in M's and W's models. A softer model of the classic.",
        width: 3565,
        height: 2139,
        title: "The Solution Comp is a softer version of the classic, try 'em on!"
    },
    {
        src: Dragonflys_16_9_1920x1080,
        srcSet: [
            `${Dragonflys_16_9_568x320} 568w,
            ${Dragonflys_16_9_853x480} 853w,
            ${Dragonflys_16_9_1365x768} 1365w,
            ${Dragonflys_16_9_1920x1080} 1920w,
            `
            // ${Dragonflys_16_9_4032x2268} 4032w
        ],
        sizes: srcSetSizes,
        alt: "DMM Dragonfly cams in all sizes. A new and great option for smaller cams.",
        width: 4032,
        height: 2268,
        title: "DMM Dragonfly. A great small cam option. We try to keep a variety of small cam options in stock from Black Diamond, Fixe, Totem, DMM, and Metolius."
    },
    {
        src: Spoc_1_1_1080x1080,
        srcSet: [
            `${Spoc_1_1_320x320} 320w,
            ${Spoc_1_1_480x480} 480w,
            ${Spoc_1_1_768x768} 768w,
            ${Spoc_1_1_1080x1080} 1080w,
            `
            // ${Spoc_1_1_2833x2833} 2833w
        ],
        sizes: srcSetSizes,
        alt: "Edelrid Spoc, a new option for those in the market for a progress capture pulley.",
        width: 2833,
        height: 2833,
        title: "Edelrid Spoc, a new option for those in the market for a progress capture pulley."
    },
    {
        src: Pivot_1_1_1080x1080,
        srcSet: [
            `${Pivot_1_1_320x320} 320w,
            ${Pivot_1_1_480x480} 480w,
            ${Pivot_1_1_768x768} 768w,
            ${Pivot_1_1_1080x1080} 1080w,
            `
            // ${Pivot_1_1_2502x2502} 2502w
        ],
        sizes: srcSetSizes,
        alt: "DMM Pivot, a popular guide mode belay device like the ATC-Guide or Reverso.",
        width: 2502,
        height: 2502,
        title: "We have the DMM Pivot often. An excellent option to replace your ATC-Guide or Reverso that you dropped off of Birdland, only the 2nd group to drop a belay device that day!"
    },
    {
        src: BigBros_4_3_1440x1080,
        srcSet: [
            `${BigBros_4_3_427x320} 427w,
            ${BigBros_4_3_640x480} 640w,
            ${BigBros_4_3_1024x768} 1024w,
            ${BigBros_4_3_1440x1080} 1440w,
            `
            // ${BigBros_4_3_4032x3024} 4032w
        ],
        sizes: srcSetSizes,
        alt: "The Trango Big Bro adjustable tube chock. We keep the #3 (green) and #4 (blue) in stock. A lightweight option for the offwidth explorer.",
        width: 4032,
        height: 3024,
        title: "The Trango Big Bro adjustable tube chock. We keep the #3 (green) and #4 (blue) in stock. A lightweight option for the offwidth explorer."
    },
    {
        src: TenayaRa_5_3_1800x1080,
        srcSet: [
            `${TenayaRa_5_3_533x320} 533w,
            ${TenayaRa_5_3_800x480} 800w,
            ${TenayaRa_5_3_1280x768} 1280w,
            ${TenayaRa_5_3_1800x1080} 1800w,
            `
            // ${TenayaRa_5_3_3497x2098} 3497w
        ],
        sizes: srcSetSizes,
        alt: "Tenaya Ra, a great option for a comfortable all day or gym shoe.",
        width: 3497,
        height: 2098,
        title: "The Tenaya Ra, an excellent option for a comfortable all day or gym shoe."
    },
    {
        src: C4GreenPurple_16_9_1920x1080,
        srcSet: [
            `${C4GreenPurple_16_9_568x320} 568w,
            ${C4GreenPurple_16_9_853x480} 853w,
            ${C4GreenPurple_16_9_1365x768} 1365w,
            ${C4GreenPurple_16_9_1920x1080} 1920w,
            `
            // ${C4GreenPurple_16_9_4032x2268} 4032w
        ],
        sizes: srcSetSizes,
        alt: "Artistic close up photo of Black Diamond #0.5 and #0.75 cams.",
        width: 4032,
        height: 2268,
        title: "Favorite size cam? We got it."
    },
    {
        src: Brushes_1_1_1080x1080,
        srcSet: [
            `${Brushes_1_1_320x320} 320w,
            ${Brushes_1_1_480x480} 480w,
            ${Brushes_1_1_768x768} 768w,
            ${Brushes_1_1_1080x1080} 1080w,
            `
            // ${Brushes_1_1_2977x2977} 2977w
        ],
        sizes: srcSetSizes,
        alt: "An assortment of bouldering brushes to clean and brush off holds on bouldering problems which have been caked up with too much chalk, actually resulting in a lower friction surface.",
        width: 2977,
        height: 2977,
        title: "Chalk hurting instead of helping your send? Brush it off."
    },
    {
        src: Gridlock_9_16_1080x1920,
        srcSet: [
            `${Gridlock_9_16_320x568} 320w,
            ${Gridlock_9_16_480x853} 480w,
            ${Gridlock_9_16_768x1365} 768w,
            ${Gridlock_9_16_1080x1920} 1080w,
            `
            // ${Gridlock_9_16_2268x4032} 2268w
        ],
        sizes: srcSetSizes,
        alt: "The Black Diamond Gridlock screw gate carabiner. A great option in the realm of anti-crossloading belay carabiners.",
        width: 2268,
        height: 4032,
        title: "The Black Diamond Gridlock screw gate carabiner. A great option in the realm of anti-crossloading belay carabiners."
    },
    {
        src: BigBros2_1_1_1080x1080,
        srcSet: [
            `${BigBros2_1_1_320x320} 320w,
            ${BigBros2_1_1_480x480} 480w,
            ${BigBros2_1_1_768x768} 768w,
            ${BigBros2_1_1_1080x1080} 1080w,
            `
            // ${BigBros2_1_1_2765x2765} 2765w
        ],
        sizes: srcSetSizes,
        alt: "Close up photo of the warning on Big Bro adjustable tube chocks. Don't just push the button carelessly, the spring is strong and can definitely break your nose or teeth.",
        width: 2765,
        height: 2765,
        title: "Big Bros can be dangerous, don't dry fire them carelessly. You can easily break a nose, tooth, or worse."
    },
    {
        src: TotemBlue_4_3_1440x1080,
        srcSet: [
            `${TotemBlue_4_3_427x320} 427w,
            ${TotemBlue_4_3_640x480} 640w,
            ${TotemBlue_4_3_1024x768} 1024w,
            ${TotemBlue_4_3_1440x1080} 1440w,
            `
            // ${TotemBlue_4_3_2441x1831} 2441w
        ],
        sizes: srcSetSizes,
        alt: "Artistic close up of a Totem Cam. Totem Cams are a unique and new variation on the classic spring loaded camming device which excells in pin scars and other places where normally offset cams would be best. Really interesting engineering.",
        width: 2441,
        height: 1831,
        title: "Totem cams, yep. We have them. People are always surprised to see them in stock, but this isn't Yosemite, there are no pin scars here."
    },
    {
        src: BulletproofHMS_9_16_1080x1920,
        srcSet: [
            `${BulletproofHMS_9_16_320x568} 320w,
            ${BulletproofHMS_9_16_480x853} 480w,
            ${BulletproofHMS_9_16_768x1365} 768w,
            ${BulletproofHMS_9_16_1080x1920} 1080w,
            `
            // ${BulletproofHMS_9_16_2029x3607} 2029w
        ],
        sizes: srcSetSizes,
        alt: "Edelrid Bulletproof carabiners, unique locking carabiners with a stainless steel insert to resist rope wear and last longer than pure aluminum carabiners.",
        width: 2029,
        height: 3607,
        title: "Edelrid has made some excellent carabiner innovations recently, like these 'Bulletproof' carabiners with stainless steel areas that resist rope wear better than aluminum... and keep your rope cleaner too!"
    },
    {
        src: BulletproofScrew_9_16_1080x1920,
        srcSet: [
            `${BulletproofScrew_9_16_319x568} 319w,
            ${BulletproofScrew_9_16_480x853} 480w,
            ${BulletproofScrew_9_16_768x1366} 768w,
            ${BulletproofScrew_9_16_1080x1920} 1080w,
            `
            // ${BulletproofScrew_9_16_1618x2877} 1618w
        ],
        sizes: srcSetSizes,
        alt: "Edelrid Bulletproof carabiners, unique locking carabiners with a stainless steel insert to resist rope wear and last longer than pure aluminum carabiners.",
        width: 1618,
        height: 2877,
        title: "Edelrid makes a great masterpoint carabiner that resists wear for top roping through."
    },
    {
        src: Approach2_5_3_1800x1080,
        srcSet: [
            `${Approach2_5_3_533x320} 533w,
            ${Approach2_5_3_800x480} 800w,
            ${Approach2_5_3_1280x768} 1280w,
            ${Approach2_5_3_1800x1080} 1800w,
            `
            // ${Approach2_5_3_4032x2419} 4032w
        ],
        sizes: srcSetSizes,
        alt: "Closeup of Scarpa Crux and Black Diamond Technician Approach Shoes.",
        width: 4032,
        height: 2419,
        title: "The Scarpa Crux is our best selling wider foot approach shoe for those who feel that LaSportiva is too narrow. Black Diamond Technician is a great alternative to the LaSportiva TX2 or TX3."
    },
    {
        src: SmallLockers_16_9_1920x1080,
        srcSet: [
            `${SmallLockers_16_9_568x320} 568w,
            ${SmallLockers_16_9_853x480} 853w,
            ${SmallLockers_16_9_1365x768} 1365w,
            ${SmallLockers_16_9_1920x1080} 1920w,
            `
            // ${SmallLockers_16_9_3161x1778} 3161w
        ],
        sizes: srcSetSizes,
        alt: "Close up picture of several small locking carabiners.",
        width: 3161,
        height: 1778,
        title: "We carry many options for smaller locking carabiners. Typically options from Black Diamond, Petzl, Metolius, Edelrid, ... sometimes DMM and Grivel too."
    },
    {
        src: Postcards_3_4_1080x1440,
        srcSet: [
            `${Postcards_3_4_320x427} 320w,
            ${Postcards_3_4_480x640} 480w,
            ${Postcards_3_4_768x1024} 768w,
            ${Postcards_3_4_1080x1440} 1080w,
            `
            // ${Postcards_3_4_2695x3594} 2695w
        ],
        sizes: srcSetSizes,
        alt: "Stickers and postcards designed by local artists.",
        width: 2695,
        height: 3594,
        title: "Stickers and postcards make great mementos!"
    },
    {
        src: Barnacle_4_3_1440x1080,
        srcSet: [
            `${Barnacle_4_3_427x320} 427w,
            ${Barnacle_4_3_640x480} 640w,
            ${Barnacle_4_3_1024x768} 1024w,
            ${Barnacle_4_3_1440x1080} 1440w,
            `
            // ${Barnacle_4_3_3024x2268} 3024w
        ],
        sizes: srcSetSizes,
        alt: "Well behaved dogs are very welcome in the shop.",
        width: 3024,
        height: 2268,
        title: "Well behaved dogs are very welcome in the shop!"
    },
    {
        src: Houdini_1_1_1080x1080,
        srcSet: [
            `${Houdini_1_1_320x320} 320w,
            ${Houdini_1_1_480x480} 480w,
            ${Houdini_1_1_768x768} 768w,
            ${Houdini_1_1_1080x1080} 1080w,
            `
            // ${Houdini_1_1_3024x3024} 3024w
        ],
        sizes: srcSetSizes,
        alt: "The Patagonia Houdini, a super packable windshell that works great for Red Rock multipitch climbing.",
        width: 3024,
        height: 3024,
        title: "The Patagonia Houdini, a super packable windshell that works great for Red Rock multipitch climbing. Throw it on at belays so the wind doesn't take away all your heat and you shiver and shoot daggers out of your eyes up towards your leader who is off doing who knows what and should have you on belay already! Sheesh!"
    },
    {
        src: Puffy_9_16_1080x1920,
        srcSet: [
            `${Puffy_9_16_320x568} 320w,
            ${Puffy_9_16_480x853} 480w,
            ${Puffy_9_16_768x1365} 768w,
            ${Puffy_9_16_1080x1920} 1080w,
            `
            // ${Puffy_9_16_2268x4032} 2268w
        ],
        sizes: srcSetSizes,
        alt: "A Patagonia Puffy jacket.",
        width: 2268,
        height: 4032,
        title: "We sell a variety of jackets, wind, fleece, and puffy, from Patagonia."
    },
    {
        src: Yeti_1_1_1080x1080,
        srcSet: [
            `${Yeti_1_1_320x320} 320w,
            ${Yeti_1_1_480x480} 480w,
            ${Yeti_1_1_768x768} 768w,
            ${Yeti_1_1_1080x1080} 1080w,
            `
            // ${Yeti_1_1_3024x3024} 3024w
        ],
        sizes: srcSetSizes,
        alt: "Yeti can coolers. These fit standard soda or beer size cans and keep your drink cooler than a normal neoprene Koozie would.",
        width: 3024,
        height: 3024,
        title: "Yeti can coolers. These fit standard soda or beer size cans and keep your drink cooler than a normal neoprene Koozie would."
    },
    {
        src: Dromedary_16_9_1920x1080,
        srcSet: [
            `${Dromedary_16_9_568x320} 568w,
            ${Dromedary_16_9_853x480} 853w,
            ${Dromedary_16_9_1365x768} 1365w,
            ${Dromedary_16_9_1920x1080} 1920w,
            `
            // ${Dromedary_16_9_3806x2141} 3806w
        ],
        sizes: srcSetSizes,
        alt: "MSR Dromlite and Dromedary water storage bags. Great option for durable water storage.",
        width: 3806,
        height: 2141,
        title: "MSR Dromlite and Dromedary water storage bags. Great option for durable water storage."
    },
    {
        src: Patagonia_1_1_1080x1080,
        srcSet: [
            `${Patagonia_1_1_320x320} 320w,
            ${Patagonia_1_1_480x480} 480w,
            ${Patagonia_1_1_768x768} 768w,
            ${Patagonia_1_1_1080x1080} 1080w,
            `
            // ${Patagonia_1_1_3024x3024} 3024w
        ],
        sizes: srcSetSizes,
        alt: "Patagonia wicking shirt with old school hexentric chock graphic and 'clean climbing' text.",
        width: 3024,
        height: 3024,
        title: "Patagonia clothing, we got it."
    },
    {
        src: Top100_9_16_1080x1920,
        srcSet: [
            `${Top100_9_16_320x568} 320w,
            ${Top100_9_16_480x853} 480w,
            ${Top100_9_16_768x1365} 768w,
            ${Top100_9_16_1080x1920} 1080w,
            `
            // ${Top100_9_16_1883x3347} 1883w
        ],
        sizes: srcSetSizes,
        alt: "Top 100 Outdoor Retailers trophy.",
        width: 1883,
        height: 3347,
        title: "Maybe we can jam it in a chimney?"
    },
    {
        src: WLB_1_1_1080x1080,
        srcSet: [
            `${WLB_1_1_320x320} 320w,
            ${WLB_1_1_480x480} 480w,
            ${WLB_1_1_768x768} 768w,
            ${WLB_1_1_1080x1080} 1080w,
            `
            // ${WLB_1_1_1930x1930} 1930w
        ],
        sizes: srcSetSizes,
        alt: "Wendell Broussard, 'The Dean of Red Rock'",
        width: 1930,
        height: 1930,
        title: "Wendell Broussard, 'The Dean of Red Rock.' Mentor to soooo many."
    },
    {
        src: Bowls_16_9_1920x1080,
        srcSet: [
            `${Bowls_16_9_568x319} 568w,
            ${Bowls_16_9_853x480} 853w,
            ${Bowls_16_9_1365x768} 1365w,
            ${Bowls_16_9_1920x1080} 1920w,
            `
            // ${Bowls_16_9_3892x2189} 3892w
        ],
        sizes: srcSetSizes,
        alt: "MSR Plates and Bowls for camping",
        width: 3892,
        height: 2189,
        title: "MSR Makes some great lightweight camping cookery options."
    },
    {
        src: DRSVintage_1_1_1080x1080,
        srcSet: [
            `${DRSVintage_1_1_320x320} 320w,
            ${DRSVintage_1_1_480x480} 480w,
            ${DRSVintage_1_1_768x768} 768w,
            ${DRSVintage_1_1_1080x1080} 1080w,
            `
            // ${DRSVintage_1_1_2798x2798} 2798w
        ],
        sizes: srcSetSizes,
        alt: "Desert Rock Sports, vintage-retro tank",
        width: 2798,
        height: 2798,
        title: "Desert Rock Sports, vintage-retro tank. We will get these re-made soon (if they are not already)"
    },
    // {
    //     src: ,
    //     alt: "",
    //     width: ,
    //     height: ,
    //     title: ""
    // },
];
