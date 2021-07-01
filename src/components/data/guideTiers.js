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
        tierDescription: "Description of a tier 1 half day",
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
        tierDescription: "(add later)",
        costTable: [
            {1: "$300"},
            {2: "$425"}
        ],
        tierNotes: "Please call for 3 or more climbers."
    },
    {
        key: 2,
        img: Birdland,
        imgSm: Birdland_500w,
        imgAltText: "A climber on an exciting and classic multipitch rock climb called Birdland.",
        imgCredit: "Birdland. Photo by Matt Kuehl.",
        tierName: "Tier 2 - Multipitch",
        tierDuration: "7-8 Hours (+/-)",
        tierDescription: "(add later)",
        costTable: [
            {1: "$350"},
            {2: "$600"}
        ],
        tierNotes: "We add $50 for any route that is accessed from the Late Night trailhead system, such as Black Velvet Canyon."
    },
    {
        key: 3,
        img: Levitation29,
        imgSm: Levitation29_500w,
        imgAltText: "A climbers on a difficult and very classic multipitch rock climb, Levitation 29.",
        imgCredit: "Levitation 29. Photo by Matt Kuehl.",
        tierName: "Tier 3 - Multipitch",
        tierDuration: "8-14+ Hours",
        tierDescription: "(add later)",
        costTable: [
            {1: "$400 to $600"},
            {2: "$700 to $900"}
        ],
        tierNotes: "Prior experience necessary. This is an expert tier. Pre-dawn starts are not unusual. Prices are determined based on the difficulties and complexities of the route chosen. For example, Solar Slab would be $400 for 1 climber, while Epinephrine, Levitation 29, or a route on Rainbow Wall would be at least $600. Linkups of multiple long routes, extraordinarily long routes, or other complexities could lead to even higher prices."
    }
];