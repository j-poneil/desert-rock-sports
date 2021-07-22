import React from 'react';
import parse from 'html-react-parser';
import { formatDistance, parse as parseDate } from 'date-fns';
// test
// import { parse as parseDate } from 'date-fns';
// formatDistance(parseDate('02/11/2014', 'MM/dd/yyyy', new Date()), new Date(), { addSuffix: true })
//! html-react-parser and date-fns both have a 'parse' function
//! If you use the one from date-fns, be sure to give it a different alias


// Where the individual stories / headlines are saved
import { newsItems } from '../data/newsItems';

// News happenings.
// Sales, events, competitions, closures, new red rock policies, etc... maybe even rain, but that could get a bit crazy
export default function News(){
    const newsReal = newsItems.map((i) => {
        return (
            <li
                key={i.date}
                className="news-item"
            >
                <span className="news-item-date">
                    {/* { i.date } */}
                    { formatDistance(parseDate(i.date, 'MM/dd/yyyy', new Date()), new Date(), { addSuffix: true }) }
                </span><br />
                <span className="news-item-title">
                    { i.title }
                </span><br />
                <span className="news-item-post" >
                    { <>{ parse( i.post ) }</> }
                </span>
            </li>
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