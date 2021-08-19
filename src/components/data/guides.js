import React from 'react';
// % photo imports
// Standardized to 450 x 450px, kinda arbitrary, but whatever. Not too big.
// import SOMEPHOTO from '../../img/RRCG/GuideBioImgs/SOMEPHOTO.JPG';
import Matt from '../../img/RRCG/GuideBioImgs/Matt_450w_450h.jpg';
import T2 from '../../img/RRCG/GuideBioImgs/T2_450w_450h.jpg';
import Elaina from '../../img/RRCG/GuideBioImgs/Elaina_450w_450h.jpg';
import Rachel from '../../img/RRCG/GuideBioImgs/Rachel_450w_450h.jpg';
import Samantha from '../../img/RRCG/GuideBioImgs/Samantha_450w_450h.jpg';
import Tracy from '../../img/RRCG/GuideBioImgs/Tracy_450w_450h.jpg';
import Cody from '../../img/RRCG/GuideBioImgs/Cody_450w_450h.jpg';
import Josh from '../../img/RRCG/GuideBioImgs/Josh_450w_450h.jpg';
import Danny from '../../img/RRCG/GuideBioImgs/Danny_450w_450h.jpg';
import Dan from '../../img/RRCG/GuideBioImgs/Dan_450w_450h.jpg';
import Adam from '../../img/RRCG/GuideBioImgs/Adam_450w_450h.jpg';
import Joanne from '../../img/RRCG/GuideBioImgs/Joanne_450w_450h.jpg';
import Nathan from '../../img/RRCG/GuideBioImgs/Nathan_450w_450h.jpg';
import Roxanna from '../../img/RRCG/GuideBioImgs/Roxanna_450w_450h.jpg';

