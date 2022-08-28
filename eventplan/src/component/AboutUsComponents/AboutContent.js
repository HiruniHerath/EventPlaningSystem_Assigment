import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Card } from 'react-bootstrap';
import { FaPhoneAlt, FaMailBulk, FaHeadphones, FaAmazon, FaAmazonPay, FaCcApplePay, FaCcPaypal, FaCcVisa, FaCcMastercard, FaAppStore, FaApple } from "react-icons/fa";
import Aboutbox from "./Aboutbox";

//about us page content

export default function AboutUsCon() {


    return (
        <div>


            <div>

                <Row>
                    <Col>
                        <div className="video-container" style={{ paddingTop: "2vh", paddingLeft: "40px" }}>
                            <video autoPlay muted loop>
                                <source
                                    src="https://res.cloudinary.com/hiruniherath/video/upload/v1661721263/test/Untitled_video_-_Made_with_Clipchamp_2_sqrrjt.mp4"
                                />
                            </video>
                        </div>


                    </Col>
                    <Col>
                        <div style={{ paddingLeft: '5vh', paddingTop: '2vh' }}>
                            <Aboutbox />
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
                                                    src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669428/test/photo-1511578314322-379afb476865_jwpfzy.jpg"
                                                    alt="First slide"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://res.cloudinary.com/hiruniherath/image/upload/v1661715711/test/b-business-festivals-organiseren_rglurp.jpg"
                                                    alt="Second slide"
                                                />

                                                <Carousel.Caption>

                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://res.cloudinary.com/hiruniherath/image/upload/v1661716972/test/original_yi-peng-thailand-lantern-festival_ts1jjs.jpg"
                                                    alt="Third slide"
                                                />


                                            </Carousel.Item>
                                        </Carousel>

                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <Card style={{ width: '12rem' }}>
                                                    <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669397/test/istockphoto-1078167308-170667a_slek6v.jpg" />
                                                </Card>

                                            </Col>
                                            <Col>
                                                <Card style={{ width: '12rem' }}>
                                                    <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669398/test/istockphoto-534129306-170667a_dn5aem.jpg" />
                                                </Card>

                                            </Col>


                                        </Row>
                                        <Row style={{ paddingTop: "15px", paddingBottom: "5px" }}>
                                            <Col>
                                                <Card style={{ width: '12rem' }}>
                                                    <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/c_scale,h_306,w_513/v1661669398/test/Double-Image-Event-Mgmt-600x438_t0wvcf.jpg" />
                                                </Card>


                                            </Col>
                                            <Col>
                                                <Card style={{ width: '12rem' }}>
                                                    <Card.Img variant="top" src="https://res.cloudinary.com/hiruniherath/image/upload/v1661716121/test/Cullen-Communications-Insights-Hybrid-Events_u5zuft.jpg" />
                                                </Card>


                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col style={{ paddingRight: "35px" }}>
                                        <Carousel fade>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://res.cloudinary.com/hiruniherath/image/upload/v1661717341/test/pexels-wendy-wei-1190297_zrwpav.jpg"
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>

                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://res.cloudinary.com/hiruniherath/image/upload/v1661676199/test/music-controller-dj-mixer-nightclub-party-against-background-blurred-silhouettes-dancing-people_118086-3418_rqi50x.webp"
                                                    alt="Second slide"
                                                />


                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://res.cloudinary.com/hiruniherath/image/upload/v1661717892/test/group-people-working-out-business-plan-office_1303-15818_pfcdxn.webp"
                                                    alt="Third slide"
                                                />


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
                                    <br /><h6 style={{ color: "#B27B7B" }}>Contact Us</h6>

                                    <div style={{ paddingTop: '3vh', paddingLeft: '4vh' }}>
                                        <FaPhoneAlt /> {' '}0771234561<br /><br />
                                        <FaHeadphones /> {' '}0111234561<br /><br />
                                        <FaMailBulk /> {' '}fjevents@gmail.com
                                    </div>
                                </Col>

                                <Col>
                                    <br /><h6 style={{ color: "#B27B7B" }}>Partners</h6>
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