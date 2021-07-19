import React from 'react';

import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const TierCard = ({ img, imgSm, imgAltText, imgCredit, tierName, tierDuration, tierDescription, costTable, tierNotes }) => {
    const outputCostTable = (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Number of Climbers</th>
                    <th>Total Cost</th>
                </tr>
            </thead>
            <tbody>
                {
                    costTable.map((item, index) => (
                        <tr key={index}>
                            <td>{ index + 1 }</td>
                            <td>{ item[index + 1] }</td>
                        </tr>
                        )
                    )
                }
            </tbody>
        </Table>
    );

    return (
        // react-bootstrap way
        <Card>
            <Card.Img varient="top" src={ imgSm } alt={ imgAltText } />
            {/* //! couldn't get this overlay text to sit in the bottom right of image. Was thinking that something like: className="position-absolute bottom-0 end-0" would do it, but it hasn't, so just commenting out for now. Will come back to this later.*/}
            {/* <Card.ImgOverlay className="">
                <Card.Text className="">{ imgCredit }</Card.Text>
            </Card.ImgOverlay> */}
            <Card.Body>
                <Card.Text className="text-muted text-right">{ imgCredit }</Card.Text>
                <Card.Title className="text-center display-4">{ tierName }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">Duration: { tierDuration }</Card.Subtitle>
                <Card.Text>
                    { tierDescription }
                </Card.Text>
                { outputCostTable }
                <Card.Text>
                    { tierNotes }
                </Card.Text>
            </Card.Body>
        </Card>

        // old way
        // <div>
        //     {/* <picture>
        //         <source srcSet="extralarge.jpg" media="(min-width: 1000px)" />
        //         <source srcSet="large.jpg" media="(min-width: 800px)" />
        //         <img srcSet="medium.jpg" alt="alt text" />
        //     </picture> */}
        //     <picture>
        //         <source srcSet={ img } media="(min-width: 800px)" />
        //         <img src={ imgSm } alt={ imgAltText } />
        //     </picture>
        //     <p>{ imgCredit }</p>
        //     <h2>{ tierName }</h2>
        //     <p>Duration: { tierDuration }</p>
        //     <p>{ tierDescription }</p>
        //     { outputCostTable }
        //     <p>{ tierNotes }</p>
        // </div>
    )
}

export default TierCard;
