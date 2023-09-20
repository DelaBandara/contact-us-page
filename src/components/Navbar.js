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
import "../styles/Fonts.css"; 
import { NavLink } from 'react-router-dom';




function Navbar() {

    
    
      return (
      <div>  
        <div className='top-section'>
            <Container>  
              <Row className="justify-content-center">
                <Col md={6} lg={4} className="text-center">
                  <Link to ="/contact">
                <Button variant="outline-warning" className="contact-button">Contact Us Now</Button>
                  </Link>
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
        
        <hr className="line" />
        <div className="leftSide">
            
            
                <NavLink exact to="/" activeClassName="active-link">
                  Home
                </NavLink>
                <NavLink to="/planatrip" activeClassName="active-link">
                  Plan a Trip
                  </NavLink>
                  <NavLink to="/about" activeClassName="active-link">
                  About
                  </NavLink>
                  <NavLink to="/booking" activeClassName="active-link">
                  Booking
                  </NavLink>
                  <NavLink to="/contact" activeClassName="active-link">
                  Contact
                  </NavLink>
                </div>        
               
            
             

            <div className="rightSide" >
              <div className="socialMedia">
                <InstagramIcon /> <FacebookIcon /> <TwitterIcon />  <PinterestIcon />
              </div>
            </div>
            <hr className="line" />
        </div>
        
        
    
      </div>   
        );
      }
    
    
    
    
    export default Navbar;
    