import React from "react";
import { Card, Form,Button } from 'react-bootstrap';


export default function Regform() {


    return (
        <div  style={{paddingTop:'5vh',paddingLeft:'25%',paddingRight:'2vh',paddingBottom:'6vh'}} >
            <Card style={{ width: '30rem' ,backgroundColor:"#C8B9B0" }}>
                <Card.Body>
                    <div style={{paddingLeft:'2vh'}}>
                    <Card.Img src='https://res.cloudinary.com/hiruniherath/image/upload/v1661669404/test/image_processing20191104-3658-12n18dk_tszzrl.gif' style={{width:'50vh'}}/>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name: </Form.Label>
                            <Form.Control type="text" placeholder="name.." />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Prefered Username: </Form.Label>
                            <Form.Control type="text" placeholder="Username/Nickname" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" placeholder="password" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <div style={{paddingLeft:'80%'}}>

                         {' '} <Button variant="secondary">Register</Button>
                         </div>

                    </Form>
                </Card.Body>
            </Card>

        </div>
    );
}