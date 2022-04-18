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
@ HOSTING, etc --------------------------------------------------------
* Get a host setup, maybe dreamhost
* Get domain name(s) transferred over
    OR set domain names hosted at other locations to just point to a proper hosted domain name
* Choose main domain name
* Point all other domain names to forward to main
* - Sendinblue... when I have the hosting / domain, change the defaults to reflect that emails are from:
    whatever@desertrocksports.com or w/e the proper domain name is
    Make sure that respond to email makes sense too. (or set no-reply@desertrocksportslv.com ?)
* Get old site code
    *archive / double check if there is anything I need
* Get paypal acct transferred?
* Get paypal button codes
* Live but protected testing
* SSL cert / http and https testing
    * how to auto-keep ssl cert valid ?


@ index.html & other general stuff ----------------------------------------
! - FOR FINAL PRODUCTION - look over every file, make sure nothing obviously overlooked
! - FOR FINAL PRODUCTION - Full check of spelling and grammer, and multiple people looking over EVERYTHING
! - FOR FINAL PRODUCTION - SEO optimization... create-react-app does some basics, but I can certainly improve it more
! - FOR FINAL PRODUCTION - Have someone navigate it all with a screen reader to test accessability
! - FOR FINAL PRODUCTION - Check for color-blindness / contrast compatability
! - FOR FINAL PRODUCTION - loading speed, efficiency, no extraneous re-renders, etc...
! - FOR FINAL PRODUCTION - React.lazy / lazy loading / Suspense
! - FOR FINAL PRODUCTION - Make sure my important comments that i made about author of site are visible after build process?
    in index.html should survive minification, I'd think

! - npm audit / npm audit fix
    This could lead to a lot of issues
! - FOR ROUGH RELEASE - look over all files, check for issues, tidy up a bit, remove SOME unused code and files
! - FOR ROUGH RELEASE
    [] full spelling/grammer check myself
    [] have a few people proof it
    [] fix spelling, wording, inaccuracies
! - FOR ROUGH RELEASE - experience
    [] test keyboard nav
    [] test on different devices
?? - easy way to highlight some accessability concerns
    https://www.youtube.com/watch?v=Xe1_paniVB4
    
todo - M thoughts, etc
    General feedback
        Move away from two column
            Make things fit into ~920, 960 or 980px width column in the middle, will feel less cluttered
            Hero images, headers, etc can span full width... but sections of text to read should not... unless small screens
                ** setting Container fluid="md" has the desired behavior
                ... container will be fluid / 100% width UNTIL md breakpoint
                ... so smaller screens get full width
                NOW I just need to move back to single column

                ALSO need to re-think srcSet / sizes slightly
            
        Maybe don't even do a background like this
            Instead have containers basically be full width
                ... but text within constrained to "md"
                ... potentially light color background
                ... potentially light pattern or attractive detail in background
                MAYBE standardized styles
            jumbotrons / sections separators be full width
                ... text also, PROBABLY constrained to "md"
                ... potentially light color background
                ... potentially light pattern or attractive detail in background
                MAYBE make a standardized custom Jumbotron for sections / header types / separators
                OR just custom style that can be imported and used
                ex. M often uses full width sections with white text near the bottom and linear gradient to make it more readable
                with images that work well at all sizes with the focus being in the middle
                


    Home
        todo - fix dead space on right on home... bleh!
        News
            Remove the Card style?
            Maybe add a header / spacer before it
        
        Bouldering Pads
            Remove the card style
            Maybe add a header / spacer before it

        Contact info for shop and gym
            Make it much much more clear which is which, visually
                BGs or my inbetween image thing? (but that forces 3 cols pretty much)
            Hours tables take up a lot of space on laptop, but nice to see times clearly... hmm
        Map is a bit big
        If I'm doing full size map and newsletter signup, make them edge to edge, and no gaps between them
            prob no gap below either
        My credit at bottom of home page should look much better

    Gear
        What is the point of this page?
        Move consignment info to top of gear page / trim gear gallery
        Very few will actually scroll all the way down
        ... Maybe just push to get a 3D walkthrough / vid / photosphere thing?
        What to do with the "What are you looking for?" thing...
    Beta
        Kinda cool in an old school way
        Probably fix the bump that happens when a scroll bar appears/disapears
    Weather
        not a great look
        No one will read that much on any given page
            Summary / weather API stuff at the top
            Sciency shit below -- that most will not read
    Guiding
        Tier images more like 4:3 ???
        Trim info
            Its too much to read!
            Can I consolidate examples to a pop-up or dropdown or something?
        Add a hiking tier (w/Charleston as well)
        Contact Form is probably a bit big!
        Liability waiver is akward when presented like this
    Resoles
        Again, not 2 column layout
        If you have questions, direct them to Steve Krall
    About
        Again, not 2 col layout
            How they met / history?
            Diff img than the cat on sandstone, if img at all
    Shop
        Kinda confusing having a gear page and shop page
        Crossing out SN Bouldering II like that looks not great
    404
        OK for now... but shitty img quality
        Add a link home
    // Having a link to the gym in the top bar is kinda distruptive, maybe just don't
    //     maybe a link in the gym hours section / gym info / w/e
    
    todo - header text and images for sections
        ? images need to be minified... can i still do alt sizes? thats a lot to pass in... hmm
    todo - overall site background ... or page background(s)
        CSS gradient + SVG w/ transparency?
        climbing gear, RR skyline, ???
    
    




