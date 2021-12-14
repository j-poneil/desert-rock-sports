Take note from this
https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
Give alternate images sizes to load for different screen sizes
... better than doing it in CSS due to loading times
... but way more manual

To change image sizes
<img srcset="elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 600px) 480px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
CSS that would go with this would be
with the same or similar @media breakpoints

To change image resolutions, but keep the same size
<img srcset="elva-fairy-320w.jpg,
             elva-fairy-480w.jpg 1.5x,
             elva-fairy-640w.jpg 2x"
     src="elva-fairy-640w.jpg" alt="Elva dressed as a fairy">
CSS would be
img {width: 320px}

Art direction, completely different image for different screen sizes
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
  <source media="(min-width: 800px)" srcset="elva-800w.jpg">
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
</picture>

<picture>
    <source srcset="extralarge.jpg" media="(min-width: 1000px)" />
    <source srcset="large.jpg" media="(min-width: 800px)" />
    <img srcset="medium.jpg" alt="alt text" />
</picture>




stylesheets/abstracts:
_mixins.sass
_variables.sass
Trying to use these for the responsiveness / breakpoints... but its a lot to think about.




Google Map to Kraft Mountain / Kraft Boulders
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.358775034632!2d-115.42222768477065!3d36.157823180085884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bd8540b5bf83%3A0x4dde0382f500259a!2sKraft%20Mountain%20Loop%2C%20Nevada%2089161!5e0!3m2!1sen!2sus!4v1586045873811!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

Google Map to Cliff Shadows Open Desert Park ( The Gun Club )
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.2316153696124!2d-115.3345201923426!3d36.23108204148152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a35f01682bc013f!2sCliff%20Shadows%20Open%20Desert%20Park!5e0!3m2!1sen!2sus!4v1586045992047!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

Google Map to Lone Mtn (GPS)
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1061.9434591522418!2d-115.30981062321237!3d36.23943904837889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c894e0c56b56b9%3A0x4f9ada35fdeb9635!2zMzbCsDE0JzIwLjkiTiAxMTXCsDE4JzM0LjUiVw!5e1!3m2!1sen!2sus!4v1586046075278!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

Google Map to Lovell Canyon Road
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.181954564071!2d-115.56265911835115!3d36.02004585526662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8a5eab959f5e7%3A0x3b5e5f13ddc3be45!2sLovell%20Canyon%20Road!5e0!3m2!1sen!2sus!4v1586046194437!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>





CSS notes
filter: something() somethingelse() anotherthing()
good options to use to make things interesting
ex
filter: invert(1)
filter: blur(4px)
filter: brightness(1.75)
filter: drop-shadow()
drop-shadow(offset-x offset-y blur-radius spread-radius color)
most browsers don't support spread-radius, so just leave it out
filter: grayscale(1)
filter: hue-rotate(90deg)
filter: opacity(0.5)
filter: saturate(4)
filter: sepia(1)

backdrop-filter: stuff()
kinda experimental, but could be really really nice, like so
backdrop-filter: blur(10px) ... (on a div containg text centered over a background image that is below this div)


parallax scrolling background effect is sweet
smart phones don't always support it, so you can disable it on them
w/ @media queries like so
@media only screen and (max-device-width: 1366px) {
  .parallax {
    background-attachment: scroll;
  }
}
parallax usually like this:
.parallax {
  /* The image used */
  background-image: url("img_parallax.jpg");

  /* Set a specific height */
  height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}



I should probably make my components more re-usable, passing in props...
<Splash /> for instance...
Passing in img src/srcset object, alt-text, p-text, h1-text...

=======================================================================================

@ - FontAwesome things to add
Social stuff:
FaFacebookF
FaFacebookSquare
FaFacebook
FaInstagramSquare
FaInstagram
FaMeetup
FaSkype
FaStrava
FaTelegramPlane
FaTelegram
FaTwitterSquare
FaTwitter
FaHashtag
FaMapMarkerAlt



CCs accepted for e-shop:
FaCreditCard
FaCcAmazonPay
FaCcAmex
FaCcApplePay
FaCcDiscover
FaCcMastercard
FaCcPaypal
FaCcStripe
FaCcVisa
FaPaypal
FaVimeoSquare
FaVimeoV
FaVimeo

