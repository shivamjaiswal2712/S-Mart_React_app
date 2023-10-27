import { Col, Container, Row } from "react-bootstrap";
import cover from "../../Images/cover.jpg";
import "./banner.css";

const Banner = ({title}) => {
    return ( 
        <div className="image-container">
            <img src={cover} alt="Product-bg" />
            <div className="overlay">
                <Container>
                    <Row>
                        <Col>
                            <h2>{title}</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Banner;