import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { userRegister } from '../features/user/userSlice';

import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Register() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const getUserInfo = (e) =>{
    if(email&&firstName&&lastName&&mobileNo&&tandc){
      console.log('email:'+email);
      console.log('FullName:'+firstName+' '+lastName);
      console.log('Mobile no:'+mobileNo);
      console.log('Terms and conditions:'+tandc);
      dispatch(userRegister(email,firstName,lastName,mobileNo,tandc));
      setEmail('');
      setFirstName('');
      setLastName('');
      setMobileNo('');
      setTandC(false);
      setPassword();
    }
  }
  const setPassword = () =>{
    navigate('/otp');
  }
  const [email,setEmail] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [mobileNo,setMobileNo] = useState(0);
  const [tandc, setTandC] = useState(false);

  const handleEmailChange = (e) =>{setEmail(e.target.value)};
  const handleFirstNameChange = (e) =>{setFirstName(e.target.value)};
  const handleLastNameChange = (e) =>{setLastName(e.target.value)};
  const handleMobileNoChange = (e) =>{setMobileNo(e.target.value)};
  const handleTandCChange = (e) =>{setTandC(!tandc)};

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="basicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email} 
            onChange={handleEmailChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <InputGroup className="mb-3">
          <InputGroup.Text>First and Last name</InputGroup.Text>
          <Form.Control 
            aria-label="First name" 
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
          <Form.Control 
            aria-label="Last name" 
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </InputGroup>

        <Form.Group className="mb-3" controlId="basicMobileNo">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="123456789" 
            value={mobileNo}
            onChange={handleMobileNoChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
            type="checkbox" 
            label="I agree to the Terms and Conditions" 
            checked={tandc}
            onChange={handleTandCChange}
            required
          />
        </Form.Group>

        <Button 
          variant="primary" 
          type="button" 
          onClick={getUserInfo}
          disabled={!(email&&firstName&&lastName&&mobileNo&&tandc)}
        >
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Register

