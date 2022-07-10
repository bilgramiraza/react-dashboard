import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Setpassword() {
  return (
    <Container>
      <Form className='mx-auto'>
        <Form.Group as={Row} className="mb-3" controlId="userName">
          <Form.Label column sm="2">
            Enter Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" />
          </Col>
        </Form.Group>
        <Button type="button" variant="primary">Send OTP</Button>

        <Form.Group as={Row} className="mb-3" controlId="OTP">
          <Form.Label column sm="2">
            Enter the OTP
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="OTP Here" />
          </Col>
        </Form.Group>
        <Button variant="primary">Verify</Button>
      </Form>
    </Container>
  )
}

export default Setpassword