-------------------
? - some sort of server integration?
    Like maybe make a control panel site that TG can log into to change: hours, address, phone numbers, mark things as in stock or sold out?
    The site reads/updates a DB... Then the deployed site gets updated values from MySQL with fallbacks
        news items
        automatic hours true/false
            manual hours set ( really, this is all he would use )
            automatic hours season1 set
            automatic hours season2 set
        Resole turn around time
        Guide service pricing
        phone numbers, emails, addresses?
        Adv:
            Guide/Staff Bios, images, order
            Guiding Gallery Images, order (alt sizes?)
        ==> None of this makes all that much sense to do.
        Its easy enough for me to just make small changes and updates the 3-4 times a year it is needed.
        Especially considering how I have laid out all this.
? - galleries title text - Can I change the no mouse movement / timeout delay for the text to disapear?
? - galleries title text - what about restricting the width of the text?
! - in Row and Col xxl=(#) doesn't work, period. All other sizes are fine, but xxl settings never work. NEVER.
    * looks like when you inspect a page it doesn't show up as a global breakpoint option
    * I should be able to add it
    * I have a feeling like I may need to add an xxs one too... hmm
    https://react-bootstrap.github.io/layout/grid/#row-props
! - Play with overall colors
    Darker than that overall default page BG
    * Cards that tend too have too much dead white space don't look good... but they are fine when they are filled with text
        EX. About > How they met... looks bad
            - add subtitles, more text
        EX. About > JJ Card... looks good
todo - replace generic <div> when it makes sense to do so, with semantic html, like article, section, etc...
todo - use the fonts in index.html (refer to them in a more readable form in NOTES.md)
todo - loading animations that I can use in various places
    Patagonia had a cool one that was a drawn ridgeline that animated in, then re-traced over in different line colors.
todo - blockquote styling?
    * indented, vertical gray line on left side, italic?
    * className='blockquote' approach makes the text larger, no indentation, no italics, etc...
    * className='blockquote-footer' approah is MUCH better. leading '---', smaller text, grey... but no indentation and line
todo - Newsletter Signup should look good at all sizes
    * https://github.com/davidjbradshaw/iframe-resizer
    * https://github.com/davidjbradshaw/iframe-resizer-react
    * https://www.youtube.com/watch?v=sNlycRiaeac
todo - Maybe ambitious - gallery lazy loading
    on small device, load page, click an image, it loads the large version (and loads the large of all the others in the background)
    Find a way to stop that loading of everything in the background. Either just the one clicked, or it and the 3-5 adjacent ones, ideally.
    ... Think some form of lazy loading may be there already... check for it
    Set a loading animation if able
        ... maybe not as easy as I was expecting
        You can set a custom imageRenderer for react-loading... so MAYBE thats an option
        ... but basically I want the default renderer, just wrapped ...?
! - [Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See <URL>
    Happens when scrolling/dragging between modal images, gets into the thousands of reports, easily
    Seems like happening in Swipe.js
    ... .addEventListener('touchmove', handler, {passive: false});
    https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    maybe add css touchAction: none ... or touchAction: 'pan-y' to the scrollable container?
    https://github.com/akiran/react-slick/issues/1650
        ... not the same, but should be ... parallel-ish
        ... .slick-list, .slick-track { touch-action:pan-y; }
        ... I should be able to find similar for Swipe.js or something
    https://github.com/nolimits4web/swiper/issues/3312
        slideoption={
            zoom:true,
            passiveListeners: false,
        }
        "Use this inside the component"
        ... element with class .touch
        <style lang="scss"> .touch { -ms-touch-action: pan-y; touch-action: pan-y; } </style>
    window.addEventListener ("touchmove", function (event) { event.preventDefault (); }, {passive: false});
        This in index.html at the bottom... does not work as intended. Can't touch scroll normally.
        Can touch scroll in modal/carousel.
        passive: true - ALSO doesn't work as intended. Scroll works as before, but extra errors for any scrolling, not just when
        inside the modal / carousel

// Darker Nav (bg="dark")
    //     Lighter Title text (variant="dark")
    //     Not as light menu text? (variant="dark")
// todo - NOTE - galleries title text - wrapping title in spans fails a propTypes test... but I never asked for it
//     So long as it still works after the production build, I'll live with it!
// todo - galleries title text - add a transparent black background for even better readability
// todo - the galleries title text is just white text on whatever the image is for the background.
//     Can I make the text have a black background? Or white Text w/ black outline?
//     Can I make the text larger?
//     % I found a way!
//         Instead of passing a string of text to title, use JSX and pass a variable that has a styled 'span'
//         ... Now find a way that I can implement this on all of them.
//         ... Preferably w/o copy pasting or find/replace a ton
//         1. Make a function styleModalTitle(text) ===> <span STYLES >{ text }</span>
//         2. map over the array of objects and output a new array where every title has been wrapped... export that one lol
//             Went with this, works well, placed the funcs in a utils.js file to not further complicate the existing hot mess
// todo - alt srcset, sizes, and smaller file sizes for other general images on the site (besides the galleries). IE backgrounds, asides.
//     * MIND BLOWN. ( https://observablehq.com/@eeeps/w-descriptors-and-sizes-under-the-hood )
//         Browsers determine what to load based on dynamic resource densities, which are calculated from x descriptors and sizes
//         Once they have that... the browser does whatever it wants to.
//         Can test responsive imgs with RespImageLint, rather than my probably-flawed expectations about which
//         resource "should" be loaded. RespImageLint is now saved as a bookmarklet
//             Running it spits out a responsive images report for w/e page you are on
            
//         A side effect is that sizes ends up setting the intrinsic width of your image. Its weird. So, IF you need an image to
//         scale only below its normal max width, you need to specify its normal full size width in the <img />
//         In my use case, because very often I want the images to scale with width=100% of container, all this is different for me
//         -- for 100% view width images specify sizes="100vw"
//         -- for grid stuff...?
//     [x] Home - Hero BG / Splash
//         [x] sizes - straightforward since its width is 100% of view, no grid, etc...
//     [x] Home - Julie Born to Bleed
//         at <992px vw, 1 col = img width = 100vw - padding/margins
//         at larger sizes: 2 cols = img width = 50vw - padding/margins
//         [x] sizes - sizes="(min-width: 992px) 50vw - 32px, 100vw - 32px"
//     [x] Home - Newsletter signup BG
//         kinda not ideal currently... so maybe hold off until I'm really satisfied with it?
//         else 100vw - padding/margins
//         [x] sizes - sizes="100vw - 30px"
//     [x] Resoles - Shoes
//         at <1200px vw, 1 col = img width = 100vw - padding/margins
//         at larger sizes: 2 cols = img width = 50vw - padding/margins
//         [x] sizes - sizes="(min-width: 1200px) 50vw - 32px, 100vw - 32px"
//     [x] About - Cat plush aside
//         at <992px vs, 1 col = img width = 100vw - padding/margins
//         at larger sizes: 2 cols = img width = 50vw - padding/margins
//         [x] sizes - sizes="(min-width: 992px) 50vw - 32px, 100vw - 32px"
//     [x] Shop - Books
//         at <992px vs, 1 col = img width = 100vw - padding/margins
//         at larger sizes: 2 cols = img width = 50vw - padding/margins
//         [x] sizes - sizes="(min-width: 992px) 50vw - 32px, 100vw - 32px"
//     [x] 404
//         used: className="d-block mx-auto img-fluid w-70"
//         so think sizes="70vw" should be good-enough
//         [x] sizes
//     [x] Make sure the large is not excessively large
//     Don't mess with 'sizes' rules when images are in a gallery, only when its like a background or aside or something
//     ... or do mess with it?!
//     [x] I just set static rules, like 100vw - dead screen width in pixels
//     https://neptunian.github.io/react-photo-gallery/srcset-and-sizes.html
//     https://neptunian.github.io/react-photo-gallery/examples/srcset-and-sizes.html
// todo - some general small fixes and changes to get rid of chrome linting warnings
// todo - make sendinblue signup email show proper company, etc in the email header/body
//     and not go straight to spam... maybe... or add a note to check spam folder
// todo - Guiding Gallery and Gear Gallery (& any other 'same setup' galleries) should use a re-usable gallery component with the 'photos' passed in (array of objects). This is so very easy to do, just get it done... good small thing to get back into a flow.
// todo - add some line somewhere saying that I coded this site, see my github here etc...
    // * Maybe a simple line at the very bottom of the home or about pages...
    // * As a block comment in the head of the index
    // * OH, github link icon on about/guiding page for me
// todo - fix weird top of some files error, which isn't an error in code, but of some library?
//     * somehow this fixed it in package.json
//     "eslintConfig": {
//         "extends": [
//             "react-app",
//             "react-app/jest"
//         ]
//     },
//     * Previously it was this:
//     "eslintConfig": {
//         "extends": "react-app"
//     },
// todo - fix a TON of linting warnings... comment out a TON of unused imports, fix some small things that work, but are warned about
// todo - fix SVG in React issues... which I didn't have before... code inplace (sorta) should I in the future switch to JSX wrapped SVG code instead of .svg image files
// todo - rough initial newsletter signup form. Looks fine on 1920x1080 and up, bad below that... used SendInBlue, Google reCAPTCHA v2
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
! - I think it would be cool if I had some big image between the DRS and R2C2 contact info
    ... that ended up being about as tall as the tallest section, for DRS or R2C2... something like a square cut diagonally, with photo of gear in top-left, photo of gym in bottom-right... thus on a large screen if I set 3 col per row it sits nicely in the middle, but on smaller screens it still works as a transition between DRS and R2C2 with single column vertical scroll down... could even style the DRS and R2C2 info sections with the prevailing color scheme of the photo...
? - should I add the parser to the news titles too?
? - should I implement date-fns on DRS hours?
    We don't tend to be strict with when we change our hours so it is pretty rough on trying to code it in
? - should splash background image corners be rounded consistent with other images on home page?
    *If so, in Splash.js, put everything in a Card component and change img to Card.Img
! - Title and text need to resize better for smaller screens... but also for MUCH bigger screens.
todo - an indicator that you should scroll down should be added ... unless its obvious
todo - FOR FINAL PRODUCTION - play with background (backgrounds) parrallax with great images, else pattern or simple CSS transition
    * If I want parallax... or fixed position backgrounds with stuff moving in front
        Its easier if I use CSS set backgroundImage...
        A harder way that can work with conventional images is using JS...
        BUT it is possible w/ conventional images and CSS only... and isn't THAT hard.
            https://keithclark.co.uk/articles/pure-css-parallax-websites/
            https://keithclark.co.uk/articles/practical-css-parallax/
todo - add more tooltips to various images/things (see instructions near the end of NOTES.md)
todo - srcSet / sizes
    [] Home - Pickles srcSet... actually it may be fine as its supposed to just be a temp img
        [] sizes - same as for Julie:
            at <992px vw, 1 col = img width = 100vw - padding/margins
            at larger sizes: 2 cols = img width = 50vw - padding/margins
            sizes="(min-width: 992px) 50vw - 32px, 100vw - 32px"
    [] Home - Sufferpup Simba srcSet... actually it may be fine as its supposed to just be a temp img
        [] sizes - same as for Julie:
            at <992px vw, 1 col = img width = 100vw - padding/margins
            at larger sizes: 2 cols = img width = 50vw - padding/margins
            sizes="(min-width: 992px) 50vw - 32px, 100vw - 32px"
? - Contact divs for DRS and R2C2
    To make them easier to see which is which at a glance besides reading...
    What about a very light background of gear and of a climbing wall?
todo - Splash photo credit, stick in bottom corner of img
// News nice to have, but akward how it can disrupt the scrolling experience
    // >>    or just show the most recent 3-4 and have a button to show/hide all
// todo - M - For home hero img
//     no negative thing
//     use a linear gradient to darken behind the text, will work with any width / text
//     height of hero img restrained to 100vh (* maybe 100vh - height of top nav bar)
// * - TOO AMBITIOUS - Instagram feed embed
    // Apparently this is WAY harder than it used to be, due to recently increased security.
    // Check your bookmarks, you made a folder with all the info you need to do it.
    // Need a certain FB account, IG acct, verify stuff, Heroku acct, etc...
    // Requires setting up a free heroku site and running an access token refresh agent...
    // then getting that token to here and using it. Very doable, but a hassle for another time I think.
// todo - Meaningful news items - fill in a bunch so it seems more 'lived in'
//     * We just got ______ items in stock!
// todo - hacky temp fix on news item scroll: maxHeight 65vh
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





@ Gear Page / GearCarousel ----------------------------------
? - what about a 3D google street style navigable thing? I think that would be so slick...
    * Either link to the one on google maps... or just have one instead of the carousel ???
! - Add an aside image or another section to the right of the consignment Jumbotron
        ! - Move to Containers, Rows, Columns
todo - Some of the images in the gallery are still excessively large. It shouldn't cause problems, really, but consider in some cases going through and setting the default 1 smaller, maybe commenting out the current largest. Kinda minor. Seems things are working decently well as is.
! - add images (too_large / large / medium / small / phone ... and all compressed. Don't use too_large.)
    [] Webbing / Cord off the spool ?
    [] Hollowblocks / Friction hitches ?
! - add something saying SOMETIMES we sell off our old rental fleet crashpads?
// todo - gearGalleryPhotos.js - commenting out largest img doesn't work like that, fix/remove.
// todo - Image titles/captions, alt text... creative
// todo - Smaller file dimensions for srcset tablet and phone
//    [x] Should be able to batch resize and maintain aspect ratio easy-ish (Image Resizer on left click menu)
//         original = original (not linked in)
//         too_large = original / cropped size, but polished... maybe or maybe not linked... some peeps have 4K...
//         large = fits in 1920x1080
//         medium = fits in 1366x768
//         small = fits in 854x480
//         phone = fits in 320x568
//     [x] THEN check that quality is acceptable still
//     [x] THEN tedious renaming with new dimensions
//     [x] THEN tedious importing them in
//     [x] THEN plug 1 in
//         [x] THEN test that it loads the appropriate size AND ONLY THAT SIZE
//         [x] BUT, onClick, Modal loads full size image
//     [x] THEN tedious plugging them in
//         1920x1080, profiling, 1 plugged in: 1.657 seconds
//         1920x1080, profiling, all in: 1.209 seconds
//         1920x1080, profiling, after compression on Tier and Bio pics 1.130 seconds
//         ... not a huge improvement, but substantial, can improve a bit with 'sizes' settings
//     [x] Switch 'sizes' to settings that make sense?
//         NO. Don't mess with sizes at all. The gallery choses what it wants, no need to set rules
//         [x] Comment out max size / 4k
//     [x] Set default as a smaller size (1080 or 1440w ish for most of them) = 1.358 S
//     [x] Test that on a small device, small images are loaded
//     [x] onClick on small device opens modal for the fullsize image (actually loads ALL fullsize in the background too... acceptable, for now I guess)
// todo - quick check on mobile gallery experience
//     Its pretty good!
// todo - Smaller file size (on large images)
//     Need to reduce loading time greatly... maybe 70% ?
//     NICE! Batchcompress.com took them from 121.9 MB to 28.4 MB... 76.7% decrease!!! YES
//     Visually they look like the quality is VERY close and didn't get impaced much
//     This change alone GREATLY helped the loading speed. Initial scroll down is still not good
//     ... but once everything is loaded / you scroll down once, scrolling back up is fine
// todo - Good quality gear pics, overview shows, up close shots
// todo - Should mention somewhere that we take items for consignment and give examples of what we do and don't want, terms, pricing, store credit vs check, etc...
// todo - Comment out old carousel approach and try same setup to the Guiding Photo Gallery
// todo - implement react-bootstrap grid system and prepare for additional sections below carousel
// todo - add carousel to gear page
// todo - add templating to GearCarousel to load different image sizes for different viewport sizes -- faster loading on mobile! To do this, probably use <picture></picture> w/ <source srcset="large.jpg" media='(min-width: 1000px)'/> kinda stuff... may be weird in React, but should be doable.


@ Beta page ---------------------------------------
! - I feel like there needs to be some pictures here, asides, maybe a main BG ? Logos for places?
    @ Beta sub sections ---------------------------------------------------------
        todo - links and link icons don't look amazing... particularly in like the gym > climbing gym section
            think about alternative ways to make this kinda thing look better
    @ ---------------------------------------------------------------------------
    % GeneralInfo
        ! - FOR-ANY-RELEASE - add info for wet rock / link to weather page
    % LodgingLogistics
        todo - add content for 'Hotels' ... maybe?
        todo - add more content for other shower locations like truck stops ?
    % Food
        todo - add content / trim content... its a mess
        ! - FOR-ANY-RELEASE - fill out breweries & bars
    % Other Outdoor
        ! - FOR-ANY-RELEASE - add link to canyoneering book, fill in 'some comment' at bottom
        ! - FOR-ANY-RELEASE - fill out rainy day options
        ! - FOR-ANY-RELEASE - fill out 1-3 more trail runs / hikes recommendations
        ! - FOR-ANY-RELEASE - fill out at least a few MTB trails?
        ! - FOR-ANY-RELEASE - add Kraft Loop, Turtle head, ??? to hike recommendations, maybe comment out a few others
    % Route Recommendations
        ! - FOR-ANY-RELEASE - do I even want this section?
            Too many options... suggesting things drives traffic to them
    % Gyms
        ! - FOR-ANY-RELEASE - Regular gyms too or not?
        // todo - add UNLV to walls
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
todo - when you close open major section accordion it snaps closed instead of having the previous smooth animated behavior... This is obviously because of my intervention below... how can I smooth this out????...
    * ... Really, the behavior currently isn't TERRIBLE. I just think it is. I. Me.
    * Realistically I can get back to this later. If that means copy/pasting in many files and places, well, oh well... more important to actually get the meat of the site out into a functional state.
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
! - fix section backgrounds. Need to be able to have multiple sizes for multiple screen sizes. Currently <picture>...</picture>, with source srcset doesn't work... but a standard img tag inside does... a hackey way to fix the overflow is 'overflow': 'hidden'... Apparently you can do srcset inside an <img />, including media queries and specified widths... so I'll try this stuff next instead of <picture>...</picture>
    * - I see 'The srcset attribute has an effect only when the <source> element is the direct child of a <picture> element.' on MDN... but elsewhere they contradict themselves... so... huh?
? - should the group of accordions try to initially center itself in the viewport?
todo - try a background color gradient instead of just color for the accordion sub-section button/titles... darker on left side to help with text contrast... can't just do it on a button it seems. I think it must be a div w/ anchor tag or something similar
! - https://www.southernnevadaclimberscoalition.org/local-ethics/climbing-after-rain/
// todo - set the CSS background color ( iirc ) for each of the sub sections... instead of the default solid blue. I think it could look cool if these were set to the major or minor color present in the images I'll select for the major section background pictures... Do this in bootstrap-with-overrides.sass ...DONE. Colors ok good enough for now. Darken on hover.
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
    








@ Weather -----------------------------------------
? - Webcams
? - Ambitious... but do-able - historical data from multiple stations
    ? - mouse over map with popup on click/hover on stations brings up a graph?
        ? - how would that work on a smartphone/tablet?
    - https://developer.accuweather.com/apis
        forecast, current conditions, weather alarms, severe alerts, radar/satellite images, 120min precip forecast
    - https://weatherstack.com/
        real time, historical, forecast
        Free is 250 calls/mo --- Probably too little since ~730h in a month, no historical data, just realtime
        Standard is $10/mo or $8/mo if billed yearly -- 50k calls/mo, full historical data
    - https://docs.oikolab.com/#1-introduction
        70 years of historical data
            soil_temperature_level_1, wind_speed, surface_direct_solar_radiation, relative_humidity, total_cloud_cover, total_precipitation, snowfall, snow_depth, volumetric_soil_water_layer_1, volumetric_soil_water_layer_2, ... seems interesting. Enterprise plan has more interesting things like convective_available_potential_energy, evaporation, ...
        Pricing is kinda prohibitive
    - https://www.weather.gov/documentation/services-web-api#/default/station_observation_time
        Doesn't look like it can do historical...
    $ https://www.visualcrossing.com/weather-api --- TRYING THIS OUT
        Realtime, Past, Forcasted
        Free is 1000 results/day, 50yr history, 15d forecast, current conditions
        Seems like a good option
            RED ROCK NV US ID: RRKN2 GPS: 36.135, -115.43
            https://www.visualcrossing.com/weather-history/RRKN2/us/last15days
    $ https://synopticdata.com/pricing
        This is what WetRockPolice uses, seems like a decent option too
        Free is 20k API requests / mo, 20mil service units / mo, public domain data available only, not proprietary data
        Seems like a good choice

? - CRON job
    * Query 1+ weather APIs every hour, then update a DB to save the data in a logical format
    * DB is read when a vistor looks at the weather page (or home page if I put weather on it too?)
    * This way my DB gets all the hits, not the weather APIs which I have to NOT query too much (ie from users/bots)
    * Auto refresh data (viewer subscribed to DB when on page, when leave/close window unsubscribe?)
    * DB is queried to get the data back in a format that makes sense
    * data is wrangled if needed to be in a useable format for whichever graphing package
? - Chart / graph options
    $ D3.js
        * https://observablehq.com/@d3/multi-line-chart
    Highcharts.js
        * https://www.highcharts.com/docs/index
        * https://www.highcharts.com/docs/chart-and-series-types/line-chart
        * built in accessibility module, easy to include
        * Paid???
    $ Toast UI Chart
        * https://github.com/nhn/tui.chart
        * https://ui.toast.com/tui-chart
        * https://nhn.github.io/tui.chart/latest/tutorial-example08-01-line-chart-basic
        * https://nhn.github.io/tui.chart/latest/tutorial-example08-02-line-chart-datetime
        * https://nhn.github.io/tui.chart/latest/tutorial-example08-09-line-chart-secondaryYAxis
        * https://nhn.github.io/tui.chart/latest/tutorial-example08-10-line-chart-responsive
        * https://nhn.github.io/tui.chart/latest/tutorial-example08-11-line-chart-liveUpdate
        * https://nhn.github.io/tui.chart/latest/tutorial-example08-12-line-chart-syncTooltip
        * 
        * FOSS
    $ Google Charts
        * https://developers.google.com/chart
    
? - Examples of climbs that have been damaged where is it very likely that the cause was climbing on wet rock (with weather data or time of the last rain and amount (inches/light/heavy), temps, etc if possible)
    * The Black Widow 5.12 4p, key hold broke (as well as many other holds) when a guy climbed it on Feb 3, 2019 after 0.67" of rain the day before, now probably 5.12d-ish
        https://www.mountainproject.com/route/107506973/the-black-widow
        0.67" of rain recorded AT VEGAS as seen here: https://lasvegaswx.com/wxwuhistory.php For Feb 2, 2019
        Meaning very likely higher rain in the canyons of Red Rock as is typical

todo - links
    * pages with multiple weather stations in the area
        * https://lasvegaswx.com/
            * https://lasvegaswx.com/wxwuhistory.php -- historical (but Las Vegas, which station? exact location?)
    * more general weather info links, like other activities? areas?
        * https://57hours.com/blog/red-rock-climbing-etiquette/
        * https://www.redrockcanyonlv.org/wp-content/uploads/rrckeystone2017_vfin-web.pdf
        * ??
todo - srcSet / sizes
    [] Weather - srcSet SOMETHING EVENTUALLY, PROBABLY
        [] sizes
todo - images / video
    what wet rock looks like, including inside, pics and vids from others
todo - search through the site and add links/text that people should check out the weather link/section of the site for more info on wet rock
todo - ambitious, but maybe AUTO alert with react-bootstrap style for when wet weather is detected OR when it has happened in the last x hours? (on home page, or any page... remember that person has seen it and don't show again / for another x hours option)
    - probably too many little difficulties in getting it accurate, BUT MAYBE, a general alert that wet weather happened recently, check HERE or HERE for more specifics, check HERE for if there is a message thread about it, or call us for more info: ###-###-####
// todo - how to help the weather situation / wet rock situation
    // * add internet linked weather stations that record rain fall in Blue Diamond, other areas
    // * provide eyes on the ground observations for various areas by hiking in
        // and taking photos/videos of the dirt and rock in the area, then share it on Facebook or Mountain Project
    // * Social media about it being wet and what you will do instead
    // * DON'T CLIMB WET ROCK.
    // * Inform others (gently) of the science, danger, and local ethics of wet rock.
    // * Ask others when you are unsure
// todo - add my wet rock video w/ img preview (video-react)
// todo - link to wet rock police
// todo - link to ClimbVegas Facebook Group
// todo - link to Mountain Project Nevada Forum







@ Guiding page ------------------------------------
! - FOR-ANY-RELEASE - Wording EVERYWHERE, and trim down amount of text a bit
! - FOR-ANY-RELEASE - get peoples desired blurbs, photos, links to whatever, etc...
! - FOR-ANY-RELEASE - manually add more content to everyone so that their bios end up closer to the same length... can use lists, etc...
? - AMBITIOUS - consider on tier cards some sort of 3d, animation, click on to flip over to a description, etc... accessability concern
? - AMBITIOUS - Un-necessary hassle - dynamic climbing experience for the guides
? - Canyoneering, Adventure Hiking, etc Tier 3-ish cards?
! - consider re-structuring...
    * Tier Cards First (or after a wide jumbotron w/ Red Rock Climbing Guides)
    * THEN RRCG / How it Works Steps + About our guiding columns...
    * THEN Pics from guided climbing outings
    * THEN Check out some of our guides, etc...
todo - make sure tab through accessibility is there... IF there is a reason for it to be, like a 'book it now' button / form
    Implement skip to links
        tiers
        guides
        gallery
        if there is a email form? ... probably should be
            thus I can prompt them for some of the common basic info we need to know to actually be able to help them
! - guide inquiry form
    * Formik, react-bootstrap, yup... https://formsubmit.co/ instead of backend PHP stuff...
    Need to make it not too extensive... but I still want to get a lot of basic info that we need... So that we don't have to regurgitate over and over all the basics and guess what they want to do.
    * Do I need labels? What about just using the starting value/text or placeholder? This way I could condense the area it covers a lot. Not sure how that would impact accessability
    ? add state for tier checkboxes to be able to include them in the email title?
    ? the tier checkbox doesn't look great on our resulting form summary... is just a dialog box better?
! - when hovering over the guiding gallery, tooltip appears, [Object object]
// todo - guidingGalleryPhotos.js - commenting out largest img doesn't work like that, fix/remove.
// todo - beautify bio pics
//     5-15% lower brightness, 5-15% higher contrast, auto color boost thing, maybe auto whitebalance
//     ( do it on originals, then re-compress w/ imagecompressor.com )
// todo - Image titles/captions, alt text... creative
// todo - Smaller file dimensions for srcset tablet and phone ( copy / pasted from gear section where I need to do the same )
//     [x] Should be able to batch resize and maintain aspect ratio easy-ish (Image Resizer on left click menu)
//         original = original (not linked in)
//         too_large = original / cropped size, but polished... maybe or maybe not linked... some peeps have 4K...
//         large = fits in 1920x1080
//         medium = fits in 1366x768
//         small = fits in 854x480
//         phone = fits in 320x568
//         phone = fits in 320x568
//     [x] THEN check that quality is acceptable still
//     [x] THEN tedious renaming with new dimensions
//     [x] THEN tedious importing them in
//     [x] THEN plug 1 in
//         [x] THEN test that it loads the appropriate size AND ONLY THAT SIZE
//     [x] THEN tedious plugging them in
//         1920x1080, profiling, 1 plugged in: 1.657 seconds
//         1920x1080, profiling, all in: 1.209 seconds
//         1920x1080, profiling, after compression on Tier and Bio pics 1.130 seconds
//         ... not a huge improvement, but substantial, can improve a bit with 'sizes' settings
//     [x] Switch 'sizes' to settings that make sense?
//         ... should not need to mess with sizes. Leave it blank / no rule for now.
//     [x] Comment out max size / 4k
//     [x] Set default as a smaller size (1080 or 1440w ish for most of them) = 1.440 S
//     [x] Test that on a small device, small images are loaded
//     [x] onClick on small device opens modal for the fullsize image (actually loads ALL fullsize in the background too... acceptable, for now I guess)
// todo - batchcompress.com on the bio pics and guiding headings... while smaller in dimensions, they are larger in file size and actually load slower than the now compressed medium size guiding gallery photos... HA!
//     [x] Tier pics from 615 kB ---> 151 kB... quality sucked... trying something else
//     [x] Tier pics from 615 kB ---> 385 kB using imagecompressor.com ... acceptable quality
//     [x] Bio pics from 1.53 MB ---> 420 kB... quality iffy, need a little less compression...
//     [x] Bio pics from 1.53 MB ---> 995 kB using imagecompressor.com ... acceptable quality
// todo - use batchcompress.com to reduce file sizes initially (prob ~75% reduction)
//     63.9 MB --> 17.7 MB
// todo - Add more guiding gallery photos, descriptions/titles, and appropriate alt text
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



@ RRResoles ----------
? - Maybe merge the images and main card into one and do something so images stay looking good no matter the size?
? - Maybe merge prices and contact info?
// todo - add note that RR Resoles is NOT part of Desert Rock Sports
// todo - fix page margin top ( wrap export in Container fluid className="mt-3" )
// todo - separate out into its own page... right of guiding. Probably.
// todo - add some photos!
// todo - use react-bootstrap Card components, Jumbotron, or w/e else
// todo - set height: '100%' on all Card componets here
// todo - fix width issue so it fills the same horizontal width / footprint as the sections before
// todo - add react-bootstrap grid system
// todo - make a basic skeleton frame one




@ About page --------------------------------------
// todo - probably move nav link position of the 'About' page to just left of 'Shop'
// todo - FOR PRODUCTION - figure out a nice background, maybe use some parallax, but a simple CSS color transition would be fine too 
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





@ Shop page ---------------------------------------
? - Tab thru accessability?
! - ADD link data thing for Southern Nevada Bouldering 3 - WHEN RELEASED
! - ADD link data thing for Mojave Limestone, Keyhole Canyon
! - ADD current prices
// todo - Southern Nevada Bouldering II is out of print now, add a rough maybe next version out date
// todo - ADD a note on shipping pricing???? -- 10 for 1-2 books flat rate shipping envelope is pretty easy IIRC
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
? - replace secret section link '.' with something else, like a FA icon (just commented out it for now...)
    it could be cool if it was a transparent icon, which you hover over for like a full second, then a opaque dropshadow or something shows up and it doesn't appear clickable until after this time ?
? - what content can go here ?




@ Error page --------------------------------------
todo - make a great one
    slightly random error page graphic/text?
    ladylockoff rope/gear art spelling 404 ? ha not a bad idea
    Some classic photo with abysmal gear placement?
? - should I have a link back to the home page?
// todo - add an OK to the background, maybe also a border, maybe box shadow
// todo - make a temp OK enough 404 page




% -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Components -=-=-=-=-=-=-=-=-=-=--=-=--=-=-=-=-=-=-

@ Header component ----------

@ Footer component ----------

@ Navbar component ----------
todo - add a DRS logo image to the 'branding' nav item / link
// todo - do I really want an external link icon for the gym??? Yeah. I think I do. Its not part of THIS site. Makes sense to me.
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




@ TESTS
    @ Selenium
        todo - search for appropriate FA icon before or after in site / out of site links
        todo - search for broken links
        todo - ?






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

! - When ready to go live, make sure using the right keys for NewsletterForm.js. NOT the testing keys.
        ! - Be sure that the keys are hidden, NOT on github
        ! - Have a site privacy statement and make sure link on form points to it, not just a placeholder link
*/