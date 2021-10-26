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
        <Card style={{'height': '100%'}}>
            <Card.Img varient="top" src={ imgSm } alt={ imgAltText }/>
            {/* //! couldn't get this overlay text to sit in the bottom right of image. Was thinking that something like: className="position-absolute bottom-0 end-0" would do it, but it hasn't, so just commenting out for now. Will come back to this later.*/}
            <Card.ImgOverlay style={{'position': 'relative', 'padding': '0px'}}>
                <Card.Text
                    style={{
                        'position': 'absolute',
                        'right': '0',
                        'bottom': '0px',
                        'color': 'rgba(237,237,237)',
                        'paddingLeft': '5px',
                        'paddingRight': '5px',
                        'backgroundColor': 'rgba(0,0,0,0.4)',
                        'borderRadius': '5px'
                    }}
                >
                    { imgCredit }
                </Card.Text>
            </Card.ImgOverlay>
            <Card.Body>
                {/* <Card.Text className="text-muted text-right">{ imgCredit }</Card.Text> */}
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
    )
}

export default TierCard;
