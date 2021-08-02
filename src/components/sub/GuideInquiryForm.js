import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// inquiry form in PHP...
// ... need to do validation on client and server side, plus captcha... so maybe just use a service instead!
// import guidingInquiryForm from '../php/guidingInquiryForm.php';

const schema = yup.object().shape({
  fullName: yup.string().required(),
//   lastName: yup.string().required(),
  email: yup.string().required(),
  telNo: yup.string().required(),
//   username: yup.string().required(),
//   city: yup.string().required(),
//   state: yup.string().required(),
//   zip: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

function GuideInquiryForm() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>What are you looking to do?</Card.Title>
                <Card.Text>
                    <Formik
                        validationSchema={schema}
                        onSubmit={console.log}
                        initialValues={{
                            fullName: 'Full Name',
                            // lastName: 'Last Name',
                            email: 'email@email.com',
                            telNo: '+1-123-456-7890',
                            // username: '',
                            // city: '',
                            // state: '',
                            // zip: '',
                            terms: false,
                        }}
                        >
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            isValid,
                            errors,
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row xxl={2} xl={2} lg={2} md={2} sm={1} xs={1}>
                                    <Col>
                                        {/* //@ Full Name */}
                                        <Form.Group md="4" controlId="validationFormik01">
                                            <Form.Label>Full Name (or guardian, or group coordinator)</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="fullName"
                                                value={values.fullName}
                                                onChange={handleChange}
                                                isValid={touched.fullName && !errors.fullName}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        {/* //@ If this is for someone else, list their name below */}
                                        <Form.Group>
                                            <Form.Label>If this is for someone else, like your child, significant other, etc... Please give their name and explain the relation</Form.Label><br />
                                            <Form.Control as="textarea" rows={1} />
                                        </Form.Group>
                                        {/* <Form.Group md="4" controlId="validationFormik02">
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="lastName"
                                                value={values.lastName}
                                                onChange={handleChange}
                                                isValid={touched.lastName && !errors.lastName}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group> */}
                                        {/* //@ Email */}
                                        <Form.Group md="4" controlId="validationFormik02">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                isValid={touched.email && !errors.email}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        {/* //@ Phone Number */}
                                        <Form.Group md="4" controlId="validationFormik03">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                name="telNo"
                                                value={values.telNo}
                                                onChange={handleChange}
                                                isValid={touched.telNo && !errors.telNo}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        {/* //@ Date picker */}
                                        <Form.Group>
                                            <Form.Label>What date do you have in mind?</Form.Label><br />
                                            <input type="date" id="trip-date-input" name="trip-date" />
                                        </Form.Group>
                                        {/* //@ IF -- multiple days, flexible on day, etc... explain */}
                                        <Form.Group>
                                            <Form.Label>If multiple days or you are flexible on the date, please articulate the details here</Form.Label>
                                            <Form.Control as="textarea" rows={2} />
                                        </Form.Group>
                                        {/* //@ Time / schedule constraints */}
                                        <Form.Group>
                                            <Form.Label>Do you have time contstraints? IE not available before 2pm or must be back in Vegas by 7pm, etc... Please list any below</Form.Label>
                                            <Form.Control as="textarea" rows={2} />
                                        </Form.Group>
                                        
                                        {/* ???? */}
                                        {/* <Form.Group>
                                            <Form.Label>Number of non-climbers</Form.Label>
                                            <input type="number" id="num-of-non-climbers" name="num-of-non-climbers" min="0" max="100" />
                                        </Form.Group> */}
                                    </Col>
                                    <Col>
                                        {/* //@ Inquiry type(s) */}
                                        <Form.Group>
                                            <Form.Label>What are you inquiring about? Check all that apply</Form.Label>
                                            <Form>
                                                <Form.Check type='checkbox' id='checkbox1' label='Tier 1 - Half Day' />
                                                <Form.Check type='checkbox' id='checkbox2' label='Tier 1 - Full Day' />
                                                <Form.Check type='checkbox' id='checkbox3' label='Tier 2 - Multipitch' />
                                                <Form.Check type='checkbox' id='checkbox4' label='Tier 3 - Epic Multipitch' />
                                                <Form.Check type='checkbox' id='checkbox5' label='Adventure Hike' />
                                                <Form.Check type='checkbox' id='checkbox6' label='Big Wall' />
                                                <Form.Check type='checkbox' id='checkbox7' label='Corporate or otherwise large event' />
                                                <Form.Check type='checkbox' id='checkbox8' label="I can't decide" />
                                                <Form.Check type='checkbox' id='checkbox9' label='other / conditions / beta / advice / etc...' />
                                            </Form>
                                        </Form.Group>
                                        {/* //@ Number of climbers */}
                                        <Form.Group>
                                            <Form.Label>Number of climbers (estimate)</Form.Label><br />
                                            <input type="number" id="num-of-climbers" name="num-of-climbers" min="1" max="100" />
                                        </Form.Group>
                                        {/* //@ Number of non-climbers / spectators joining */}
                                        <Form.Group>
                                            <Form.Label>Number of spectators joining (estimate)</Form.Label><br />
                                            <input type="number" id="num-of-spectators" name="num-of-spectators" min="0" max="100" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                
                                
                                
                                
                                
                                {/* //@ ???? */}
                                <Form.Group>
                                    <Form.Label>???</Form.Label>
                                </Form.Group>
                                {/* <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        isInvalid={!!errors.username}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.username}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group> */}
                                {/* <Form.Group as={Col} md="6" controlId="validationFormik03">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="City"
                                        name="city"
                                        value={values.city}
                                        onChange={handleChange}
                                        isInvalid={!!errors.city}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.city}
                                    </Form.Control.Feedback>
                                </Form.Group> */}
                                {/* <Form.Group as={Col} md="3" controlId="validationFormik04">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="State"
                                        name="state"
                                        value={values.state}
                                        onChange={handleChange}
                                        isInvalid={!!errors.state}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.state}
                                    </Form.Control.Feedback>
                                </Form.Group> */}
                                {/* <Form.Group as={Col} md="3" controlId="validationFormik05">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Zip"
                                        name="zip"
                                        value={values.zip}
                                        onChange={handleChange}
                                        isInvalid={!!errors.zip}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.zip}
                                    </Form.Control.Feedback>
                                </Form.Group> */}
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        name="terms"
                                        label="Agree to terms and conditions"
                                        onChange={handleChange}
                                        isInvalid={!!errors.terms}
                                        feedback={errors.terms}
                                        id="validationFormik0"
                                    />
                                </Form.Group>
                                <Button type="submit">Submit form</Button>
                            </Form>
                        )}
                    </Formik>
                    {/* <form method='post' action={ guidingInquiryForm }>
                        <p>
                            <label>Name:</label>
                            &nbsp;
                            <input name='name' type='text' placeholder='your name' />
                        </p>
                        <p>
                            <label>Email:</label>
                            &nbsp;
                            <input style={{'cursor': 'pointer'}} name='email' type='email' placeholder='your@email.com' />
                        </p>
                        <p>
                            <label>Message:</label>
                            &nbsp;
                            <textarea name='message'></textarea>
                        </p>
                        <p>
                            <input type='submit' value='Send Form' />
                        </p>
                    </form> */}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GuideInquiryForm;
