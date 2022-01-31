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
        title: "Historical, current, and forecasted weather to be added!",
        date: "01/31/2022",
        post: () => (
            <>
                <p>Weather content similar to that available on <a href="https://wetrockpolice.com/redrock" target="_blank" rel="noopener noreferrer">Wet Rock Police</a> is in the works to be added. Hopefully for a few weather stations and not just the one at the Red Rock Canyon visitor center, which often doesn't record rain.</p>
                <p>As stations closer to Red Rock get connected to the internet, their content can be added to make this and other sources of weather info more accurate and useful. Particularly if stations get added at Blue Diamond and maybe, hopefully, eventually some remote small stations IN Red Rock.</p>
            </>
        )
    },
    {
        title: "Pad Blankets now available for rental at $10/day",
        date: "12/01/2021",
        post: () => (
            <>
                <p>Now you can kinda fill in those gaps between pads or use them as a nice starting surface so your shoes are not so dirty.</p>
            </>
        )
    },
    {
        title: "Lots of ropes in stock!",
        date: "11/12/2021",
        post: () => (
            <>
                <p>We just received a ton of ropes from Mammut, Edelrid, Trango, and even a couple from Beal and Edelweiss. Come check 'em out if its time to retire your current or if you want the new lightness.</p>
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