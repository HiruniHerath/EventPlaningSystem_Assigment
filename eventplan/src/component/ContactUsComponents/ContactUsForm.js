import React from "react";
import "../ContactUsComponents/Teamanddetails.css"
import {  Card ,Form,Button} from 'react-bootstrap';





export default function ContactUsForm() {


    return (
        
  <div  style={{paddingTop:'5vh',paddingLeft:'5%',paddingRight:'2vh',paddingBottom:'10vh'}} >
    <h3 className="font">Get&nbsp;In&nbsp;Touch!</h3>

  <Card style={{ width: '35rem' ,backgroundColor:"#C8B9B0" }}>
      <Card.Body>
          
         
          <Form>
             
              <Form.Group className="mb-3">
                  <Form.Label> Username: </Form.Label>
                  <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group className="mb-3" >
                  <Form.Label>Password: </Form.Label>
                  <Form.Control type="password" placeholder="password" />
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label> Company: </Form.Label>
                  <Form.Control type="text" placeholder="Companyname" />
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label> Contact No: </Form.Label>
                  <Form.Control type="text" placeholder="ContactNo" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>What Do you want to know</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>





             
              <div style={{paddingLeft:'80%'}}>

               {' '} <Button variant="secondary">Login</Button>
               </div>

          </Form>
      </Card.Body>
  </Card>

</div>

    )}