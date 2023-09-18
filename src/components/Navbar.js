import Logo from '../assets/lgo.png';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



function Navbar() {
    
    
      return (
      <div>  
        <div className='top-section'>
            <Container>  
              <Row className="justify-content-center">
                <Col md={6} lg={4} className="text-center">
                  <Button variant="outline-warning" className="contact-button">Contact Us Now</Button>
                </Col>
                <Col md={6} lg={4} className="text-center">
                  <img src={Logo} alt="Logo" className="logo" />
                </Col>
                <Col md={6} lg={4} className="text-center">
                  <Button variant="outline-warning" className="booking-button">Booking Now</Button>
                </Col>

              </Row>
            </Container>

        </div>

        <div className="navbar">

            <div className="leftSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Plan a Trip</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Booking</Link>
                <Link to="/contact">Contact</Link>
            
            </div>

            <div className="rightSide" >
              <div className="socialMedia">
                <InstagramIcon /> <FacebookIcon /> <TwitterIcon />  <PinterestIcon />
              </div>
            </div>

        </div>
    
      </div>   
        );
      }
    
    
    
    
    export default Navbar;
    