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
                    <Form action="https://formsubmit.co/redrockguides@gmail.com" method="POST">
                        {/* <input type="text" name="name" placeholder="Your name" value={state.name} onChange={handleChange} required /> */}
                        <Form.Group controlId='formName'>
                            <Form.Label>Full Name (or Names)</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Your name" value={state.name} onChange={handleChange} required />
                        </Form.Group>

                        {/* <input type="tel" name="tel" placeholder="Phone number" required /> */}
                        <Form.Group controlId='formTel'>
                            <Form.Label>Best phone number to reach you at</Form.Label>
                            <Form.Control type="tel" name="tel" placeholder="Phone number" required />
                        </Form.Group>

                        {/* <input type="email" name="email" placeholder="youremailaddress@something.com" required /> */}
                        <Form.Group controlId='formEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="youremailaddress@something.com" required />
                        </Form.Group>


                        <Form.Group controlId=''>
                            <Form.Label></Form.Label>
                            <Form.Control />
                        </Form.Group>


                        <Form.Group controlId=''>
                            <Form.Label></Form.Label>
                            <Form.Control />
                        </Form.Group>

                        {/* <textarea name="details" placeholder="Give us the details!" rows="10" required /> */}
                        <Form.Group controlId=''>
                            <Form.Label></Form.Label>
                            <Form.Control as='textarea' name="details" placeholder="Give us more details! What are your goals? What are your experience level(s)? Age(s)? Are there particular logistical difficulties associated with these dates? Such as hard deadlines you need to be back in Vegas by to catch a flight. Is other contact info needed? Whats the best way to contact you? Is there a particular route or routes you are interested in? Are there particular skills you are wanting to learn? etc..." rows={5} required />
                        </Form.Group>


                        {/* <Form.Group controlId=''>
                            <Form.Label></Form.Label>
                            <Form.Control />
                        </Form.Group> */}
                        
                        {/* <input type="date" name="date" /> */}
                        <input type="checkbox" name="T1" />
                        <input type="checkbox" name="T2" />
                        <input type="checkbox" name="T3" />
                        
                        {/* Hidden inputs */}
                        <input type="hidden" name="_subject" value="New guiding inquiry via web form" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="text" name="_honey" style={{'display': 'none'}} />
                        {/* Submit button */}
                        <Button type="submit">Send</Button>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GuideInquiryForm;
