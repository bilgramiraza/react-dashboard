import React from 'react'
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Register() {
  let navigate = useNavigate();
  const setPassword = (e) =>{
    navigate('/otp');
  }
  console.log(useSelector((store)=>{console.log(store)}));
  return (
    <Container>
      <Form onSubmit={setPassword}>
        <Form.Group className="mb-3" controlId="basicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <InputGroup className="mb-3">
          <InputGroup.Text>First and Last name</InputGroup.Text>
          <Form.Control aria-label="First name" placeholder="First Name"/>
          <Form.Control aria-label="Last name" placeholder="Last Name"/>
        </InputGroup>
        <Form.Group className="mb-3" controlId="basicMobileNo">
          <Form.Label>Password</Form.Label>
          <Form.Control type="number" placeholder="123456789" />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Upload an Image</Form.Label>
          <Form.Control type="file"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to the Terms and Conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Register

