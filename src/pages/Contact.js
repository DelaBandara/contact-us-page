import React from "react";
import "../styles/Contact.css";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import "../styles/Fonts.css"; 

// Inside your component:


function Contact() {
    return (
      <div>
      <div className="main-topic">
      
        <h1>Contact Us</h1>
      
  
      </div>    
      


      <div className="contact-us-section" >
        <Container>
          <Row>
            <Col xs={12} md={6} className="custom-background">
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Bring the table winwin survival strategies ensure<br/> 
                   proactive domination the end of the day<br/>  
                   going real times multiple touchpoints.</p>
                <div className="contact-icons">
                  <div className="contact-icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <p>Riverside 25, San Francisco, California</p>
                  </div>
                  <div className="contact-icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                    <p>evamattew@mail.com</p>
                  </div>
                  <div className="contact-icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                    <p>800-234-567</p>
                  </div>
                </div>
                <div className="social-icons">
                <Button className="social-button">
                  <FaInstagram />
                </Button>
                <Button className="social-button">
                  <FaFacebook />
                </Button>
                <Button className="social-button">
                  <FaTwitter />
                </Button>
                <Button className="social-button">
                  <FaPinterest />
                </Button>

                </div>
              </div>
            </Col>
            <Col xs={12} md={6} className="custom-background2">
              <div className="contact-form">
              <p>MAIL US</p>
              
                <h1>Have a Question?</h1>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group controlId="formName">
                        <Form.Control type="text" placeholder="Name" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formEmail">
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="formSubject">
                        <Form.Control type="text" placeholder="Subject" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formPhone">
                        <Form.Control type="text" placeholder="Phone" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="formMessage">
                    <Form.Control as="textarea" rows={3} placeholder="Message" />
                  </Form.Group>
                  <Button variant="warning" type="submit">Send</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
        
      </div>
      </div>
    );
  }
  
  export default Contact;