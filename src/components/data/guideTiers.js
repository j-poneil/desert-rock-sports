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
            {1: '$225'},
            {2: '$300'},
            {3: '$420'},
            {4: '$520'},
            {5: '$600'}
        ],
        tierNotes: () => (
            <>
                <p>In general for every climber after 5 climbers, we add $100. Example: 8 climbers would be $900 total.</p>
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
                <p>Tier 1 full day gives significantly more time to climb but is still aimed for areas where the approach hikes are short. Great for getting a lot of top roped sport climbing in. A popular option is climbing these 2 short multipitch climbs back-to-back:</p>
                <ul>
                    <li>Big Bad Wolf 5.9 3p sport</li>
                    <li>Physical Graffiti 5.7 2p trad</li>
                </ul>
                <p>A full day also has enough time to make it worth while to check out 2 different walls, where usually, with a half day, there is only really time for 1 wall and packing up and moving to a different wall doesn't make sense with the limited time available.</p>
            </>
        ),
        costTable: [
            {1: "$300"},
            {2: "$425"},
            {3: "$600"},
            {4: "$775"},
            {5: "$925"}
        ],
        tierNotes: () => (
            <>
                <p>6 or more climbers add $150 each additional climber.</p>
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
                <p>Our Tier 2 is designed for classic multipitch routes in the canyons of typically 4-6 pitches, sometimes 7. Due to the nature of the Red Rock Canyon, these are all traditional routes. Prior experience removing placed trad gear is nice to have, but not necessary, we can teach you how on the ground before we climb.</p>
                <p>Since there is potential for other parties to be on the route and we can't control how fast they climb, the duration of the day is an estimate. Some routes we can rappel down, others we must walk off. Popular routes include classics like:</p>
                <ul>
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
            {1: "$350"},
            {2: "$600"}
        ],
        tierNotes: () => (
            <>
                {/* <p>We add $50 for any route that is accessed from the Late Night trailhead system, such as Black Velvet Canyon.</p> */}
                <p>In multipitch we limit it to 2 clients per guide, anything higher is excessively complicated, slow, and fairly rude to any other climbing parties who may be stuck waiting for excessively long times below.</p>
                <p>If the approach and/or descent hikes are long enough, we may bump it up to a Tier 3 day, even if the number of pitches is low. We are going mostly by an estimate of the number of hours needed. Ex. The route, Northeast Arete on Bridge Mtn is 5.5 5p... but thats after many miles of complicated hiking and the descent hike is something like 8-10mi. The hike to the route easily takes much longer than it takes to actually climb the route, so it is most certainly not Tier 2.</p>
            </>
        )
    },
    {
        // img: Levitation29,
        imgSm: Levitation29_500w,
        imgAltText: "A climbers on a difficult and very classic multipitch rock climb, Levitation 29.",
        imgCredit: "Levitation 29. Photo by Matt Kuehl.",
        tierName: "Tier 3 - Multipitch",
        tierDuration: "8-14+ Hours",
        tierDescription: () => (
            <>
                <p>Tier 3 is for considerably longer multipitch routes in the canyons. Long approaches, linkups of multiple routes, full on adventure, long walkoffs are typical, views are amazing. Popular choices:</p>
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
            {1: "$400 to $600"},
            {2: "$700 to $900"}
        ],
        tierNotes: () => (
            <>
                <p>Prior experience is absolutely necessary. Pre-dawn starts are not unusual. Prices are determined based on the difficulties and complexities of the route chosen as well as estimated time needed. For example, Solar Slab would be $400 for 1 climber, while Epinephrine, Levitation 29, or a route on Rainbow Wall would be at least $600. Linkups of multiple long routes, extraordinarily long routes, or other complexities could lead to even higher prices.</p>
                <p>Very often it is a good idea to try to book a half day with the same guide in advance so they can get a good idea of your movement skills to make sure that they feel the route selected is a good fit for you. Or so they can select an appropriate route if you don't have something in mind.</p>
            </>
        )
    },
    // {
    //     imgSm: Levitation29_500w,
    //     imgAltText: "A climbers on a difficult and very classic multipitch rock climb, Levitation 29.",
    //     imgCredit: "Levitation 29. Photo by Matt Kuehl.",
    //     tierName: "Tier 4 - Adventure Hike",
    //     tierDuration: "8-14+ Hours",
    //     tierDescription: () => (<><p>For long remote adventure hikes, like Bridge Mountain</p></>),
    //     costTable: [
    //         {1: "$400 to $600"},
    //         {2: "$700 to $900"}
    //     ],
    //     tierNotes: () => (<><p>Fitness is necessary.</p></>)
    // },
    // {
    //     img: Levitation29,
    //     imgSm: Levitation29_500w,
    //     imgAltText: "A climbers on a difficult and very classic multipitch rock climb, Levitation 29.",
    //     imgCredit: "Levitation 29. Photo by Matt Kuehl.",
    //     tierName: "Tier 5 - Big Wall",
    //     tierDuration: "24h+",
    //     tierDescription: () => (<><p>For multi-day climbs where you are sleeping on the wall, either on portaledge or a big enough natural rock ledge.</p></>),
    //     costTable: [
    //         {1: "$400 to $600"},
    //         {2: "$700 to $900"}
    //     ],
    //     tierNotes: () => (<><p>This is a huge ordeal.</p></>)
    // }
];