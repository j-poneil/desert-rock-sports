import React, { useState } from 'react';
// import { Formik } from 'formik';
// import * as yup from 'yup';

// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


// Use if you want to send them to a custom page after form submission
//<input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" />

//! Get their name and the date / date range they are interested in
//! Add that into the _subject value so that the emails have some uniqueness to them

// Handle multiple inputs with a single handle change and useState
// https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
function GuideInquiryForm() {
    const [state, setState] = useState({
        name: '',
        email: '',
        // dates: ''
    });
    // const [name, setName] = useState("");
    // const [dates, setDates] = useState();

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    /* https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/ */
    // const [checkedState, setCheckedState] = useState(
    //     new Array(toppings.length).fill(false)
    // );

    return (
        <Card style={{'height': '100%'}}>
            <Card.Body>
                <Card.Title>Contact us!</Card.Title>
                <Form action="https://formsubmit.co/redrockguides@gmail.com" method="POST">
                    {/* <input type="text" name="name" placeholder="Your name" value={state.name} onChange={handleChange} required /> */}
                    <Form.Group controlId='formName'>
                        <Form.Label>Full Name (or Names)</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={ state.name }
                            onChange={ handleChange }
                            required
                        />
                    </Form.Group>

                    {/* <input type="tel" name="tel" placeholder="Phone number" required /> */}
                    <Form.Group controlId='formTel'>
                        <Form.Label>Best phone number to reach you at, can provide multiple methods of contact below under "more details"</Form.Label>
                        <Form.Control
                            type="tel"
                            name="tel"
                            placeholder="Phone number"
                            required
                        />
                    </Form.Group>

                    {/* <input type="email" name="email" placeholder="youremailaddress@something.com" required /> */}
                    <Form.Group controlId='formEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="youremailaddress@something.com"
                            value={ state.email }
                            onChange={ handleChange }
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId='formDates'>
                        <Form.Label>Date or dates which you are interested in</Form.Label>
                        <Form.Control
                            type="text"
                            name="dates"
                            placeholder="ex: a specific date, multiple dates, or... 'its complicated / flexible' and explain below"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId='formExpLevel'>
                        <Form.Label>Current experience level(s). Please be very honest.</Form.Label>
                        <Form.Control
                            as='textarea'
                            name="experience_level"
                            placeholder="Ex. climbing on and off for ~8 years, mostly outside, all sport, no trad. Son, 17, red points 5.12- in gyms, has never climbed real rock, has never climbed a crack. Other son, 15, has never climbed at all. Daughter, 18, spent a month climbing at Indian Creek and has cleanly lead several 5.11 cracks there, but usually prefers 5.8-10a multipitch."
                            rows={3}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId='formMoreDetails'>
                        <Form.Label>Give us more details of what you would like to accomplish</Form.Label>
                        <Form.Control
                            as='textarea'
                            name="more_details"
                            placeholder="What are your goals? Is there a particular route or routes you are interested in? Are there particular skills you are wanting to learn? Wanting to learn trad climbing? Multipitch sport climbing? Self/partner rescue skills? Just want to get some fun climbing in?"
                            rows={5}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId='formLogistics'>
                        <Form.Label>Give us any important logistical details we need to keep in mind or work around.</Form.Label>
                        <Form.Control
                            as='textarea'
                            name='logistic_details'
                            placeholder="Ex. wont have a car available, need to be back at the shop no later than 4pm to be able to catch an Uber to the airport on time. Will be out of cell service 2 days before the date. Staying at Red Rock Campground (so poor to no cell service). Best time to reach out is on Wednesday between 9:30am and 10am."
                            rows={3}
                            required
                        />
                    </Form.Group>
                    

                    <Form.Group>
                        <Form.Label>What tier(s) are you interested in</Form.Label>
                        <Form.Check type='checkbox' name='T1-Half' label='Tier 1 - Half Day' />
                        <Form.Check type='checkbox' name='T1-Full' label='Tier 1 - Full Day' />
                        <Form.Check type='checkbox' name='T2' label='Tier 2' />
                        <Form.Check type='checkbox' name='T3' label='Tier 3' />
                        <Form.Check type='checkbox' name='Canyoneering' label='Canyoneering' />
                        <Form.Check type='checkbox' name='Adventure_Hike' label='Adventure Hike' />
                        <Form.Check type='checkbox' name='Bouldering' label='Bouldering' />
                    </Form.Group>


                    {/* <Form.Group controlId=''>
                        <Form.Label></Form.Label>
                        <Form.Control />
                    </Form.Group> */}


                    
                    {/* Hidden inputs */}
                    {/* this line a test */}
                    <input type="hidden" name="_replyto" value={ state.email } />
                    {/*  */}
                    <input type="hidden" name="_subject" value={ "Guiding: " + state.name + " - inquiry via web form" } />
                    <input type="hidden" name="_template" value="table" />
                    <input type="text" name="_honey" style={{'display': 'none'}} />

                    {/* Submit button */}
                    <Button type="submit">Send</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default GuideInquiryForm;