// Used in Guiding.js
export const guides = [
    {
        name: "Dan Young",
        certs: "AMGA SPI, WFR",
        exp: "Climbing since 1976, Guiding since 2009",
        bio: () => <>Has bolted many of the popular easy/moderate sport routes in Red Rock Canyon keeping it accessible for beginners. Bolted Big Bad Wolf, one of the most popular multipitch climbs in the country.</>,
        pic: Dan,
        ig: "",
        site: '',
        youtube: '',
        active: true
    },
    {
        name: "Joshua Janes",
        certs: "WFR",
        exp: "",
        bio: () => <><p>Josh's passion for climbing spans several decades and is rooted in love for adventure, connection to the natural world, and the sheer joy and challenge of movement and problem solving. This passion has led him to climb and guide throughout the US as well as in Canada, Mexico, Europe, and Australia. He has established numerous single- and multi-pitch first ascents up to 5.13, has replaced countless aging bolts as an ASCA volunteer, and is an active contributor to the Mountain Project.</p><p>Josh has called Red Rocks home for over ten years and knows the area intimately. He is one of few who have guided the big trifecta of the Rainbow Wall, Levitation 29, and Cloud Tower - each multiple times - but perhaps his favorite climb is Epinephrine (which he belives to be the best 5.9 in the world). Most of all he enjoys sharing an adventure with his clients with the hope of building a lasting climbing partnership.</p><p>Josh is a Wilderness First Responder, enjoys science fiction, margaritas, and shares his life with his partner and their golden retriever.</p></>,
        pic: Josh,
        ig: "https://www.instagram.com/tullynation/",
        site: '',
        youtube: '',
        active: true
    },
    {
        name: "Travis O'Neil (aka T2)",
        certs: "AMGA SPI, WFR",
        exp: "10+ years, 5 guiding",
        bio: () => <><p>Originally from the humidity and short polished limestone of ATX and the JTree-like granite of Enchanted Rock... once he got a taste of what the great sandstone of Red Rock could offer, he knew he had to make it his home.</p><p>Loves easy multipitch, cracks, offwidths. Does a lot of hiking and trail running.</p><p>Coded this site. Also sews.</p></>,
        pic: T2,
        ig: "https://www.instagram.com/climbguidecraft/",
        github: 'https://github.com/j-poneil',
        site: '',
        youtube: '', 
        active: true
    },
    {
        name: "Rachel Melville",
        certs: "AMGA Rock Guide Apprentice, AMGA SPI, Environmental Engineer",
        exp: "Climbing 17+ years",
        bio: () => <><p>Climbing coach, whipper taker, gear abuser, pour-over snob, dog lover, project slayer, photo taker, empress of STOKE, located in Las Vegas, NV.</p><p>She has been guiding and working with climbers for longer than Instagram was cool, and will partner with you wherever you're at to help you achieve your personal goals!</p></>,
        pic: Rachel,
        ig: "https://www.instagram.com/twincannons/",
        site: '',
        youtube: 'https://www.youtube.com/user/rachelmelville',
        active: true
    },
    {
        name: "Tracy Martin",
        certs: "AMGA Certified Rock Guide, WFR",
        exp: "",
        bio: () => <><p>Tracy likes to rock climb and create art. But because she must work, she splits her time between being a certified AMGA Rock Climbing Guide, Graphic Artist and as a struggling arteest. She lives and plays in Las Vegas, NV with her 2 kitties, Oscar and Bounce.</p></>,
        pic: Tracy,
        ig: "https://www.instagram.com/tracypmartin/",
        site: 'https://tracypmartin.com/',
        youtube: '',
        active: true
    },
    {
        name: "Elaina Arenz",
        certs: "AMGA Certified Rock Guide, AMGA Certified Rock Instructor, AMGA SPI Provider Trainer, WFR, IRATA/SPRAT Level 2 Rope Access Technician, Warriors Way Trainer, Dirt Biker Gumby",
        exp: "Over 24 years",
        bio: () => <><p>Elaina is one of the co-owners of Chicks Climbing &amp; Skiing and owner/operator of New River Mountain Guides. She has pursued climbing as a career for over 24 years. She's traveled all over North America and Europe and was instrumental in establishing El Potrero Chico, Mexico.</p><p>Las Vegas, NV is her home base and she guides almost year-round in Red Rock. During the hottest/coldest months she travels to work rock and ice programs for Chicks Climbing &amp; Skiing, teach SPI Courses and manages things back at the New River Gorge, WV. She is a newly minted AMGA SPI Provider Trainer as of 2018 and has worked as a Warrior's Way Trainer since 2006. The Warrior's Way is a method of approaching climbing which helps one to stay focused to overcome fear of falling and improve commitment in climbing. Elaina served on the Board of Directors of the Access Fund 2014-2017 and has supported their efforts for the last 20 years as an Athlete Ambassador. In 2001 she was awarded the Sharp End Award by The Access Fund for her outstanding contribution to climbers’ advocacy.</p><p>Elaina has appeared in the Women of Climbing Calendar in 2001 and 2003 and is also featured in photographer Chris Noble’s book called Women Who Dare: North America's Most Inspiring Women Climbers, alongside her climbing heroes Lynn Hill and Kitty Calhoun.</p></>,
        pic: Elaina,
        ig: "https://www.instagram.com/lainersclimbs/",
        site: '',
        youtube: 'https://www.youtube.com/user/ElainaNRMG',
        active: true
    },
    {
        name: "Samantha Weichert",
        certs: "AMGA Apprentice Rock Guide, AMGA Apprentice Alpine Guide, AMGA SPI, WFR",
        exp: "10+ years of climbing all over the country",
        bio: () => <><p>I have climbed in so many cool places, but Red Rock is still my favorite!</p><p>I'm a Kiwi!</p><p>I have the coolest dog ever, Barnacle!</p></>,
        pic: Samantha,
        ig: "https://www.instagram.com/sam.weich/",
        site: '',
        youtube: '',
        active: true
    },
    {
        name: "Joanne & George Urioste",
        certs: "Badasses",
        exp: "More experience than almost any other climbers you will ever meet",
        bio: () => <><p>Jorge and I are honored to be DRS guides, especially considering that our combined ages will total 155 years in the coming months.  During most of these years, we’ve immersed ourselves in the beauty and risk of mountain terrain to the fullest extent that our bodies have allowed--- AND we are delighted to have survived and still be here on this glorious planet, toasting each sunrise.</p><p>Our experience includes a shit-ton of alpine ascents all over the US, Canada, and the Andes, during the era in which information was either absent or scant.  Rescues were unavailable.   For those who survived this type of climbing, judgement became an art-form--- or perhaps, even a 6th sense.  Jorge and I settled in Las Vegas in 1974 and were hungry to climb, so we turned to Red Rock’s sandstone which was uncharted territory back then.  These explorations blew our minds --- over and over again --- resulting in many first ascents that are now world-cherished classics:  Frogland, Crimson Chrysalis, Epinephrine, Levitation 29, and others.</p><p>Even though I am pushing 70 and Jorge is pushing 85, we are still climbing moderates at Red Rock, and we feel fortunate to continue to share the rope with friends, family, and clients.</p></>,
        pic: Joanne,
        ig: "",
        site: '',
        youtube: '',
        active: true
    },
    {
        name: "Matt Kuehl",
        certs: "",
        exp: "",
        bio: () => <><p>Matt Kuehl is a photographer, videographer, and adventure enthusiast who has developed his work by engaging with nature and the great unknown. This has brought him to mountain summits, barren deserts, vertical expanses, and the many worlds in between. Facing these challenging environments has allowed Kuehl to become experienced in working at heights, as well as in the varied conditions encountered in the ever changing natural world. Working in this fashion allows Kuehl to showcase the aesthetic awe of risk taking and wonder while also focusing his attention on the enthusiasm of people willing and unafraid to push the boundaries within themselves and their surroundings.</p><p>Matt Kuehl received a Bachelors of Fine Art Photography from the Milwaukee Institute of Art &amp; Design in 2011.</p></>,
        pic: Matt,
        ig: "https://www.instagram.com/mattkuehlphoto/",
        site: 'https://www.mattkuehlphoto.com/',
        youtube: 'https://www.youtube.com/user/sometimesmatt',
        active: true
    },
    {
        name: "Cody Bradford",
        certs: "AMGA Certified Rock Guide, WFR",
        exp: "?+ years climbing, 9+ Guiding",
        bio: () => <><p>I began my career on the sculpted meta-sandstone escarpments of the North Carolina High Country at the height of the Eastern Continental Divide. I received my Bachelors of Science in Recreation Management from Appalachian State University in 2012 and subsequently began my guiding career by earning my AMGA Single Pitch Instructor certification later that year.</p><p>I currently reside in Las Vegas, guiding out of Red Rock National Conservation Area, Joshua Tree National Park, the Sierra, and Moab. During the summer, I spend my time guiding in the Cascades as well as Wyoming in locations such as the Tetons and the Winds.</p><p>Musician by night.</p></>,
        pic: Cody,
        ig: "https://www.instagram.com/thecodybradford/",
        site: 'https://www.codybradford.com/',
        youtube: 'https://www.youtube.com/channel/UCDN5bJMKsAjQ3YE9VK5ezwQ',
        active: true
    },
    {
        name: "Nathan Petrosian",
        certs: "",
        exp: "",
        bio: () => <><p>In addition to being an excellent guide, Nathan is also a Realtor, check out his site if you are interested in purchasing a house in the Las Vegas area!</p></>,
        pic: Nathan,
        ig: "",
        site: 'http://www.nathanpetrosian.com/',
        youtube: '',
        active: true
    },
    {
        name: "Adam Happensack",
        certs: "",
        exp: "",
        bio: () => <></>,
        pic: Adam,
        ig: "https://www.instagram.com/a.happensack/",
        site: '',
        youtube: '',
        active: false
    },
    {
        name: "Danny Urioste",
        certs: "",
        exp: "",
        bio: () => <></>,
        pic: Danny,
        ig: "https://www.instagram.com/dynooftheshire/",
        site: '',
        youtube: '',
        active: true
    },
    {
        name: "Roxanna Brock",
        certs: "",
        exp: "",
        bio: () => <>SEO Specialist, Web Designer, Writer, Woman of the Outdoors, and LOVER of fun!</>,
        pic: Roxanna,
        ig: 'https://www.instagram.com/roxannabrockmcd/',
        site: '',
        youtube: 'https://www.youtube.com/channel/UC5YygDt3B0_PA_gYT02jkAw',
        active: true
    }
];