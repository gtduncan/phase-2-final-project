

import {React, useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Button, Modal} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


//const backgroundImage = new URL("./public/images/houses.jpg")

const List = () => {

    const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    fetch('http://localhost:3000/under-review', {
      method: "POST",
      headers:
      {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values)
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
    setValues(defaultValues)
    setShow(true)
  }

  const handleClose = () => setShow(false);

    const defaultValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        comments: ''
    }

    const [values, setValues] = useState(defaultValues)

    const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

    return (
        <section className='main-container'>
       <Container id='form-container' >
       <Form>
           
                <h1 className='form-header'>Ready to Sell</h1>
                <p className='form-header'>Let us help you find the best option.</p>
                <br></br>

                <p className='form-label'>Contact Information</p>
            <Row>
                <Col>
                    <Form.Control placeholder="First Name" name="firstName" value={values.firstName}  onChange={(e) => handleChange(e)} controlId="firstName"/>
                </Col>
                <Col>
                    <Form.Control placeholder="Last Name" name="lastName" value={values.lastName} onChange={(e) => handleChange(e)} controlId="lastName"/>
                </Col>
            </Row>

            <Form.Group id='email-input' className="mb-3" controlId="">
                <Form.Label className='form-label'>Email Address</Form.Label>
                <Form.Control type="email" name="email" value={values.email} onChange={(e) => handleChange(e)} placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className='mb-3' controlId='number'>
                <Form.Label className='form-label'>Phone Number</Form.Label>
                <Form.Control type='phone-number'name="phoneNumber" value={values.phoneNumber} onChange={(e) => handleChange(e)} placeholder=''/>
                </Form.Group>
            <Form.Group className="mb-3" controlId="address">
                <Form.Label className='form-label'>Address </Form.Label>
                <Form.Control value={values.address} name="address" onChange={(e) => handleChange(e)} placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className='form-label'>City</Form.Label>
                    <Form.Control value={values.city} name="city"  onChange={(e) => handleChange(e)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className='form-label'>State</Form.Label>
                    <Form.Select value={values.state} name="state" onChange={(e) => handleChange(e)} defaultValue="Choose..." id='state' name='state'>
                        <option>Choose...</option>
                        <option value="AK">Alaska</option>
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="AZ">Arizona</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DC">District of Columbia</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="IA">Iowa</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MD">Maryland</option>
                        <option value="ME">Maine</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MO">Missouri</option>
                        <option value="MS">Mississippi</option>
                        <option value="MT">Montana</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="NE">Nebraska</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NV">Nevada</option>
                        <option value="NY">New York</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VA">Virginia</option>
                        <option value="VT">Vermont</option>
                        <option value="WA">Washington</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WV">West Virginia</option>
                        <option value="WY">Wyoming</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className='form-label'>Zip</Form.Label>
                    <Form.Control value={values.zip} name="zip" onChange={(e) => handleChange(e)}/>
                </Form.Group>
            </Row>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label className='form-label'>Insert Photos</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='form-label'>Comments</Form.Label>
                <Form.Control value={values.comments} name="comments"  onChange={(e) => handleChange(e)} as="textarea" rows={3} />
            
            </Form.Group>
            <Button variant="success" onClick={(e) => handleSubmit(e)} type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        Your listing is under Review!
      </Modal.Header>
    </Modal>
        </section>
    );
}

export default List;