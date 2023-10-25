import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
                <div className="logo">
                    <ion-icon name="bag"></ion-icon>
                    <h1>S-Mart</h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. 
                    Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                </p>
            </Col>
            <Col md={3} sm={5} className='box'>
                <h2>About Us</h2>
                <ul>
                    <li>Careers</li>
                    <li>Our Stores</li>
                    <li>Our Cares</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </Col>

            <Col md={3} sm={5} className='box'>
                <h2>Customer Care</h2>
                <ul>
                    <li>Help Center </li>
                    <li>How to Buy </li>
                    <li>Track Your Order </li>
                    <li>Corporate & Bulk Purchasing </li>
                    <li>Returns & Refunds </li>
                </ul>
            </Col>

            <Col md={3} sm={5} className='box'>
                <h2>Contact Us</h2>
                <ul>
                    <li>20, Hari Om Shanti Housing Society, Near NYKC Company, Nagpur, Maharashtra, India. </li>
                    <li>Email: sMart@help.com</li>
                    <li>Phone: +91 123457890</li>
                </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  );
}

export default Footer;