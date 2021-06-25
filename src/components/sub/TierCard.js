import React from 'react';

const TierCard = ({ img, imgSm, imgAltText, imgCredit, tierName, tierDuration, tierDescription, costTable, tierNotes }) => {
    const outputCostTable = (
        <table>
            <thead>
                <tr>
                    <td>Number of Climbers</td>
                    <td>Total Cost</td>
                </tr>
            </thead>
            <tobdy>
                {
                    costTable.map(row => (
                        <tr>
                            <td>{ row.keys }</td>
                            <td>{ row.values }</td>
                        </tr>
                        )
                    )
                }
            </tobdy>
        </table>
    );

    return (
        <div>
            {/* <picture>
                <source srcset="extralarge.jpg" media="(min-width: 1000px)" />
                <source srcset="large.jpg" media="(min-width: 800px)" />
                <img srcset="medium.jpg" alt="alt text" />
            </picture> */}
            <picture>
                <source srcset={ img } media="(min-width: 800px)" />
                <img srcset={ imgSm } alt={ imgAltText } />
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
