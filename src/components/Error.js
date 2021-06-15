import React from 'react';

export default function Error(){
    return (
        <div id="error-container">
            {/*
            If a url that doesn't exist is attempted to navigate to, you will get this displayed.
            It will show the header, navbar, this error page inside the main body, then the footer.

            I want it to be a clever climbing related 404 image with text overlayed that is centerd horizontally and vertically.

            ie. good image of someone going to clip a quickdraw into a bolt, but there is no bolt hanger and they have a blank and alarmed expression on their face.

            Should be zero scrolling regardless of screen size.
            */}
            <div id="error">
                404<br/>
                File Not Found
            </div>
        </div>
    );
}