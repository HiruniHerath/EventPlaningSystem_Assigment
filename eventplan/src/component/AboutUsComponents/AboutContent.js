import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Card } from 'react-bootstrap';
import { FaPhoneAlt, FaMailBulk, FaHeadphones, FaAmazon, FaAmazonPay, FaCcApplePay, FaCcPaypal, FaCcVisa, FaCcMastercard, FaAppStore, FaApple } from "react-icons/fa";
import Aboutbox from "./Aboutbox";



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
                    <Col>
                    <div style={{paddingLeft:'5vh',paddingTop:'2vh'}}>
                    <Aboutbox/>
                    </div>
                    
                    
                    </Col>


                </Row>

                <Row>

                    <Col>
                        <div style={{ paddingTop: "4vh", width: "100%", paddingLeft: "100px", paddingRight: "100px" }}>
                            <Card style={{ width: "100%", backgroundColor: "#C8B9B0", height: "350px" }}>
                                <h6 className="font">&nbsp;&nbsp;&nbsp;Gallary</h6>
                                <Row>

                                    <Col style={{ paddingLeft: "30px" }}>

                                        <Carousel fade>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669430/test/pexels-wolfgang-2747449_q9i8hx.jpg"
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3>First slide label</h3>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669430/test/pexels-wolfgang-2747449_q9i8hx.jpg"
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
                                                    src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669430/test/pexels-wolfgang-2747449_q9i8hx.jpg"
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

                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <Card style={{ width: '12rem' }}>
                                                    <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669430/test/pexels-wolfgang-2747449_q9i8hx.jpg" />
                                                </Card>

                                            </Col>
                                            <Col>
                                                <Card style={{ width: '12rem' }}>
                                                    <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669430/test/pexels-wolfgang-2747449_q9i8hx.jpg" />
                                                </Card>

                                            </Col>


                                        </Row>
                                        <Row style={{ paddingTop: "15px", paddingBottom: "5px" }}>
                                            <Col>
                                                <Card style={{ width: '12rem' }}>
                                                    <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669430/test/pexels-wolfgang-2747449_q9i8hx.jpg" />
                                                </Card>


                                            </Col>
                                            <Col>
                                                <Card style={{ width: '12rem' }}>
                                                    <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669430/test/pexels-wolfgang-2747449_q9i8hx.jpg" />
                                                </Card>


                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col style={{ paddingRight: "35px" }}>
                                        <Carousel fade>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669430/test/pexels-wolfgang-2747449_q9i8hx.jpg"
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3>First slide label</h3>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669430/test/pexels-wolfgang-2747449_q9i8hx.jpg"
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
                                                    src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669430/test/pexels-wolfgang-2747449_q9i8hx.jpg"
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

                                    </Col>

                                </Row>

                            </Card>

                            <Row>
                                <Col xs={6}>
                                    <div style={{ paddingTop: '3vh', paddingBottom: '3vh' }}>
                                        <a href="https://www.google.lk/maps/@7.4876221,80.3577858,15.16z">
                                            <img
                                                className="d-block w-100"
                                                src="https://res.cloudinary.com/hiruniherath/image/upload/v1661687819/test/map_mqdbhy.png"
                                                alt="First slide"
                                            />
                                        </a>
                                    </div>
                                </Col>

                                <Col>
                                    <br /><h6>Contact Us</h6>

                                    <div style={{ paddingTop: '3vh', paddingLeft: '4vh' }}>
                                        <FaPhoneAlt /> {' '}0771234561<br /><br />
                                        <FaHeadphones /> {' '}0111234561<br /><br />
                                        <FaMailBulk /> {' '}fjevents@gmail.com
                                    </div>
                                </Col>

                                <Col>
                                    <br /><h6>Partners</h6>
                                    <div style={{ paddingTop: '3vh', paddingLeft: '4vh' }}>
                                        <FaAmazon size={50} /> {' '}
                                        {' '}<FaCcPaypal size={50} />{' '}
                                        {' '}<FaAppStore size={50} />{' '}
                                        {' '}<FaCcApplePay size={50} /> {' '}<br /><br />
                                        {' '} <FaCcVisa size={50} />
                                        {' '} <FaApple size={50} />
                                        {' '}<FaAmazonPay size={50} /> {' '}
                                        {' '}<FaCcMastercard size={50} />
                                    </div>

                                </Col>
                            </Row>

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