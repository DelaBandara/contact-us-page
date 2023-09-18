import React from "react";
import "../styles/Contact.css";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { BiInstagram, BiFacebook, BiTwitter, BiPinterest } from 'bootstrap-icons/react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Inside your component:


function Contact() {
    return (
        <div className="contact-us-section">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Your contact information paragraph goes here.</p>
                <div className="contact-icons">
                  <div className="contact-icon">
                    <i className="bi bi-map-marker-alt"></i>
                    <p>123 Main Street, City</p>
                  </div>
                  <div className="contact-icon">
                    <i className="bi bi-envelope"></i>
                    <p>contact@example.com</p>
                  </div>
                  <div className="contact-icon">
                    <i className="bi bi-phone"></i>
                    <p>+123 456 7890</p>
                  </div>
                </div>
                <div className="social-icons">
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-pinterest"></i>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="contact-form">
                <h2>Have a Question?</h2>
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
    );
  }
  
  export default Contact;