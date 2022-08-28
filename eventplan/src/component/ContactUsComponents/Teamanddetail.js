import React from "react";
import Card from 'react-bootstrap/Card';
import { FaFile } from "react-icons/fa";
import "../ContactUsComponents/Teamanddetails.css"
import { Row, Col } from 'react-bootstrap';

//other coponents team details and the provided work
export default function TeamAndDetails() {


    return (


        <div style={{ paddingTop: '5vh', paddingBottom: '10vh', paddingRight: "95px" }}>

            <h3 className="font" style={{ textAlign: "center" }}>Meet Our Team</h3>


            <Row>
                <Col style={{ width: "220px", paddingRight: "30px" }}>

                    <div className="Card">

                        <img src="https://res.cloudinary.com/hiruniherath/image/upload/v1661697829/test/images_1_bndwmb.png" alt="c1" style={{ width: "150px", height: "150px", borderRadius: " 0px 0px 25px 0px" }}></img>
                    </div>
                </Col>
                <Col style={{ width: "220px", paddingRight: "30px" }}>
                    <div className="Card">

                        <img src="https://res.cloudinary.com/hiruniherath/image/upload/v1661697836/test/images_3_j3nn8f.png" alt="c1" style={{ width: "150px", height: "150px", borderRadius: " 0px 0px 25px 0px" }}></img>
                    </div>
                </Col>
                <Col style={{ width: "220px", paddingRight: "30px" }}>
                    <div className="Card">

                        <img src="https://res.cloudinary.com/hiruniherath/image/upload/v1661697833/test/images_2_pk2ofh.png" alt="c1" style={{ width: "150px", height: "150px", borderRadius: " 0px 0px 25px 0px" }}></img>
                    </div>
                </Col>
            </Row>

            <Row style={{ paddingLeft: "80px" }}>
                <Col style={{ width: "220px", paddingRight: "30px" }}>
                    <div className="Card">

                        <img src="https://res.cloudinary.com/hiruniherath/image/upload/v1661697652/test/images_kvxs0v.png" alt="c1" style={{ width: "150px", height: "150px", borderRadius: " 0px 0px 25px 0px" }}></img>
                    </div>
                </Col>
                <Col style={{ width: "220px", paddingRight: "30px" }}>
                    <div className="Card">

                        <img src="https://res.cloudinary.com/hiruniherath/image/upload/v1661697911/test/images_4_tlcuwk.png" alt="c1" style={{ width: "150px", height: "150px", borderRadius: " 0px 0px 25px 0px" }}></img>
                    </div>
                </Col>




            </Row>


            <Row>
                <Card style={{ width: "100%", backgroundColor: "#C8B9B0", height: "300px" }}>
                    <br></br>
                    <h5 style={{ paddingLeft: "10px" }}>How can we assist You</h5>



                    <Row>

                        <Col>
                            <div style={{ paddingTop: '3vh', paddingLeft: '4vh' }}>

                                <FaFile size={35} /> {' '}Booking details <br /><br />
                                <FaFile size={35} /> {' '}Event ajustments<br /><br />
                                <FaFile size={35} /> {' '}Evaluation<br /><br />
                                <FaFile size={35} /> {' '}Time  manage
                            </div>


                        </Col>


                        <Col>
                            <div style={{ paddingTop: '3vh', paddingLeft: '4vh' }}>

                                <FaFile size={35} /> {' '}Make placements<br /><br />
                                <FaFile size={35} /> {' '}Event orgnization<br /><br />
                                <FaFile size={35} /> {' '}Event ideas<br /><br />
                                <FaFile size={35} /> {' '}Payments
                            </div>


                        </Col>

                    </Row>




                </Card>









            </Row>



        </div>








    )
}

