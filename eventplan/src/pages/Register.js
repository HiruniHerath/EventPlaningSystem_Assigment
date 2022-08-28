import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import Regform from "../component/RegComponents/Regform";
import NavBar from "../component/NavigationBar/NavBar"
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../component/Footer/footer"



export default function Register() {


    return (
        <div >
            <NavBar />

            <Row>
                <Col style={{ backgroundImage: `url(${"https://res.cloudinary.com/hiruniherath/image/upload/co_rgb:070404,e_blur:100,o_38,q_97/v1661679654/test/39-390691_palma-tropical-wallpaper-blush_mqmnav_copy_1_wcsxlk.jpg"})`, transition: 'background 0.2s linear' }}>
                    <Regform />
                </Col>
                <Col style={{ backgroundColor: "#7B6C63" }} >
                    <div style={{ paddingTop: '40%', paddingLeft: '5vh' }}>
                        <h1 style={{ color: 'white' }}>Join Now</h1>
                    </div>

                    <div style={{ paddingTop: '20vh', paddingLeft: '5vh' }}>
                        <h3 style={{ color: 'white' }}>Have an account?</h3>
                    </div>
                    <div style={{ paddingLeft: '5vh' }}>
                        <Link to="/login"><Button variant="light"> <FaArrowLeft /> Login Here </Button>{' '}</Link>
                    </div>


                </Col>
            </Row>

            <Footer />
        </div>
    );
}