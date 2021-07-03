// % Photo imports here:
import Calico from '../../img/RRCG/calicobasin_original_by_Matt_Kuehl.jpg';
import Calico_500w from '../../img/RRCG/calicobasin_500px_by_Matt_Kuehl.jpg';
import Calico2 from '../../img/RRCG/calicobasin2_original_by_Matt_Kuehl.jpg';
import Calico2_500w from '../../img/RRCG/calicobasin2_500px_by_Matt_Kuehl.jpg';
import Birdland from '../../img/RRCG/Birdland_original_by_Matt_Kuehl.jpeg';
import Birdland_500w from '../../img/RRCG/Birdland_500px_by_Matt_Kuehl.jpeg';
import Levitation29 from '../../img/RRCG/Levitation29_original_by_Matt_Kuehl.jpeg';
import Levitation29_500w from '../../img/RRCG/Levitation29_500px_by_Matt_Kuehl.jpeg';


// function TierCard(img, imgSm, imgAltText, imgCredit, tierName, tierDuration, tierDescription, costTable, tierNotes) {...}
export const tiers = [
    {
        key: 0,
        img: Calico,
        imgSm: Calico_500w,
        imgAltText: "A climber on an exciting vertical climb up a sandstone wall.",
        imgCredit: "Calico Basin. Photo by Matt Kuehl.",
        tierName: "Tier 1 - Half Day",
        tierDuration: "4-5 Hours",
        tierDescription: "Our Tier 1 day is aimed at either people who have never climbed at all, or only have a small amount of experience. Top roped sport or trad climbing is the norm. Flexible difficulty range. Locations with short approach hikes. Half day is great for situations like: you don't have a lot of time to take advantage of, you just want to get a taste for climbing, or its summer and we have to chase the shade. This is a good gym-to-crag skills option for those looking to transition from climbing in a gym to climbing outside. We can also do intros to lead climbing, intros to multipitch, intros to trad, self rescue, instruction on certain types of climbing such as crack climbing and offwidth climbing, etc... We are pretty flexible, just keep in mind that with 4-5h there is only so much we can teach. A full day or multiple half-days may work better for certain skill sets where practice is very beneficial. There are a few short multipitch climbs and we can typically fit one of them into a half day: Man's Best Friend 5.7 2p, Big Bad Wolf 5.9 3p, or Physical Graffiti 5.7 2p.",
        costTable: [
            {1: '$225'},
            {2: '$300'},
            {3: '$420'},
            {4: '$520'},
            {5: '$600'}
        ],
        tierNotes: "Prices are total, not per-person. We can accomodate large groups. In general for every climber after 5 climbers, we add $100. Example: 8 climbers would be $900 total."
    },
    {
        key: 1,
        img: Calico2,
        imgSm: Calico2_500w,
        imgAltText: "A climber high up on a beautifully smooth section of sandstone on a large cliff.",
        imgCredit: "Calico Basin. Photo by Matt Kuehl.",
        tierName: "Tier 1 - Full Day",
        tierDuration: "7-8 Hours",
        tierDescription: "Tier 1 full day gives significantly more time to climb but is still aimed for areas where the approach hikes are short. Great for getting a lot of top roped sport climbing in. A popular option is climbing these 2 short multipitch climbs back-to-back: Big Bad Wolf 5.9 3p & Physical Graffiti 5.7 2p.",
        costTable: [
            {1: "$300"},
            {2: "$425"},
            {3: "$600"},
            {4: "$775"},
            {5: "$925"}
        ],
        tierNotes: "5 or more climbers we will typically add a second guide to make sure everyone gets enough time on the rock. 6 or more climbers add $150 each additional climber."
    },
    {
        key: 2,
        img: Birdland,
        imgSm: Birdland_500w,
        imgAltText: "A climber on an exciting and classic multipitch rock climb called Birdland.",
        imgCredit: "Birdland. Photo by Matt Kuehl.",
        tierName: "Tier 2 - Multipitch",
        tierDuration: "7-8 Hours (+/-)",
        tierDescription: "Our Tier 2 is designed for classic multipitch routes in the canyons of typically 4-6 pitches, sometimes 7. Due to the nature of the Red Rock Canyon, these are all traditional routes. Prior experience removing placed trad gear is nice to have, but not necessary, we can teach you how on the ground before we climb. Since there is potential for other parties to be on the route and we can't control how fast they climb, the duration of the day is an estimate. Some routes we can rappel down, others we must walk off. Popular routes include classics like: Cat in the Hat 5.6 6p, Olive Oil 5.7 5p, Tunnel Vision 5.7 6p, Birdland 5.7+ 6p, Dark Shadows 5.8 4p, Purblind Pillar 5.8 6p, Frogland 5.8 6p. and Y2K 5.10a 4p.",
        costTable: [
            {1: "$350"},
            {2: "$600"}
        ],
        tierNotes: "We add $50 for any route that is accessed from the Late Night trailhead system, such as Black Velvet Canyon. In multipitch we limit it to 2 clients per guide, anything higher is excessively complicated, slow, and fairly rude to any other climbing parties who may be stuck waiting for excessively long times below. If the approach and/or descent hikes are long enough, we may bump it up to a Tier 3 day, even if the number of pitches is low. We are going mostly by an estimate of the number of hours needed. Ex. The route, Northeast Arete on Bridge Mtn is 5.5 5p... but thats after many miles of complicated hiking and the descent hike is something like 8-10mi. The hike to the route easily takes much longer than it takes to actually climb the route."
    },
    {
        key: 3,
        img: Levitation29,
        imgSm: Levitation29_500w,
        imgAltText: "A climbers on a difficult and very classic multipitch rock climb, Levitation 29.",
        imgCredit: "Levitation 29. Photo by Matt Kuehl.",
        tierName: "Tier 3 - Multipitch",
        tierDuration: "8-14+ Hours",
        tierDescription: "Tier 3 is for considerably longer multipitch routes in the canyons. Long approaches, linkups of multiple routes, full on adventure, long walkoffs are typical, views are amazing. Popular choices: Johnny Vegas 5.7 4p + Solar Slab 5.6 9p (rap or walk off), MysterZ 5.7 7p + Armatron 5.9 6p, Dark Shadows to the summit of the Mescalito 5.8 10+ pitches, Hot Flash 5.8 10p, Crimson Chrysalis 5.8+ 9p, Black Orpheus 5.9+ 8p, Epinephrine 5.9 13p, Resolution Arete 5.10 A1 24p, Inti Watana 5.10c 12p, Woman of Mountain Dreams 5.11a/b 17p, Levitation 29 5.11b/c 9p, and The Original Route 5.12- 14p",
        costTable: [
            {1: "$400 to $600"},
            {2: "$700 to $900"}
        ],
        tierNotes: "Prior experience necessary. Pre-dawn starts are not unusual. Prices are determined based on the difficulties and complexities of the route chosen as well as estimated time needed. For example, Solar Slab would be $400 for 1 climber, while Epinephrine, Levitation 29, or a route on Rainbow Wall would be at least $600. Linkups of multiple long routes, extraordinarily long routes, or other complexities could lead to even higher prices. Often a good idea to try to book a half day with the same guide in advance so they can get a good idea of your movement skills to make sure that they feel the route selected is a good fit for you. Or so they can select an appropriate route if you don't have something in mind."
    }
];