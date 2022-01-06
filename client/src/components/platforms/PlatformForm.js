
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const PlatformForm = ({ addPlatform }) => {
  const [platform, setPlatform] = useState({ name: '', version: '', bought: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addPlatform(platform)
    setPlatform(({ name: '', version: '', bought: '' }))
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Platform Name</Form.Label>
          <Form.Control 
            type="text"
            name="name"
            value={platform.name}
            onChange={(e) => setPlatform({ ...platform, name: e.target.value })} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Version</Form.Label>
          <Form.Control 
            type="text"
            name="version"
            value={platform.version}
            onChange={(e) => setPlatform({ ...platform, version: e.target.value })} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>When was the item purchased?</Form.Label>
          <Form.Control 
            type="date"
            name="bought"
            value={platform.bought}
            onChange={(e) => setPlatform({ ...platform, bought: e.target.value })} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </>
  )
}

export default PlatformForm;