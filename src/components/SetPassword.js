import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function SetPassword() {
  let navigate = useNavigate();
  const setpassword = (e) =>{
    navigate('/dashboard');
  };
  return (
    <Container>
      <Form onSubmit={setpassword}>
        <Form.Group as={Row} className="mb-3" controlId="pwd">
          <Form.Label column sm="2">
            New Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="confirmPwd">
          <Form.Label column sm="2">
            Confirm New Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password"/>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Verify</Button>
      </Form>
    </Container>
  )
}

export default SetPassword