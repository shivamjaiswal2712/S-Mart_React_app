import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
    return(
        <footer>
            <Container>
                <Row className="footer-row">
                    <Col md={3} sm={5} className="box">
                        <div className="logo">
                            <ion-icon name="bag" />
                            <h1>S-Mart</h1>
                        </div>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic amet in nihil eligendi illo,
                            illum fuga laboriosam! Voluptatem, fugiat tenetur labore suscipit, nesciunt, officia aperiam 
                            ad dolores possimus quidem dicta?
                        </p>
                    </Col>

                    <Col md={3} sm={5} className="box">
                        <h2>About Us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>

                    <Col md={3} sm={5} className="box">
                        <h2>Customer care</h2>
                        <ul>
                            <li>Help Center</li>
                            <li>How to Buy</li>
                            <li>Track Your Order</li>
                            <li>Corporate & Bulk Purchasing</li>
                            <li>Returns & Refunds</li>
                        </ul>
                    </Col>

                    <Col md={3} sm={5} className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>02, Hari Om Shanti Housing Society, Near NYKC Company, Nagpur, Maharashtra, India.</li>
                            <li>Email: sMart.help@gmail.com</li>
                            <li>Phone: +91 1234567890</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;