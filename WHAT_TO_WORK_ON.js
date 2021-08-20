/*
Using the "Better Comments" VS Code plugin to color code comments based on the symbol/text after the double slash
Or first symbol/text on the line inside block comments. Helps me visually mark and separate things.

! - red - critical / critical note
@ - purple - look at me / section titles
? - blue - questions to answer or think about
todo - orange - need to do, not critical
% - yellow - ?
$ - cash money green  - ?
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
todo - email list?
todo - some sort of server integration?
    Like maybe make a control panel site that TG can log into to change: hours, address, phone numbers, mark things as in stock or sold out?
    The site reads/updates a DB, like firebase
    Then the deployed site gets updated values from firebase with fallbacks if no connection?
    ... actually maybe not firebase, since it would possibly cost... maybe a DB hosted at the same web host if it seems cheaper... MySQL maybe
? - maybe combine guides and staffList into one...? Control what shows up where with new keys and values
    like isAGuide: true/false, worksInTheShop: true/false - any downside? I'm using the same pics, a lot of the same text, links... makes sense to combine to me...
? - is this a stupid idea: a central object with a lot of the info that could change frequently in it, that is used as the source for it through the site? Thus one messy object and then every file that needs data from it just imports what they need. That would really cut down on how much code there is in some of the files... but it just moves it to the object (or objects) hmm will have to think about it more
    * automatic hours true/false
        * manual hours set
        * automatic hours season1 set
        * automatic hours season2 set
    * Resole turn around time
    * Guide service pricing
    * phone numbers, emails, addresses?
? - what about using a google spreadsheet to grab info from? Would worry of the cost due to number of requests? Is that a thing?
    Different tabs/pages for updating different things
        news stories
        hours
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
todo - make/implement a BETTER favicon
    Simple emoji, DRS, DR, or outline of mtns... ?
    Implement, in multiple sizes
todo - loading animations that I can use in various places
    Patagonia had a cool one that was a drawn ridgeline that animated in, then re-traced over in different line colors.
? - should I move the resoles to its own page? I think I should
    ... but if I'm going to, I should make sure that the main content of the Home page is filled out a bit more and good on its own
todo - add some line somewhere saying that I coded this site, see my github here etc...
    * Maybe a simple line at the very bottom of the home or about pages...
    // * As a block comment in the head of the index
    // * OH, github link icon on about/guiding page for me
? - on many pages I use mt-3 mb-3 for spacing between containers... but maybe I should also spend some time focusing on the spacing between Card   components and/or rows in general since I have been using them sooo much... and the vertical spacing between rows has not been the greatest in some spots
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
todo - Instagram feed embed
    Apparently this is WAY harder than it used to be, due to recently increased security.
    Check your bookmarks, you made a folder with all the info you need to do it.
    Need a certain FB account, IG acct, verify stuff, Heroku acct, etc...
    Requires setting up a free heroku site and running an access token refresh agent...
    then getting that token to here and using it. Very doable, but a hassle for another time I think.
todo - ambitious, but maybe AUTO alert with react-bootstrap style for when wet weather is detected OR when it has happened in the last x hours?
    - probably too many little difficulties in getting it accurate, BUT MAYBE, a general alert that wet weather happened recently, check HERE or HERE for more specifics, check HERE for if there is a message thread about it, or call us for more info: ###-###-####
todo - FOR FINAL PRODUCTION - play with background (backgrounds) parrallax with great images, else pattern or simple CSS transition
todo - SNCC link / info?
? - should I add the parser to the news titles too?
? - should I implement date-fns on DRS hours?
    We don't tend to be strict with when we change our hours so it is pretty rough on trying to code it in
? - I think it would be cool if I had some big image between the DRS and R2C2 contact info
    ... that ended up being about as tall as the tallest section, for DRS or R2C2... something like a square cut diagonally, with photo of gear in top-left, photo of gym in bottom-right... thus on a large screen if I set 3 col per row it sits nicely in the middle, but on smaller screens it still works as a transition between DRS and R2C2 with single column vertical scroll down... could even style the DRS and R2C2 info sections with the prevailing color scheme of the photo...
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
todo - FOR PRODUCTION - get peoples desired blurbs, photos, links to whatever, etc...
todo - FOR PRODUCTION - figure out a nice background, maybe use some parallax, but a simple CSS color transition would be fine too
? - a section on its own for the 3 owners???
todo - THEN below it current (and past?) employees
? - what about short reviews from patrons like James W?
todo - probably move nav link position of the 'About' page to just left of 'Shop'
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
todo - other sections in gear below the carousel
todo - FOR FINAL PRODUCTION - acquire excellent photos of the various gear we have, multiple shots, try to have most of the be the same aspect ratio to reduce the editing
    todo - FOR FINAL PRODUCTION - edit good photos to all have the same aspect ratio. 1x and 2x pixel density. prob ~4:3 ???
    todo - FOR FINAL PRODUCTION - make smaller file sizes with different pixel densities too
    todo - FOR FINAL PRODUCTION - plug in all the images to replace the existing temporary ones
? - what about a 3D google street style navigable thing? I think that would be so slick...
    * Either link to the one on google maps... or just have one instead of the carousel ???
// todo - implement react-bootstrap grid system and prepare for additional sections below carousel
// todo - add carousel to gear page
// todo - add templating to GearCarousel to load different image sizes for different viewport sizes -- faster loading on mobile! To do this, probably use <picture></picture> w/ <source srcset="large.jpg" media='(min-width: 1000px)'/> kinda stuff... may be weird in React, but should be doable.


@ Beta page ---------------------------------------
todo - FOR FINAL PRODUCTION - Nice photos for the cards / section titles
todo - FOR FINAL PRODUCTION - fill out the skip / skip to links for every single section, check that they work
todo - FOR FINAL PRODUCTION - background for entire page?
todo - fix the blue then image problem with the cards...
    pretty sure it has to do with me using img from an API, with a static img that we host, it shouldn't happen. I think.
todo - adjust breakpoints once I have a bunch filled out
todo - add something when you hover over the cards, like outline color change, lighten of background image, grayscale to color, etc...
    the blue outline is kinda plain, not the nicest, but it does hint at interactivity...
? - should I wrap every external link icon in <sup>...</sup> ? Or use something else to make the icon smaller and up
    ... hopefully w/o disrupting line heights
todo - set the CSS background color ( iirc ) for each of the sub sections... instead of the default solid blue. I think it could look cool if these were set to the major or minor color present in the images I'll select for the major section background pictures... Do this in bootstrap-with-overrides.sass
! - IMPORTANT
todo - when you close open major section accordion it snaps closed instead of having the previous smooth animated behavior... This is obviously because of my intervention below... how can I smooth this out????...
    * ... Really, the behavior currently isn't TERRIBLE. I just think it is. I. Me.
    * Realistically I can get back to this later. If that means copy/pasting in many files and places, well, oh well... more important to actually get the meat of the site out into a functional state.
todo - fully switch over all the beta sections to the functional stateless component, AccordionOfAccordions
! - START HERE TO GET IN THE GROOVE
todo - in Beta.js move Hiking, Trailrunning, etc... to appropriate stores of data and add them... Will most likely need to organize by adding another major section and determine its minor sections... make the appropriate notes in Beta.js comments
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
todo - AMBITIOUS - consider on tier cards some sort of 3d, animation, click on to flip over to a description, etc...
todo - Un-necessary hassle - dynamic climbing experience for the guides
    add an estimated date when they started climbing and calculate how long they have been climbing total, in years based on user clock? One less thing to update from time to time...
todo - gallery or carousel of photos from guiding
    everything from beginner top roping to epic multipitch, trad instruction, not too many photos that make it seem super hot here
    AMBITIOUS option - My secret package for this
todo - make sure tab through accessibility is there... IF there is a reason for it to be, like a 'book it now' button
    Implement skip to links
        tiers
        guides
        gallery
        if there is a email form? ... probably should be
            thus I can prompt them for some of the common basic info we need to know to actually be able to help them
todo - gallery or carousel of guiding photos? Gallery probably more convienient, since carousel mis-matched image sizes issues
todo - trim down text, especially on R2C2 / how it works steps side
todo - consider re-structuring...
    * Tier Cards First (or after a wide jumbotron w/ Red Rock Climbing Guides)
    * THEN RRCG / How it Works Steps + About our guiding columns...
    * THEN Check out some of our guides, etc...
todo - probably add some bar below everything that says that we can accomodate other complicated outings
    such as huge groups, corporate outings, packages with photographer and/or pro climbers, etc... contact us and let us know what you are wanting to do. Also adventure hikes (bridge mtn), scouting descent routes, canyoneering rarely (the maze), bouldering guide (very uncommon), etc...
todo - guide inquiry form
    * Formik, react-bootstrap, yup... https://formsubmit.co/ instead of backend PHP stuff...
    Need to make it not too extensive... but I still want to get a lot of basic info that we need... So that we don't have to regurgitate over and over all the basics and guess what they want to do.
    * Do I need labels? What about just using the starting value/text or placeholder? This way I could condense the area it covers a lot. Not sure how that would impact accessability
? - should the Tier # and tag line (half day, full day, multipitch) be split to 2 lines always?
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
            All the info, prices, contact info, turn around time
        Weather?
            Would need API access to probably multiple services, could maybe be a pain
            Would need historic past rainfall too, which may currently be off if that sensor is still broken at RRNCA
            ... would be pretty cool... but a TON of work to make it all look good
        Something else?
            What?
        Nothing. Get rid of it.


@ Shop page ---------------------------------------
    Ambitious to have it all here and built in the same
    More likely just link to a better than existing site re-made with a different provider, not the old school way the current one has it
    That way get the established security and modern online checkout experience all in one...
    * Link to it in the same way you link to the gym


@ Secret page -------------------------------------
todo - replace secret section link '.' with something else, like a FA icon
    it could be cool if it was a transparent icon, which you hover over for like a full second, then a opaque dropshadow or something shows up and it doesn't appear clickable until after this time ?
todo - what content can go here ?


@ Error page --------------------------------------
todo - make a great one
    slightly random error page graphic/text?
    ladylockoff rope/gear art spelling 404 ? ha not a bad idea
    Some classic photo with abysmal gear placement?




% -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Components -=-=-=-=-=-=-=-=-=-=--=-=--=-=-=-=-=-=-

@ Header component ----------

@ Navbar component ----------
todo - fix small screen hamburger dropdown mixing with Splash / Hero image/text poorly
    - it is due to the .splash-text css styling, position: absolute... mostly at least.
    - maybe try fixing by replacing with react-bootstrap Jumbotron or a carousel... or maybe just a generic react-bootstrap Container
todo - add a DRS logo image to the 'branding' nav item / link
* - using fixed="top" on the NavbarRBS would necessitate adding padding-top to the Switch to prevent cutting off the top content of all pages... for now going to go w/o doing this, but something to keep in mind incase I decide to switch it up later on.
? - do I really want an external link icon for the gym???
// todo - add an "opens in a new tab" tooltip to gym link
// todo - swap out with react-bootstrap NavBar and see how I like it...
// todo - change the style of the nav links (stylesheets/layout/_navbar.sass)
    // remove default underline
    // remove default visited color (only for the nav at this time)
    // style hover and active together with a background and/or color change
    // style focus separate with an outline or noticable animation like an underline animating in, or border animating, etc


@ RRResoles component / sub page ----------
todo - add before/after photos as a gallery or carousel
todo - use react-bootstrap Card components, Jumbotron, or w/e else
todo - separate out into its own page... right of guiding. Probably.
// todo - set height: '100%' on all Card componets here
// todo - fix width issue so it fills the same horizontal width / footprint as the sections before
// todo - add react-bootstrap grid system
// todo - make a basic skeleton frame one


@ Footer component ----------
? - Do I even want to have one? I just commented it out in App.js for now...












*/