Other online ordering:
FaShopify
FaDollarSign
FaFingerprint - for like a management login / 2FA page?
FaKey - same

Shipping:
FaFedex
FaUps
FaUsps


Weather:
FaCloudSunRain
(several others)




Other Useful:
FaHotjar - fire
FaFireAlt
FaFire
FaAddressBook
FaAddressCard
FaYoutube
FaAngleDoubleDown etc
FaAngleDown etc
FaAsterisk
FaAssistiveListeningSystems
FaAt - @
FaBackspace
FaBars -- hamburger style 3 bars for mobile nav, maybe combine w/ FaAngleDoubleUp above ??
FaBiking
FaBeer
FaBiohazard
FaBinoculars
FaBookmark
FaBullhorn - maybe for announcements?
FaCannabis
FaCampground - link to page with camping info / decoration
FaCaretRight etc
FaCartPlus -- add to cart
FaCheck -- checkmark
FaCheckSquare
FaCheckCircle
FaChevronCircleDown etc
FaChevronDown etc
FaClock - hours
FaCoffee - coffe places
FaComments - comments, incase social on website,.. not likely
FaDumbbell
FaEllipsisH
FaExchangeAlt
FaExclamationTriangle
FaHelicopter - heli rescue is free, ER visit is not ... etc
FaHiking - hiking
FaLanguage - other languages? let google do it?
FaSignal - cell service is limited!
FaSkullCrossbones
FaTimes - x
FaTimesCircle
FaToggleOff - toggle
FaToggleOn
FaWifi - we have free wifi
FaRegSquare / FaRegCheckSquare
FaRegCircle / FaRegDotCircle


==============================
// generic responsive media query template from: https://angrytools.com/css/mediaquery/

//desktops - higher resolution
@media (min-width: 1281px) {}

/*laptops, desktops*/
@media (min-width: 1025px) and (max-width: 1280px) {}

/*tablets, ipads (portrait)*/
@media (min-width: 768px) and (max-width: 1024px) {}

/*tablets, ipads (landscape)*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}

/*low resolution tablets, mobiles (landscape)*/
@media (min-width: 481px) and (max-width: 767px) {}

/*smartphones mobiles (portrait)*/
@media (min-width: 320px) and (max-width: 480px) {}

=====================================

Fonts I have installed in index.html

Handwriting style fonts:
  Amatic SC wt 400, 700
  Caveat wt 400, 700
  Gochi Hand
  Indie Flower
  Loved by the King
  Pacifico
  Permanent Marker
  Rock Salt

Monospace style fonts:
  Inconsolata wt 400, 700

Display Style Fonts:
  Abril Fatface
  Alfa Slab One
  Bowlby One SC
  Eater
  Fredricka the Great
  Frijole
  Miltonian
  Rye
  Trade Winds

Sans Serif fonts:
  Roboto:ital wt 0,400; 0,700; 1,400; 1,700

Serif Fonts:
  Roboto Slab wt 400, 700, 900

==============================================================

Background images:
<div style={{ 
      backgroundImage: `url("https://via.placeholder.com/500")` 
}}>


import background from "./img/placeholder.png";
function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      Hello World
    </div>
  );
}

============================================================
Inherited defaults from react-bootstrap
--blue: #007bff;
--indigo: #6610f2;
--purple: #6f42c1;
--pink: #e83e8c;
--red: #dc3545;
--orange: #fd7e14;
--yellow: #ffc107;
--green: #28a745;
--teal: #20c997;
--cyan: #17a2b8;
--white: #fff;
--gray: #6c757d;
--gray-dark: #343a40;
--primary: #007bff;
--secondary: #6c757d;
--success: #28a745;
--info: #17a2b8;
--warning: #ffc107;
--danger: #dc3545;
--light: #f8f9fa;
--dark: #343a40;
--breakpoint-xs: 0;
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;
--font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
--font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;

==================================================================
Tooltips...
Add them by adding this line to whatever element (often images)
data-bs-toggle="tooltip" data-bs-placement="top" title="Show/Hide related sections"

==================================================================
The link I use to link outside of the site, all the time
<a href="" target="_blank" rel="noopener noreferrer"></a>
tel: , mailto: