import React from "react";
import { Row, Col,Button } from 'react-bootstrap';
import NavBar from "../component/NavigationBar/NavBar"
import { FaArrowRight } from "react-icons/fa";
import Loginform from "../component/LoginComponents/Loginform";
import { Link } from "react-router-dom";



export default function Login() {


    return (
        <div >
            <NavBar />

            <Row>
            <Col style={{ backgroundColor: "#7B6C63" }} >
                    <div style={{ paddingTop: '25%', paddingLeft: '60%' }}>
                        <h1 style={{ color: 'white' }}>Welcome Back</h1>
                    </div>

                    <div style={{ paddingTop: '15vh', paddingLeft: '65%' }}>
                        <h3 style={{ color: 'white' }}>Have an account?</h3>
                    </div>
                    <div style={{ paddingLeft: '75%' }}>
                    <Link to="/register">  <Button variant="light">  Sign up Here <FaArrowRight/> </Button>{' '}</Link>
                    </div>


                </Col>
                <Col style={{ backgroundImage: `url(${"https://res.cloudinary.com/hiruniherath/image/upload/co_rgb:070404,e_blur:100,o_38,q_97/v1661679654/test/39-390691_palma-tropical-wallpaper-blush_mqmnav_copy_1_wcsxlk.jpg"})`, transition: 'background 0.2s linear' }}>
                    <Loginform />
                </Col>
               
            </Row>


        </div>
    );
}