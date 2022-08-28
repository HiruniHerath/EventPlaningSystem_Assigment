import React from "react";

import "../ContactUsComponents/Teamanddetails.css"
import { Row,Col} from 'react-bootstrap';


export default function TeamAndDetails() {


    return (


        <div style={{ paddingTop: '5vh', paddingLeft: '5%', paddingRight: '2vh', paddingBottom: '10vh' }}>

            <h3 className="font" style={{ textAlign: "center" }}>Meet Our Team</h3>
            <Row>
        <Col> 

         <div className="Card">

<p>she</p>
</div>  
        </Col>
        <Col>
        <div className="Card">

            <img src="https://res.cloudinary.com/hiruniherath/image/upload/v1661669428/test/photo-1511578314322-379afb476865_jwpfzy.jpg" alt="c1"></img>
</div>
        </Col>
        <Col>
        <div className="Card">

<p>she</p>
</div>
        </Col>
           



            </Row>

            <Row>
       <Col>

       <div className="Card">

<p>she</p>
</div>
       </Col>
       <Col>

       <div className="Card">

<p>she</p>
</div>
       </Col>




            </Row>
           
            

        </div>








    )
}

