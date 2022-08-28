import React from "react";
import Banner from "../component/HomeComponents/Banner";
import Upcevent from "../component/HomeComponents/Upcevent";
import NavBar from "../component/NavigationBar/NavBar"
import Footer from "../component/Footer/footer"


export default function Home() {


    return (
        <div style={{backgroundImage: `url(${"https://res.cloudinary.com/hiruniherath/image/upload/co_rgb:070404,e_blur:100,o_38,q_97/v1661679654/test/39-390691_palma-tropical-wallpaper-blush_mqmnav_copy_1_wcsxlk.jpg"})`}}>
            <NavBar />
            <Banner />
            <Upcevent/>
            <Footer/>
        </div>
    );
}