Adding pages =====================================================================
Pages should be a whole lot of information and pictures. If you need to provide just a little bit of information it is best to not use a full page like this, or at the least it is best to link to it another way, and not have too many navbar items. You may be able to just add it onto an existing page.
After all edits make sure to save with [ctrl] + [S]


1. In src/components folder make a copy of the 'TEMPLATE.js' file.
2. Rename it to the title for the page. Must start with a capital letter. No spaces. CamelCaseLikeThis is a good way to go.
3. In Navbar.js add another item to the navbar for the page, formatted like so:
    <li className="nav-item"><Link to="/other">Other</Link></li>
    '/other' is what will be displayed in the URL bar ie desertrocksports.com/other
    The 'Other' starting with a capital 'O' is the link word(s) that will be added to the navbar
4. In src/stylesheets folder make a new text file titled '_pagename.sass'
    This will be where any CSS / SCSS / SASS styles specific to this new page will go.
    They will later be compiled and combined with all the other stylesheets and reduced into a single file: main.scss, which will then be
    compiled into main.css which is the file that is actually used on the site.
    Do not edit main.css directly. Any changes that way will be overwritten and lost.
5. In src/stylesheets folder open 'main.scss'
    import in the new .scss file in the approprite place
    take care to maintain the comma vs. semi-colon use
6. In src folder open 'App.js'
    Near the beginning there are many lines of 'imports' we will make a new one for the new page, like so:
    import Page from './components/Page';
    Further down this file you will find a <Switch> with a lot of <Route> tags inside
    Add another like so:
    <Route path="/page" component={Page} />
    The <Switch> is actually the container between the navbar and footer where the 'pages' are switched in and out of depending on which
    navbar link is clicked. path="/page" is the path to display in the URL, it actually knows where to find the page in the folder structure
    from the import statement earlier.

Now the new page is added and linked to work correctly with the navbar as well as to display correctly and give the illusion of URL change.
Now there are only really 2 places you need to edit this page:
1. src/components/Page.js
2. src/stylesheets/_page.scss
Images will go into... some folder structure such as root/img/page and be named in a very delibrate manner.
Such as 'name_900x600.png'
And there may be several different sizes of each image and some smart linking so that smaller file sizes are used when someone
accesses the site on their smart phone vs their laptop vs their large screen desktop.



Adding images =======================================================================
Adding ?????? =======================================================================
Adding ?????? =======================================================================
Adding ?????? =======================================================================


Changing seasonal hours =============================================================
The hours are set to change automatically
If you need to manually set them, you can do so inside src/components/sub/Contact.js
Follow the commented instructions in the "Hours" function





