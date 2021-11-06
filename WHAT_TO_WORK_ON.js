/*
Using the "Better Comments" VS Code plugin to color code comments based on the symbol/text after the double slash
Or first symbol/text on the line inside block comments. Helps me visually mark and separate things.

! - red - critical / critical note
@ - purple - look at me / section titles
? - blue - questions to answer or think about
todo - orange - need to do, not critical
% - yellow - eye catching note
$ - cash money green - eye catching note
* - yellow/green - point worth seeing?
- green - normal comment
// strikethru/grey - COMPLETED TASK

# - unused
^ - unused
& - unused
+ - unused
= - unused

? How can I use this to organize things better?
* I could do background color, underline, strikethrough as well
* Background in particular could be very useful to bring attention to something or demark sections
=======================================================================================================
Sites for inspiration:
https://www.adventuresedge.com/
    -- awesome single page layout, huge hero image with overlayed business name, businees logo smaller up top
    -- parallax on hero img
    -- lots of white space, but good images and good titles for the image/text, like 'Our Story' with the text half over the img, half over the text area
    -- nice contact section, clean
    -- better map at the bottom, not broken height like mine

https://neptunemountaineering.com/
    -- Good map, lots going on, good colors, good sections, sell stuff is big part of it
    -- manual carusel

http://www.moabgear.com/
    -- nice, but not the best
    -- can't see bigger versions of the gear photos?

https://antigravityequipment.com/climbing-gear-beaverton-visit-us
    -- like the image gallery here

https://www.thedesertrat.net/localinfo
    -- this local info page is simple, clean-ish, doesn't look terrible

https://www.redpointclimbing.com/
    -- super basic site
    -- I CAN DO BETTER THAN THIS, this is the low end bar to beat

https://liveferal.com/
    -- REALLY GOOD, pro
    -- landing is great, rest of the site, just ok... maybe my bad connection here?

https://nomadventures.com/
    -- AWESOME
    -- Hero image is actually 2 images, a background and a foreground with transparency almost everywhere
        -- when you move the mouse around the layers shift, looks sweet
    -- good few well selling items front and center
    -- Good tiles for different gear sections
    -- Awesome pre-footer with a cell screen where recent IG posts show up and you can scroll through them
    -- social buttons float on side the whole time
    -- 

=======================================================================================================

@ index.html & other general stuff
! - email list?
    ( https://www.sendinblue.com/ )... better than mailchimp maybe?
    * Its easy to set up with a service, like the guiding form... they prob also have templates for emails to send
    * We can give meaningful updates and news to locals who care, IE
        * Crash pads in stock
        * Totems in stock, cams, nuts
        * Sweet new ropes in stock
        * We are carrying the new ___ climbing shoe!
        * Special event: bouldering comp, raffle, SNCC events, giveaway promotion, sales
        * We now have more extensive online ordering
        * Sweet item(s) in consignment (could be nice for like the $$$ tents, etc...)

! - For rough release - look over all files
! - For rough release - full spelling/grammer check, have a few people proof it
! - For rough release - test keyboard nav
todo - some sort of server integration?
    Like maybe make a control panel site that TG can log into to change: hours, address, phone numbers, mark things as in stock or sold out?
    The site reads/updates a DB, like firebase
    Then the deployed site gets updated values from firebase with fallbacks if no connection?
    ... actually maybe not firebase, since it would possibly cost... maybe a DB hosted at the same web host if it seems cheaper... MySQL maybe
? - is this a stupid idea: a central object with a lot of the info that could change frequently in it, that is used as the source for it through the site? Thus one messy object and then every file that needs data from it just imports what they need. That would really cut down on how much code there is in some of the files... but it just moves it to the object (or objects) hmm will have to think about it more
    ? - short circuit / default setup, so that if something isn't specified in the obj, the default specified in the individual file is used
    * automatic hours true/false
        * manual hours set
        * automatic hours season1 set
        * automatic hours season2 set
    * Resole turn around time
    * Guide service pricing
    * phone numbers, emails, addresses?
todo - FOR FINAL PRODUCTION - look over every file, make sure nothing obviously overlooked
todo - FOR FINAL PRODUCTION - Full check of spelling and grammer, and multiple people looking over EVERYTHING
todo - FOR FINAL PRODUCTION - SEO optimization... create-react-app does some basics, but I can certainly improve it more
todo - FOR FINAL PRODUCTION - Have someone navigate it all with a screen reader to test accessability
todo - FOR FINAL PRODUCTION - Check for color-blindness / contrast compatability
todo - FOR FINAL PRODUCTION - what if someone changes the font size themselves, does it still look ok?
todo - FOR FINAL PRODUCTION - loading speed, efficiency, no extraneous re-renders, etc...
todo - FOR FINAL PRODUCTION - React.lazy / lazy loading / Suspense
todo - FOR FINAL PRODUCTION - Make sure my important comments that i made about author of site are visible after build process
todo - add more photos of the inside / outside of DRS
    clothing
    artwork?
    new local guidebooks
    route topos
    stick clips
    chalk selection
    canyoneering ropes, bags, critter, quicklinks, etc?
todo - replace generic <div> when it makes sense to do so, with semantic html, like article, section, etc...
todo - use the fonts in index.html (refer to them in a more readable form in NOTES.md)
todo - loading animations that I can use in various places
    Patagonia had a cool one that was a drawn ridgeline that animated in, then re-traced over in different line colors.
? - should I move the resoles to its own page? Hmmm... I go back and forth on it
    ... but if I'm going to, I should make sure that the main content of the Home page is filled out a bit more and good on its own
todo - add some line somewhere saying that I coded this site, see my github here etc...
    * Maybe a simple line at the very bottom of the home or about pages...
    // * As a block comment in the head of the index
    // * OH, github link icon on about/guiding page for me
! - in Row and Col xxl=(#) doesn't work, period. All other sizes are fine, but xxl settings never work. NEVER.
    * looks like when you inspect a page it doesn't show up as a global breakpoint option
    * I should be able to add it
    * I have a feeling like I may need to add an xxs one too... hmm
    https://react-bootstrap.github.io/layout/grid/#row-props
! - Since I have messed with some overall padding and margin settings, I need to go back through the site and get everything spaced evenly again
! - Play with overall colors
    Darker Nav
        Lighter Title text
        Not as light menu text?
    Darker than that overall default page BG
    * Cards that tend too have too much dead white space don't look good... but they are fine when they are filled with text
        EX. About > How they met... looks bad
            - add subtitles, more text
        EX. About > JJ Card... looks good
// todo - adjust hours
// todo - Added a CSS background pattern in index on the overall body. Much less hassle than messing with background images and getting everything to always look good. I think it looks pretty respectable too, all things considered.
// todo - make/implement a BETTER favicon
//     Simple emoji, DRS, DR, or outline of mtns... ?
//     Implement, in multiple sizes
//         https://realfavicongenerator.net/ -- good
// todo - maybe combine guides and staffList into one...? Control what shows up where with new keys and values
//     like isAGuide: true/false, worksInTheShop: true/false - any downside? I'm using the same pics, a lot of the same text, links... makes sense to combine to me...
// todo - make/implement a proper favicon
// todo - navigate through each page as if I had no mouse... with tabbing and arrow keys / pgup / pgdn
// todo - add react-icons icons to various parts of the app/pages/components
//todo - make a easy to read and copy/paste list of the fonts in index.html
// todo - should I have a navbar link to the gym ??? Seems like yes, duh.

@ Accessability -----------------------------------
todo - verify that the skip links are working, such as skip navigation
todo - verify that the skip to links in Beta.js are working (once they are all set up and Beta.js is looking good)
todo - add role="article", role="heading" (for titles/section headings)
todo - other role="" to add for the future 'form'(subscribe to email, guiding inquiry, etc), 'contentinfo'(copyright info, etc), 'search'(searchbar), 'button', 'list', 'listitem', 'note', 'row', 'rowgroup', 'rowheader', 'alert', 'checkbox', 'gridcell', 'link', 'menuitem', 'option', 'textbox'
// todo - in template, get aria-expanded to toggle true/false when the accordion below is visible/hidden
// todo - add role="main" to the Switch component which holds the main page content and role="navigation" to the NavBar


@ Home page ---------------------------------------
! - Meaningful news items - fill in a bunch so it seems more 'lived in'
    * We just got ______ items in stock!
! - I think it would be cool if I had some big image between the DRS and R2C2 contact info
    ... that ended up being about as tall as the tallest section, for DRS or R2C2... something like a square cut diagonally, with photo of gear in top-left, photo of gym in bottom-right... thus on a large screen if I set 3 col per row it sits nicely in the middle, but on smaller screens it still works as a transition between DRS and R2C2 with single column vertical scroll down... could even style the DRS and R2C2 info sections with the prevailing color scheme of the photo...
todo - AMBITIOUS - Instagram feed embed
    Apparently this is WAY harder than it used to be, due to recently increased security.
    Check your bookmarks, you made a folder with all the info you need to do it.
    Need a certain FB account, IG acct, verify stuff, Heroku acct, etc...
    Requires setting up a free heroku site and running an access token refresh agent...
    then getting that token to here and using it. Very doable, but a hassle for another time I think.
todo - ambitious, but maybe AUTO alert with react-bootstrap style for when wet weather is detected OR when it has happened in the last x hours?
    - probably too many little difficulties in getting it accurate, BUT MAYBE, a general alert that wet weather happened recently, check HERE or HERE for more specifics, check HERE for if there is a message thread about it, or call us for more info: ###-###-####
todo - FOR FINAL PRODUCTION - play with background (backgrounds) parrallax with great images, else pattern or simple CSS transition
? - should I add the parser to the news titles too?
? - should I implement date-fns on DRS hours?
    We don't tend to be strict with when we change our hours so it is pretty rough on trying to code it in
? - should splash background image corners be rounded consistent with other images on home page?
    *If so, in Splash.js, put everything in a Card component and change img to Card.Img
! - Title and text need to resize better for smaller screens... but also for MUCH bigger screens.
todo - an indicator that you should scroll down should be added
todo - OK ENOUGH FOR NOW - but later...
    * Hero image/section notes
        - NAME
        - WHAT ITS ABOUT
        - WHY YOU SHOULD CARE / WHAT IT CAN DO FOR YOU
        - (USUALLY: Button/link to do something)
    * Figured it out... do old style with
            div position relative
                img width 100% height auto
                text position absolute -- absolute within the bounds of the parent element -- that is the key
        Can stack multiple adjacent children of the parent element by specifying their position absolute and left / top the same
        Then use transparency and z-stack height
    ! on very small screens, card margin to edge of screens in larger on right side for some reason
    ! nexus 10... edge cuts off cards for some reason
    % lazy fix would be... With a suitable hero image, just edit the text into the actual image...
        % probably not as good for SEO though
* If I want parallax... or fixed position backgrounds with stuff moving in front
    Its easier if I use CSS set backgroundImage...
    A harder way that can work with conventional images is using JS...
    BUT it is possible w/ conventional images and CSS only... and isn't THAT hard.
        https://keithclark.co.uk/articles/pure-css-parallax-websites/
        https://keithclark.co.uk/articles/practical-css-parallax/
! - Text box seems too low on hero image...
    Either
        raise it
        resize vertical height of image to show better on a standard laptop
            but double check that it will still look good on smaller screens down to iPhone5
// todo - Hero image should be edge to edge ... edgy... hero image
// todo - splash background image should no stretch/shrink on horizontal axis with different screen sizes
//     in the overall container AND Splash container added className='pl-0 pr-0' to fix
    // todo - on very small screens, iPhone, all phones, really... text invert box overflows edges
    // todo - large sizes... hero Image no longer fits 100%
    //     fixed by using width: 100%, height: auto... instead of just fluid prop
// todo - Images should probably be in Card.Img components so that their corners are rounded consistent with the other card components on the site
//     putting them as a Card.Img inside a Card did the trick nicely
// todo - in news, have the news stories content, be a func returning JSX so I can have that formatting w/o parsing HTML
// todo - make the contact section cards the same height with style={{'height': '100%'}}
// todo - fix the width problem
//     issue was that the root tag was a fluid container with the splash, the a lot of other fluid containers inside such that the width they would fill was less and less
// todo - set a standard for the size of the pics used for the welcome, news, and bouldering side images, something like 500x500 or 900x600
// todo - resize the welcome, news, and bouldering side images
// todo - set max height on news component per-screen size, and overflow-y: scroll.
//     Basically I want its max height to be similar to whatever the max height for the text to the left (or above it) is.
// todo - change organization of Contact.js component so that it is better split between DRS and R2C2
// todo - change up the automatic hours changing thing
// todo - switch DRS and Gym hours display to Table components
// todo - add gym hours somewhere
// todo - switch news to a card component
// todo - adjust news date, title, post font, styling, size, etc...
// todo - implement date-fns on news -- relative time since thing posted
// todo - install date-fns
// todo - add the html parser thing that I used in the guiding, guide bios, and employee bios to the news section
// todo - better contact info / address styling + HTML5 style address for the addresses of shop, gym, maybe resoles? for screen readers
// todo - contact info as links... address not a link, because there is a map below?
// todo - resole number, email, IG as links
// todo - Mention resoling drop off boxes in another lower section, before contact info?
// todo - Add some vertical spacing between the react-bootstrap Containers ??? className="mt-3 mb-3"
// todo - Better business name display, colors, font, size, position
// todo - MUCH better section / div styling
// todo - better organization / presentation with react-bootstrap grid stuff
// todo - better style the google map on the bottom of the home page


@ About page --------------------------------------
! - FOR PRODUCTION - get peoples desired blurbs, photos, links to whatever, etc...
todo - FOR PRODUCTION - figure out a nice background, maybe use some parallax, but a simple CSS color transition would be fine too
? - a section on its own for the 3 owners???
todo - THEN below it current (and past?) employees
? - what about short reviews from patrons like James W?
todo - probably move nav link position of the 'About' page to just left of 'Shop'
! - manually add more content to everyone so that their bios end up closer to the same length... can use lists, etc...    
// todo - suitable enough for now side image
// todo - go from parsing HTML for the bios to having a func return JSX
// todo - See if instead of parsing HTML I can do the bio value in the object as a function returning JSX / A component w/HTML.. I can
// todo - use style={{'height': '100%'}} to make all the staff Card components the same size for any given row config for whatever display
// todo - mess with mt-3 and mb-3 so everything is spaced better
// todo - adjust breakpoints
// todo - added a key in obj check and ternary to lead into the links which are added if present, makes it a bit less prone to problems if I add someone and forget to add every expected key to them. Not doing it for every key, since some I consider necessary and without, might as well not add a person at all.
// todo - increase space between employee photo and their name
// todo - Decide how to display personel
// todo - Touch up and make responsive the main story
// todo - the flex looks shitty, switch out for grid ???


@ Gear Page / GearCarousel ---------------------------------- https://www.npmjs.com/package/react-responsive-carousel
! - For early live - Photos smaller sizes and all same dimensions
todo - FOR FINAL PRODUCTION - acquire excellent photos of the various gear we have, multiple shots, try to have most of them be the same aspect ratio to reduce the editing
    todo - FOR FINAL PRODUCTION - edit good photos to all have the same aspect ratio. 1x and 2x pixel density. prob ~4:3 ???
    todo - FOR FINAL PRODUCTION - make smaller file sizes with different pixel densities too
    todo - FOR FINAL PRODUCTION - plug in all the images to replace the existing temporary ones
? - what about a 3D google street style navigable thing? I think that would be so slick...
    * Either link to the one on google maps... or just have one instead of the carousel ???
? - other sections in gear below the carousel?
todo - 
todo - restore edge distance to the Jumbotron w/ mr-0 ml-0 as well as the Container below everything that I'm not sure if I'll end up using
todo - Make gear image be edge to edge of screen w/ className='pl-0 pr-0' in Container
// todo - implement react-bootstrap grid system and prepare for additional sections below carousel
// todo - add carousel to gear page
// todo - add templating to GearCarousel to load different image sizes for different viewport sizes -- faster loading on mobile! To do this, probably use <picture></picture> w/ <source srcset="large.jpg" media='(min-width: 1000px)'/> kinda stuff... may be weird in React, but should be doable.


@ Beta page ---------------------------------------
% - This is an example of a great page linking to other sites for local info
    * https://www.thedesertrat.net/localinfo
todo - FOR FINAL PRODUCTION - Nice photos for the cards / section titles
    * Commision Ray to make some! His style is excellent
    * edit art credit on footer of Beta.js / have credit hidden in his art?
todo - FOR FINAL PRODUCTION - fill out the skip / skip to links for every single section, check that they work
todo - FOR FINAL PRODUCTION - background for entire page?
todo - fix the blue then image problem with the cards...
    pretty sure it has to do with me using img from an API, with a static img that we host, it shouldn't happen. I think.
todo - add something when you hover over the cards, like outline color change, lighten of background image, grayscale to color, etc...
    the blue outline is kinda plain, not the nicest, but it does hint at interactivity...
? - should I wrap every external link icon in <sup>...</sup> ? Or use something else to make the icon smaller and up
    ... hopefully w/o disrupting line heights
todo - set the CSS background color ( iirc ) for each of the sub sections... instead of the default solid blue. I think it could look cool if these were set to the major or minor color present in the images I'll select for the major section background pictures... Do this in bootstrap-with-overrides.sass
todo - when you close open major section accordion it snaps closed instead of having the previous smooth animated behavior... This is obviously because of my intervention below... how can I smooth this out????...
    * ... Really, the behavior currently isn't TERRIBLE. I just think it is. I. Me.
    * Realistically I can get back to this later. If that means copy/pasting in many files and places, well, oh well... more important to actually get the meat of the site out into a functional state.
todo - add a main background of some kind? Something to fit multiple sizes, maybe multiple images
todo - find / implement section backgrounds
    * 94px high
    * up to 1248px wide on 2560x1440
    * down to 288px wide on iPhone 5
    * COOL NOTE. With the new CSS props I have set on AccordionOfAccordions, if I set every section to the same image, the image spans them all, it looks pretty cool. Doesn't shift around or anything w/ open/close... think this is a good option to keep in mind
    * Try 95px tall by 290, 690, 930, 1250px width
    ? What code to decide what is used?
    ? How can I have multiple options for background, based on screen width, w/o @media?
        *<picture></picture>, with source + srcset, and media...
        ? how to then make this behave as a section background? position and z-index?
todo - fix section backgrounds. Need to be able to have multiple sizes for multiple screen sizes. Currently <picture>...</picture>, with source srcset doesn't work... but a standard img tag inside does... a hackey way to fix the overflow is 'overflow': 'hidden'... Apparently you can do srcset inside an <img />, including media queries and specified widths... so I'll try this stuff next instead of <picture>...</picture>
* - I see 'The srcset attribute has an effect only when the <source> element is the direct child of a <picture> element.' on MDN... but elsewhere they contradict themselves... so... huh?
? - should the group of accordions try to initially center itself in the viewport?
// todo - set my art credit link to me... not google lol
// todo - add a note for the intentionally empty columns for screen readers? or is there another way to mark it as layout only not content?... aria-hidden="true" ... hides the empty columns by not presenting them at all to screen readers, etc
// todo - figure out how I want it to be row/column wise... went with 3 columns, but the first and last are only to allow the middle to center... and manually setting how many columns out of 12 for each to span based on screen size. It works pretty well. Can adjust later if needed.
// todo - fully switch over all the beta sections to the functional stateless component, AccordionOfAccordions
// todo - in Beta.js move Hiking, Trailrunning, etc... to appropriate stores of data and add them... Will most likely need to organize by adding another major section and determine its minor sections... make the appropriate notes in Beta.js comments
// todo - How can I do background img now that I'm using AccordionOfAccordions??? EASY. Pass it in as props, in the styles in AccordionOfAccordions backgroundImage: `url(${ props.backgroundImage })`,
// todo - switch to a re-useable functional stateless component that you pass an array of objects to as props, which then builds out the Accordion of Accordions... much better.
// todo - Showers at R2C2 are $5, fix this
// todo - Fix the space below accordion. Should be no space below it to start, activating should push below content down when it opens, then closing it should pull content back up to previous position... I should have caught this sooner. At least I didn't fill out all of templates yet.
//     * should be able to add/remove display: none to get this to happen... may not be smooth though
//     * Adding this line in Animated component seems to work as I want
//     * style={ accordionVisible ? accordionStyles : {...accordionStyles, ...hideAccordion} }
// todo - fix alignment of loop road hours... tabs basically... maybe use a quick table
// todo - tweak styling of emergency/rescue number/link
// todo - add a tooltip that says something like: "click to show/hide additional info" to the card and accordion sections
// todo - make the title font of the card / section titles larger ( h2 tag )
// todo - use z-index to make the animation of the accordion show/hide below/behind the card/section titles
// todo - make a template, accessible, to use to make all the sub components
// todo - implement a map icon to include on lines with a Google Maps link
// todo - implement a external link icon
// todo - implement a phone number link icon
// todo - implement a email link icon
// todo - STRONG WORDS ABOUT FIRES
// todo - free and paid camping options for all seasons, maps to them, or rather google map link to them
    @ Beta sub sections ---------------------------------------------------------
    @ ---------------------------------------------------------------------------
    % GeneralInfo
        todo - add content for 'Wet Rock'
    % LodgingLogistics
        todo - add content for 'Hotels'
        todo - add more content for other shower locations like truck stops
    % Food
        todo - add content / trim content
        todo - fill out breweries & bars



@ Guiding page ------------------------------------
! - Wording EVERYWHERE, and trim down amount of text a bit
! - gallery or carousel of photos from guiding
    everything from beginner top roping to epic multipitch, trad instruction, not too many photos that make it seem super hot here
    AMBITIOUS option - My secret package for this
todo - AMBITIOUS - consider on tier cards some sort of 3d, animation, click on to flip over to a description, etc...
todo - AMBITIOUS - Un-necessary hassle - dynamic climbing experience for the guides
    add an estimated date when they started climbing and calculate how long they have been climbing total, in years based on user clock? One less thing to update from time to time...
todo - make sure tab through accessibility is there... IF there is a reason for it to be, like a 'book it now' button
    Implement skip to links
        tiers
        guides
        gallery
        if there is a email form? ... probably should be
            thus I can prompt them for some of the common basic info we need to know to actually be able to help them
! - consider re-structuring...
    * Tier Cards First (or after a wide jumbotron w/ Red Rock Climbing Guides)
    * THEN RRCG / How it Works Steps + About our guiding columns...
    * THEN Pics from guided climbing outings
    * THEN Check out some of our guides, etc...
todo - Canyoneering, Adventure Hiking, etc Tier 3-ish cards?
! - guide inquiry form
    * Formik, react-bootstrap, yup... https://formsubmit.co/ instead of backend PHP stuff...
    Need to make it not too extensive... but I still want to get a lot of basic info that we need... So that we don't have to regurgitate over and over all the basics and guess what they want to do.
    * Do I need labels? What about just using the starting value/text or placeholder? This way I could condense the area it covers a lot. Not sure how that would impact accessability
! - Josh Diggs
! - Work on everyones bio lengths
todo - increase font size or something to make the guiding day durations slightly more prominent
// todo - Add Ting Ting
// todo - Fix TierCard.js photo credit overlay text - DONE, and its pretty great now!
// todo - fix tier card img height on tier 3 -- by cropping them all to the same 741px height
// todo - should the Tier # and tag line (half day, full day, multipitch) be split to 2 lines always?... this is nitpicky. Its fine the way it is.
// todo - probably add some bar below everything that says that we can accomodate other complicated outings
//     such as huge groups, corporate outings, packages with photographer and/or pro climbers, etc... contact us and let us know what you are wanting to do. Also adventure hikes (bridge mtn), scouting descent routes, canyoneering rarely (the maze), bouldering guide (very uncommon), etc...
// todo - Switch guide bios and guiding tiers... basically anywhere I parse HTML to just return a func which returns JSX instead.
// todo - make the guide inquiry form and guiding waiver cards both the same height w/ style={{'height': '100%'}}
// todo - build for production and see if the PDF link works, because it gives 404 in local server... did, then added .htaccess file to make routing work properly in general when hosted on dreamhost
// todo - link to liability waiver. ONE FILE. NOT 4. FFS!
// todo - make all Card componets (Guiding, tiers, guides) height 100% -- style={{'height': '100%'}}
// todo - create 2 more tiers for future use
// todo - adjust breakpoints
    // * See note about guiding tiers xl={2 / 3 / 4}
// todo - don't say "safe" say manage risk or something to CYA
//     two of the original paragraphs below
//     We are committed to providing a safe outdoor rock climbing experience regardless of your ability. Our goal is to help you develop your rock-craft skills while becoming a knowledgeable, efficient, environmentally-aware climber focused on safety and leave-no-trace ethics.
//     Red Rock Climbing Guides operate in the Red Rock Canyon National Conservation Area by permission of the Las Vegas District of the Bureau of Land Management. We are Las Vegas' only locally-owned guide service and are prepared to make your outdoor experience Fun, Affordable, and Safe!
// todo - switch the R2C2 / how it works steps thing into a card component
// todo - added a key in obj check and ternary to lead into the links which are added if present, makes it a bit less prone to problems if I add someone and forget to add every expected key to them. Not doing it for every key, since some I consider necessary and without, might as well not add a person at all.
// todo - increase space between guide photo and their name
// todo - bump up Tier font (in TierCard.js, used .display-4 on the title... smaller didn't work, other size classes like .h2 didn't work either)
// todo - make sure when a guides row wraps, there is vertical spacing between the individual guides
// todo - fix styling, etc of the contact info number/email
// todo - SOME DIVIDER between tiers and guides... could be a good place for a gallery or carousel
// todo - paragraph separation, lists, etc for the tier cards (html-react-parser)
// todo - maybe some intro into our guides instead of just spitting out bios? At the least a title for the section, "here are some of our guides"
// todo - give some info on how booking usually goes, payment, when the guide reaches out, where you typically meet, what will happen there (waivers, gear), carpool, etc...
// todo - give some bit of info that makes it clear that a bit of advanced noticed is HIGHLY beneficial
// todo - fix 'Red Rock Climbing Guides' -- maybe with a Jumbotron or Card, a logo would be good here
// todo - add some sort of divider between tiers and guiding roster
// todo - change placement of Fa instagram icon/link, better personal site icon, add youtube icon
// todo - use Fa instagram icon
// todo - add suitable tier descriptions
// todo - fix photo credit -- put below photo for now
// todo - decide on guide bio cards or carousel
// todo - possibly separate the objects in Guiding.js into other .js files that have their own imports for pictures, etc... then export them and import them into Guiding.js. More clean.
// todo - download original guiding page images
// todo - re-make it rough
// todo - implement react-bootstrap cards, layout
// todo - set a good card width
// todo - make sure the cards fill all horizontal space when suitable, ie on smaller screens


@ Other page --------------------------------------
    What will it be?
    Options?
        Courtesy page for Steve's Red Rock Resoles?

        Weather?
            Would need API access to probably multiple services, could maybe be a pain to keep working due to updates
                Maybe argument for GraphQL?
            Would need historic past rainfall too, which may currently be off if that sensor is still broken at RRNCA
            ... would be pretty cool... but a TON of work to make it all look good
            ... Thinking a row of Cards
                first 3-4 are past weather (high/lo, rainfall, pic)
                then a highlighted and labeled one TODAY (same info)
                then 3-14? future forecasted days weather

        Something else?
            What?
                Nothing. Get rid of it.


@ Shop page ---------------------------------------
! - ADD link data thing for Mojave Limestone and Keyhole Canyon
! - ADD current prices
! - ADD a note on shipping pricing????
// todo - make the image be a Card.Img inside a Card component for consistent corner rounding
// todo - Alignment...
//     Title center, Author center as subtitle
//     hr, Subtitle tagline, paragraph or two of what it covers --- all left aligned
//     Price, button... currently center
//     * would the price/button be better on the right?
// todo - Add short descriptions for the books
// todo - added mt-3 mb-3 to main container to give some much needed separation
// todo - Figure out a Fix for Big4 Img size... basically need a square img for best use...
//     * other option is to add the buy buttons, etc to inside the main "We have the best local guidebooks..." Col...
//         * Really... that is not a bad idea at all. Hmm
//     * OR... add the Big 4 photo to that Col, and the buy buttons in their own Col next to it... so only a 2 Col layout.
// SIDE PIC SMALL AND SUITABLE
//     The group of 4 main books. The ones we will bother to sell online.
// todo - put a very basic paypal enabled order system for the most popular guide books (copy/paste/trim code from old site)


@ Secret page -------------------------------------
todo - replace secret section link '.' with something else, like a FA icon (just commented out it for now...)
    it could be cool if it was a transparent icon, which you hover over for like a full second, then a opaque dropshadow or something shows up and it doesn't appear clickable until after this time ?
todo - what content can go here ?


@ Error page --------------------------------------
todo - make a great one
    slightly random error page graphic/text?
    ladylockoff rope/gear art spelling 404 ? ha not a bad idea
    Some classic photo with abysmal gear placement?
// todo - add an OK to the background, maybe also a border, maybe box shadow
// todo - make a temp OK enough 404 page




% -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Components -=-=-=-=-=-=-=-=-=-=--=-=--=-=-=-=-=-=-

@ Header component ----------

@ Navbar component ----------
todo - add a DRS logo image to the 'branding' nav item / link
? - do I really want an external link icon for the gym???
// todo - fix small screen hamburger dropdown mixing with Splash / Hero image/text poorly
//     - it is due to the .splash-text css styling, position: absolute... mostly at least.
//     - maybe try fixing by replacing with react-bootstrap Jumbotron or a carousel... or maybe just a generic react-bootstrap Container
//     * - using fixed="top" on the NavbarRBS would necessitate adding padding-top to the Switch to prevent cutting off the top content of all pages... for now going to go w/o doing this, but something to keep in mind incase I decide to switch it up later on.
//     - FIXED: did fixed="top" on NavbarRBS, and then made a hidden div in App.js with height of 56px
// todo - add an "opens in a new tab" tooltip to gym link
// todo - swap out with react-bootstrap NavBar and see how I like it...
// todo - change the style of the nav links (stylesheets/layout/_navbar.sass)
    // remove default underline
    // remove default visited color (only for the nav at this time)
    // style hover and active together with a background and/or color change
    // style focus separate with an outline or noticable animation like an underline animating in, or border animating, etc

@ RRResoles component / sub page ----------
todo - separate out into its own page... right of guiding. Probably.
? - Maybe merge the images and main card into one and do something so images stay looking good no matter the size?
? - Maybe merge prices and contact info?
// todo - add some photos!
// todo - use react-bootstrap Card components, Jumbotron, or w/e else
// todo - set height: '100%' on all Card componets here
// todo - fix width issue so it fills the same horizontal width / footprint as the sections before
// todo - add react-bootstrap grid system
// todo - make a basic skeleton frame one

@ Footer component ----------
? - Do I even want to have one? I just commented it out in App.js for now...







@ STAGING TEMP SHIT
https://www.polemicdigital.com/protect-your-staging-environments/
! - When ready to go live, in robots.txt change:
    Disallow: /
    Noindex: /
        to
    Disallow:

! - When ready to go live, remove htaccess pass settings:
    AuthType Basic
    AuthName "Protected Area"
    AuthUserFile /path/to/.htpasswd
    Require valid-user

    and .htpasswd file in src

! - OTHER
    Make sure http & https work
    Make sure routing works, like going straight to Shop w/o having first visited index


*/