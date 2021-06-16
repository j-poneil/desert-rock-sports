/*
! - critical
@ - purple, look at me
? - questions to answer or think about
todo - need to do, not critical
% - yellow
$ - cash money green
* - yellow/green - point worth seeing?
- normal comment
// strikethru

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
todo - use the fonts in index.html (make a easy to read and copy/paste list)
todo - make/implement a proper favicon
todo - add react-icons icons to various parts of the app/pages/components
todo - email list?
todo - some sort of server integration?
    Like maybe make a control panel site that TG can log into to change: hours, address, phone numbers, mark things as in stock or sold out?
    The site reads/updates a DB, like firebase
    Then the deployed site gets updated values from firebase with fallbacks if no connection?
todo - add more photos of the inside / outside of DRS
    clothing
    artwork?
    new local guidebooks
    route topos
    stick clips
    chalk selection
    canyoneering ropes, bags, critter, quicklinks, etc?
todo - is this a stupid idea: a central object with a lot of the info that could change frequently in it, that is used as the source for it through the site?
    IE Hours of operation, resole turn around time, guide service pricing, News, etc...
    Would be only 1 spot to go to edit the common things, instead of multiple places... hmm

@ Home page ---------------------------------------
todo - Better business name display, colors, font, size, position
    Maybe just use the main large backdrop of Desert Rock Sports, then after a short delay, start the carusel?
todo - Instagram feed embed
    Apparently this is WAY harder than it used to be, due to recently increased security.
    Check your bookmarks, you made a folder with all the info you need to do it.
    Need a certain FB account, IG acct, verify stuff, Heroku acct, etc...
    Requires setting up a free heroku site and running an access token refresh agent...
    then getting that token to here and using it. Very doable, but a hassle for another time I think.
todo - better style the google map on the bottom of the home page
    It currently takes up 100% width and full height
    When doing less than full height, it leaves a gap at the bottom
    ... in _mapresponsive.sass mess with aspect ratio stuff, maybe breakpoints for them?
todo - Mention resoling drop off boxes in another lower section, before contact info?
    - contact info
    - prices
    - other info: does approach shoes, rubber used, etc...
    - turn around time: ?
todo - play with parrallax
todo - better contact info / address styling + HTML5 style address for the addresses of shop, gym, maybe resoles? for screen readers

@ About page --------------------------------------
todo - Touch up and make responsive the main story
todo - Decide how to display personel
    * Carousel, slower, and succinct bio for each could look great, worry the bio would be too long on mobile
        Also probably eliminated the need for much of a background
    * Obj with all info mapped over and cards are used to display everything
        Should be easy to add new people and remove old ones, just get a picture, their name and a little bit of info and fill it in
        COULD grab this info from a server... but thats server requests, and like guide roster this doesn't change that fast
todo - figure out a nice background, maybe use some parallax
todo - probably move nav link position of the about page to just left of 'Shop'

@ Gear Page / GearCarousel ---------------------------------- https://www.npmjs.com/package/react-responsive-carousel
//todo - add carousel to gear page
//todo - add templating to GearCarousel to load different image sizes for different viewport sizes -- faster loading on mobile! To do this, probably use <picture></picture> w/ <source srcset="large.jpg" media='(min-width: 1000px)'/> kinda stuff... may be weird in React, but should be doable.
todo - other sections in gear below the carousel
todo - FOR FINAL PRODUCTION - acquire excellent photos of the various gear we have, multiple shots, try to have most of the be the same aspect ratio to reduce the editing
todo - FOR FINAL PRODUCTION - edit good photos to all have the same aspect ratio. 1x and 2x pixel density
todo - FOR FINAL PRODUCTION - make smaller file sizes with different pixel densities too
todo - FOR FINAL PRODUCTION - plug in all the images to replace the existing temporary ones

@ Beta page ---------------------------------------
todo - fill this out
    todo - free and paid camping options for all seasons, maps to them
        NOTE TO NOT CAMP IN CERTAIN SPOTS ?
    todo - showers info, locations, prices
    todo - climbing gyms in the area
    todo - coffee shops around
    todo - locations for wifi ?
    todo - wet weather options beta
        hiking, hot springs, touristy stuff, non-sandstone climbing, etc...

@ Guiding page ------------------------------------
todo - replicate / improve upon the existing graphics and info, pricing display, etc that is available on the gym site
todo - take direction from that site i didn't even know existed !!!, images!
todo - decide on guide bio cards or carousel
    bio cards I could just re-use the card i develop for the employee cards, probably
todo - gallery or carousel of photos from guiding
    everything from beginner top roping to epic multipitch, trad instruction, not too many photos that make it seem super hot here

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

@ Secret page -------------------------------------
todo - replace secret section link '.' with something else, like a FA icon
todo - what content can go here ?

@ Error page --------------------------------------
todo - make a great one
    slightly random error page graphic/text?
    ladylockoff rope/gear art spelling 404 ? ha not a bad idea




% -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Components -=-=-=-=-=-=-=-=-=-=--=-=--=-=-=-=-=-=-

@ Header component ----------

@ Navbar component ----------
todo - change the style of the nav links (stylesheets/layout/_navbar.sass)
    // remove default underline
    // remove default visited color (only for the nav at this time)
    style hover and active together with a background and/or color change
    style focus separate with an outline or noticable animation like an underline animating in, or border animating, etc

@ Footer component ----------
todo - fill it out in a meaningful way, or comment it out if it seems like it is currently useless













Compleated tasks (subject to revision of course)
==============================================================================================













*/