import React from 'react';

// can change all <p></p> to <Card.Text></Card.Text>
// ... but do I really have to?
// import Card from 'react-bootstrap/Card';

//% photos for staff
// standard is 450 x 450px, just because
// import PHOTO from '../../img/DRS_staff/SOMEPHOTO.JPG';
// import Placeholder from '../../img/RRCG/GuideBioImgs/Placeholder_450w_450h.jpg';
import TG from '../../img/DRS_staff/TG2_450w_450h.jpg';
import Mike from '../../img/DRS_staff/Mike2_450w_450h.jpg';
import Steve from '../../img/DRS_staff/Steve_450w_450h.jpg';
import T2 from '../../img/RRCG/GuideBioImgs/T2_450w_450h.jpg';
import Dan from '../../img/RRCG/GuideBioImgs/Dan_450w_450h.jpg';
import Josh from '../../img/RRCG/GuideBioImgs/Josh_450w_450h.jpg'; // Josh Janes
import LisaB from '../../img/DRS_staff/LisaB_450w_450h.jpg';
import Samantha from '../../img/RRCG/GuideBioImgs/Samantha_450w_450h.jpg';
import TingTing from '../../img/RRCG/GuideBioImgs/SzuTingYi_450w_450h.jpg';
// import JoshD from ''; // Josh Diggs
// import ??? from '';

// ! copy/pasted in from guides.js
import Matt from '../../img/RRCG/GuideBioImgs/Matt_450w_450h.jpg';
import Elaina from '../../img/RRCG/GuideBioImgs/Elaina_450w_450h.jpg';
import Rachel from '../../img/RRCG/GuideBioImgs/Rachel_450w_450h.jpg';
import Tracy from '../../img/RRCG/GuideBioImgs/Tracy_450w_450h.jpg';
import Cody from '../../img/RRCG/GuideBioImgs/Cody_450w_450h.jpg';
import Danny from '../../img/RRCG/GuideBioImgs/Danny_450w_450h.jpg';
// import Adam from '../../img/RRCG/GuideBioImgs/Adam_450w_450h.jpg';
import Joanne from '../../img/RRCG/GuideBioImgs/Joanne_450w_450h.jpg';
import Nathan from '../../img/RRCG/GuideBioImgs/Nathan_450w_450h.jpg';
import Roxanna from '../../img/RRCG/GuideBioImgs/Roxanna_450w_450h.jpg';
import JoshD from '../../img/RRCG/GuideBioImgs/JoshD_450w_450h.jpg';
import Jakob from '../../img/RRCG/GuideBioImgs/Jakob_450w_450h.jpg';
// import Kat from '../../img/RRCG/GuideBioImgs/Kat_450w_450h.jpg';
import Kat from '../../img/RRCG/GuideBioImgs/Kat_by_Jaz_Morris_450x450_enhanced-min.jpg';

// % For bio, its an arrow function that returns JSX, so just write 'basically' HTML between the <></>. Any HTML will be turned intro react components, great formatting can be had with just paragraph and list tags.

