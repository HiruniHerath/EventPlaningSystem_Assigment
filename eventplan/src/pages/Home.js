import React from "react";
import Banner from "../component/HomeComponents/Banner";
import Upcevent from "../component/HomeComponents/Upcevent";
import NavBar from "../component/NavigationBar/NavBar"


export default function Home() {


    return (
        <div >
            <NavBar />
            <Banner />
            <Upcevent/>
        </div>
    );
}