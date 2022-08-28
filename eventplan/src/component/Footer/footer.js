import React from "react";
import { FaTwitterSquare, FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap';
import { Bars, Nav, NavLink, NavMenu } from "./footercom";

//footer
export default function Footer() {


    return (
        <div>



            <Nav>

                <NavMenu>
                    <NavLink to="/" activeStyle>
                        <span >Home</span>
                    </NavLink>
                    <NavLink to="/AboutUs" activeStyle>
                        <span >About Us</span>
                    </NavLink>
                    <NavLink to="/ContactUs" activeStyle>
                        <span >Contact Us</span>
                    </NavLink>


                </NavMenu>
                <Row style={{ paddingTop: "20px", paddingRight: "20px" }}>
                    <Col>
                        <FaFacebook size={35} />
                    </Col>

                    <Col>
                        <FaTwitterSquare size={35} />
                    </Col>

                    <Col>
                        <FaGoogle size={35} />
                    </Col>

                    <Col>
                        <FaYoutube size={35} />
                    </Col>


                </Row>


            </Nav>

        </div>
    );
}