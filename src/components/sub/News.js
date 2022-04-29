import React, { useState } from 'react';

//% Thinking of using, but it is for toggling full elements
// ... here the stories never fully go away, I just toggle between showing some and all
// import { Animated } from 'react-animated-css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// decided to just have funcs in the objects which return JSX directly
// import parse from 'html-react-parser';

import { formatDistance, parse as parseDate } from 'date-fns';
// formatDistance(parseDate('02/11/2014', 'MM/dd/yyyy', new Date()), new Date(), { addSuffix: true })
//* html-react-parser and date-fns both have a 'parse' function, so gave one an alias of parseDate

// Where the individual stories / headlines are saved
import { newsItems } from '../data/newsItems';

// styles
// BUT NOT USING ANY RIGHT NOW
// ..\src\stylesheets\components\_news.sass

const postTextStyles = {
    paddingLeft: '15px'
};




// News happenings.
// Sales, events, competitions, closures, new red rock policies, etc... maybe even rain, but that could get a bit crazy
export default function News(){
    const [ showAll, setShowAll ] = useState(false);
    function endPoint(showAll){
        return showAll ? newsItems.length : 4;
    }

    // newsReal not newsReel, b/c reference to Sean King, TFM.
    // const newsReal = newsItems.map((i, index) => {
    const newsReal = newsItems.slice(0, endPoint(showAll)).map((i, index) => {
        return (
            <div key={ index }>
                <Card.Subtitle className="text-muted mb-2" as="h6">
                    {/* { i.date } */}
                    { formatDistance(parseDate(i.date, 'MM/dd/yyyy', new Date()), new Date(), { addSuffix: true }) }
                </Card.Subtitle>
                <Card.Subtitle className="mb-1" as="h5">
                    { i.title }
                </Card.Subtitle>
                <div className="mb-4" style={ postTextStyles }>
                    { i.post() }
                </div>
            </div>
        );
    });

    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-center" as='h3'>News</Card.Title>
                <hr style={{width: '25%'}}/>
                <section>
                    { newsReal }
                </section>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        variant="outline-info"
                        size="sm"
                        onClick={() => setShowAll(!showAll)}
                    >
                        { showAll ? "Hide older news" : "Show older news"}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

/*
Longer term project make it easier to update, perhaps pulling the entries from a more easily edited file, like a shared google spreadsheet? That could be exported as JSON?
*/