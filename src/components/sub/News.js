import React from 'react';

import Card from 'react-bootstrap/Card';

import parse from 'html-react-parser';
import { formatDistance, parse as parseDate } from 'date-fns';
// formatDistance(parseDate('02/11/2014', 'MM/dd/yyyy', new Date()), new Date(), { addSuffix: true })
//* html-react-parser and date-fns both have a 'parse' function, so gave one an alias of parseDate

// styles
// BUT NOT USING ANY RIGHT NOW
// ..\src\stylesheets\components\_news.sass


// Where the individual stories / headlines are saved
import { newsItems } from '../data/newsItems';

// News happenings.
// Sales, events, competitions, closures, new red rock policies, etc... maybe even rain, but that could get a bit crazy
export default function News(){
    const newsReal = newsItems.map((i) => {
        return (
            <Card.Text key={ i.date }>
                <Card.Subtitle className="text-muted mb-2" as="h7">
                    {/* { i.date } */}
                    { formatDistance(parseDate(i.date, 'MM/dd/yyyy', new Date()), new Date(), { addSuffix: true }) }
                </Card.Subtitle>
                <Card.Subtitle className="mb-1" as="h5">
                    { i.title }
                </Card.Subtitle>
                <Card.Text className="mb-4">
                    { <>{ parse( i.post ) }</> }
                </Card.Text>
            </Card.Text>
        );
    });

    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-center">News</Card.Title>
                { newsReal }
            </Card.Body>
        </Card>
    );
}

/*
Longer term project make it easier to update, perhaps pulling the entries from a more easily edited file, like a shared google spreadsheet? That could be exported as JSON?
*/