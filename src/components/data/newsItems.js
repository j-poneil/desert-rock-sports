import React from 'react';
// Used in News.js, which is a component in Home.js


// title up to __ characters looks good
// date format: MM/DD/YYYY ... BUT it will be displayed as " x days ago, over a month ago, over a year ago etc... "
// ...
// https://via.placeholder.com/500x400
// title, date, post
// The post part itself will be interpreted as HTML, so you can have like %amp; for '&', can add links, images, etc...
export const newsItems = [
    // {
    //     title: "Title",
    //     date: "07/21/2021",
    //     post: () => (
    //         <>
    //             <p>Content.</p>
    //         </>
    //     )
    // },
    {
        title: "Did you know we are a dealer for Red Paddle Co?",
        date: "07/21/2021",
        post: () => (
            <>
                <p>They have some of the highest quality paddleboards in the game. Unfortunely we don't keep them in stock, but, if you are looking to buy, we can take down your order and bundle it with a few other orders to ship to our store at the same time.</p>
            </>
        )
    },
    {
        title: "New website is coming along nicely",
        date: "07/20/2021",
        post: () => (<>Working on styling, UI/UX, etc...</>)
    },
    {
        title: "Some inspirational title!",
        date: "01/01/2020",
        post: () => (<>Its been a long January. So many interesting changes int he shop. Can't wait to tell everyone about them! So much new equipment! So little time! So many routes to climb! RR 4 Life!</>)
    }
];