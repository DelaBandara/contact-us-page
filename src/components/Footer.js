import React from "react";
import "../styles/Footer.css";
import Logo from '../assets/lgo.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap'; // Import Col and Button
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Fonts.css"; 

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';


function Footer() {
  
    return (
        <div className ="footer">
        
            <Container>
                
            <Row className="justify-content-center">
                <Col md={6} lg={3} className="text-center mt-5">
                    <div>
                        <Link to><h5>Instagram Feed</h5></Link>
                        </div>
                        <div className="contact-details">
                        <ul>
                        <hr/><h6>Contact</h6><hr/>
                        <li>5 Rue Dalou, 75015 Paris</li>
                        <li><a class="color" href="tel:+94771874534">Call </a>- +94 771 874 534</li>
                        <li><a class="color" href="mailto:benoit@gmail.com">benoit@gmail.com</a></li>
                        </ul>
                        </div>
                </Col>
                <Col md={6} lg={4} className="text-center1">  
                <div>  
                       <img src={Logo} alt="Logo" className="logo" />
                       </div>
                       <div>
                       <p>Join our mailing list for updates,<br/> Get news & offers events</p> 
                       <Col className="ftbutton"> 
                        <input type="textft" placeholder="Email" />
                        <button>Subscribe</button>
                        </Col> 
                        </div>
                </Col>
                <Col md={6} lg={4} className="text-center mt-5">
                <div> 
                <div className="socialMedia">           
                        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <PinterestIcon />
                </div>
                </div> 
                <div className="time">
                
                <h6>WORKING HOURS</h6>
                    <p>Contact Us 24/7</p> 
                </div>
                       
                </Col>
            </Row>
            </Container>
            

            <hr className="line"/>
            
                <p>&copy; OrionUX(Pvt)Ltd</p>
        
        </div>
                
      
    );
}

export default Footer;