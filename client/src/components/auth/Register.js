import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Register = ({ handleRegister }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user)
      setUser({ email: '', password: '', passwordConfirmation: '' })
    } else {
      alert('Password do not match')
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email"
                  autoFocus
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control 
                  type="password"
                  name="passwordConfirmation"
                  value={user.passwordConfirmation}
                  onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register { ...props } { ...value } />}
  </AuthConsumer>
)

export default ConnectedRegister;