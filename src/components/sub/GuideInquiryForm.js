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

// const { Formik } = formik;
const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
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
                            firstName: 'First Name',
                            lastName: 'Last Name',
                            email: 'email@email.com',
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
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            isValid={touched.firstName && !errors.firstName}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationFormik02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            isValid={touched.lastName && !errors.lastName}
                                        />

                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationFormik03">
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
                                </Row>
                                <Row className="mb-3">
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
                                </Row>
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
