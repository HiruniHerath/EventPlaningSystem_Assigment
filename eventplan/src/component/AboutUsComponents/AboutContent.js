import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Card } from 'react-bootstrap';



export default function AboutUsCon() {


    return (
        <div>


            <div>

                <Row>
                    <Col>
                        <div className="video-container" style={{ paddingTop: "2vh", paddingLeft: "40px" }}>
                            <video autoPlay muted loop>
                                <source
                                    src="https://res.cloudinary.com/hiruniherath/video/upload/v1661664555/test/Untitled_video_-_Made_with_Clipchamp_xgmxwb.mp4"
                                />
                            </video>
                        </div>






                    </Col>
                    <Col>2 of 2</Col>


                </Row>

                <Row>
                    <Col>
                        <div style={{ paddingTop: "4vh", width: "650px", paddingLeft: "145px" }}>


                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://res.cloudinary.com/hiruniherath/image/upload/v1661664311/cld-sample-5.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdumhhhhhhhhh
                                            hhhhhhhhjjj.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://res.cloudinary.com/hiruniherath/image/upload/v1661664311/cld-sample-5.jpg"
                                        alt="Second slide"

                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://res.cloudinary.com/hiruniherath/image/upload/v1661664311/cld-sample-5.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>

                    </Col>
                    <Col>
                        <div style={{ paddingTop: "4vh", width: "650px" }}>
                            <Card style={{ width: '40rem', backgroundColor: "#C8B9B0" }}>
                                <h6 className="font">Gallary</h6>




















                            </Card>

                        </div>














                    </Col>


                </Row>


                <Row>
                    <Col>











                    </Col>
                    <Col>






                    </Col>
                </Row>




            </div>





        </div>


    );
}