import React from 'react';

// News happenings.
// Sales, events, competitions, closures, etc...
export default function News(){

    // title up to __ characters looks good
    // date format: MM/DD/YYYY
    // ...
    const newsItems = [
        {
            title: "It's today!",
            date: "04/05/2020",
            post: "Today is the day that I am working out this news feed component."
        },
        {
            title: "It's yesterday!",
            date: "04/04/2020",
            post: "I was not working on this yesterday."
        },
        {
            title: "Some inspirational title!",
            date: "01/01/2020",
            post: "Its been a long January. So many interesting changes int he shop. Can't wait to tell everyone about them! So much new equipment! So little time! So many routes to climb! RR 4 Life!"
        },
        {
            title: "Beta",
            date: "00/00/0000",
            post: "Its another day. Yesterday is too."
        }
    ];

    const newsReal = newsItems.map((i) => {
        return (
            <li key={i.date} className="news-item" ><span className="news-item-date" >{i.date}</span> <span className="news-item-title" >{i.title}</span><br /><span className="news-item-post" >{i.post}</span></li>
        );
    });


    return (
        <div className="news-container" >
            <h1>News!</h1>
            <ul>{newsReal}</ul>
        </div>
    );
}

/*
Longer term project make it easier to update, perhaps pulling the entries from a more easily edited file, like a shared google spreadsheet? That could be exported as JSON?
*/