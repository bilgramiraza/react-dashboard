import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div className='container'>
      <Form>
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
      </Form>
    </div>
  )
}

export default Login