import React, { useState } from 'react';
// import { Formik } from 'formik';
// import * as yup from 'yup';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


// Use if you want to send them to a custom page after form submission
//<input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" />

//! Get their name and the date / date range they are interested in
//! Add that into the _subject value so that the emails have some uniqueness to them

function GuideInquiryForm() {
    const [state, setState] = useState({
        name: '',
        dates: ''
    });
    // const [name, setName] = useState("");
    // const [dates, setDates] = useState();

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    } 

    return (
        <Card style={{'height': '100%'}}>
            <Card.Body>
                <Card.Title>Contact us!</Card.Title>
                <Card.Text>
                    <form action="https://formsubmit.co/redrockguides@gmail.com" method="POST">
                        <input type="text" name="name" placeholder="Your name" value={state.name} onChange={handleChange} required />
                        <input type="tel" name="tel" placeholder="Phone number" required />
                        <input type="email" name="email" placeholder="youremailaddress@something.com" required />
                        <input type="date" name="date" />
                        <input type="checkbox" name="T1" />
                        <input type="checkbox" name="T2" />
                        <input type="checkbox" name="T3" />
                        <textarea name="message" placeholder="Give us the details!" rows="10" required />
                        {/* Hidden inputs */}
                        <input type="hidden" name="_subject" value="New guiding inquiry via web form" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="text" name="_honey" style={{'display': 'none'}} />
                        {/* Submit button */}
                        <Button type="submit">Send</Button>
                    </form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GuideInquiryForm;
