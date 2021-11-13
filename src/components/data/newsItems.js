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
        title: "Lots of ropes in stock!",
        date: "11/12/2021",
        post: () => (
            <>
                <p>We just received a ton of ropes from Mammut, Edelrid, Trango, and even a couple from Beal and Edelweiss. Come check 'em out if you its time to retire your current or if you want the new lightness.</p>
            </>
        )
    },
    {
        title: "Black Slings",
        date: "11/11/2021",
        post: () => (
            <>
                <p>For the theatrical rigging folks we just got some black 1" slings in 24" and 48" lengths. Get 'em while you can.</p>
            </>
        )
    },
    {
        title: "Check out the new Five Ten Kirigami",
        date: "11/04/2021",
        post: () => (
            <>
                <p>We just received a bunch in US M's sizes 8-13.</p>
            </>
        )
    },
    {
        title: "Did you know we are a dealer for Red Paddle Co?",
        date: "07/21/2021",
        post: () => (
            <>
                <p>They have some of the highest quality paddleboards in the game. Unfortunely we don't keep them in stock, but, if you are looking to buy, we can take down your order and bundle it with a few other orders to ship to our store at the same time.</p>
            </>
        )
    }
];