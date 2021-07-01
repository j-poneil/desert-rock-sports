import React from 'react';

// Where the individual stories / headlines are saved
import { newsItems } from '../data/newsItems';

// News happenings.
// Sales, events, competitions, closures, etc...
export default function News(){
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