import React from "react";
import "../styles/Footer.css";
import Logo from '../assets/lgo.png';
import { Container, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';


function Footer() {
    return (
        <div>
            <div className='bottom-section'>
                
                <Container>
                    <Row>
                            <Link to><p>Instagram Feed</p></Link>
                            <img src={Logo} alt="Logo" className="logo" />
                            <div className="socialMedia">
                                <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <PinterestIcon />
                            </div>                
                    </Row>          
                </Container>
            </div>
        <div classname ="footer">
                
            <Container>
                    <Row>  
                
                    
                    
                        
                            <p>Contact:</p>
                            <p>Address details go here</p>
                        
                        
                        
                        
                        
                            <input type="text" placeholder="Subscribe" />
                            <button>Subscribe</button>
                        
                        
                        
                        
                        
                            <p>Working Hours:</p>
                            <p>Working hours details go here</p>
                        
                    </Row>          
            </Container>    
        </div>        
                    <hr />
                    
                        
                        <p>&copy; OrionUX(Pvt)Ltd</p>
                        
                    
                  
        </div>
        


      
    );
}

export default Footer;