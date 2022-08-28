import React from "react";
import Banner from "../component/HomeComponents/Banner";
import Upcevent from "../component/HomeComponents/Upcevent";
import NavBar from "../component/NavigationBar/NavBar"


export default function Home() {


    return (
        <div style={{backgroundImage: `url(${"https://res.cloudinary.com/hiruniherath/image/upload/v1661671740/test/39-390691_palma-tropical-wallpaper-blush_mqmnav_copy_zkh3cx.jpg"})`, transition: 'background 0.2s linear'}}>
            <NavBar />
            <Banner />
            <Upcevent/>
        </div>
    );
}