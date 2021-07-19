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
? - maybe combine guides and staffList into one...? Control what shows up where with new keys and values
    like isAGuide: true/false, worksInTheShop: true/false - any downside? I'm using the same pics, a lot of the same text, links... makes sense to combine to me...
? - is this a stupid idea: a central object with a lot of the info that could change frequently in it, that is used as the source for it through the site?
    IE Hours of operation, resole turn around time, guide service pricing, News, etc...
    Would be only 1 spot to go to edit the common things, instead of multiple places... hmm
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
todo - React.lazy / lazy loading
todo - loading animations that I can use in various places
    Patagonia had a cool one that was a drawn ridgeline that animated in, then re-traced over in different line colors.
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
todo - A LOT TO DO HERE.
    WORK HERE
    ! LOOK AT ME
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
todo - probably move nav link position of the about page to just left of 'Shop'
// todo - increase space between employee photo and their name
// todo - Decide how to display personel
// todo - Touch up and make responsive the main story
// todo - the flex looks shitty, switch out for grid ???


@ Gear Page / GearCarousel ---------------------------------- https://www.npmjs.com/package/react-responsive-carousel
todo - other sections in gear below the carousel
todo - FOR FINAL PRODUCTION - acquire excellent photos of the various gear we have, multiple shots, try to have most of the be the same aspect ratio to reduce the editing
    todo - FOR FINAL PRODUCTION - edit good photos to all have the same aspect ratio. 1x and 2x pixel density
    todo - FOR FINAL PRODUCTION - make smaller file sizes with different pixel densities too
    todo - FOR FINAL PRODUCTION - plug in all the images to replace the existing temporary ones
// todo - implement react-bootstrap grid system and prepare for additional sections below carousel
// todo - add carousel to gear page
// todo - add templating to GearCarousel to load different image sizes for different viewport sizes -- faster loading on mobile! To do this, probably use <picture></picture> w/ <source srcset="large.jpg" media='(min-width: 1000px)'/> kinda stuff... may be weird in React, but should be doable.


@ Beta page ---------------------------------------
todo - FOR FINAL PRODUCTION - Nice photos for the cards / section titles
todo - climbing gyms in the area
todo - coffee shops around
todo - locations for wifi ?
todo - wet weather options beta
    hiking, hot springs, touristy stuff, non-sandstone climbing, etc...
todo - fix the blue then image problem with the cards...
    pretty sure it has to do with me using img from an API, with a static img that we host, it shouldn't happen. I think.
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


@ Guiding page ------------------------------------
todo - possibily for the guides, dynamic climbing experience...
    add an estimated date when they started climbing and calculate how long they have been climbing total, in years based on user clock? One less thing to update from time to time...
todo - gallery or carousel of photos from guiding
    everything from beginner top roping to epic multipitch, trad instruction, not too many photos that make it seem super hot here
todo - probably add some bar below everything that says that we can accomodate other complicated outings
    such as huge groups, corporate outings, packages with photographer and/or pro climbers, etc... contact us and let us know what you are wanting to do. Also adventure hikes (bridge mtn), scouting descent routes, canyoneering rarely (the maze), bouldering guide (very uncommon), etc...
todo - consider on tier cards some sort of 3d, animation, click on to flip over to a description, etc...
todo - make sure tab through accessibility is there... IF there is a reason for it to be, like a 'book it now' button
    Implement skip to links
        tiers
        guides
        gallery
        if there is a email form?
todo - gallery or carousel of guiding photos? Gallery probably more convienient, since carousel mis-matched image sizes issues
todo - don't say "safe" say manage risk or something to CYA
todo - trim down text
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


@ Shop page ---------------------------------------
    Ambitious to have it all here and built in the same
    More likely just link to a better than existing site re-made with a different provider, not the old school way the current one has it
    That way get the established security and modern online checkout experience all in one...


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
// todo - swap out with react-bootstrap NavBar and see how I like it...
// todo - change the style of the nav links (stylesheets/layout/_navbar.sass)
    // remove default underline
    // remove default visited color (only for the nav at this time)
    // style hover and active together with a background and/or color change
    // style focus separate with an outline or noticable animation like an underline animating in, or border animating, etc


@ RRResoles component / sub page ----------
todo - add before/after photos as a gallery or carousel
todo - use react-bootstrap Card components, Jumbotron, or w/e else
// todo - add react-bootstrap grid system
// todo - make a basic skeleton frame one


@ Footer component ----------
? - Do I even want to have one? I just commented it out in App.js for now...













Compleated tasks (subject to revision of course)
==============================================================================================













*/