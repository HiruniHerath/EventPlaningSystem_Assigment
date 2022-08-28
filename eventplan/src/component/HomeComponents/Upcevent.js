import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import "./Upcevent.css";
 

export default function Upcevent() {


    return (
        <div style={{ paddingTop: "2vh", paddingBottom: "2vh", paddingLeft: "4vh", paddingRight: "4vh" }}>
            <div><h5 className="font">Upcoming Events</h5></div>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669430/test/pexels-wolfgang-2747449_q9i8hx.jpg" />
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/v1661715008/test/1001796_l5suzz.jpg" />
                    </Card>

                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669428/test/Wedding-Day-Photos_hy9wtb.jpg" />
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669428/test/photo-1555244162-803834f70033_w6jjkp.jpg" />
                    </Card>
                </Col>
            </Row>
            <div style={{ paddingTop: "5vh" }}> <h5 className="font">Major Events</h5></div>
            <Row>

                <Col xs={6}>
                    <div style={{ paddingLeft: "20vh" }}>

                        <Card style={{ width: '35rem' }}>
                            <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669428/test/n_efj72d.jpg" />
                        </Card>
                    </div>

                </Col>
                <Col  >
                    <div style={{paddingTop:"10vh"}}>

                        <h6 className="font">Wide open</h6>
                        <p >“Wide open" was the idea of our director, who targeted the guardians and parents of down syndrome children or relatives. It was an unforgettable important milestone for our company that lasted for five days of a full-time schedule. Keep your eyes wide and open!. </p>

                    </div>
                </Col>
            </Row>
        </div>
    );
}