// Used in About.js
export const staff = [
    {
        name: "Travis Graves",
        position: "",
        certs: "",
        exp: "",
        bio: () => (
            <>
                <p>Continues to be the store buyer and manager. He is the person you will most likely see or talk to on the phone. He is a wealth of information about outdoor gear and the local climbing routes. The store is small, but Travis makes sure the store is well stocked in gear, shoes and clothing for camping, backpacking and canyoneering, as well as for climbing.</p>
            </>
        ),
        imgSrc: TG,
        ig: "https://www.instagram.com/travis_graves/",
        site: '',
        youtube: '',
        active: true,
        isGuide: false,
        isRetail: true
    },
    {
        name: "Mike Lorenzo",
        position: "",
        certs: "",
        exp: "",
        bio: () => (
            <>
                <p>Came to Las Vegas from New York about ten years ago, enjoys hiking, skiing, snowboarding and climbing. Mike is also a student of Yoga. Mike says that Yoga has given him the flexibility and strength he needs for climbing.</p>
            </>
        ),
        imgSrc: Mike,
        ig: "https://www.instagram.com/positivevibe75/",
        site: '',
        youtube: '',
        active: true,
        isGuide: false,
        isRetail: true
    },
    {
        name: "Steve Mallory",
        position: "",
        certs: "",
        exp: "",
        bio: () => (
            <>
                <p>Has a background in finance and helps with the bookkeeping. He has been climbing since 1979 and has lived in Las Vegas for 22 years. Steve recently developed a passion for canyoneering and has added Imlay Canyon Gear, static rope and the La Sportiva Exum River Shoe, to the store's inventory.</p>
                <p>Canyoneering in Zion is a great way to beat the heat in Las Vegas during the summer months!</p>
            </>
        ),
        imgSrc: Steve,
        ig: "",
        site: '',
        youtube: '',
        active: true,
        isGuide: false,
        isRetail: true
    },
    {
        name: "Dan Young",
        position: "",
        certs: "AMGA SPI, WFR",
        exp: "Climbing since 1976, Guiding since 2009",
        bio: () => (
            <>
                <p>Has bolted many of the popular easy/moderate sport routes in Red Rock Canyon keeping it accessible for beginners. Bolted Big Bad Wolf, one of the most popular multipitch climbs in the country.</p>
            </>
        ),
        imgSrc: Dan,
        ig: "",
        site: '',
        youtube: '',
        active: true,
        isGuide: true,
        isRetail: true
    },
    {
        name: "Joshua Janes",
        position: "",
        certs: "WFR",
        exp: "",
        bio: () => (
            <>
                <p>Josh's passion for climbing spans several decades and is rooted in love for adventure, connection to the natural world, and the sheer joy and challenge of movement and problem solving. This passion has led him to climb and guide throughout the US as well as in Canada, Mexico, Europe, and Australia. He has established numerous single- and multi-pitch first ascents up to 5.13, has replaced countless aging bolts as an ASCA volunteer, and is an active contributor to the Mountain Project.</p>
                <p>Josh has called Red Rocks home for over ten years and knows the area intimately. He is one of few who have guided the big trifecta of the Rainbow Wall, Levitation 29, and Cloud Tower - each multiple times - but perhaps his favorite climb is Epinephrine (which he belives to be the best 5.9 in the world). Most of all he enjoys sharing an adventure with his clients with the hope of building a lasting climbing partnership.</p>
                <p>Josh is a Wilderness First Responder, enjoys science fiction, margaritas, and shares his life with his partner and their golden retriever.</p>
            </>
        ),
        imgSrc: Josh,
        ig: "https://www.instagram.com/tullynation/",
        site: '',
        youtube: '',
        active: true,
        isGuide: true,
        isRetail: true
    },
    {
        name: "Lisa Buchina",
        position: "",
        certs: "",
        exp: "",
        bio: () => (<></>),
        imgSrc: LisaB,
        ig: "https://www.instagram.com/lmbuch/",
        site: '',
        youtube: '',
        active: true,
        isGuide: false,
        isRetail: true
    },
    {
        name: "Lisa Aquino",
        position: "",
        certs: "",
        exp: "",
        bio: () => (<></>),
        imgSrc: "https://via.placeholder.com/500x400",
        ig: "https://www.instagram.com/monilisa.aquino/",
        site: '',
        youtube: '',
        active: false,
        isGuide: false,
        isRetail: true
    },
    {
        name: "Travis O'Neil (aka T2)",
        position: "",
        certs: "AMGA SPI, WFR",
        exp: "10+ years, 5 guiding",
        bio: () => (
            <>
                <p>Originally from the humidity and short polished limestone of ATX and the JTree-like granite of Enchanted Rock... Once he got a taste of what the great sandstone of Red Rock could offer, he knew he had to make it his home.</p>
                <p>Loves easy multipitch trad, cracks, offwidths. Does a lot of hiking and trail running.</p>
                <p>Total gear nerd. Familiar with soooo many different pieces of esoteric climbing gear. Good with knots.</p>
                <p>Coded this site. Also sews.</p>
                <p>You can rarely convince him to do custom sewn things like bolting and re-bolting bags, bike frame packs, and minor gear repairs and modifications so long as they are not complicated to get under the foot of his mini-industrial sewing machine... Absolutely will NOT replace or fix zippers.</p>
            </>
        ),
        imgSrc: T2,
        ig: "https://www.instagram.com/climbguidecraft/",
        github: 'https://github.com/j-poneil',
        site: '',
        youtube: '',
        active: true,
        isGuide: true,
        isRetail: true
    },
    {
        name: "Adam Happensack",
        position: "",
        certs: "",
        exp: "",
        bio: () => (<></>),
        imgSrc: "https://via.placeholder.com/500x400",
        ig: "https://www.instagram.com/a.happensack/",
        site: '',
        youtube: '',
        active: false,
        isGuide: true,
        isRetail: true
    },
    {
        name: "Samantha Weichert",
        position: "",
        certs: "AMGA Apprentice Rock Guide, AMGA Apprentice Alpine Guide, AMGA SPI, WFR",
        exp: "10+ years of climbing all over the country",
        bio: () => (
            <>
                <p>I have climbed in so many cool places, but Red Rock is still my favorite!</p>
                <p>I'm a Kiwi!</p>
                <p>I have the coolest dog ever, Barnacle!</p>
            </>
        ),
        imgSrc: Samantha,
        ig: "https://www.instagram.com/sam.weich/",
        site: '',
        youtube: '',
        active: true,
        isGuide: true,
        isRetail: true
    },
    {
        name: "Rachel Melville",
        position: "",
        certs: "AMGA Rock Guide Apprentice, AMGA SPI, Environmental Engineer",
        exp: "Climbing 17+ years",
        bio: () => (
            <>
                <p>Climbing coach, whipper taker, gear abuser, pour-over snob, dog lover, project slayer, photo taker, empress of STOKE, located in Las Vegas, NV.</p>
                <p>She has been guiding and working with climbers for longer than Instagram was cool, and will partner with you wherever you're at to help you achieve your personal goals!</p>
            </>
        ),
        imgSrc: Rachel,
        ig: "https://www.instagram.com/twincannons/",
        site: '',
        youtube: 'https://www.youtube.com/user/rachelmelville',
        active: true,
        isGuide: true,
        isRetail: false
    },
    {
        name: "Josh Diggs",
        position: "",
        certs: "AMGA Apprentice Rock Guide",
        exp: "2 years guiding, 4 years Vegas local",
        bio: () => (
            <>
                <p>Teacher by training, I relocated to Vegas in pursuit of desert splitters. The big days out are my favorite. Enthusiastic goofball, bad storyteller, good listener. Can tell you about the burrowing owl, kleptothermy, and rock rust! Need some technique work? Consider dropping your heels.</p>
                <p>Favorite climb: Cloud Tower</p>
            </>
        ),
        imgSrc: JoshD,
        ig: 'https://www.instagram.com/red_dome_digsby/',
        site: '',
        youtube: '',
        active: true,
        isGuide: true,
        isRetail: true
    },
    {
        name: "Elaina Arenz",
        position: "",
        certs: "AMGA Certified Rock Guide, AMGA Certified Rock Instructor, AMGA SPI Provider Trainer, WFR, IRATA/SPRAT Level 2 Rope Access Technician, Warriors Way Trainer, Dirt Biker Gumby",
        exp: "Over 24 years",
        bio: () => (
            <>
                <p>Elaina is one of the co-owners of Chicks Climbing &amp; Skiing and owner/operator of New River Mountain Guides. She has pursued climbing as a career for over 24 years. She's traveled all over North America and Europe and was instrumental in establishing El Potrero Chico, Mexico.</p>
                <p>Las Vegas, NV is her home base and she guides almost year-round in Red Rock. During the hottest/coldest months she travels to work rock and ice programs for Chicks Climbing &amp; Skiing, teach SPI Courses and manages things back at the New River Gorge, WV. She is a newly minted AMGA SPI Provider Trainer as of 2018 and has worked as a Warrior's Way Trainer since 2006. The Warrior's Way is a method of approaching climbing which helps one to stay focused to overcome fear of falling and improve commitment in climbing. Elaina served on the Board of Directors of the Access Fund 2014-2017 and has supported their efforts for the last 20 years as an Athlete Ambassador. In 2001 she was awarded the Sharp End Award by The Access Fund for her outstanding contribution to climbers' advocacy.</p>
                <p>Elaina has appeared in the Women of Climbing Calendar in 2001 and 2003 and is also featured in photographer Chris Noble's book called Women Who Dare: North America's Most Inspiring Women Climbers, alongside her climbing heroes Lynn Hill and Kitty Calhoun.</p>
            </>
        ),
        imgSrc: Elaina,
        ig: "https://www.instagram.com/lainersclimbs/",
        site: '',
        youtube: 'https://www.youtube.com/user/ElainaNRMG',
        active: true,
        isGuide: true,
        isRetail: false
    },
    {
        name: "Joanne & George Urioste",
        position: "",
        certs: "Badasses",
        exp: "More experience than almost any other climbers you will ever meet",
        bio: () => (
            <>
                <p>Jorge and I are honored to be DRS guides, especially considering that our combined ages will total 155 years in the coming months.  During most of these years, we've immersed ourselves in the beauty and risk of mountain terrain to the fullest extent that our bodies have allowed--- AND we are delighted to have survived and still be here on this glorious planet, toasting each sunrise.</p>
                <p>Our experience includes a shit-ton of alpine ascents all over the US, Canada, and the Andes, during the era in which information was either absent or scant.  Rescues were unavailable.   For those who survived this type of climbing, judgement became an art-form--- or perhaps, even a 6th sense.  Jorge and I settled in Las Vegas in 1974 and were hungry to climb, so we turned to Red Rock's sandstone which was uncharted territory back then.  These explorations blew our minds --- over and over again --- resulting in many first ascents that are now world-cherished classics:  Frogland, Crimson Chrysalis, Epinephrine, Levitation 29, and others.</p>
                <p>Even though I am pushing 70 and Jorge is pushing 85, we are still climbing moderates at Red Rock, and we feel fortunate to continue to share the rope with friends, family, and clients.</p>
            </>
        ),
        imgSrc: Joanne,
        ig: "",
        site: '',
        youtube: '',
        active: true,
        isGuide: true,
        isRetail: false
    },
    {
        name: "Jakob Chew",
        position: "",
        certs: "AMGA Apprentice Rock Guide, L1 SPRAT/IRATA",
        exp: "Guiding since 2016",
        bio: () => (
            <>
                <p>San Diego born and raised. Love of adventures, the outdoors, photography, art, music, and anything that creates a sense of wonder and inspiration in the mind.</p>
            </>
        ),
        imgSrc: Jakob,
        ig: 'https://www.instagram.com/thecosmicclimber/',
        site: 'https://www.chillinorockclimbing.com/',
        youtube: '',
        active: true,
        isGuide: true,
        isRetail: false
    },
    {
        name: "Szu-ting Yi (aka Ting Ting)",
        position: "",
        certs: "AMGA Rock Guide",
        exp: "",
        bio: () => (
            <>
                <p>
                    Szu-ting Yi is an AMGA-certified Rock Guide who also has her PhD in computer science. Born in Taiwan, she came to the US to study, but fell in love with the sport of climbing. She has climbed 40 desert towers in one season, and in 2017, Szu-ting successfully completed a north to south traverse of the Wind River Range and summited 33 peaks along the Continental Divide.
                </p>
                <p>
                    Besides working as a climbing guide, Szu-ting is the author of five books and has completed multiple first ascents in Asia and Patagonia. Guiding climbing in Red Rocks for many years, she and her husband settled down in Las Vegas in 2019.
                    <br />
                    <a href="http://www.alpinist.com/doc/web16a/wfeature-qionglai-mountains-china-first-ascent" target="_blank" rel="noopener noreferrer">Mooncakes and Rice: Qionglai Mountains (Alpinist, Feb 2016)</a><br />
                    <a href="http://www.alpinist.com/doc/web18f/wfeature-a63-on-belay-ride-the-wind" target="_blank" rel="noopener noreferrer">Ride the Wind; Wind River Range, Wyoming (Alpinist, Oct 2018)</a>
                </p>

            </>
        ),
        imgSrc: TingTing,
        ig: 'https://www.instagram.com/szutingyi/',
        site: '',
        youtube: '',
        active: true,
        isGuide: true,
        isRetail: false
    },
    {
        name: "Matt Kuehl",
        position: "",
        certs: "",
        exp: "",
        bio: () => (
            <>
                <p>Matt Kuehl is a photographer, videographer, and adventure enthusiast who has developed his work by engaging with nature and the great unknown. This has brought him to mountain summits, barren deserts, vertical expanses, and the many worlds in between. Facing these challenging environments has allowed Kuehl to become experienced in working at heights, as well as in the varied conditions encountered in the ever changing natural world. Working in this fashion allows Kuehl to showcase the aesthetic awe of risk taking and wonder while also focusing his attention on the enthusiasm of people willing and unafraid to push the boundaries within themselves and their surroundings.</p>
                <p>Matt Kuehl received a Bachelors of Fine Art Photography from the Milwaukee Institute of Art &amp; Design in 2011.</p>
            </>
        ),
        imgSrc: Matt,
        ig: "https://www.instagram.com/mattkuehlphoto/",
        site: 'https://www.mattkuehlphoto.com/',
        youtube: 'https://www.youtube.com/user/sometimesmatt',
        active: false,
        isGuide: true,
        isRetail: false
    },
    {
        name: "Cody Bradford",
        position: "",
        certs: "AMGA Certified Rock Guide, WFR",
        exp: "?+ years climbing, 9+ Guiding",
        bio: () => (
            <>
                <p>I began my career on the sculpted meta-sandstone escarpments of the North Carolina High Country at the height of the Eastern Continental Divide. I received my Bachelors of Science in Recreation Management from Appalachian State University in 2012 and subsequently began my guiding career by earning my AMGA Single Pitch Instructor certification later that year.</p>
                <p>I currently reside in Las Vegas, guiding out of Red Rock National Conservation Area, Joshua Tree National Park, the Sierra, and Moab. During the summer, I spend my time guiding in the Cascades as well as Wyoming in locations such as the Tetons and the Winds.</p>
                <p>Musician by night.</p>
            </>
        ),
        imgSrc: Cody,
        ig: "https://www.instagram.com/thecodybradford/",
        site: 'https://www.codybradford.com/',
        youtube: 'https://www.youtube.com/channel/UCDN5bJMKsAjQ3YE9VK5ezwQ',
        active: true,
        isGuide: true,
        isRetail: false
    },
    {
        name: "Kat Vollinger",
        position: "",
        certs: "AMGA Assistant Rock Guide, AMGA Apprentice Alpine Guide, AMGA Apprentice Ski Guide",
        exp: "Climbing 14+ years",
        bio: () => (
            <>
                <p>I travel and experience the world mostly through climbing and adventures. If I'm not adventuring I'm probably drinking espressos or playing with my two puppies. Finally settled in Washington but regularly drawn back to the desert for climbing and guiding in Red Rock.</p>
                <p>I enjoy combining my passion with expanding people's skillsets for exploring the vertical world.</p>
            </>
        ),
        imgSrc: Kat,
        ig: '',
        site: '',
        youtube: '',
        active: true,
        isGuide: true,
        isRetail: false
    },
    {
        name: "Nathan Petrosian",
        position: "",
        certs: "",
        exp: "",
        bio: () => (
            <>
                <p>In addition to being an excellent guide, Nathan is also a Realtor, check out his site if you are interested in purchasing a house in the Las Vegas area!</p>
            </>
        ),
        imgSrc: Nathan,
        ig: "",
        site: 'http://www.nathanpetrosian.com/',
        youtube: '',
        active: true,
        isGuide: true,
        isRetail: false
    },
    {
        name: "Tracy Martin",
        position: "",
        certs: "AMGA Certified Rock Guide, WFR",
        exp: "",
        bio: () => (
            <>
                <p>Tracy likes to rock climb and create art. But because she must work, she splits her time between being a certified AMGA Rock Climbing Guide, Graphic Artist and as a struggling arteest. She lives and plays in Las Vegas, NV with her 2 kitties, Oscar and Bounce.</p>
            </>
        ),
        imgSrc: Tracy,
        ig: "https://www.instagram.com/tracypmartin/",
        site: 'https://tracypmartin.com/',
        youtube: '',
        active: true,
        isGuide: true,
        isRetail: false
    },
    {
        name: "Danny Urioste",
        position: "",
        certs: "",
        exp: "",
        bio: () => (<></>),
        imgSrc: Danny,
        ig: "https://www.instagram.com/dynooftheshire/",
        site: '',
        youtube: '',
        active: true,
        isGuide: true,
        isRetail: false
    },
    {
        name: "Roxanna Brock",
        position: "",
        certs: "",
        exp: "",
        bio: () => (
            <>
                <p>SEO Specialist, Web Designer, Writer, Woman of the Outdoors, and LOVER of fun!</p>
            </>
        ),
        imgSrc: Roxanna,
        ig: 'https://www.instagram.com/roxannabrockmcd/',
        site: '',
        youtube: 'https://www.youtube.com/channel/UC5YygDt3B0_PA_gYT02jkAw',
        active: true,
        isGuide: true,
        isRetail: false
    },
    
    
    
    // {
    //     name: "",
    //     position: "",
    //     certs: "",
    //     exp: "",
    //     bio: () => (
    //         <>
    //             <p></p>
    //         </>
    //     ),
    //     imgSrc: Placeholder,
    //     ig: '',
    //     site: '',
    //     youtube: '',
    //     active: true,
    //     isGuide: true,
    //     isRetail: false
    // }
    // @ ============= Template Below (copy/paste) =================
    // {
    //     name: "",
    //     position: "",
    //     certs: "",
    //     exp: "",
    //     bio: () => (
    //         <>
    //             <p></p>
    //         </>
    //     ),
    //     imgSrc: Placeholder,
    //     ig: '',
    //     site: '',
    //     youtube: '',
    //     active: true,
    //     isGuide: true,
    //     isRetail: false
    // }
];