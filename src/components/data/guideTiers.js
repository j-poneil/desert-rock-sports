import React from 'react';

// can replace all 'p' with 'Card.Text' ... but do I have to?
// import Card from 'react-bootstrap/Card';


// % Photo imports here:
// import Calico from '../../img/RRCG/calicobasin_original_by_Matt_Kuehl.jpg';
import Calico_500w from '../../img/RRCG/calicobasin_500px_by_Matt_Kuehl.jpg';
// import Calico2 from '../../img/RRCG/calicobasin2_original_by_Matt_Kuehl.jpg';
import Calico2_500w from '../../img/RRCG/calicobasin2_500px_by_Matt_Kuehl.jpg';
// import Birdland from '../../img/RRCG/Birdland_original_by_Matt_Kuehl.jpeg';
import Birdland_500w from '../../img/RRCG/Birdland_500px_by_Matt_Kuehl.jpeg';
// import Levitation29 from '../../img/RRCG/Levitation29_original_by_Matt_Kuehl.jpeg';
import Levitation29_500w from '../../img/RRCG/Levitation29_500px_by_Matt_Kuehl.jpeg';


// function TierCard(img, imgSm, imgAltText, imgCredit, tierName, tierDuration, tierDescription, costTable, tierNotes) {...}
export const tiers = [
    {
        // img: Calico,
        imgSm: Calico_500w,
        imgAltText: "A climber on an exciting vertical climb up a sandstone wall.",
        imgCredit: "Calico Basin. Photo by Matt Kuehl.",
        tierName: "Tier 1 - Half Day",
        tierDuration: "4-5 Hours",
        tierDescription: () => (
            <>
                <p>Our Tier 1 day is aimed at either people who have never climbed at all, or only have a small amount of experience. Top roped sport or trad climbing is the norm. Flexible difficulty range. Locations with short approach hikes.</p>
                <p>Half day is great for situations like: you don't have a lot of time to take advantage of, you just want to get a taste for climbing, or its summer and we have to chase the shade. This is a good gym-to-crag skills option for those looking to transition from climbing in a gym to climbing outside.</p>
                <p>We can also do intros to lead climbing, intros to multipitch, intros to trad, self rescue, instruction on certain types of climbing such as crack climbing and offwidth climbing, etc... We are pretty flexible, just keep in mind that with 4-5h there is only so much we can teach. A full day or multiple half-days may work better for certain skill sets where practice is very beneficial.</p>
                <p>There are a few short multipitch climbs that fit in Tier 1 and we can typically fit one of them into a half day:</p>
                <ul>
                    <li>Man's Best Friend 5.7 2p sport</li>
                    <li>Big Bad Wolf 5.9 3p sport</li>
                    <li>Physical Graffiti 5.7 2p trad</li>
                    <li>etc...</li>
                </ul>
            </>
        ),
        costTable: [
            {1: '$250'},
            {2: '$350'},
            {3: '$450'},
            // {4: '$600'},
            // {5: '$750'},
            // {6: '$900'},
            // {7: '$1050'},
            // {8: '$1,200'}
        ],
        tierNotes: () => (
            <>
                <p>3-8 Climbers is just $150/person. Call us for larger groups.</p>
                <p>4-5 hours means 4-5h hours meetup at shop to back at shop. ~4h at the crag is typical.</p>
            </>
        )
    },
    {
        // img: Calico2,
        imgSm: Calico2_500w,
        imgAltText: "A climber high up on a beautifully smooth section of sandstone on a large cliff.",
        imgCredit: "Calico Basin. Photo by Matt Kuehl.",
        tierName: "Tier 1 - Full Day",
        tierDuration: "7-8 Hours",
        tierDescription: () => (
            <>
                <p>Tier 1 full day gives significantly more time to climb but is still aimed for areas where the approach hikes are short. Great for getting a lot of top roped sport climbing in.</p>
                <p>A full day also has enough time to make it worth while to check out 2 different walls, where usually, with a half day, there is only really time for 1 wall and packing up and moving to a different wall doesn't make sense with the limited time available.</p>
                <p>Its also great for longer instructional or coaching focused outings, just tell us what you are interested in and we will build a curriculum for you, some example topics and goals:</p>
                <ul>
                    <li>Gym to Crag instruction</li>
                    <li>Trad gear placements & anchors</li>
                    <li>Multipitch transitions</li>
                    <li>Self rescue</li>
                    <li>Crack climbing techniqe</li>
                    <li>Offwidth climbing technique</li>
                    <li>General climbing movement coaching<br />We have guides who are appropriate for beginners all the way up to 5.12-13 crushers</li>
                </ul>
                <p>Another popular option is doing a very short multipitch, like one of those which would fit into a Tier 1 half-day, and then doing some single pitch cragging near by.</p>
            </>
        ),
        costTable: [
            {1: "$350"},
            {2: "$450"},
            {3: "$600"},
            // {4: "$800"},
            // {5: "$1,000"},
            // {6: "$1,200"},
            // {7: "$1,400"},
            // {8: "$1,600"},
        ],
        tierNotes: () => (
            <>
                <p>3-8 Climbers is just $200/person. Call us for larger groups.</p>
                <p>~7h at Red Rock / crags is typical</p>
            </>
        )
    },
    {
        // img: Birdland,
        imgSm: Birdland_500w,
        imgAltText: "A climber on an exciting and classic multipitch rock climb called Birdland.",
        imgCredit: "Birdland. Photo by Matt Kuehl.",
        tierName: "Tier 2 - Multipitch",
        tierDuration: "7-8 Hours (+/-)",
        tierDescription: () => (
            <>
                <p>Our Tier 2 is designed for classic multipitch routes in the canyons of typically 4-7 pitches. Due to the nature of the Red Rock Canyon, these are all traditional routes. Prior experience removing placed trad gear is nice to have, but not necessary, we can teach you how on the ground before we climb.</p>
                <p>Since there is potential for other parties to be on the route and we can't control how fast they climb, the duration of the day is an estimate. Some routes we can rappel down, others we must walk and scramble off. Popular routes include classics like:</p>
                <ul>
                    <li>Physical Graffiti 5.7 2p + Big Bad Wold 5.9 3p</li>
                    <li>Cat in the Hat 5.6 6p</li>
                    <li>Olive Oil 5.7 5p</li>
                    <li>Tunnel Vision 5.7 6p</li>
                    <li>Birdland 5.7+ 6p</li>
                    <li>Dark Shadows 5.8 4p</li>
                    <li>Purblind Pillar 5.8 6p</li>
                    <li>Frogland 5.8 6p</li>
                    <li>Y2K 5.10a 4p</li>
                </ul>
            </>
        ),
        costTable: [
            {1: "$375"},
            {2: "$600"}
        ],
        tierNotes: () => (
            <>
                {/* <p>We add $50 for any route that is accessed from the Late Night trailhead system, such as Black Velvet Canyon.</p> */}
                <p>In multipitch we limit it to 2 clients per guide, anything higher is excessively complicated, slow, and fairly rude to any other climbing parties who may be stuck waiting for excessively long times below. So if you have 3 who want to do multipitch, 2 will be with 1 guide and the third will be with a separate guide as if booked separately. $600 + $375</p>
                <p>The client must be able to lead belay the guide. If the client is very young and small/light, and a parent/guardian can't go up to lead belay, then a 2nd guide may be required to make it a party of 3 so that the leader has a suitable belayer.</p>
            </>
        )
    },
    {
        // img: Levitation29,
        imgSm: Levitation29_500w,
        imgAltText: "A climbers on a difficult and very classic multipitch rock climb, Levitation 29.",
        imgCredit: "Levitation 29. Photo by Matt Kuehl.",
        tierName: "Tier 3 - Multipitch",
        tierDuration: "~8-14+ Hours",
        tierDescription: () => (
            <>
                <p>Tier 3 is for considerably longer multipitch routes in the canyons. Long approaches, linkups of multiple routes, full on adventure, long walkoffs are typical, views are amazing. Typically 8+ pitches. Though, for example, Northeast Arete of Bridge Mountain, while only 5.6 5p would fit in this tier due to the excessively long approach and descent which would take longer to do than to climb the actual route. We only rarely guide canyoneering routes, but if we were to, it would likely fit in this pricing tier. Popular choices:</p>
                <ul>
                    <li>Johnny Vegas 5.7 4p + Solar Slab 5.6 9p (rap or walk off)</li>
                    <li>MysterZ 5.7 7p + Armatron 5.9 6p</li>
                    <li>Dark Shadows to the summit of the Mescalito 5.8 10+ pitches</li>
                    <li>Hot Flash 5.8 10p</li>
                    <li>Crimson Chrysalis 5.8+ 9p</li>
                    <li>Black Orpheus 5.9+ 8p</li>
                    <li>Epinephrine 5.9 13p</li>
                    <li>Resolution Arete 5.10 A1 24p</li>
                    <li>Inti Watana 5.10c 12p</li>
                    <li>Woman of Mountain Dreams 5.11a/b 17p</li>
                    <li>Levitation 29 5.11b/c 9p</li>
                    <li>The Original Route 5.12- 14p</li>
                </ul>
            </>
        ),
        costTable: [
            {1: "$450 to $600"},
            {2: "$700 to $900"}
        ],
        tierNotes: () => (
            <>
                <p>Prior experience is absolutely necessary. Pre-dawn starts are not unusual. Prices are determined based on the difficulties and complexities of the route chosen as well as estimated time needed. For example, Solar Slab with rap off would be $450 for 1 climber, Solar Slab with walk off is $500... while Epinephrine, Levitation 29, or a route on Rainbow Wall would be at least $600. Linkups of multiple long routes, extraordinarily long routes, or other complexities could lead to even higher prices.</p>
                <p>Very often it is a good idea to try to book a half day with the same guide in advance so they can get a good idea of your movement skills to make sure that they feel the route selected is a good fit for you. Or so they can select an appropriate route if you don't have something in mind.</p>
            </>
        )
    },
    //% ================================================================
    // For future anticipated tiers
    // {
    //     // img: ?,
    //     imgSm: ______,
    //     imgAltText: "",
    //     imgCredit: "Photo by ______",
    //     tierName: "Tier - Canyoneering",
    //     tierDuration: "??? hours",
    //     tierDescription: () => (
    //         <>
    //             <p>We rarely guide canyoneering, but it is an option.</p>
    //             <ul>
    //                 <li>The Maze / Ice Cube Canyon</li>
    //                 <li>...</li>
    //                 <li>...</li>
    //                 <li>etc...</li>
    //             </ul>
    //         </>
    //     ),
    //     costTable: [
    //         {1: '$???'},
    //         {2: '$???'},
    //         {3: '$???'},
    //         {4: '$???'},
    //         {5: '$???'}
    //     ],
    //     tierNotes: () => (
    //         <>
    //             <p>( Notes on our canyoneering outing... )</p>
    //         </>
    //     )
    // },
    // {
    //     // img: ?,
    //     imgSm: ______,
    //     imgAltText: "",
    //     imgCredit: "Photo by ______",
    //     tierName: "Tier - Adventure Hike",
    //     tierDuration: "??? hours",
    //     tierDescription: () => (
    //         <>
    //             <p>Our adventure hike tier is a flexible option. In the past some experienced multipitch climbers have used this on active rest days as a good way to go with a guide and scope out the walk off descent for big routes that they plan to do in the future.</p>
    //             <p>Its also a good option if you just want to go hiking.</p>
    //             <ul>
    //                 <li>Bridge Mountain</li>
    //                 <li>Wilson via First Creek</li>
    //                 <li>Juniper Summit</li>
    //                 <li>White Rock Loop</li>
    //                 <li>etc...</li>
    //             </ul>
    //         </>
    //     ),
    //     costTable: [
    //         {1: '$???'},
    //         {2: '$???'},
    //         {3: '$???'},
    //         {4: '$???'},
    //         {5: '$???'}
    //     ],
    //     tierNotes: () => (
    //         <>
    //             <p>( Notes on our adventure hike excursions... )</p>
    //         </>
    //     )
    // },
    // {
    //     // img: ?,
    //     imgSm: ______,
    //     imgAltText: "",
    //     imgCredit: "Photo by ______",
    //     tierName: "Tier - Bouldering",
    //     tierDuration: "??? hours",
    //     tierDescription: () => (
    //         <>
    //             <p>Our guides specialize in sport, trad, and multipitch climbing. Many of them only have a minor exposure to the bouldering that Red Rock Canyon has to offer.</p>
    //             <p>We are checking to see if our permit with the BLM allows us to provide this as a guided service. There does not seem to be much demand.</p>
    //             <p></p>
    //             <ul>
    //                 <li>Kraft Boulders</li>
    //                 <li>?</li>
    //                 <li>?</li>
    //                 <li>?</li>
    //                 <li>etc...</li>
    //             </ul>
    //         </>
    //     ),
    //     costTable: [
    //         {1: '$???'},
    //         {2: '$???'},
    //         {3: '$???'},
    //         {4: '$???'},
    //         {5: '$???'}
    //     ],
    //     tierNotes: () => (
    //         <>
    //             <p>( Notes on our bouldering excursions... )</p>
    //         </>
    //     )
    // },
];