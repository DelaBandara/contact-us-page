import React from "react";
import "../styles/Footer.css";
import Logo from '../assets/lgo.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap'; // Import Col and Button
import 'bootstrap/dist/css/bootstrap.min.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';


function Footer() {
    return (
        <div className ="footer">
        
            <Container>
                
            <Row className="justify-content-center">
                <Col md={6} lg={4} className="text-center">
                        <Link to><h5>Instagram Feed</h5></Link>
                </Col>
                <Col md={6} lg={4} className="text-center">    
                       <img src={Logo} alt="Logo" className="logo" />
                </Col>
                <Col md={6} lg={4} className="text-center"> 
                <div className="socialMedia">           
                        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <PinterestIcon />
                </div>        
                </Col>
            </Row>
            </Container>
            <Container>
            <Row className="justify-content-center">
            <Col md={6} lg={4}>
     
                    <h5>Contact</h5>
                        <ul>
                        <li> <p>5 Rue Dalou, 75015 Paris</p></li>
                        <li> <p>Call - +94 771 874 534</p></li>
                        <li> <p>benoit@gmail.com</p></li>
                        </ul>
            </Col>
            <Col md={6} lg={4}>

                        <p>Join our mailing list for updates,<br/> Get news & offers events</p>   
                        <input type="text" placeholder="Email" />
                        <button>Subscribe</button>
            
            </Col>
            <Col md={6} lg={4} className="time">
                    <h6>WORKING HOURS</h6>
                    <p>Contact Us 24/7</p>  

            </Col>
               
            </Row>
            </Container> 
            

            <hr className="line"/>
            
                <p>&copy; OrionUX(Pvt)Ltd</p>
            
            
                
         

        </div>
                
      
    );
}

export default Footer;