import React from 'react';

// style in stylesheets/_header.sass

export default function Header(){
    return (
        <div id="header">
            {/*
            This header is displayed on all 'pages' including home/index.

            So I don't want it to be too large.

            Plan for the 'Home' page / index to be the catchy awesome stuff.

            Scrolling down it should hide, but navbar should stay.
            */}
            Desert Rock Sports
        </div>
    );
}