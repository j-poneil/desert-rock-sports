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
        <Card className="text-center">
            <Card.Img varient="top" src={ imgSm } alt={ imgAltText } />
            <Card.ImgOverlay>
                <Card.Text>{ imgCredit }</Card.Text>
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Title>{ tierName }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Duration: { tierDuration }</Card.Subtitle>
                <Card.Text className="text-danger"> {/* // ! remember to add descriptions! */}
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
