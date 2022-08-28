import React from "react";
import NavBar from "../component/NavigationBar/NavBar"
import Footer from "../component/Footer/footer"
import ContactUsForm from "../component/ContactUsComponents/ContactUsForm"
import TeamAndDetails from "../component/ContactUsComponents/Teamanddetail"
import { Row,Col } from "react-bootstrap";

export default function ContactUs() {


    return (
        <div style={{backgroundImage: `url(${"https://res.cloudinary.com/hiruniherath/image/upload/co_rgb:070404,e_blur:100,o_38,q_97/v1661679654/test/39-390691_palma-tropical-wallpaper-blush_mqmnav_copy_1_wcsxlk.jpg"})`}}>
            <NavBar/>
            <Row>

            <Col>
            <ContactUsForm/>
            
            </Col>

            <Col>
            <TeamAndDetails/>

            
            
            </Col>
            </Row>
            
            <Footer/>
            
        </div>
    );
}