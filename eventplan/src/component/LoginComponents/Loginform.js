import React from "react";
import { Card, Form,Button } from 'react-bootstrap';


export default function Loginform() {


    return (
        <div  style={{paddingTop:'5vh',paddingLeft:'15%',paddingRight:'2vh',paddingBottom:'10vh'}} >
            <Card style={{ width: '30rem' ,backgroundColor:"#C8B9B0" }}>
                <Card.Body>
                    <div style={{paddingLeft:'5vh'}}>
                    <Card.Img src='https://res.cloudinary.com/hiruniherath/image/upload/v1661669400/test/8uJN_c9avhy.gif' style={{width:'50vh'}}/>
                    </div>
                    <Form>
                       
                        <Form.Group className="mb-3">
                            <Form.Label> Username: </Form.Label>
                            <Form.Control type="text" placeholder="Username/Nickname" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" placeholder="password" />
                        </Form.Group>
                       
                        <div style={{paddingLeft:'80%'}}>

                         {' '} <Button variant="secondary">Login</Button>
                         </div>

                    </Form>
                </Card.Body>
            </Card>

        </div>
    );
}