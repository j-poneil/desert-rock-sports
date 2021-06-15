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

todo - change the style of the nav links (stylesheets/layout/_navbar.sass)
    // remove default underline
    // remove default visited color (only for the nav at this time)
    style hover and active together with a background and/or color change
    style focus separate with an outline or noticable animation like an underline animating in, or border animating, etc


todo - add more photos of the inside / outside of DRS
    clothing
    artwork?
    new local guidebooks
    route topos
    stick clips
    chalk selection
    canyoneering ropes, bags, critter, quicklinks, etc?

todo - Better business name display, colors, font, size, position
    Maybe just use the main large backdrop of Desert Rock Sports, then after a short delay, start the carusel?

todo - Mention resoling drop off boxes

todo - use html5 style address, for shop for screen readers, etc?

todo - make/implement a proper favicon

todo - add react-icons icons to various parts of the app/pages/components

todo - replace secret section link '.' with something else, like a FA icon

todo - better style the google map on the bottom of the home page
    It currently takes up 100% width and full height
    When doing less than full height, it leaves a gap at the bottom
    ... in _mapresponsive.sass mess with aspect ratio stuff, maybe breakpoints for them?

todo - embed instagram thing / good for news
todo - embed instagram thing for SNCC / other

todo - email list?



todo - some sort of server integration?
    Like maybe make a control panel site that TG can log into to change: hours, address, phone numbers, mark things as in stock or sold out?
    The site reads/updates a DB, like firebase
    Then the deployed site gets updated values from firebase with fallbacks if no connection?


@ Gear Page / GearCarousel ---------------------------------- https://www.npmjs.com/package/react-responsive-carousel
//todo - add carousel to gear page
//todo - add templating to GearCarousel to load different image sizes for different viewport sizes -- faster loading on mobile! To do this, probably use <picture></picture> w/ <source srcset="large.jpg" media='(min-width: 1000px)'/> kinda stuff... may be weird in React, but should be doable.
todo - other sections in gear below the carousel
todo - FOR FINAL PRODUCTION - acquire excellent photos of the various gear we have, multiple shots, try to have most of the be the same aspect ratio to reduce the editing
todo - FOR FINAL PRODUCTION - edit good photos to all have the same aspect ratio. 1x and 2x pixel density
todo - FOR FINAL PRODUCTION - make smaller file sizes with different pixel densities too
todo - FOR FINAL PRODUCTION - plug in all the images to replace the existing temporary ones





Compleated tasks (subject to revision of course)
==============================================================================================













*/