import React from 'react';

import TierCard from './sub/TierCard';

// % Photo imports here:
import Calico from '../img/RRCG/calicobasin_original_by_Matt_Kuehl.jpg';
import Calico_500w from '../img/RRCG/calicobasin_500px_by_Matt_Kuehl.jpg';
import Calico2 from '../img/RRCG/calicobasin2_original_by_Matt_Kuehl.jpg';
import Calico2_500w from '../img/RRCG/calicobasin2_500px_by_Matt_Kuehl.jpg';
import Birdland from '../img/RRCG/Birdland_original_by_Matt_Kuehl.jpeg';
import Birdland_500w from '../img/RRCG/Birdland_500px_by_Matt_Kuehl.jpeg';
import Levitation29 from '../img/RRCG/Levitation29_original_by_Matt_Kuehl.jpeg';
import Levitation29_500w from '../img/RRCG/Levitation29_500px_by_Matt_Kuehl.jpeg';

// styles here:
// src\stylesheets\pages\_guiding.sass

export default function Guiding(){

    // function TierCard(img, imgSm, imgAltText, imgCredit, tierName, tierDuration, tierDescription, costTable, tierNotes) {...}
    const tiers = [
        {
            img: { Calico },
            imgSm: { Calico_500w },
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
            img: { Calico2 },
            imgSm: { Calico2_500w },
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
            img: { Birdland },
            imgSm: { Birdland_500w },
            imgAltText: "A climber on an exciting and classic multipitch rock climb called Birdland.",
            imgCredit: "Birdland. Photo by Matt Kuehl.",
            tierName: "Tier 2 - Multipitch",
            tierDuration: "7-8 Hours (plus or minus)",
            tierDescription: "(add later)",
            costTable: [
                {1: "$350"},
                {2: "$600"}
            ],
            tierNotes: "We add $50 for any route that is accessed from the Late Night trailhead system, such as Black Velvet Canyon."
        },
        {
            img: { Levitation29 },
            imgSm: { Levitation29_500w },
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

    //
    const tierList = tiers.map((i) => {
        return (
            <TierCard
                img={i.img}
                imgSm={i.imgSm}
                imgAltText={i.imgAltText}
                imgCredit={i.imgCredit}
                tierName={i.tierName}
                tierDuration={i.tierDuration}
                tierDescription={i.tierDescription}
                costTable={i.costTable}
                tierNotes={i.tierNotes}
            />
        );
    });

    const guides = [
        {
            name: "Dan Young",
            certs: "",
            exp: "",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        },
        {
            name: "Josh Janes",
            certs: "",
            exp: "",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        },
        {
            name: "Travis O'Neil (aka T2)",
            certs: "AMGA SPI, WFR",
            exp: "8+ years, 3 guiding",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        },
        {
            name: "Adam Happensack",
            certs: "",
            exp: "",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        }
    ];

    // these use short circuit evaluation inline
    // like {i.bio2 !== "" && <p>i.bio2</p>}
    // they work because if both evaluate to true, the second thing is returned
    // if false, it is ignored
    const guideList = guides.map((i) => {
        if(i.active){
            return (
                <div key={i.name} className="twoflex-container">
                    <div>
                        <img className="splash-img" src='https://via.placeholder.com/500x400' alt={i.name} />
                    </div>
                    <div>
                        <h3>{i.name} {i.ig !== "" && <a href={i.ig}>IG</a>}</h3>
                        {i.certs !== "" && <p>{i.certs}</p>}
                        {i.exp !== "" && <p>{i.exp}</p>}
                        <p>{i.bio1}</p>
                        {i.bio2 !== "" && <p>i.bio2</p>}
                        {i.bio3 !== "" && <p>i.bio3</p>}
                    </div>
                </div>
            );
        }
    });

    return (
        <div>
            <section className="twogrid-container">
                <div>
                    Red Rock Climbing Guides
                </div>
                <div>
                    <p>The entire staff of the Red Rock Climbing Guides (RRCG) believes our responsibility to the climbing community does not begin and end at our front door. We recognize it extends across the globe, anywhere our climbers are climbing.</p>
                    <p>We are committed to providing a safe outdoor rock climbing experience regardless of your ability. Our goal is to help you develop your rock-craft skills while becoming a knowledgeable, efficient, environmentally-aware climber focused on safety and leave-no-trace ethics.</p>
                    <p>All of our activities are designed to help you develop self-reliance, teamwork and self-confidence on the rock. After completing any of our activities, you will be a better, more competent climber.</p>
                    <p>Red Rock Climbing Guides operate in the Red Rock Canyon National Conservation Area by permission of the Las Vegas District of the Bureau of Land Management. We are Las Vegas' only locally-owned guide service and are prepared to make your outdoor experience Fun, Affordable, and Safe!</p>
                    <p>We provide all your technical equipment! You only need to bring food, water, a decent pair of shoes for hiking in, and clothing appropriate for the season and activity. Call us if you need assistance.</p>
                </div>
            </section>
            
            { tierList }
            { guideList }
        </div>
    );
}