import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function OTP() {
  let navigate = useNavigate();
  const verifyOTP = (e) =>{
    navigate('/SetPassword');
  }
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const handleEmailChange = (e) =>{setEmail(e.target.value)};
  const handleOtpChange = (e) =>{setOtp(e.target.value)};
  return (
    <Container>
      <Form className='mx-auto' onSubmit={verifyOTP}>

        <Form.Group as={Row} className="mb-3" controlId="userName">
          <Form.Label column sm="2">
            Enter Email
          </Form.Label>
          <Col sm="10">
            <Form.Control 
              type="email"
              value={email}
              onChange={handleEmailChange} 
            />
          </Col>
        </Form.Group>

        <Button 
          type="button" 
          variant="primary" 
          disabled={!email}
        >
          Send OTP
        </Button>

        <Form.Group as={Row} className="mb-3" controlId="OTP">
          <Form.Label column sm="2">
            Enter the OTP
          </Form.Label>
          <Col sm="10">
            <Form.Control 
              type="number" 
              placeholder="OTP Here" 
              value={otp}
              onChange={handleOtpChange}
            />
          </Col>
        </Form.Group>

        <Button 
          type="submit" 
          variant="primary" 
          disabled={!otp}
        >
          Verify
        </Button>
      </Form>
    </Container>
  )
}

export default OTP;