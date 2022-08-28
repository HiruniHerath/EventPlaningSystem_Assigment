import React from "react";
import { Bars, Nav, NavLink, NavMenu } from "./NavBarElements";


export default function Banner() {
 

  return (
    <div>
        

       
        <Nav>
          <img
              src="https://res.cloudinary.com/hiruniherath/image/upload/v1661666321/test/F_copy_zs1hmw.png"
              style={{width:"90px"}}
              alt="Logo"
            />
            
              

              <h3 style={{paddingRight:"800px",paddingTop:"20px", fontFamily:" 'Brush Script MT',cursive ",color:"#FFFFFF", fontSize:"40px"}}>Foresignt</h3>

          
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
            <NavLink to="/Login" activeStyle>
              <span >Login</span>
            </NavLink>
            <NavLink to="/Register" activeStyle>
              <span >Register</span>
            </NavLink>
           
          </NavMenu>
        </Nav>
      
    </div>
  );
}