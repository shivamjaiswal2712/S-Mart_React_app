import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { serviceData } from "../../utils/products";
import "./wrapper.css";

const Wrapper = () => {
    return(
        <section className="wrapper background">
            <Container>
                <Row>
                    {serviceData.map((val, index) => {
                        return(
                            <Col md={3} sm={5} xs={9} className="feature">
                                <div className="icon">
                                    {val.icon}
                                </div>
                                <h3>{val.title}</h3>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Wrapper;