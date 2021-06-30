import React from 'react';

import Table from 'react-bootstrap/Table'; // ! -- REACT-BOOTSTRAP

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
        <div>
            {/* <picture>
                <source srcSet="extralarge.jpg" media="(min-width: 1000px)" />
                <source srcSet="large.jpg" media="(min-width: 800px)" />
                <img srcSet="medium.jpg" alt="alt text" />
            </picture> */}
            <picture>
                <source srcSet={ img } media="(min-width: 800px)" />
                <img src={ imgSm } alt={ imgAltText } />
            </picture>
            <p>{ imgCredit }</p>
            <h2>{ tierName }</h2>
            <p>Duration: { tierDuration }</p>
            <p>{ tierDescription }</p>
            { outputCostTable }
            <p>{ tierNotes }</p>
        </div>
    )
}

export default TierCard;
