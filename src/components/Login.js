import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <Form className='mx-auto'>
        <Form.Group as={Row} className="mb-3" controlId="userName">
          <Form.Label column sm="2">
            User Name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="pwd">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Button variant="primary">Login</Button>
      </Form>
      <Link to="/register">Don't have an account? Register Here</Link>
    </Container>
  )
}

export default Login